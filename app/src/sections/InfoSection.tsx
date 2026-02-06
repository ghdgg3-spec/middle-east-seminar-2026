import { useLanguage } from '@/hooks/useLanguage';
import { RevealOnScroll, XRayCard } from '@/components/XRayEffects';

export function InfoSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <RevealOnScroll>
          <h2 className="font-techno section-title text-center">{t('info.date.label')} & {t('info.venue.label')}</h2>
        </RevealOnScroll>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Date Card */}
          <RevealOnScroll delay={100}>
            <XRayCard className="h-full text-center">
              <div className="space-y-4">
                <div className="font-techno inline-block px-3 py-1 text-xs tracking-[0.2em] text-[var(--xray-cyan)] border border-[var(--xray-cyan-dim)]">
                  {t('info.date.label')}
                </div>
                
                <div className="data-number font-hud text-4xl sm:text-5xl font-bold text-[var(--xray-bone)]">
                  {t('info.date.value')}
                </div>
                
                <div className="text-lg text-[var(--xray-text)]">
                  {t('info.date.day')} <span className="text-[var(--xray-cyan)]">|</span> {t('info.date.time')}
                </div>
                
                <div className="pt-4 border-t border-[var(--xray-cyan-dim)]">
                  <span className="text-sm text-[var(--xray-text-muted)]">
                    ※ {t('info.date.note')}
                  </span>
                </div>
              </div>
            </XRayCard>
          </RevealOnScroll>

          {/* Venue Card */}
          <RevealOnScroll delay={200}>
            <XRayCard className="h-full text-center">
              <div className="space-y-4">
                <div className="font-techno inline-block px-3 py-1 text-xs tracking-[0.2em] text-[var(--xray-cyan)] border border-[var(--xray-cyan-dim)]">
                  {t('info.venue.label')}
                </div>
                
                <div className="font-techno text-3xl sm:text-4xl font-bold text-[var(--xray-bone)]">
                  {t('info.venue.value')}
                </div>
                
                <div className="text-lg text-[var(--xray-text)]">
                  {t('info.venue.room')}
                </div>
                
                <div className="pt-4 border-t border-[var(--xray-cyan-dim)]">
                  <span className="text-sm text-[var(--xray-text-muted)]">
                    {t('info.venue.address')}
                  </span>
                </div>
              </div>
            </XRayCard>
          </RevealOnScroll>
        </div>

        {/* Connecting Line */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 w-[1px] h-20">
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--xray-cyan), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
