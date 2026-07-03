import { useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { coreValues } from '../../data/siteData';

const valueImages = [
  'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80&w=800', // Integrity
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800', // Excellence
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', // Innovation
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800', // Client
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', // Learning
  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80&w=800', // Accountability
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', // Sustainable
];

interface ValueCardProps {
  name: string;
  image: string;
  index: number;
}

const ValueCard = ({ name, image, index }: ValueCardProps) => {
  const revealClass = index % 2 === 0 ? 'reveal-left' : 'reveal-scale';

  const firstWord = name.split(' ')[0];
  const restWords = name.split(' ').slice(1).join(' ');

  return (
    <div className={`relative group ${revealClass} flex flex-col items-center`}>
      {/* Reduced image size for 4-column layout */}
      <div className="relative w-[95%] h-[140px] z-10 rounded-xl overflow-hidden shadow-2xl mb-[-30px]">
        <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
      </div>
      
      {/* Background that smoothly appears on hover */}
      <div className="pt-12 pb-8 px-5 rounded-xl w-full transition-all duration-500 bg-transparent group-hover:bg-white group-hover:shadow-xl">
        
        {/* Text color adjusted for light background */}
        <h3 className="text-lg font-bold mb-3 text-secondary-900 transition-colors duration-500">
          <span className="text-primary-600 transition-colors duration-500">{firstWord}</span>{' '}
          {restWords}
        </h3>
        
        <span className="inline-flex items-center text-xs font-bold tracking-widest text-secondary-500 group-hover:text-primary-600 uppercase cursor-pointer transition-colors duration-500">
          <span className="w-6 h-6 rounded-full bg-secondary-100 group-hover:bg-primary-600 text-secondary-600 group-hover:text-white flex items-center justify-center mr-3 transition-colors duration-500">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
          Learn more
        </span>
      </div>
    </div>
  );
};

const CoreValues = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative section-padding bg-secondary-50 overflow-hidden">
      <div ref={ref} className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4 reveal">
            Our Principles
          </h2>
          <p className="text-secondary-600 text-sm tracking-wide reveal">
            The values that define us and shape every client relationship.
          </p>
        </div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start mt-12 pb-20">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.name}
              name={value.name}
              image={valueImages[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
