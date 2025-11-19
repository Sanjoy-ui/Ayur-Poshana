import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  const features = [
    { title: 'Rasa', subtitle: 'Taste', description: 'The six tastes (sweet, sour, salty, pungent, bitter, astringent) that influence your body and mind.' },
    { title: 'Dosha', subtitle: 'Constitution', description: 'Your unique mind-body constitution (Vata, Pitta, Kapha) that governs your physiological activities.' },
    { title: 'Vipaka', subtitle: 'Post-digestive', description: 'The effect a substance has after digestion, which has long-term impacts on your tissues.' },
    { title: 'Virya', subtitle: 'Potency', description: 'The heating or cooling energy of a substance, which affects your metabolism and overall energy.' },
  ];

  return (
    <section className="py-16 px-8 sm:px-12 md:px-20">
      <h2 className="text-center text-4xl font-bold text-green-800 mb-6">The Four Pillars of Ayurveda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
