import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhatToKeepReady from './components/WhatToKeepReady';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F3E8D2] dark:bg-[#2B2B2B] transition-colors duration-300">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToKeepReady />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
