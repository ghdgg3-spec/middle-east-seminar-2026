import { useLanguage } from '@/hooks/useLanguage';
import { RevealOnScroll } from '@/components/XRayEffects';
import { Target, Users, Lightbulb } from 'lucide-react';

const objectives = [
  { icon: Target, key: 'objectives.1', num: '01' },
  { icon: Users, key: 'objectives.2', num: '02' },
  { icon: Lightbulb, key: 'objectives.3', num: '03' },
];

export function ObjectivesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
            <h2 className="font-techno section-title mb-0">{t('objectives.title')}</h2>
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
          </div>
        </RevealOnScroll>

        {/* Objectives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {objectives.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <RevealOnScroll key={obj.key} delay={index * 150} className="h-full">
                <div 
                  className="group relative h-full min-h-[200px] p-6 sm:p-8 border-l-2 border-[var(--xray-cyan)] bg-[var(--xray-bg-card)] transition-all duration-400 hover:bg-[rgba(0,240,255,0.05)] hover:border-l-4 flex flex-col"
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(0, 240, 255, 0.03)',
                  }}
                >
                  {/* Number */}
                  <div className="font-techno absolute top-4 right-4 text-5xl font-bold text-[var(--xray-cyan)] opacity-10">
                    {obj.num}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 flex-shrink-0">
                    <Icon 
                      size={28} 
                      className="text-[var(--xray-cyan)] transition-transform duration-300 group-hover:scale-110" 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Content */}
                  <p className="relative z-10 text-base sm:text-lg leading-relaxed text-[var(--xray-text)] flex-grow flex items-center">
                    {t(obj.key)}
                  </p>
                  
                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0, 240, 255, 0.05) 0%, transparent 100%)',
                    }}
                  />
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
