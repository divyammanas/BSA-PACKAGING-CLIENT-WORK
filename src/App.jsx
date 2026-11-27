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
      <div className="min-h-screen bg-white dark:bg-[#0F172A] text-slate-700 dark:text-slate-200 flex flex-col transition-colors duration-200">
        <Header onSelectService={handleSelectService} />

        <main className="flex-grow">
          <Hero />
          <FactoryVideoSection />
          <BusinessPillars onSelectService={handleSelectService} />
          <SpoutCatalog onSelectSpout={handleSelectSpout} />
          <IndustriesPouchGrid />
          <TestimonialsSection />
          <PanIndiaReach />
          <FAQSection />
          <QuoteFormSection
            preselectedService={preselectedService}
            preselectedSpout={preselectedSpout}
          />
        </main>

        <FloatingWhatsApp />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
