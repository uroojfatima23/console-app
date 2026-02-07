import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import HowItWorks from '@/components/landing/HowItWorks';
import CallToAction from '@/components/landing/CallToAction';
import Chatbot from '@/components/Chatbot';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <CallToAction />
      <Chatbot />
    </div>
  );
};

export default LandingPage;
