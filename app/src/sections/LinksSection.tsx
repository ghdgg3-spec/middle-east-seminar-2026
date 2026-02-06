import { useLanguage } from '@/hooks/useLanguage';
import { RevealOnScroll, XRayCard } from '@/components/XRayEffects';
import { ExternalLink, Globe, BookOpen, GraduationCap } from 'lucide-react';

interface LinkItem {
  titleKey: string;
  descKey: string;
  url: string;
  icon: React.ElementType;
}

export function LinksSection() {
  const { t } = useLanguage();

  const links: LinkItem[] = [
    {
      titleKey: 'links.medical.title',
      descKey: 'links.medical.desc',
      url: 'https://mkconf.org/fairDash.do',
      icon: Globe,
    },
    {
      titleKey: 'links.kmtp.title',
      descKey: 'links.kmtp.desc',
      url: 'https://www.medicalkorea.or.kr/kmtp/',
      icon: BookOpen,
    },
    {
      titleKey: 'links.elearning.title',
      descKey: 'links.elearning.desc',
      url: 'https://mka-eclass.or.kr/courses',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
            <h2 className="font-techno section-title mb-0">{t('links.title')}</h2>
            <span className="w-12 h-[1px] bg-[var(--xray-cyan)]" />
          </div>
        </RevealOnScroll>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            
            return (
              <RevealOnScroll key={link.titleKey} delay={index * 100}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <XRayCard className="h-full text-center relative overflow-hidden">
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="w-14 h-14 flex items-center justify-center border border-[var(--xray-cyan-dim)] bg-[rgba(0,240,255,0.05)] transition-all duration-300 group-hover:border-[var(--xray-cyan)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        <Icon 
                          size={24} 
                          className="text-[var(--xray-cyan)] transition-transform duration-300 group-hover:scale-110" 
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-techno text-lg font-semibold text-[var(--xray-bone)] mb-2 transition-colors group-hover:text-[var(--xray-cyan)]">
                      {t(link.titleKey)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-[var(--xray-text-muted)] mb-4">
                      {t(link.descKey)}
                    </p>
                    
                    {/* External Link Indicator */}
                    <div className="flex items-center justify-center gap-2 text-xs text-[var(--xray-cyan)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Visit</span>
                      <ExternalLink size={12} />
                    </div>
                    
                    {/* Scan Effect on Hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.05), transparent)',
                      }}
                    />
                  </XRayCard>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
