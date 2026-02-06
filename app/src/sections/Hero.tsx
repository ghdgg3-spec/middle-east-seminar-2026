import { useLanguage } from '@/hooks/useLanguage';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CornerBrackets, HeartbeatLine } from '@/components/XRayEffects';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function Hero() {
  const { t, language } = useLanguage();

  const coexUrl =
    language === 'ko'
      ? 'https://www.coex.co.kr/guide/directions/'
      : 'https://www.coexcenter.com/directions-map-subway/';

  return (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    {/* Pixel Noise Overlay */}
    <div className="noise-overlay" />
      {/* Language Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Corner Bracket Frame */}
        <CornerBrackets className="p-8 sm:p-12 lg:p-16 mb-8">
          <div className="space-y-6">
            {/* Badge */}
           <div className="pixel-cut inline-flex items-center gap-3 px-4 py-2 border border-[var(--xray-cyan-dim)] bg-[rgba(0,240,255,0.05)]">
              <span className="w-8 h-[1px] bg-[var(--xray-cyan)]" />
              <span className="text-xs sm:text-sm tracking-[0.2em] text-[var(--xray-cyan)] font-medium">
                {t('hero.badge')}
              </span>
              <span className="w-8 h-[1px] bg-[var(--xray-cyan)]" />
            </div>

            {/* Title */}
            <h1 className="space-y-3">
              <span
  lang="ko"
  className="font-techno-ko micro-jitter pixel-shadow hero-ko-wide block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[var(--xray-bone)] bone-glow glitch-text"
  data-text={t('hero.title')}
>
  {t('hero.title')}
</span>
              <span className="font-techno block text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[var(--xray-cyan)] xray-text-glow">
                {t('hero.subtitle')}
              </span>
            </h1>

            {/* Heartbeat Line */}
            <div className="py-4">
              <HeartbeatLine />
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="flex items-center gap-2 text-[var(--xray-text)]">
                <Calendar size={16} className="text-[var(--xray-cyan)]" />
                <span>{t('hero.date')}</span>
              </div>

              <div className="flex items-center gap-2 text-[var(--xray-text)]">
                <Clock size={16} className="text-[var(--xray-cyan)]" />
                <span>{t('hero.time')}</span>
              </div>

              <div className="flex items-center gap-2 text-[var(--xray-text)]">
                <MapPin size={16} className="text-[var(--xray-cyan)]" />
                <a
                  href={coexUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:opacity-80 transition"
                >
                  COEX Seoul
                </a>
              </div>
            </div>
          </div>
        </CornerBrackets>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 xray-pulse">
          <span className="text-xs tracking-[0.2em] text-[var(--xray-text-muted)]">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--xray-cyan)] to-transparent" />
        </div>
      </div>

      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
        }}
      />
    </section>
  );
}
