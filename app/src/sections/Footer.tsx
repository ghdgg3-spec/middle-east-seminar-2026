import { useLanguage } from '@/hooks/useLanguage';
import { RevealOnScroll, HeartbeatLine } from '@/components/XRayEffects';
import { ShareButton } from '@/components/ShareButton';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--xray-cyan-dim)]">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="text-center space-y-8">
            {/* Heartbeat Line */}
            <HeartbeatLine className="max-w-md mx-auto" />
            
            {/* Main Message */}
            <div className="space-y-2">
              <h3 className="font-techno text-2xl sm:text-3xl font-bold text-[var(--xray-bone)] bone-glow">
                {t('footer.message')}
              </h3>
              <p className="text-[var(--xray-text-muted)]">
                {t('footer.contact')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--xray-text-muted)]">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--xray-cyan)]" />
                <span>kyeol2@khidi.or.kr</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[var(--xray-cyan)]" />
                <span>+82-43-713-8971</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--xray-cyan)]" />
                <span>Osong, Korea</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="pt-4">
              <ShareButton />
            </div>

            {/* Logo/Badge */}
            <div className="pt-8 flex items-center justify-center gap-4">
              <span className="w-16 h-[1px] bg-[var(--xray-cyan-dim)]" />
              <span className="font-techno text-xs tracking-[0.3em] text-[var(--xray-cyan)]">
                MEDICAL KOREA 2026
              </span>
              <span className="w-16 h-[1px] bg-[var(--xray-cyan-dim)]" />
            </div>

            {/* Copyright */}
            <p className="text-xs text-[var(--xray-text-muted)] pt-4">
              © 2026 Korea Health Industry Development Institute. All rights reserved.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(0, 240, 255, 0.05) 0%, transparent 60%)',
        }}
      />
    </footer>
  );
}
