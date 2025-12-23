import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'landing' | 'branding') => void;
  currentView: 'landing' | 'branding';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href: string) => {
    onNavigate('landing');
    setIsOpen(false);
    // Allow time for state switch before scrolling
    setTimeout(() => {
        window.location.href = href;
    }, 100);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solución', href: '#solution' },
    { name: 'Journey', href: '#roadmap' },
    { name: 'Planes', href: '#plans' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen || currentView === 'branding' ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('landing')}>
             <div className="w-8 h-8 bg-guitart-blue rounded-tr-lg rounded-bl-lg group-hover:bg-guitart-navy transition-colors duration-500"></div>
             <span className="font-serif font-bold text-xl text-guitart-navy tracking-tight">Guitart Partners</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {currentView === 'landing' ? (
                <>
                    {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-guitart-slate hover:text-guitart-blue transition-colors uppercase tracking-wider relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-guitart-blue transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    ))}
                    <button 
                        onClick={() => onNavigate('branding')}
                        className="text-xs font-bold text-guitart-blue/50 hover:text-guitart-blue uppercase tracking-widest flex items-center gap-1"
                        title="Ver Design System"
                    >
                        <Palette size={14} /> System
                    </button>
                    <a 
                        href="#contact" 
                        className="px-6 py-2.5 bg-guitart-navy text-white text-sm font-medium rounded-sm hover:bg-guitart-blue transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        Hablemos
                    </a>
                </>
            ) : (
                <button 
                    onClick={() => onNavigate('landing')}
                    className="px-6 py-2.5 bg-guitart-navy text-white text-sm font-medium rounded-sm hover:bg-guitart-blue transition-colors duration-300 shadow-md"
                >
                    Volver al Sitio
                </button>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-guitart-navy hover:text-guitart-blue focus:outline-none p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute w-full border-t border-gray-100 h-screen top-full left-0 animate-fade-in">
          <div className="px-6 pt-8 pb-3 space-y-6 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-serif text-guitart-navy hover:text-guitart-blue"
              >
                {link.name}
              </a>
            ))}
             <button 
                onClick={() => { onNavigate('branding'); setIsOpen(false); }}
                className="text-sm font-bold text-guitart-slate uppercase tracking-widest flex items-center gap-2 mt-4"
            >
                <Palette size={16} /> Design System
            </button>
             <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="mt-8 px-8 py-3 bg-guitart-blue text-white rounded-sm font-medium w-full text-center shadow-lg"
            >
                Hablemos
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;