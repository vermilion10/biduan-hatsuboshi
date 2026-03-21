import React, { useState, useEffect } from 'react';
import { motion, MotionValue, useTransform, useMotionValue, useSpring } from 'framer-motion';
import type { Card } from '../data/idols';

interface Props {
  cards: Card[];
  themeColor: string;
  scrollProgress?: MotionValue<number>;
}

export function CardStack({ cards, themeColor, scrollProgress }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const fallbackProgress = useMotionValue(0.5); 

  const progress = scrollProgress || fallbackProgress;

  const rawMultiplier = useTransform(progress, [0.1, 0.9], [0, 1]);
  const spreadMultiplier = useSpring(rawMultiplier, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-32 sm:w-40 md:w-48 h-48 sm:h-64 md:h-72 touch-manipulation flex items-end justify-center my-6 md:my-12">
      {cards.map((card, index) => (
        <ScrollCard 
          key={card.id || index}
          card={card}
          index={index}
          total={cards.length}
          themeColor={themeColor}
          spreadMultiplier={spreadMultiplier}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

interface CardProps {
  card: Card;
  index: number;
  total: number;
  themeColor: string;
  spreadMultiplier: MotionValue<number>;
  isMobile: boolean;
}

function ScrollCard({ card, index, total, themeColor, spreadMultiplier, isMobile }: CardProps) {

  const scatterX = isMobile ? 80 : 130;
  const scatterY = isMobile ? 30 : 60;
  const scatterRotate = isMobile ? 10 : 18;

  const centerIndex = (total - 1) / 2;
  const normalizedIndex = index - centerIndex;

  const targetX = normalizedIndex * scatterX;

  const targetY = (index % 2 !== 0) ? scatterY : -scatterY;

  const targetRotate = (normalizedIndex * scatterRotate) + (index % 2 === 0 ? -4 : 6);

  const rotateZ = useTransform(spreadMultiplier, [0, 1], [0, targetRotate]);
  const x = useTransform(spreadMultiplier, [0, 1], [0, targetX]);
  const y = useTransform(spreadMultiplier, [0, 1], [index * -4, targetY]);

  const borderColor = useTransform(spreadMultiplier, [0, 1], ['rgba(255,255,255,0.2)', themeColor]);

  const zIndex = useTransform(spreadMultiplier, (val) => val > 0.5 ? index : total - index);

  return (
    <motion.div
      style={{
        rotateZ,
        x,
        y,
        zIndex,
        borderColor,
        transformOrigin: "center center"
      }}
      className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.4)] border-2 overflow-hidden bg-slate-800"
    >
      <img 
        src={card.url} 
        alt={`Card ${card.id}`}
        className="w-full h-full object-cover"
      />
      {}
      <div 
        className="absolute top-2 left-2 text-[8px] sm:text-[10px] md:text-xs font-black uppercase px-2 py-1 rounded shadow-md"
        style={{ backgroundColor: themeColor, color: '#fff' }}
      >
        {card.type}
      </div>
    </motion.div>
  );
}

