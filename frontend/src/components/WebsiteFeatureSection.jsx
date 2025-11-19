import React from 'react';
import CapabilityCard from './CapabilityCard';

const WebsiteFeatureSection = () => (
  <section className="py-16 px-8 sm:px-12 md:px-20 text-center">
    <h2 className="text-3xl font-bold text-green-800 mb-6">Key Platform Capabilities</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      <CapabilityCard
        title="Extensive Food & Nutritional Database"
        description="Access a scientifically curated database of 8,000+ food items covering Indian, multicultural, and international cuisines. Nutrient data is calculated with precision and customized for men, women, and children across all age groups."
      />
      <CapabilityCard
        title="Automated Diet Generation"
        description="Generate nutritionally balanced, Ayurveda-compliant diet plans automatically. Diet charts are recipe-based, with built-in nutrient analysis to provide accurate and actionable dietary guidance."
      />
      <CapabilityCard
        title="Comprehensive Patient Management"
        description="Maintain detailed patient profiles, including age, gender, dietary habits, and essential health parameters, enabling personalized and holistic diet planning."
      />
    </div>
  </section>
);

export default WebsiteFeatureSection;
