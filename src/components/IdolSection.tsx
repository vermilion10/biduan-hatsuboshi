import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import type { Idol } from '../data/idols';
import { CardStack } from './CardStack';
import type { Lang } from './IdolShowcase';
import enLocale from '../locales/en.json';
import idLocale from '../locales/id.json';

interface Props {
  idol: Idol;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  lang: Lang;
}

export function IdolSection({ idol, index, total, scrollYProgress, lang }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress: localProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(localProgress, [0, 0.5, 1], [50, 0, -50]);
  const opacity = useTransform(localProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textX = useTransform(localProgress, [0, 0.5, 1], [-50, 0, 50]);

  const t = lang === 'en' ? enLocale : idLocale;
  const l = t.labels;
  const idolText = (t.idols as any)[idol.id];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center relative overflow-hidden py-10 md:py-20"
    >
      {}
      <motion.div
        style={{ opacity }}
        className="absolute top-0 right-[-20%] z-0 flex md:hidden justify-end pointer-events-none h-[80vh] w-[120%]"
      >
        {idol.fullBodyUrl && (
          <img
            src={idol.fullBodyUrl}
            alt={idol.romanizedName}
            className="h-full object-contain opacity-40 mix-blend-screen object-right-top pt-4"
          />
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">

        {}
        <motion.div
          style={{ opacity, x: textX }}
          className="flex flex-col gap-4 md:gap-6"
        >
          {}
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-lg" style={{ color: idol.hexColor, textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
              {idol.name}
            </h1>
            <p className="text-sm md:text-xl text-slate-100 uppercase tracking-widest font-bold bg-slate-900/60 backdrop-blur-md inline-block px-3 py-1 mt-1 md:mt-2 rounded border border-slate-700/50 shadow-lg">
              {idol.romanizedName}
            </p>
          </div>

          {}
          <blockquote className="border-l-4 pl-5 py-2 drop-shadow-md z-20 relative" style={{ borderColor: idol.hexColor }}>
            <p className="text-lg md:text-2xl font-light italic mb-1">"{idol.jpQuote}"</p>
            {idolText.quote && (
              <p className="text-sm md:text-base text-slate-300 italic opacity-80">"{idolText.quote}"</p>
            )}
          </blockquote>

          {}
          <p className="text-slate-200 leading-relaxed text-sm md:text-base bg-slate-900/50 backdrop-blur-md p-4 rounded-lg shadow-xl">
            {idolText.bio}
          </p>

          {}
          <div className="grid grid-cols-3 gap-2 text-xs md:text-sm font-medium z-20 relative">
            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.grade}</span> <span className="text-white">{l.yearPrefix}{idol.year || "?"}</span></div>
            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.age}</span> <span className="text-white">{idol.age || "?"}{l.ageSfx}</span></div>
            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.height}</span> <span className="text-white">{idol.height || "?"}cm</span></div>

            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.weight}</span> <span className="text-white">{idol.weight || "?"}kg</span></div>
            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.birthday}</span> <span className="text-white">{idol.birthday || "?"}</span></div>
            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.blood}</span> <span className="text-white">{idol.bloodType || "?"}</span></div>

            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.horoscope}</span> <span className="text-white">{idol.horoscope || "?"}</span></div>
            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.sizes}</span> <span className="text-white">{idol.threeSizes || "?"}</span></div>
            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.hand}</span> <span className="text-white">{idol.handedness || "?"}</span></div>

            <div className="bg-slate-900/60 p-2 rounded border border-slate-700/50 shadow-sm col-span-3 sm:col-span-1"><span className="text-slate-400 block text-[10px] uppercase mb-0.5">{l.home}</span> <span className="text-white truncate" title={idolText.hometown}>{idolText.hometown || "?"}</span></div>
          </div>

          {}
          <div className="flex flex-col gap-2 z-20 relative mt-1">
            {idolText.hobbies && (
              <div className="text-sm bg-slate-900/40 p-2 rounded border-l-2" style={{ borderColor: idol.hexColor }}>
                <span className="text-slate-400 font-bold mr-2 text-xs uppercase shadow-sm">{l.hobbies}:</span> 
                <span className="text-slate-200">{idolText.hobbies}</span>
              </div>
            )}
            {idolText.skills && (
              <div className="text-sm bg-slate-900/40 p-2 rounded border-l-2" style={{ borderColor: idol.hexColor }}>
                <span className="text-slate-400 font-bold mr-2 text-xs uppercase shadow-sm">{l.skills}:</span> 
                <span className="text-slate-200">{idolText.skills}</span>
              </div>
            )}
          </div>

          {}
          <div>
            <p className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md inline-block border border-slate-700/50 shadow-lg">
              <span className="text-slate-300 mr-2">CV:</span> <span style={{ color: idol.hexColor }}>{idol.cv || "Unknown"}</span>
            </p>
          </div>

          {}
          <div className="flex flex-col xl:flex-row gap-6 mt-2 pt-4 border-t border-slate-700/50 items-center xl:items-start w-full">
            {}
            {idol.spotifyEmbedUrl && (
              <div className="w-full sm:w-[320px] flex-shrink-0">
                <iframe
                  src={idol.spotifyEmbedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`${idol.romanizedName} Spotify Music`}
                  className="rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-slate-800"
                  style={{ border: ` ${idol.hexColor}40` }}
                ></iframe>
              </div>
            )}

            {}
            <div className="w-full flex justify-center xl:justify-start xl:pl-48">
              {idol.cards && idol.cards.length > 0 && (
                <CardStack cards={idol.cards} themeColor={idol.hexColor} scrollProgress={localProgress} />
              )}
            </div>
          </div>

        </motion.div>

        {}
        <motion.div
          style={{ y: imageY, opacity }}
          className="hidden md:flex justify-end items-end h-[85vh] pointer-events-none"
        >
          {idol.fullBodyUrl && (
            <img
              src={idol.fullBodyUrl}
              alt={idol.romanizedName}
              className="h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          )}
        </motion.div>

      </div>
    </section>
  );
}

