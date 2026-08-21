const translations = {
  ko: {
    documentTitle: '신경선 · Platform / DevOps Engineer',
    description: 'Kubernetes 기반 Managed Service와 Platform Engineering, Backend/SRE 문제를 해결하는 신경선의 기술 포트폴리오입니다.',
    homeLabel: '처음으로', languageLabel: '언어 선택', navLabel: '주요 메뉴', skipLink: '본문으로 바로가기', displayName: '신경선',
    navFocus: '전문 영역', navWork: '프로젝트', navExperience: '경력',
    viewResume: 'Resume 보기', resumeComingSoon: '현재 준비중입니다.', contact: '연락하기',
    heroTitle: '복잡한 인프라를,<br><em>팀이 사용할 수 있는 플랫폼</em>으로 바꿉니다.',
    heroDescription: 'Kubernetes 기반 Managed Service와 Platform API를 설계하고, Backend와 SRE 관점에서 배포·관측·운영의 반복을 줄입니다.',
    approachLabel: '일하는 방식',
    approach1Title: '복잡성을 경계 안으로', approach1Body: '사용자는 인프라 구현보다 필요한 자원과 상태에 집중하게 합니다.',
    approach2Title: '운영을 설계의 일부로', approach2Body: '배포, 관측, 실패 상태까지 서비스 생명주기에 함께 설계합니다.',
    approach3Title: '검증된 책임의 재사용', approach3Body: '표준 도구의 역할을 존중하고 플랫폼이 맡아야 할 추상화에 집중합니다.',
    scroll: '아래로 살펴보기',
    focusTitle: '제가 주로 해결하는 문제', focusIntro: '기술 자체보다, 기술을 실제 사용 가능한 운영 흐름으로 만드는 일에 집중합니다.',
    focus1: '복잡한 인프라 절차를 API와 표준 워크플로로 감싸 팀이 스스로 사용할 수 있게 만듭니다.',
    focus2: '선언적 자원 모델과 생명주기를 기반으로 워크로드 생성, 상태 확인, 운영 경계를 설계합니다.',
    focus3: '자원 검증부터 배포와 관측까지 연결해 반복 가능한 서비스 제공 모델을 구축합니다.',
    focus4: '플랫폼 정책과 인프라 제어 사이의 책임을 분리하고 유지보수 가능한 API 경계를 만듭니다.',
    focus5: '운영 데이터를 기준으로 반복 작업과 불필요한 알림을 줄이고 대응 흐름을 개선합니다.',
    workTitle: '대표 프로젝트', workIntro: '상세 구현보다 문제, 책임, 판단, 결과를 중심으로 정리했습니다.',
    problem: '문제', myRole: '역할', decision: '판단', impact: '영향',
    case1Summary: '팀마다 달라질 수 있는 AI Agent 실행 환경을 표준 생성·배포 모델로 전환',
    case1Problem: 'Runtime, 데이터, 배포, 관측 구성을 매번 개별적으로 다뤄야 하는 복잡성',
    case1Role: 'Platform API와 자원 검증, 테넌트별 Runtime 프로비저닝 흐름 설계·개발',
    case1Decision: '테넌트별 실행 환경을 분리하고 기존 GitOps 체계와 데이터 논리 격리를 활용',
    case1Impact: 'Agent Builder를 조직 안에서 일관된 방식으로 생성·배포·관측할 수 있는 기반 마련',
    case2Summary: '대형 LLM Serving의 복잡한 자원 설정과 생명주기를 플랫폼으로 추상화',
    case2Problem: '사용자가 모델마다 복잡한 Kubernetes와 Ray 설정을 직접 다뤄야 하는 부담',
    case2Role: '플랫폼 애플리케이션 구조와 Ray 자원 생성·수정·상태 조회 모듈 설계·개발',
    case2Decision: '비즈니스와 인프라 제어 책임을 분리하고, 자원 조정은 KubeRay에 위임하며 프리셋으로 반복 설정을 표준화',
    case2Impact: 'Self-hosted LLM Serving 기반을 마련하고 사용자가 Manifest에 관여하는 범위를 축소',
    case3Summary: '파일 서비스 운영에서 반복 알림과 수작업 점검을 지표와 자동화로 개선',
    case3Problem: '주기적으로 반복되는 메모리 알림과 매일 30~40분이 필요한 운영 점검',
    case3Role: '300개 이상 API Key, 일일 100~700GB 사용량 규모의 CDN 운영과 Managed Service 유지보수',
    case3Decision: 'SRE와 함께 실제 판단에 유효한 메모리 지표로 기준을 개편하고 점검 항목을 Python으로 반자동화',
    case3Impact: '집중 알림 주기를 약 7~8일에서 약 3주로 개선하고 일일 점검을 약 5분으로 단축',
    experienceTitle: '경력 요약', experienceIntro: '전체 업무와 기술 세부사항은 Resume에서 확인할 수 있습니다.',
    exp1Item1: 'AI·데이터 워크로드를 위한 Platform API와 Kubernetes 기반 Managed Service 설계',
    exp1Item2: 'GitOps 배포 표준, 관측 환경, 클라우드 플랫폼 공통 서비스 운영 및 자동화',
    exp2Item1: 'Java / Spring 기반 포털 솔루션의 비즈니스 로직과 API 개발',
    exp2Item2: '고객사별 핵심 기능 연동, 패치 배포, 상용 환경 운영 이슈 대응',
    nextTitle: '플랫폼과 백엔드에 관한<br>좋은 대화를 기다립니다.',
    nextIntro: '함께 해결하고 싶은 문제나 제 경험에 대해 궁금한 점이 있다면 편하게 연락해주세요.',
    sendEmail: '이메일 보내기', linkedinSoon: 'LinkedIn · 준비 중',
    footerNote: '빠르고 명확한 이해를 위해 구성했습니다.'
  },
  en: {
    documentTitle: 'Gyeongseon Shin · Platform / DevOps Engineer',
    description: 'Portfolio of Gyeongseon Shin, solving Platform Engineering, Kubernetes Managed Service, Backend, and SRE challenges.',
    homeLabel: 'Back to top', languageLabel: 'Select language', navLabel: 'Primary navigation', skipLink: 'Skip to content', displayName: 'Gyeongseon Shin',
    navFocus: 'Focus', navWork: 'Work', navExperience: 'Experience',
    viewResume: 'View Resume', resumeComingSoon: 'The resume is currently being prepared.', contact: 'Contact',
    heroTitle: 'I turn complex infrastructure<br>into <em>platforms teams can use.</em>',
    heroDescription: 'I design Kubernetes-based managed services and platform APIs, reducing repetitive work across delivery, observability, and operations through a Backend and SRE lens.',
    approachLabel: 'Engineering approach',
    approach1Title: 'Keep complexity behind the boundary', approach1Body: 'Let users focus on the resources and states they need, not infrastructure implementation.',
    approach2Title: 'Design for operations', approach2Body: 'Treat delivery, observability, and failure states as part of the service lifecycle.',
    approach3Title: 'Reuse proven responsibilities', approach3Body: 'Respect what standard tools already do and focus the platform on the right abstractions.',
    scroll: 'Scroll to explore',
    focusTitle: 'Problems I focus on', focusIntro: 'I focus less on technology in isolation and more on turning it into workflows teams can reliably operate.',
    focus1: 'Wrap complex infrastructure procedures in APIs and standard workflows so teams can serve themselves.',
    focus2: 'Design workload creation, status visibility, and operational boundaries around declarative resource lifecycles.',
    focus3: 'Connect validation, delivery, and observability into a repeatable model for providing services.',
    focus4: 'Separate platform policy from infrastructure control and create maintainable API boundaries.',
    focus5: 'Use operational data to reduce repetitive work, noisy alerts, and friction in incident response.',
    workTitle: 'Selected work', workIntro: 'Each case focuses on the problem, my responsibility, the key decision, and its impact.',
    problem: 'Problem', myRole: 'My role', decision: 'Decision', impact: 'Impact',
    case1Summary: 'Turned fragmented AI Agent runtime patterns into a standard creation and delivery model.',
    case1Problem: 'Runtime, data, delivery, and observability had to be configured independently for every environment.',
    case1Role: 'Designed and developed the Platform API, resource validation, and tenant-specific runtime provisioning flow.',
    case1Decision: 'Separated runtimes by tenant while reusing the existing GitOps workflow and logical data isolation.',
    case1Impact: 'Established a foundation for consistently creating, delivering, and observing Agent Builders across the organization.',
    case2Summary: 'Abstracted complex resource configuration and lifecycle management for large-model serving.',
    case2Problem: 'Users had to work directly with complex Kubernetes and Ray settings for each model.',
    case2Role: 'Designed the platform application structure and developed modules for creating, updating, and reading Ray resource status.',
    case2Decision: 'Separated business and infrastructure-control responsibilities, delegated reconciliation to KubeRay, and standardized repeated configuration through presets.',
    case2Impact: 'Established a self-hosted LLM serving foundation while reducing how much users interact with manifests.',
    case3Summary: 'Improved repetitive alerts and manual checks in file-service operations through better metrics and automation.',
    case3Problem: 'Recurring memory alerts and daily operational checks that required 30–40 minutes.',
    case3Role: 'Operated a CDN serving 300+ API keys and 100–700 GB of daily usage, while maintaining managed services.',
    case3Decision: 'Worked with SRE to adopt more decision-relevant memory metrics and semi-automated operational checks with Python.',
    case3Impact: 'Extended concentrated alert intervals from roughly 7–8 days to about three weeks and reduced daily checks to about five minutes.',
    experienceTitle: 'Experience', experienceIntro: 'The full scope of my work and technical details are available in my resume.',
    exp1Item1: 'Designed Platform APIs and Kubernetes-based managed services for AI and data workloads.',
    exp1Item2: 'Built GitOps delivery standards and observability, and automated shared cloud-platform service operations.',
    exp2Item1: 'Developed business logic and APIs for Java / Spring-based portal solutions.',
    exp2Item2: 'Integrated customer-specific features, delivered patches, and handled production issues.',
    nextTitle: 'Let’s connect and talk about<br>platforms and backend systems.',
    nextIntro: 'If you have a problem worth solving together or want to discuss my experience, feel free to reach out.',
    sendEmail: 'Send Email', linkedinSoon: 'LinkedIn · Coming soon',
    footerNote: 'Built for a quick, focused read.'
  }
};

const header = document.querySelector('[data-header]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const languageButtons = document.querySelectorAll('[data-lang]');

function setLanguage(language) {
  const lang = translations[language] ? language : 'ko';
  const copy = translations[lang];
  document.documentElement.lang = lang;
  document.title = copy.documentTitle;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.documentTitle;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
  });
  languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  saveLanguage(lang);
}

const getSavedLanguage = () => {
  try { return localStorage.getItem('portfolio-language'); } catch { return null; }
};
const saveLanguage = (lang) => {
  try { localStorage.setItem('portfolio-language', lang); } catch { /* Storage can be unavailable in privacy mode. */ }
};

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(getSavedLanguage() || 'ko');

document.querySelectorAll('[data-resume-coming-soon]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert(translations[document.documentElement.lang].resumeComingSoon);
  });
});

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 32);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealTargets = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((target) => target.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => observer.observe(target));
}
