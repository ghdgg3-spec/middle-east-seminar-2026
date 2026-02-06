import { useEffect, useRef, useState } from 'react';

// Floating Particles Component
export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 4}s`,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

// X-Ray Grid Background
export function XRayGrid() {
  return <div className="xray-grid-bg" />;
}

// Scan Line Effect
export function ScanLine() {
  return <div className="scan-line" />;
}

// Heartbeat ECG Line
export function HeartbeatLine({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={`w-full h-8 ${className}`} 
      viewBox="0 0 400 40" 
      preserveAspectRatio="none"
    >
      <path
        className="heartbeat-line"
        d="M0,20 L100,20 L110,20 L120,5 L130,35 L140,10 L150,20 L160,20 L170,20 L180,20 L190,20 L200,20 L210,20 L220,20 L230,5 L240,35 L250,10 L260,20 L270,20 L280,20 L290,20 L300,20 L310,20 L320,20 L330,20 L340,20 L350,20 L360,20 L370,20 L380,20 L400,20"
      />
    </svg>
  );
}

// Corner Brackets
export function CornerBrackets({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`corner-bracket ${className}`}>
      {children}
      <span className="corner-tl" />
      <span className="corner-br" />
    </div>
  );
}

// X-Ray Card with hover effects
export function XRayCard({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`xray-card ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transition: 'all 0.6s ease-out' }}
    >
      {children}
    </div>
  );
}

// Reveal on Scroll
export function RevealOnScroll({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      default: return 'translateY(40px)';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getInitialTransform(),
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      {children}
    </div>
  );
}

// Loading Screen
export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center" style={{ background: 'var(--xray-bg)' }}>
      <div className="text-center">
        {/* Scanner Box */}
        <div className="relative w-48 h-32 mb-8 mx-auto">
          <div className="absolute inset-0 border-2 border-[var(--xray-cyan)] opacity-50" 
               style={{ boxShadow: '0 0 20px var(--xray-cyan-dim), inset 0 0 20px rgba(0, 240, 255, 0.1)' }} />
          
          {/* Scanning Light */}
          <div 
            className="absolute left-0 w-full h-1"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--xray-cyan), transparent)',
              boxShadow: '0 0 15px var(--xray-cyan)',
              animation: 'scanLight 1.5s ease-in-out infinite',
              top: `${(progress / 100) * 100}%`,
            }}
          />
          
          {/* Progress Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-[var(--xray-cyan)]" style={{ textShadow: '0 0 20px var(--xray-cyan)' }}>
              {progress}%
            </span>
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="text-sm tracking-[0.3em] text-[var(--xray-cyan)] xray-pulse">
          SCANNING
        </p>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 mt-6 mx-auto bg-[var(--xray-bg-card)] overflow-hidden">
          <div 
            className="h-full bg-[var(--xray-cyan)] transition-all duration-100"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px var(--xray-cyan)'
            }}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes scanLight {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Data Stream Effect
export function DataStream({ count = 5 }: { count?: number }) {
  const streams = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${10 + (i * 80 / count)}%`,
    delay: `${i * 0.3}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((s) => (
        <div
          key={s.id}
          className="data-stream"
          style={{
            left: s.left,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
