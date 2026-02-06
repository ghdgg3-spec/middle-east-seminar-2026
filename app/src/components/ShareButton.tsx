import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Share2, Check, Link2, Twitter, Linkedin } from 'lucide-react';

export function ShareButton() {
  const { t } = useLanguage();
  const [showOptions, setShowOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent('Medical Korea 2026 - Middle East Medical Training Seminar');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="share-btn"
      >
        <Share2 size={16} />
        <span className="font-techno">{t('footer.share')}</span>
      </button>

      {showOptions && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowOptions(false)}
          />
          <div 
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 min-w-[160px]"
            style={{
              background: 'var(--xray-bg-card)',
              border: '1px solid var(--xray-cyan-dim)',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
            }}
          >
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[rgba(0,240,255,0.1)] transition-colors"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-[var(--xray-green)]" />
                  <span className="text-sm text-[var(--xray-green)]">{t('footer.copy')}</span>
                </>
              ) : (
                <>
                  <Link2 size={16} className="text-[var(--xray-cyan)]" />
                  <span className="text-sm text-[var(--xray-text)]">Copy Link</span>
                </>
              )}
            </button>
            
            <button
              onClick={handleShareTwitter}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[rgba(0,240,255,0.1)] transition-colors border-t border-[var(--xray-cyan-dim)]"
            >
              <Twitter size={16} className="text-[var(--xray-cyan)]" />
              <span className="text-sm text-[var(--xray-text)]">Twitter</span>
            </button>
            
            <button
              onClick={handleShareLinkedIn}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[rgba(0,240,255,0.1)] transition-colors border-t border-[var(--xray-cyan-dim)]"
            >
              <Linkedin size={16} className="text-[var(--xray-cyan)]" />
              <span className="text-sm text-[var(--xray-text)]">LinkedIn</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
