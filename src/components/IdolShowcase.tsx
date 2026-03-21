import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import type { Idol } from '../data/idols';
import { IdolSection } from './IdolSection';

export type Lang = 'en' | 'id';

interface Props {
  idols: Idol[];
}

export function IdolShowcase({ idols }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<Lang>('en');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const colors = idols.map(i => i.hexColor);
  const colorStops = idols.map((_, i) => i / Math.max(1, idols.length - 1));

  const backgroundColor = useTransform(smoothProgress, colorStops, colors) as any;

  return (
    <div ref={containerRef} className="relative w-full">
      {}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/50 shadow-lg font-outfit">
        <button 
          onClick={() => setLang('en')}
          className={`text-xs font-bold transition-colors ${lang === 'en' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
        >
          EN
        </button>
        <span className="text-slate-600 text-xs">|</span>
        <button 
          onClick={() => setLang('id')}
          className={`text-xs font-bold transition-colors ${lang === 'id' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
        >
          ID
        </button>
      </div>

      {}
      <motion.div 
        className="fixed inset-0 z-0 opacity-20"
        style={{ 
          backgroundColor,
          backgroundImage: `radial-gradient(circle at center, transparent 0%, #0f172a 100%)`
        }} 
      />

      {}
      <div className="relative z-10 font-outfit">
        {idols.map((idol, index) => (
          <IdolSection 
            key={idol.id} 
            idol={idol} 
            index={index} 
            total={idols.length} 
            scrollYProgress={smoothProgress} 
            lang={lang}
          />
        ))}

        {}
        <footer className="w-full py-10 md:py-16 text-center text-slate-500 text-xs md:text-sm bg-black/40 backdrop-blur-lg border-t border-slate-800/50">
          <p className="font-semibold tracking-wider text-slate-400">THE IDOLM@STER™ & &copy;Bandai Namco Entertainment Inc.</p>
          <p className="mt-2 text-[10px] sm:text-xs px-4">
            {lang === 'id' 
              ? "Web UI interaktif ini adalah fan-made dan tidak berafiliasi dengan Bandai Namco Entertainment Inc." 
              : "This interactive web UI is fan-made and is not affiliated with Bandai Namco Entertainment Inc."}
          </p>
        </footer>
      </div>
    </div>
  );
}

