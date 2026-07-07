'use client';

import { Hero } from './Hero';
import { TrustIndicators } from './TrustIndicators';
import { Industries } from './Industries';
import { AboutPreview } from './AboutPreview';
import { FounderPreview } from './FounderPreview';
import { FounderQualifications } from './FounderQualifications';

import { CTABanner } from './CTABanner';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <Industries />
      <AboutPreview />
      <FounderPreview />
      <FounderQualifications />

      <CTABanner />
    </main>
  );
};

export default HomePage;
