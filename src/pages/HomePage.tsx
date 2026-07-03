import Hero from '../components/home/Hero';
import TrustIndicators from '../components/home/TrustIndicators';
import Industries from '../components/home/Industries';
import AboutPreview from '../components/home/AboutPreview';
import FounderPreview from '../components/home/FounderPreview';
import ServicesGrid from '../components/home/ServicesGrid';
import CoreValues from '../components/home/CoreValues';
import CTABanner from '../components/home/CTABanner';

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
