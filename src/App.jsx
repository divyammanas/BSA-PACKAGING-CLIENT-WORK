import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FactoryVideoSection from './components/FactoryVideoSection';
import BusinessPillars from './components/BusinessPillars';
import SpoutCatalog from './components/SpoutCatalog';
import IndustriesPouchGrid from './components/IndustriesPouchGrid';
import TestimonialsSection from './components/TestimonialsSection';
import PanIndiaReach from './components/PanIndiaReach';
import FAQSection from './components/FAQSection';
import QuoteFormSection from './components/QuoteFormSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedSpout, setPreselectedSpout] = useState('');

  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName);
  };

  const handleSelectSpout = (spoutName) => {
    setPreselectedSpout(spoutName);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#060B18] text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
        {/* Sticky Header with Theme Switcher, Navigation & Direct WhatsApp/Quote CTAs */}
        <Header onSelectService={handleSelectService} />

        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Full Factory Tour & 12 Machine Video Showcase */}
          <FactoryVideoSection />

          {/* 3. Two Core Business Pillars */}
          <BusinessPillars onSelectService={handleSelectService} />

          {/* 4. Spout Catalogue (Fixed Contrast for Light & Dark) */}
          <SpoutCatalog onSelectSpout={handleSelectSpout} />

          {/* 5. Industries & Pouch Formats ("What We Pack") */}
          <IndustriesPouchGrid />

          {/* 6. Client Reviews & Verified Testimonials */}
          <TestimonialsSection />

          {/* 7. Pan-India Operational Reach & Regional Hubs */}
          <PanIndiaReach />

          {/* 8. B2B Procurement FAQs (Indexed by Google JSON-LD FAQPage) */}
          <FAQSection />

          {/* 9. B2B Request a Quote / Sample Form + Direct Contact Information */}
          <QuoteFormSection 
            preselectedService={preselectedService} 
            preselectedSpout={preselectedSpout} 
          />
        </main>

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Responsive Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
