import React from 'react';
import { Zap, ShieldCheck, Cloud, Lock } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

type Language = 'en' | 'zh' | 'zh-TW' | 'de' | 'it' | 'fr' | 'ja' | 'ko' | 'pt-BR' | 'es' | 'ru' | 'hi' | 'ar';

const featuresData: Record<Language, FeatureItem[]> = {
  en: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Lightning Fast",
      desc: "No tedious forms. Just double-click on the calendar to track. 200% more efficient."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Data Security",
      desc: "Data is stored locally on your device by default. Your privacy belongs to you, safe and sound."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Cloud Sync",
      desc: "One-click connection to iCloud or Google Drive. Seamless sync across devices, never lose data."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Privacy Lock",
      desc: "Built-in App Lock. Protect your private entries with FaceID or Passcode."
    }
  ],
  zh: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "极速操作",
      desc: "没有繁琐的表单。在日历界面上简单双击，即可完成记录。效率提升 200%。"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "数据安全",
      desc: "数据默认仅保存在您的手机本地。您的隐私属于您自己，安全无忧。"
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "云端同步",
      desc: "支持一键连接 iCloud 或 Google Drive。多设备无缝切换，数据永不丢失。"
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "隐私保护",
      desc: "内置 App Lock 应用锁功能。通过 FaceID 或密码保护您的私密记录。"
    }
  ],
  'zh-TW': [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "極速操作",
      desc: "沒有繁瑣的表單。在日曆介面上簡單雙擊，即可完成記錄。效率提升 200%。"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "數據安全",
      desc: "數據預設僅保存在您的手機本地。您的隱私屬於您自己，安全無憂。"
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "雲端同步",
      desc: "支援一鍵連接 iCloud 或 Google Drive。多設備無縫切換，數據永不丟失。"
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "隱私保護",
      desc: "內建 App Lock 應用鎖功能。透過 FaceID 或密碼保護您的私密記錄。"
    }
  ],
  de: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Blitzschnell",
      desc: "Keine komplizierten Formulare. Einfach auf den Kalender doppelklicken. 200% effizienter."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Datensicherheit",
      desc: "Daten werden standardmäßig nur lokal auf Ihrem Gerät gespeichert. Ihre Privatsphäre gehört Ihnen."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Cloud-Sync",
      desc: "Unterstützt iCloud und Google Drive. Nahtloser Wechsel zwischen Geräten, kein Datenverlust."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Privatsphäre",
      desc: "Integrierte App-Sperre. Schützen Sie Ihre privaten Einträge mit FaceID oder Passcode."
    }
  ],
  it: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Velocissimo",
      desc: "Nessun modulo noioso. Basta un doppio clic sul calendario. 200% più efficiente."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Sicurezza Dati",
      desc: "I dati sono salvati localmente sul dispositivo. La tua privacy ti appartiene."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Sync Cloud",
      desc: "Connessione iCloud o Google Drive con un clic. Sincronizzazione perfetta tra dispositivi."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Privacy Lock",
      desc: "App Lock integrato. Proteggi le tue voci private con FaceID o codice."
    }
  ],
  fr: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Ultra Rapide",
      desc: "Pas de formulaires fastidieux. Double-cliquez sur le calendrier. 200% plus efficace."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Sécurité des Données",
      desc: "Données stockées localement par défaut. Votre vie privée vous appartient."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Synchro Cloud",
      desc: "Connexion iCloud ou Google Drive en un clic. Synchro transparente entre appareils."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Verrouillage App",
      desc: "Verrouillage intégré. Protégez vos entrées privées avec FaceID ou un code."
    }
  ],
  ja: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "超高速操作",
      desc: "面倒なフォームはありません。カレンダーをダブルクリックするだけ。効率が200%アップ。"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "データセキュリティ",
      desc: "データはデフォルトでデバイスにローカル保存されます。あなたのプライバシーはあなたのものです。"
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "クラウド同期",
      desc: "iCloudまたはGoogle Driveにワンクリック接続。デバイス間でシームレスに同期。"
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "プライバシーロック",
      desc: "内蔵アプリロック。FaceIDまたはパスコードでプライベートな記録を保護します。"
    }
  ],
  ko: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "초고속 입력",
      desc: "지루한 양식은 없습니다. 달력을 더블 클릭하기만 하면 됩니다. 200% 더 효율적입니다."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "데이터 보안",
      desc: "데이터는 기본적으로 기기에 로컬로 저장됩니다. 귀하의 개인 정보는 안전합니다."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "클라우드 동기화",
      desc: "iCloud 또는 Google Drive 원클릭 연결. 기기 간 끊김 없는 동기화."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "개인정보 잠금",
      desc: "내장 앱 잠금. FaceID 또는 비밀번호로 개인 기록을 보호하세요."
    }
  ],
  'pt-BR': [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Super Rápido",
      desc: "Sem formulários chatos. Apenas clique duas vezes no calendário. 200% mais eficiente."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Segurança de Dados",
      desc: "Dados armazenados localmente no seu dispositivo. Sua privacidade pertence a você."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Sincronização Nuvem",
      desc: "Conexão com iCloud ou Google Drive em um clique. Sincronia perfeita entre dispositivos."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Bloqueio do App",
      desc: "App Lock integrado. Proteja suas entradas privadas com FaceID ou senha."
    }
  ],
  es: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Ultrarrápido",
      desc: "Sin formularios tediosos. Solo haz doble clic en el calendario. 200% más eficiente."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Seguridad de Datos",
      desc: "Los datos se almacenan localmente en su dispositivo. Su privacidad le pertenece."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Sincronización Cloud",
      desc: "Conexión a iCloud o Google Drive con un clic. Sincronización perfecta entre dispositivos."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Bloqueio de App",
      desc: "App Lock integrado. Proteja sus entradas privadas con FaceID o código de acceso."
    }
  ],
  ru: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Молниеносно",
      desc: "Никаких скучных форм. Просто дважды кликните по календарю. На 200% эффективнее."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Безопасность данных",
      desc: "Данные хранятся локально на вашем устройстве. Ваша конфиденциальность принадлежит вам."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Облачная синхронизация",
      desc: "Подключение к iCloud или Google Drive в один клик. Бесшовная синхронизация между устройствами."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Блокировка приложения",
      desc: "Встроенная блокировка приложений. Защитите свои личные записи с помощью FaceID или пароля."
    }
  ],
  hi: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "बिजली सी तेज़",
      desc: "कोई उबाऊ फॉर्म नहीं। बस कैलेंडर पर डबल-क्लिक करें। 200% अधिक कुशल।"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "डेटा सुरक्षा",
      desc: "डेटा डिफ़ॉल्ट रूप से आपके डिवाइस पर स्थानीय रूप से संग्रहीत होता है। आपकी गोपनीयता आपकी है।"
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "क्लाउड सिंक",
      desc: "iCloud या Google ड्राइव से एक-क्लिक कनेक्शन। उपकरणों के बीच निर्बाध सिंक।"
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "गोपनीयता लॉक",
      desc: "अंतर्निहित ऐप लॉक। फेसआईडी या पासकोड के साथ अपनी निजी प्रविष्टियों को सुरक्षित रखें।"
    }
  ],
  ar: [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "سريع كالبرق",
      desc: "لا نماذج مملة. فقط انقر نقرًا مزدوجًا على التقويم. أكثر كفاءة بنسبة 200٪."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "أمن البيانات",
      desc: "يتم تخزين البيانات محليًا على جهازك بشكل افتراضي. خصوصيتك ملك لك."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "المزامن السحابي",
      desc: "اتصال بنقرة واحدة بـ iCloud أو Google Drive. مزامنة سلسة عبر الأجهزة."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "قفل الخصوصية",
      desc: "قفل التطبيق المدمج. احمِ إدخالاتك الخاصة باستخدام FaceID أو رمز المرور."
    }
  ]
};

interface FeatureGridProps {
  lang: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ lang }) => {
  // Fallback to 'en' if lang is not found in featuresData (though with strict typing in parent it shouldn't happen)
  const features = featuresData[lang as Language] || featuresData.en;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((f, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
            {f.icon}
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;