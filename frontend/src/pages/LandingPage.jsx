import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import WebsiteFeatureSection from '../components/WebsiteFeatureSection';
import AssistantIcon from '../components/AssistantIcon';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-green-50 min-h-screen font-sans text-gray-800">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-green-50 to-green-100 opacity-50"></div>
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <FeatureSection />
            <WebsiteFeatureSection />
          </main>
          <AssistantIcon />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
