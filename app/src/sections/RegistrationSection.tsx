import { useLanguage } from '@/hooks/useLanguage';
import { RevealOnScroll } from '@/components/XRayEffects';
import { ExternalLink, Calendar, Users, Globe, AlertCircle } from 'lucide-react';

export function RegistrationSection() {
  const { t } = useLanguage();

  const registrationUrl = 'https://forms.gle/PKDCmKRNyK3ovV6DA';

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
            <h2 className="font-techno section-title mb-0">{t('registration.title')}</h2>
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
          </div>
        </RevealOnScroll>

        {/* Registration Card */}
        <RevealOnScroll delay={100}>
          <div 
            className="relative p-8 sm:p-10 border border-[var(--xray-cyan-dim)] bg-[var(--xray-bg-card)]"
            style={{
              boxShadow: 'inset 0 0 40px rgba(0, 240, 255, 0.05), 0 0 30px rgba(0, 240, 255, 0.1)',
            }}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--xray-cyan)]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--xray-cyan)]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--xray-cyan)]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--xray-cyan)]" />

            {/* Notice Banner */}
            <div className="flex items-start gap-3 p-4 mb-8 border border-[var(--xray-cyan-dim)] bg-[rgba(0,240,255,0.05)]">
              <AlertCircle size={20} className="text-[var(--xray-cyan)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-techno text-sm text-[var(--xray-cyan)] tracking-wide mb-1">
                  IMPORTANT NOTICE
                </p>
                <p className="text-[var(--xray-text)] leading-relaxed">
                  {t('registration.notice')}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[var(--xray-text)] leading-relaxed mb-8 text-center">
              {t('registration.desc')}
            </p>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 border border-[var(--xray-cyan-dim)] bg-[rgba(0,240,255,0.03)]">
                <Globe size={18} className="text-[var(--xray-cyan)]" />
                <span className="text-sm text-[var(--xray-text)]">{t('registration.language')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 border border-[var(--xray-cyan-dim)] bg-[rgba(0,240,255,0.03)]">
                <Users size={18} className="text-[var(--xray-cyan)]" />
                <span className="text-sm text-[var(--xray-text)]">{t('registration.participants')}</span>
              </div>
            </div>

            {/* Deadline */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Calendar size={16} className="text-[var(--xray-cyan)]" />
              <span className="font-techno text-sm text-[var(--xray-cyan)] tracking-wide">
                {t('registration.deadline')}
              </span>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[var(--xray-cyan)] text-[var(--xray-bg)] font-techno text-sm tracking-[0.2em] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105"
              >
                <span>{t('registration.button')}</span>
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* URL Display */}
            <div className="mt-6 text-center">
              <span className="font-hud text-xs text-[var(--xray-text-muted)] break-all">
                {registrationUrl}
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
