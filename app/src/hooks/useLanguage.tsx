import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    // Hero
    'hero.title': 'Middle East Medical Training',
    'hero.subtitle': 'Academic Exchange & Networking Seminar',
    'hero.badge': 'Medical Korea 2026',
    'hero.date': 'March 20, 2026',
    'hero.time': '15:00 - 17:20',
    
    // Info Section
    'info.date.label': 'DATE & TIME',
    'info.date.value': '2026. 03. 20',
    'info.date.day': 'FRI',
    'info.date.time': '15:00 - 17:20',
    'info.date.note': 'Medical Korea: 3/19 - 3/22',
    'info.venue.label': 'VENUE',
    'info.venue.value': 'COEX Seoul',
    'info.venue.room': 'Conference Room 205 (North)',
    'info.venue.address': '513 Yeongdong-daero, Gangnam-gu, Seoul',
    
    // Objectives
    'objectives.title': 'EVENT OVERVIEW',
    'objectives.1': 'Create a platform for academic exchange and networking among Middle East medical training participants',
    'objectives.2': 'Foster connections between training stakeholders including institutions, professors, and trainees',
    'objectives.3': 'Share the latest clinical trends and strengthen professional networks',
    
    // Schedule
    'schedule.title': 'PROGRAM',
    'schedule.opening.time': '15:00',
    'schedule.opening.title': 'Opening',
    'schedule.opening.desc': 'Opening remarks & program introduction',
    'schedule.welcome.time': '15:05',
    'schedule.welcome.title': 'Welcome Address',
    'schedule.welcome.desc': 'Korea Health Industry Development Institute',
    'schedule.congrats.time': '15:10',
    'schedule.congrats.title': 'Congratulatory Remarks',
    'schedule.congrats.desc': 'Cultural Attaché, Embassy of Saudi Arabia',
    'schedule.session1.time': '15:20',
    'schedule.session1.title': 'Academic Session I',
    'schedule.session1.desc': 'Training guidance experience & latest medical technology trends',
    'schedule.session1.duration': '60 min',
    'schedule.session2.time': '16:20',
    'schedule.session2.title': 'Academic Session II',
    'schedule.session2.desc': 'Korean medical training experience sharing',
    'schedule.session2.duration': '30 min',
    'schedule.lucky.time': '16:50',
    'schedule.lucky.title': 'Lucky Draw',
    'schedule.lucky.desc': 'Prize giveaway & networking event',
    'schedule.closing.time': '17:10',
    'schedule.closing.title': 'Closing',
    'schedule.closing.desc': 'Closing remarks',
    
    // Registration
    'registration.title': 'REGISTRATION',
    'registration.notice': 'Separate registration is required for this seminar.',
    'registration.desc': 'This seminar operates independently from the official Medical Korea 2026 website registration. Please complete your registration through the Google Form below.',
    'registration.deadline': 'Registration Deadline: February 28, 2026 (Fri)',
    'registration.button': 'REGISTER NOW',
    'registration.language': 'Official Language: English',
    'registration.participants': 'Participants: Training faculty, trainees, and related organizations',
    
    // Links
    'links.title': 'RELATED LINKS',
    'links.medical.title': 'Medical Korea 2026',
    'links.medical.desc': 'Official Website',
    'links.kmtp.title': 'KMTP Portal',
    'links.kmtp.desc': 'Korea Medical Training Program',
    'links.elearning.title': 'MKA E-Learning',
    'links.elearning.desc': 'Online Training Courses',
    
    // Footer
    'footer.message': 'We look forward to your participation',
    'footer.contact': 'Contact: Korea Health Industry Development Institute',
    'footer.share': 'SHARE EVENT',
    'footer.copy': 'Link Copied!',
    
    // Language
    'lang.en': 'EN',
    'lang.ko': 'KO',
  },
  ko: {
    // Hero
    'hero.title': '중동 의료인 연수',
    'hero.subtitle': '학술교류 및 네트워킹 세미나',
    'hero.badge': 'Medical Korea 2026',
    'hero.date': '2026년 3월 20일',
    'hero.time': '15:00 - 17:20',
    
    // Info Section
    'info.date.label': '일시',
    'info.date.value': '2026. 03. 20',
    'info.date.day': '금요일',
    'info.date.time': '15:00 - 17:20',
    'info.date.note': 'Medical Korea: 3/19 - 3/22',
    'info.venue.label': '장소',
    'info.venue.value': '코엑스 서울',
    'info.venue.room': '컨퍼런스룸 205 (북관)',
    'info.venue.address': '서울특별시 강남구 영동대로 513',
    
    // Objectives
    'objectives.title': '행사 개요',
    'objectives.1': '중동 의료인 연수 참여 기관 및 인력 간 학술 교류 및 네트워킹의 장을 마련합니다',
    'objectives.2': '유관기관, 지도교수, 연수생 등 연수 관련자 간 협력 네트워크를 강화합니다',
    'objectives.3': '최신 임상 기술 동향을 공유하고 연수 생태계를 활성화합니다',
    
    // Schedule
    'schedule.title': '프로그램',
    'schedule.opening.time': '15:00',
    'schedule.opening.title': '개회',
    'schedule.opening.desc': '개회 및 일정 소개',
    'schedule.welcome.time': '15:05',
    'schedule.welcome.title': '환영사',
    'schedule.welcome.desc': '한국보건산업진흥원',
    'schedule.congrats.time': '15:10',
    'schedule.congrats.title': '축사',
    'schedule.congrats.desc': '주한사우디아라비아대사관 문화부 원장',
    'schedule.session1.time': '15:20',
    'schedule.session1.title': '학술 세션 I',
    'schedule.session1.desc': '연수지도경험 공유 및 최신 의료기술 동향 발표',
    'schedule.session1.duration': '60분',
    'schedule.session2.time': '16:20',
    'schedule.session2.title': '학술 세션 II',
    'schedule.session2.desc': '한국 의료 연수 경험 공유',
    'schedule.session2.duration': '30분',
    'schedule.lucky.time': '16:50',
    'schedule.lucky.title': '경품 추첨',
    'schedule.lucky.desc': '경품 추첨 및 네트워킹 행사',
    'schedule.closing.time': '17:10',
    'schedule.closing.title': '폐회',
    'schedule.closing.desc': '폐회사',
    
    // Registration
    'registration.title': '참석 신청',
    'registration.notice': '본 세미나는 별도 사전등록이 필요합니다.',
    'registration.desc': 'Medical Korea 2026 공식 홈페이지 사전등록과는 별도로 운영되며, 아래 링크를 통해 반드시 사전 신청 바랍니다.',
    'registration.deadline': '신청 마감: 2026년 2월 28일 (금)',
    'registration.button': '신청하기',
    'registration.language': '공식 언어: 영어',
    'registration.participants': '참석 대상: 연수 지도교수, 연수생, 유관기관 관계자',
    
    // Links
    'links.title': '관련 링크',
    'links.medical.title': 'Medical Korea 2026',
    'links.medical.desc': '공식 홈페이지',
    'links.kmtp.title': 'KMTP 포털',
    'links.kmtp.desc': '한국의료연수지원포털',
    'links.elearning.title': 'MKA E-Learning',
    'links.elearning.desc': '온라인 교육 과정',
    
    // Footer
    'footer.message': '여러분의 참석을 기다립니다',
    'footer.contact': '문의: 한국보건산업진흥원',
    'footer.share': '공유하기',
    'footer.copy': '링크가 복사되었습니다',
    
    // Language
    'lang.en': 'EN',
    'lang.ko': 'KO',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => prev === 'en' ? 'ko' : 'en');
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback((key: string): string | string[] => {
    const value = translations[language][key as keyof typeof translations.en];
    return value || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
