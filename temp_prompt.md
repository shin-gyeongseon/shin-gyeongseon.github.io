# Role
당신은 Kubernetes, Helm Chart, Argo CD, Langflow 배포 구조에 익숙한 시니어 플랫폼 엔지니어입니다.

# Context
현재 Langflow IDE를 Helm Chart로 배포하고 있습니다.

- 현재 사용 중인 Langflow IDE Helm Chart version: 0.1.1
- 현재 사용 중인 Langflow image tag: 1.9.0
- 기존 backend 리소스는 StatefulSet(STS)로 구성되어 있습니다.
- 현재 Langflow IDE는 외부 PostgreSQL DB를 사용합니다.
- Ingress를 통해 Langflow IDE에 접근하고 있습니다.
- backend의 Service는 유지되어야 합니다.
- 기존 StatefulSet template 파일은 첨부합니다.
- 목표는 Langflow IDE backend 리소스를 StatefulSet에서 Deployment로 변경하는 것입니다.

이번 작업의 목적은 다음과 같습니다.

1. backend가 StatefulSet 전용 기능을 실질적으로 사용하지 않는 경우 Deployment로 단순화한다.
2. StatefulSet의 immutable field, podManagementPolicy, volumeClaimTemplates 등으로 인한 운영 복잡도를 줄인다.
3. Argo CD sync/replace 과정에서 발생할 수 있는 StatefulSet 특유의 변경 제약을 줄인다.
4. 외부 DB 기반으로 상태를 분리한 구조에서 backend Pod 자체는 stateless하게 운영한다.

# Task
첨부된 기존 Langflow IDE backend StatefulSet Helm template을 분석한 뒤, 이를 Deployment Helm template으로 변경해 주세요.

단순히 kind만 바꾸지 말고, StatefulSet과 Deployment의 차이를 고려해서 안전하게 수정해 주세요.

# Required Output
아래 순서로 답변해 주세요.

## 1. 기존 StatefulSet template 분석
첨부된 파일을 기준으로 다음 항목을 확인해 주세요.

- StatefulSet 전용 필드가 있는지
- `serviceName` 사용 여부와 Deployment 전환 시 처리 방법
- `volumeClaimTemplates` 존재 여부
- `claimName` 기반 PVC 사용 여부
- `selector.matchLabels`와 `template.metadata.labels` 일치 여부
- `replicas` 설정 방식
- env 중복 선언 가능성
- Secret / ConfigMap 참조 방식
- Service와 Ingress가 backend Pod를 선택하는 label 구조
- readinessProbe / livenessProbe 존재 여부
- StatefulSet에서 Deployment로 바꿨을 때 유지해야 하는 필드
- Deployment로 바꾸면 제거해야 하는 필드

## 2. Deployment 전환 시 주의점
다음 관점에서 주의점을 정리해 주세요.

- StatefulSet의 stable network identity가 사라지는 영향
- Pod 이름이 고정되지 않는 영향
- `serviceName` 제거 가능 여부
- PVC 사용 방식 변경 필요 여부
- 외부 PostgreSQL DB를 사용하는 경우 Pod 자체를 stateless하게 볼 수 있는지
- Secret 재생성 또는 `LANGFLOW_SECRET_KEY` 변경 영향
- Argo CD sync 시 기존 StatefulSet과 신규 Deployment가 같은 selector/label을 사용할 때 발생 가능한 충돌
- 기존 StatefulSet 삭제 후 Deployment 생성 순서
- 동일한 Service가 Deployment Pod를 정상적으로 바라보는지 확인하는 방법
- rollback 시 고려사항

## 3. 수정된 Helm template 작성
첨부된 StatefulSet template을 기반으로 Deployment template을 작성해 주세요.

요구사항은 다음과 같습니다.

- `apiVersion: apps/v1`
- `kind: Deployment`
- 기존 backend 이름 규칙은 최대한 유지
- 기존 labels / selector 구조는 Service와 Ingress 호환을 위해 최대한 유지
- `.spec.selector.matchLabels`와 `.spec.template.metadata.labels`는 반드시 일치
- StatefulSet 전용 필드인 `serviceName`, `podManagementPolicy`, `volumeClaimTemplates`는 제거
- 기존 env, envFrom, ports, probes, resources, volumeMounts, volumes, imagePullSecrets, serviceAccountName, securityContext, nodeSelector, affinity, tolerations 등은 가능한 한 유지
- 기존 Helm values 참조 방식은 최대한 유지
- 외부 DB 설정 관련 env는 유지
- `LANGFLOW_SECRET_KEY`가 중복 선언되지 않도록 확인
- Deployment에 맞는 `strategy`를 추가할 수 있으면 제안
- `revisionHistoryLimit` 설정을 제안
- Helm template 문법 오류가 없도록 작성

## 4. 필요한 values.yaml 변경사항
Deployment 전환 과정에서 values.yaml에 추가하거나 수정하면 좋은 값을 제안해 주세요.

예시:

- backend.deploymentStrategy
- backend.revisionHistoryLimit
- backend.replicaCount
- backend.podAnnotations
- backend.podLabels

단, 기존 chart 구조를 크게 깨지 않는 방향으로 제안해 주세요.

## 5. 마이그레이션 절차 제안
Argo CD 또는 Helm 기준으로 안전한 전환 절차를 작성해 주세요.

다음 내용을 포함해 주세요.

1. 현재 StatefulSet 백업
2. 현재 Service selector 확인
3. 현재 Pod label 확인
4. StatefulSet이 PVC를 생성하고 있는지 확인
5. 기존 StatefulSet 삭제 시 cascade 여부 판단
6. StatefulSet 삭제 후 Deployment 생성
7. Service endpoint 연결 확인
8. Ingress 접근 확인
9. Langflow 로그인 및 기본 동작 확인
10. Argo CD OutOfSync / Progressing 확인
11. rollback 방법

가능하면 명령어 예시도 포함해 주세요.

## 6. 검증 체크리스트
배포 후 확인해야 할 체크리스트를 작성해 주세요.

필수 확인 항목:

- Deployment Ready 상태
- Replica 수
- Pod Running 상태
- Service endpoints
- Ingress 접근
- Langflow UI 접속
- 외부 DB 연결 로그
- Secret key env 주입 여부
- 중복 env 없음
- Argo CD Synced / Healthy 상태
- 기존 StatefulSet 잔여 리소스 없음
- PVC 보존 여부

## 7. 최종 산출물
최종적으로 아래 산출물을 제공해 주세요.

1. 수정된 Deployment Helm template 전체 코드
2. 기존 StatefulSet template 대비 주요 변경점 요약
3. values.yaml 수정안
4. 마이그레이션 명령어 예시
5. 위험 요소와 대응 방안

# Constraints
아래 제약을 반드시 지켜 주세요.

- 기존 chart 구조를 불필요하게 크게 변경하지 마세요.
- Service / Ingress가 깨지지 않도록 label selector 호환성을 최우선으로 고려하세요.
- StatefulSet 전용 기능을 Deployment에 그대로 옮기려고 하지 마세요.
- `volumeClaimTemplates`가 있다면 Deployment에서는 사용할 수 없으므로 별도 PVC 방식 또는 제거 여부를 판단해 주세요.
- 외부 PostgreSQL DB를 사용한다는 점을 반영해 주세요.
- `LANGFLOW_SECRET_KEY` 중복 선언 문제가 발생하지 않도록 반드시 확인해 주세요.
- Helm template 문법이 깨지지 않도록 주의해 주세요.
- 단순한 설명이 아니라 실제로 적용 가능한 수정안을 작성해 주세요.
- 불확실한 부분은 추정하지 말고 “확인 필요”라고 표시해 주세요.

# Important Notes
이번 작업에서 가장 중요한 것은 다음입니다.

1. StatefulSet을 Deployment로 바꾸는 것 자체보다, Service selector와 Pod label이 유지되는지 확인하는 것입니다.
2. 기존 StatefulSet이 `volumeClaimTemplates`로 PVC를 만들고 있었다면 Deployment 전환 시 데이터 보존 방식이 달라질 수 있습니다.
3. 외부 PostgreSQL DB를 사용하더라도 Secret, ConfigMap, PVC, Ingress, ServiceAccount 영향은 별도로 확인해야 합니다.
4. Argo CD에서는 StatefulSet을 Deployment로 바꾸면 기존 리소스의 kind가 달라지므로 단순 patch가 아니라 기존 STS 삭제 + 신규 Deployment 생성 흐름으로 이해해야 합니다.
5. 운영 적용 전에는 반드시 별도 namespace 또는 dev 환경에서 `helm template`, `helm diff`, `kubectl apply --dry-run=server` 수준의 검증을 수행해야 합니다.


추가로, 실제 GenAI에게 첨부할 때는 파일명도 같이 명시하는 것이 좋습니다.

```text
첨부 파일:
- backend-statefulset.yaml: 기존 Langflow IDE backend StatefulSet Helm template
- values.yaml: 현재 사용 중인 values 파일
- service.yaml: backend Service template, 가능하면 첨부
- ingress.yaml: Ingress template, 가능하면 첨부
```

특히 `service.yaml`은 같이 첨부하는 게 좋습니다.
Deployment 전환에서 가장 중요한 검증 지점이 **Service selector와 Pod label 호환성**이기 때문입니다.
