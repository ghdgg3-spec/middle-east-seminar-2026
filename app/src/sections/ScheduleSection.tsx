import { useLanguage } from '@/hooks/useLanguage';
import { RevealOnScroll } from '@/components/XRayEffects';
import { Clock, Star, Gift, Mic2, Presentation, BookOpen } from 'lucide-react';

interface ScheduleItem {
  time: string;
  titleKey: string;
  descKey: string;
  icon: React.ElementType;
  type: 'normal' | 'highlight' | 'major' | 'special';
  duration?: string;
}

export function ScheduleSection() {
  const { t } = useLanguage();

  const schedule: ScheduleItem[] = [
    { 
      time: 'schedule.opening.time', 
      titleKey: 'schedule.opening.title', 
      descKey: 'schedule.opening.desc', 
      icon: BookOpen, 
      type: 'normal' 
    },
    { 
      time: 'schedule.welcome.time', 
      titleKey: 'schedule.welcome.title', 
      descKey: 'schedule.welcome.desc', 
      icon: Mic2, 
      type: 'highlight' 
    },
    { 
      time: 'schedule.congrats.time', 
      titleKey: 'schedule.congrats.title', 
      descKey: 'schedule.congrats.desc', 
      icon: Star, 
      type: 'highlight' 
    },
    { 
      time: 'schedule.session1.time', 
      titleKey: 'schedule.session1.title', 
      descKey: 'schedule.session1.desc', 
      icon: Presentation, 
      type: 'major',
      duration: 'schedule.session1.duration'
    },
    { 
      time: 'schedule.session2.time', 
      titleKey: 'schedule.session2.title', 
      descKey: 'schedule.session2.desc', 
      icon: Presentation, 
      type: 'major',
      duration: 'schedule.session2.duration'
    },
    { 
      time: 'schedule.lucky.time', 
      titleKey: 'schedule.lucky.title', 
      descKey: 'schedule.lucky.desc', 
      icon: Gift, 
      type: 'special' 
    },
    { 
      time: 'schedule.closing.time', 
      titleKey: 'schedule.closing.title', 
      descKey: 'schedule.closing.desc', 
      icon: BookOpen, 
      type: 'normal' 
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'major':
        return {
          timeColor: 'text-[var(--xray-cyan)]',
          titleColor: 'text-[var(--xray-cyan)]',
          borderColor: 'border-[var(--xray-cyan)]',
          bgGlow: 'shadow-[0_0_20px_rgba(0,240,255,0.1)]',
        };
      case 'special':
        return {
          timeColor: 'text-[var(--xray-green)]',
          titleColor: 'text-[var(--xray-green)]',
          borderColor: 'border-[var(--xray-green)]',
          bgGlow: 'shadow-[0_0_20px_rgba(0,255,136,0.1)]',
        };
      case 'highlight':
        return {
          timeColor: 'text-[var(--xray-bone)]',
          titleColor: 'text-[var(--xray-bone)]',
          borderColor: 'border-[var(--xray-cyan-dim)]',
          bgGlow: '',
        };
      default:
        return {
          timeColor: 'text-[var(--xray-text-muted)]',
          titleColor: 'text-[var(--xray-text)]',
          borderColor: 'border-[rgba(0,240,255,0.1)]',
          bgGlow: '',
        };
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
            <h2 className="font-techno section-title mb-0">{t('schedule.title')}</h2>
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div 
            className="absolute left-[60px] sm:left-[80px] top-0 bottom-0 w-[1px]"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--xray-cyan) 10%, var(--xray-cyan) 90%, transparent)',
              opacity: 0.3,
            }}
          />

          {/* Schedule Items */}
          <div className="space-y-4">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              const styles = getTypeStyles(item.type);
              
              return (
                <RevealOnScroll key={item.titleKey} delay={index * 80} direction="left">
                  <div 
                    className={`relative flex items-start gap-4 sm:gap-6 p-4 sm:p-5 border ${styles.borderColor} bg-[var(--xray-bg-card)] transition-all duration-300 hover:translate-x-2 ${styles.bgGlow}`}
                  >
                    {/* Time */}
                    <div className="flex-shrink-0 w-12 sm:w-16 text-right">
                      <span className={`data-number font-hud text-lg sm:text-xl font-semibold ${styles.timeColor}`}>
                        {t(item.time)}
                      </span>
                    </div>

                    {/* Connector Dot */}
                    <div 
                      className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ${styles.borderColor} border-2 bg-[var(--xray-bg)]`}
                      style={{
                        boxShadow: item.type === 'major' ? '0 0 10px var(--xray-cyan)' : item.type === 'special' ? '0 0 10px var(--xray-green)' : 'none',
                      }}
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3">
                        <Icon 
                          size={18} 
                          className={`flex-shrink-0 mt-1 ${styles.timeColor}`}
                          strokeWidth={1.5}
                        />
                        <div>
                          <h3 className={`font-techno text-base sm:text-lg font-semibold ${styles.titleColor}`}>
                            {t(item.titleKey)}
                          </h3>
                          <p className="text-sm text-[var(--xray-text-muted)] mt-1">
                            {t(item.descKey)}
                          </p>
                          {item.duration && (
                            <div className="inline-flex items-center gap-1 mt-2 px-2 py-1 text-xs text-[var(--xray-cyan)] border border-[var(--xray-cyan-dim)] bg-[rgba(0,240,255,0.05)]">
                              <Clock size={12} />
                              <span>{t(item.duration)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
