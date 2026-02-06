import { useState, useEffect } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import { 
  XRayGrid, 
  FloatingParticles, 
  ScanLine, 
  LoadingScreen 
} from '@/components/XRayEffects';
import { Hero } from '@/sections/Hero';
import { InfoSection } from '@/sections/InfoSection';
import { ObjectivesSection } from '@/sections/ObjectivesSection';
import { ScheduleSection } from '@/sections/ScheduleSection';
import { RegistrationSection } from '@/sections/RegistrationSection';
import { LinksSection } from '@/sections/LinksSection';
import { Footer } from '@/sections/Footer';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Main Content */}
      <div 
        className={`relative min-h-screen transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Background Effects */}
        <XRayGrid />
        <FloatingParticles />
        <ScanLine />

        {/* Content */}
        <main className="relative z-10">
          <Hero />
          <InfoSection />
          <ObjectivesSection />
          <ScheduleSection />
          <RegistrationSection />
          <LinksSection />
          <Footer />
        </main>

        {/* Ambient Glow */}
        <div 
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(0, 240, 255, 0.03) 0%, transparent 50%)',
          }}
        />
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
