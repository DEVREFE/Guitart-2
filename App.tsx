import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Roadmap from './components/Roadmap';
import Philosophy from './components/Philosophy';
import Plans from './components/Plans';
import About from './components/About';
import Footer from './components/Footer';
import Branding from './components/Branding';

function App() {
  const [view, setView] = useState<'landing' | 'branding'>('landing');

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setView} currentView={view} />
      
      {view === 'landing' ? (
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Roadmap />
          <Philosophy />
          <Plans />
          <About />
          <Footer />
        </main>
      ) : (
        <main>
          <Branding onBack={() => setView('landing')} />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;