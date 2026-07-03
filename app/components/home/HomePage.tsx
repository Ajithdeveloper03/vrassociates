'use client';

import { Hero } from './Hero';
import { TrustIndicators } from './TrustIndicators';
import { Industries } from './Industries';
import { AboutPreview } from './AboutPreview';
import { FounderPreview } from './FounderPreview';
import { ServicesGrid } from './ServicesGrid';
import { CoreValues } from './CoreValues';
import { CTABanner } from './CTABanner';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <Industries />
      <AboutPreview />
      <FounderPreview />
      <ServicesGrid />
      <CoreValues />
      <CTABanner />
    </main>
  );
};

export default HomePage;
