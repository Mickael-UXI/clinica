import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Stethoscope, ThumbsUp } from 'lucide-react';

interface StatItem {
  icon: React.FC<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'Tradição e inovação contínua em SP'
  },
  {
    icon: Users,
    value: 2000,
    suffix: '+',
    label: 'Pacientes Atendidos',
    description: 'Sorrisos restaurados com sucesso'
  },
  {
    icon: Stethoscope,
    value: 10,
    suffix: '',
    label: 'Especialistas',
    description: 'Mestres e doutores renomados'
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: '%',
    label: 'Índice de Satisfação',
    description: 'Avaliações 5 estrelas verificadas'
  }
];

const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end,
  duration = 2000,
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0EA5A4] via-[#0D9488] to-[#1E3A8A] text-white py-16 sm:py-20 shadow-inner overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-[#FBBF24]">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-teal-100/80 font-normal">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
