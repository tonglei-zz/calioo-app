import React, { useState } from 'react';
import { Copy, RefreshCw, Wand2, Globe, ChevronDown } from 'lucide-react';
import { generateAppStoreDescription } from '../services/geminiService';

const defaultCopy = `
# Calioo - 极简重复事件打卡

## 专为记录重复性事件打造

Calioo 是一款崇尚极简主义的习惯追踪与事件记录工具。我们摒弃了所有复杂的功能，只为您保留最纯粹的记录体验。

### 【核心特点】

⚡ **极速操作体验**
无需填写标题，无需设置时间。在日历视图上只需**双击**，即可完成一次打卡或标记。让记录像呼吸一样自然。

🔒 **本地优先，数据安全**
您的数据默认仅存储在当前设备上。我们不追踪、不上传，确保您的隐私绝对安全。

☁️ **网盘同步，多端共享**
换机不再烦恼。支持一键连接您的个人网盘（iCloud / Google Drive），轻松实现多设备间的数据无缝同步。

🛡️ **应用锁，隐私无忧**
无论是记录私密习惯还是敏感事件，开启 App Lock，只有您能查看您的记录。

---
简单双击，记录生活中的每一个脚印。立即下载 Calioo，开始您的极简记录之旅。
`;

const languages = [
  "English",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Italian",
  "French",
  "German",
  "Japanese",
  "Korean",
  "Portuguese (Brazil)",
  "Spanish",
  "Russian",
  "Hindi",
  "Arabic"
];

const AppStoreCopy: React.FC = () => {
  const [copy, setCopy] = useState(defaultCopy.trim());
  const [loading, setLoading] = useState(false);
  const [outline, setOutline] = useState("1. 操作快捷，双击日历即可\n2. 数据安全，本地保存\n3. 网盘同步(iCloud/Google Drive)\n4. 隐私保护 App Lock");
  const [targetLanguage, setTargetLanguage] = useState('English');
  const [error, setError] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(copy);
    alert('已复制到剪贴板');
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateAppStoreDescription(outline, 'professional', targetLanguage);
      setCopy(result);
    } catch (e) {
      setError("生成失败，请检查 API Key 设置 (See console)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Wand2 size={120} />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12">
        {/* Left: Input/Controls */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Wand2 className="text-brand-400" />
            App Store 文案生成器
          </h2>
          <p className="text-slate-400 mb-6 text-sm">
            这是基于您提供的大纲生成的 App Store 介绍。您可以修改下方的大纲并选择目标语言，AI 将为您生成本地化的文案。
          </p>
          
          <div className="mb-4">
             <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Target Language</label>
             <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                <select
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-10 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none cursor-pointer hover:bg-slate-750 transition-colors"
                >
                    {languages.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
             </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">功能大纲 (Outline)</label>
            <textarea 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 h-32"
              value={outline}
              onChange={(e) => setOutline(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
             <button 
              onClick={handleGenerate}
              disabled={loading}
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              {loading ? <RefreshCw className="animate-spin" size={18}/> : <Wand2 size={18}/>}
              {loading ? 'AI 正在撰写...' : '生成文案'}
            </button>
            {error && <span className="text-red-400 text-sm self-center">{error}</span>}
          </div>
        </div>

        {/* Right: Preview */}
        <div className="bg-white text-slate-900 rounded-xl p-1 shadow-lg flex flex-col h-[500px]">
           <div className="bg-slate-50 border-b border-slate-100 p-3 flex justify-between items-center rounded-t-lg shrink-0">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Preview ({targetLanguage})</span>
             <button onClick={handleCopy} className="text-brand-600 hover:text-brand-700 p-1 rounded hover:bg-brand-50 transition-colors" title="Copy Text">
               <Copy size={18} />
             </button>
           </div>
           <div className="p-6 overflow-y-auto font-sans prose prose-sm prose-slate max-w-none flex-grow">
             <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{copy}</pre>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreCopy;