'use client';

import { Hero } from './Hero';
import { AboutPreview } from './AboutPreview';
import { FounderPreview } from './FounderPreview';
import { StatsSection } from './StatsSection';
import { OurServicesSection } from './OurServicesSection';
import { Industries } from './Industries';
import { CoreValuesSection } from './CoreValuesSection';
import { CTABanner } from './CTABanner';

const HomePage = () => {
  return (
    <main className="bg-slate-50 min-h-screen overflow-x-hidden font-sans">
      <Hero />
      <AboutPreview />
      <StatsSection />
      <FounderPreview />
      
      <OurServicesSection />
      <Industries />
      <CoreValuesSection />
      <CTABanner />
    </main>
  );
};

export default HomePage;
