import React, { useState } from 'react';
import { MousePointer2 } from 'lucide-react';

const DemoCalendar: React.FC = () => {
  const [markedDates, setMarkedDates] = useState<Set<number>>(new Set([5, 12, 18]));
  const [lastClickTime, setLastClickTime] = useState<{ [key: number]: number }>({});
  const [feedback, setFeedback] = useState<string | null>(null);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleDayClick = (day: number) => {
    const now = Date.now();
    const lastClick = lastClickTime[day] || 0;

    // Double click logic (within 300ms)
    if (now - lastClick < 300) {
      const newSet = new Set(markedDates);
      if (newSet.has(day)) {
        newSet.delete(day);
        setFeedback("Removed!");
      } else {
        newSet.add(day);
        setFeedback("Marked!");
      }
      setMarkedDates(newSet);
      setTimeout(() => setFeedback(null), 1000);
    }

    setLastClickTime(prev => ({ ...prev, [day]: now }));
  };

  return (
    <div className="relative bg-white rounded-3xl shadow-xl p-6 max-w-sm mx-auto border border-slate-100 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-800">September 2024</h3>
        <div className="text-xs text-slate-400 font-medium tracking-wider">CALIOO DEMO</div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-center text-xs text-slate-400 font-semibold">{d}</div>
        ))}
        {Array.from({ length: 2 }).map((_, i) => <div key={`empty-${i}`} />)}
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDayClick(day)}
            className={`
              aspect-square rounded-full flex items-center justify-center text-sm transition-all duration-200 relative
              ${markedDates.has(day) 
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30 scale-105' 
                : 'text-slate-600 hover:bg-slate-100'
              }
            `}
          >
            {day}
            {markedDates.has(day) && (
              <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full opacity-50"></span>
            )}
          </button>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {feedback && (
          <div className="bg-slate-900/90 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce shadow-lg backdrop-blur-sm">
            {feedback}
          </div>
        )}
      </div>

      <div className="mt-6 p-3 bg-brand-50 rounded-xl flex items-center gap-3 border border-brand-100">
        <div className="bg-white p-2 rounded-lg shadow-sm text-brand-500">
            <MousePointer2 size={18} />
        </div>
        <p className="text-xs text-brand-900 font-medium">Try it: <span className="font-bold">Double-click</span> any date to mark it.</p>
      </div>
    </div>
  );
};

export default DemoCalendar;