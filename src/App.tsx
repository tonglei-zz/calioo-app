import React, { useState, useRef, useEffect } from 'react';
import DemoCalendar from './components/DemoCalendar';
import FeatureGrid from './components/FeatureGrid';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { LayoutGrid, Download, Globe, ChevronDown } from 'lucide-react';

// TODO: Replace with your actual URLs
const IOS_APP_STORE_URL = "https://apps.apple.com/us/app/calioo-event-tracker/id6756068226";
const ANDROID_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.calioo.app";

const translations = {
  en: {
    newOnStore: "Available Now",
    heroTitlePrefix: "Tracking repetitive events,",
    heroTitleSuffix: "never been easier.",
    heroDesc: "Calioo is designed to track those constant little things. Workouts, pet feeding, or medication. Just double-click, and you're done.",
    ctaStart: "Get Started",
    ctaMore: "Learn More",
    whyTitle: "Why Choose Calioo?",
    whyDesc: "We believe the best tool is there when you need it, and invisible when you don't.",
    download: "Download App"
  },
  zh: {
    newOnStore: "现已发布",
    heroTitlePrefix: "记录重复性事件，",
    heroTitleSuffix: "从未如此简单。",
    heroDesc: "Calioo 专为追踪那些不断发生的琐事而设计。无论是健身打卡、喂宠物，还是记录服药时间。轻轻双击，即刻完成。",
    ctaStart: "立即开始",
    ctaMore: "了解更多",
    whyTitle: "为什么选择 Calioo?",
    whyDesc: "我们相信最好的工具是当你需要时就在手边，当你不需要时完全隐形。",
    download: "下载应用"
  },
  'zh-TW': {
    newOnStore: "現已發布",
    heroTitlePrefix: "記錄重複性事件，",
    heroTitleSuffix: "從未如此簡單。",
    heroDesc: "Calioo 專為追蹤那些不斷發生的瑣事而設計。無論是健身打卡、餵寵物，還是記錄服藥時間。輕輕雙擊，即刻完成。",
    ctaStart: "立即開始",
    ctaMore: "了解更多",
    whyTitle: "為什麼選擇 Calioo?",
    whyDesc: "我們相信最好的工具是當你需要時就在手邊，當你不需要時完全隱形。",
    download: "下載應用"
  },
  de: {
    newOnStore: "Jetzt verfügbar",
    heroTitlePrefix: "Wiederkehrende Ereignisse, ",
    heroTitleSuffix: "einfacher als je zuvor.",
    heroDesc: "Calioo wurde entwickelt, um alltägliche Aufgaben zu verfolgen. Ob Fitness-Tracking, Haustiere füttern oder Medikamente nehmen. Ein einfacher Doppelklick genügt.",
    ctaStart: "Jetzt starten",
    ctaMore: "Mehr erfahren",
    whyTitle: "Warum Calioo wählen?",
    whyDesc: "Wir glauben, das beste Werkzeug ist da, wenn man es braucht, und unsichtbar, wenn nicht.",
    download: "App laden"
  },
  it: {
    newOnStore: "Disponibile ora",
    heroTitlePrefix: "Tracciare eventi ripetitivi,",
    heroTitleSuffix: "non è mai stato così facile.",
    heroDesc: "Calioo è progettato per tracciare quelle piccole cose costanti. Allenamenti, cibo per animali o farmaci. Basta un doppio clic.",
    ctaStart: "Inizia Ora",
    ctaMore: "Scopri di più",
    whyTitle: "Perché scegliere Calioo?",
    whyDesc: "Crediamo che il miglior strumento sia lì quando ne hai bisogno e invisibile quando non serve.",
    download: "Scarica App"
  },
  fr: {
    newOnStore: "Disponible maintenant",
    heroTitlePrefix: "Suivre les événements,",
    heroTitleSuffix: "n'a jamais été aussi simple.",
    heroDesc: "Calioo est conçu pour suivre ces petites choses constantes. Sport, nourriture des animaux ou médicaments. Double-cliquez, c'est fait.",
    ctaStart: "Commencer",
    ctaMore: "En savoir plus",
    whyTitle: "Pourquoi choisir Calioo ?",
    whyDesc: "Nous croyons que le meilleur outil est là quand vous en avez besoin, et invisible sinon.",
    download: "Télécharger"
  },
  ja: {
    newOnStore: "好評配信中",
    heroTitlePrefix: "繰り返しのイベント記録、",
    heroTitleSuffix: "これまでにないほど簡単に。",
    heroDesc: "Caliooは、絶えず発生する小さなことを追跡するために設計されています。ワークアウト、ペットの餌やり、服薬管理など。ダブルクリックするだけです。",
    ctaStart: "今すぐ開始",
    ctaMore: "もっと詳しく",
    whyTitle: "Caliooを選ぶ理由は？",
    whyDesc: "最高のツールとは、必要なときにそこにあり、不要なときには存在を感じさせないものだと信じています.",
    download: "アプリを入手"
  },
  ko: {
    newOnStore: "지금 다운로드 가능",
    heroTitlePrefix: "반복되는 일상 기록,",
    heroTitleSuffix: "이보다 쉬울 수 없습니다.",
    heroDesc: "Calioo는 반복되는 작은 일들을 추적하기 위해 설계되었습니다. 운동, 반려동물 먹이 주기, 약 복용 등. 더블 클릭만 하면 됩니다.",
    ctaStart: "시작하기",
    ctaMore: "더 알아보기",
    whyTitle: "왜 Calioo인가요?",
    whyDesc: "최고의 도구는 필요할 때 곁에 있고, 필요 없을 때는 보이지 않는 것이라고 믿습니다.",
    download: "앱 다운로드"
  },
  'pt-BR': {
    newOnStore: "Disponível agora",
    heroTitlePrefix: "Rastrear eventos,",
    heroTitleSuffix: "nunca foi tão simples.",
    heroDesc: "Calioo foi projetado para rastrear aquelas pequenas coisas constantes. Treinos, alimentar animais ou medicação. Apenas clique duas vezes.",
    ctaStart: "Começar",
    ctaMore: "Saiba Mais",
    whyTitle: "Por que escolher Calioo?",
    whyDesc: "Acreditamos que a melhor ferramenta está lá quando você precisa e invisível quando não.",
    download: "Baixar App"
  },
  es: {
    newOnStore: "Disponible ahora",
    heroTitlePrefix: "Rastrear eventos,",
    heroTitleSuffix: "nunca fue tan fácil.",
    heroDesc: "Calioo está diseñado para rastrear esas pequeñas cosas constantes. Entrenamientos, alimentar mascotas o medicación. Solo haz doble clic.",
    ctaStart: "Empezar",
    ctaMore: "Leer más",
    whyTitle: "¿Por qué elegir Calioo?",
    whyDesc: "Creemos que la mejor herramienta está ahí cuando la necesitas e invisible cuando no.",
    download: "Descargar App"
  },
  ru: {
    newOnStore: "Доступно сейчас",
    heroTitlePrefix: "Отслеживание событий,",
    heroTitleSuffix: "никогда не было проще.",
    heroDesc: "Calioo создан для отслеживания постоянных мелочей. Тренировки, кормление питомцев или прием лекарств. Просто двойной клик.",
    ctaStart: "Начать",
    ctaMore: "Подробнее",
    whyTitle: "Почему Calioo?",
    whyDesc: "Мы верим, что лучший инструмент под рукой, когда он нужен, и невидим, когда нет.",
    download: "Скачать"
  },
  hi: {
    newOnStore: "अब उपलब्ध है",
    heroTitlePrefix: "घटनाओं को ट्रैक करें,",
    heroTitleSuffix: "इतना आसान कभी नहीं था।",
    heroDesc: "Calioo उन छोटी-छोटी चीजों को ट्रैक करने के लिए डिज़ाइन किया गया है। वर्कआउट, पालतू जानवरों को खिलाना, या दवा। बस डबल-क्लिक करें।",
    ctaStart: "शुरू करें",
    ctaMore: "और जानें",
    whyTitle: "Calioo क्यों चुनें?",
    whyDesc: "हम मानते हैं कि सबसे अच्छा उपकरण वह है जो ज़रूरत पड़ने पर मौजूद हो, और जब न हो तो अदृश्य हो।",
    download: "ऐप डाउनलोड करें"
  },
  ar: {
    newOnStore: "متاح الآن",
    heroTitlePrefix: "تتبع الأحداث المتكررة،",
    heroTitleSuffix: "لم يكن بهذه السهولة.",
    heroDesc: "تم تصميم Calioo لتتبع تلك الأشياء الصغيرة المستمرة. التدريبات، إطعام الحيوانات الأليفة، أو الأدوية. فقط انقر مرتين.",
    ctaStart: "ابدأ الآن",
    ctaMore: "اعرف المزيد",
    whyTitle: "لماذا تختار Calioo؟",
    whyDesc: "نحن نؤمن بأن أفضل أداة هي التي تكون موجودة عندما تحتاج إليها، وغير مرئية عندما لا تحتاج إليها.",
    download: "تنزيل التطبيق"
  }
};

type LanguageKey = keyof typeof translations;

const languages: { code: LanguageKey; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'pt-BR', label: 'Português (BR)' },
  { code: 'es', label: 'Español' },
  { code: 'ru', label: 'Русский' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ar', label: 'العربية' },
];

const App: React.FC = () => {
  // Helper to determine view based on URL hash
  const getHashView = (): 'home' | 'privacy' | 'terms' => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash;
    if (hash === '#privacy') return 'privacy';
    if (hash === '#terms') return 'terms';
    return 'home';
  };

  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>(getHashView);
  
  // Auto-detect language
  const [language, setLanguage] = useState<LanguageKey>(() => {
    if (typeof window === 'undefined') return 'en';
    const lang = navigator.language.toLowerCase();
    
    // Specific mappings for regions or dialects
    if (lang.startsWith('zh-tw') || lang.startsWith('zh-hk')) return 'zh-TW';
    if (lang.startsWith('pt-br')) return 'pt-BR';
    
    // General mapping based on primary language code
    const code = lang.split('-')[0];
    
    // Mapping for simple 'zh' to Simplified Chinese
    if (code === 'zh') return 'zh';

    // Check if the simple code exists in our supported list
    // Note: 'pt' is not a direct key (only pt-BR), so standard pt will fallback to en unless we map it.
    // 'zh-TW' is handled above.
    const simpleSupported: LanguageKey[] = ['en', 'de', 'it', 'fr', 'ja', 'ko', 'es', 'ru', 'hi', 'ar'];
    
    if (simpleSupported.includes(code as any)) {
      return code as LanguageKey;
    }

    return 'en';
  });

  const [downloadUrl, setDownloadUrl] = useState(IOS_APP_STORE_URL);
  
  // Language Dropdown State
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Detect OS for download link
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // Simple detection logic
    if (/android/i.test(userAgent)) {
      setDownloadUrl(ANDROID_PLAY_STORE_URL);
    } else {
      // Default to iOS for iOS devices and Desktop (Windows/Mac)
      setDownloadUrl(IOS_APP_STORE_URL);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Listen to hash changes for routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getHashView());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setView = (view: 'home' | 'privacy' | 'terms') => {
    if (view === 'home') {
      // Clear hash
      window.location.hash = '';
      // Fallback: if hash was already empty, state update might not trigger via hashchange
      if (currentView !== 'home') {
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = view;
    }
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const t = translations[language];
  const currentLangLabel = languages.find(l => l.code === language)?.label || 'English';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity"
          >
            <LayoutGrid className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight text-slate-900">Calioo</span>
          </button>
          
          <div className="flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors px-3 py-1.5 rounded-full hover:bg-slate-100"
              >
                <Globe size={16} />
                <span>{currentLangLabel}</span>
                <ChevronDown size={14} className={`opacity-50 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown for languages */}
              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2 max-h-80 overflow-y-auto z-50 animate-in fade-in zoom-in-95 duration-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${language === lang.code ? 'text-brand-600 font-bold bg-brand-50' : 'text-slate-600'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2"
            >
              <Download size={16} />
              <span className="hidden sm:inline">{t.download}</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="pt-20 pb-24 px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-100">
                    {t.newOnStore}
                  </div>
                  <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                    {t.heroTitlePrefix}<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-600">{t.heroTitleSuffix}</span>
                  </h1>
                  <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                    {t.heroDesc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-1 text-center"
                    >
                      {t.ctaStart}
                    </a>
                    <button 
                      onClick={scrollToFeatures}
                      className="px-8 py-4 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 rounded-2xl font-bold text-lg transition-all"
                    >
                      {t.ctaMore}
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-indigo-200 rounded-full blur-3xl opacity-30 transform translate-y-12"></div>
                  <DemoCalendar />
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-slate-50 border-y border-slate-200">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.whyTitle}</h2>
                  <p className="text-slate-600">
                    {t.whyDesc}
                  </p>
                </div>
                <FeatureGrid lang={language} />
              </div>
            </section>
          </>
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={() => setView('home')} />
        )}
        
        {currentView === 'terms' && (
          <TermsOfService onBack={() => setView('home')} />
        )}

      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <LayoutGrid className="w-5 h-5" />
            <span className="font-semibold">Calioo</span>
          </div>

          <div className="flex gap-6 text-sm text-slate-500 items-center">
            <button 
              onClick={() => setView('privacy')} 
              className={`hover:text-brand-600 transition-colors ${currentView === 'privacy' ? 'text-brand-600 font-medium' : ''}`}
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={() => setView('terms')}
              className={`hover:text-brand-600 transition-colors ${currentView === 'terms' ? 'text-brand-600 font-medium' : ''}`}
            >
              Terms of Service
            </button>
            <span className="text-slate-300">|</span>
             <a 
              href="mailto:xxtonglei@gmail.com"
              className="hover:text-brand-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Calioo Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;