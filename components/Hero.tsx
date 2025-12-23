import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      
      {/* --- THE GUITART ARC (Key Visual Reinterpretation) --- */}
      <div className="absolute top-0 right-0 w-[60%] h-full hidden lg:block pointer-events-none z-0">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-guitart-surface">
            <path d="M0,0 L100,0 L100,100 L20,100 C60,70 40,30 0,0 Z" />
         </svg>
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 right-0 w-full h-full fill-none stroke-guitart-blue/10 stroke-[0.5]">
             <path d="M5,0 C45,30 65,70 25,100" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* --- LEFT COLUMN: NEW EDITORIAL HIERARCHY --- */}
            <div className="lg:col-span-6 animate-fade-in-up">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-guitart-navy/5 rounded-full border border-guitart-navy/10">
                    <span className="w-2 h-2 rounded-full bg-guitart-blue"></span>
                    <span className="text-[10px] font-bold tracking-widest text-guitart-navy uppercase">Programa Anual para C-Level</span>
                </div>
                
                {/* Context Headline */}
                <h1 className="text-4xl lg:text-5xl font-serif text-guitart-navy leading-none mb-4">
                    Driving Growth <span className="italic text-guitart-slate font-light">& Results</span>
                </h1>
                
                {/* THE BRAND: MASSIVE IMPULSA */}
                <div className="relative mb-10">
                    <h2 className="text-[5rem] sm:text-[6rem] lg:text-[7.5rem] font-serif font-bold text-guitart-blue leading-[0.85] tracking-tighter -ml-1">
                        Impulsa<span className="text-guitart-blue/20">.</span>
                    </h2>
                    
                    {/* Subline - Adjusted for 'p' descender clearance */}
                    <div className="flex items-center gap-4 mt-8 ml-1">
                        <div className="h-px w-16 bg-guitart-slate/40"></div>
                        <p className="text-xs font-bold tracking-[0.35em] text-guitart-navy uppercase">
                            Strategy Execution Journey
                        </p>
                    </div>
                </div>
                
                <p className="text-lg text-guitart-slate leading-relaxed mb-10 max-w-lg font-light">
                    Diseñado para asegurar una implementación efectiva de la estrategia. Combinamos reflexión de alto nivel con una agenda de transformación real.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 mb-16">
                    <a href="#problem" className="group flex items-center justify-center px-8 py-4 bg-guitart-navy text-white hover:bg-guitart-blue transition-all duration-300 shadow-lg hover:shadow-xl rounded-sm">
                        <span className="mr-3 font-medium tracking-wide">Descubrir Journey</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="flex items-center justify-center px-8 py-4 border border-guitart-slate/30 text-guitart-navy hover:border-guitart-navy hover:bg-white transition-all font-medium rounded-sm">
                        Agendar Llamada
                    </a>
                </div>

                {/* Trust Signals */}
                <div className="border-t border-gray-200 pt-8">
                    <p className="text-[10px] text-guitart-slate uppercase tracking-widest mb-6 opacity-60">Empresas impulsadas por Guitart Partners</p>
                    <div className="flex gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 items-center">
                        <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                           <path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H70 V25 H60 Z" />
                           <rect x="80" y="5" width="10" height="20" />
                        </svg>
                         <svg className="h-7" viewBox="0 0 100 30" fill="currentColor">
                           <circle cx="15" cy="15" r="10" />
                           <rect x="35" y="10" width="40" height="10" />
                        </svg>
                         <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                           <path d="M10,25 L20,5 L30,25" stroke="currentColor" strokeWidth="4" fill="none"/>
                           <rect x="40" y="5" width="40" height="5" />
                           <rect x="40" y="20" width="30" height="5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* --- RIGHT COLUMN: PRESERVED EXACTLY AS IS --- */}
            <div className="lg:col-span-6 relative h-[650px] hidden lg:block animate-fade-in delay-200">
                
                {/* The Brand Arc Mask - Convex Style (Image pushes Right) */}
                 <div className="absolute inset-0 z-10 overflow-hidden shadow-2xl bg-white">
                     {/* The Mask Container */}
                    <div className="w-full h-full relative">
                        {/* The Image */}
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                            alt="Corporate Glass Architecture" 
                            className="w-full h-full object-cover object-center"
                        />
                        
                         {/* The White Mask (Convex - Pushes from Left to Right) */}
                        <div className="absolute inset-0 bg-white" style={{ clipPath: 'path("M 0 0 L 20 0 Q 65 50 20 100 L 0 100 Z")' }}></div>

                         {/* The Blue Brand Stroke (Following the curve) */}
                         <div className="absolute inset-0 pointer-events-none">
                             <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                                 <path d="M 20 0 Q 65 50 20 100" fill="none" stroke="#0033cc" strokeWidth="0.8" className="opacity-80" />
                             </svg>
                         </div>
                    </div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute bottom-12 right-[-20px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xs z-20 border-l-4 border-guitart-blue animate-fade-in-up delay-500">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-2 w-2 bg-guitart-blue rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Impacto</span>
                    </div>
                    <p className="font-serif text-2xl text-guitart-navy leading-tight mb-2">
                        Velocidad y efectividad.
                    </p>
                    <p className="text-sm text-guitart-slate font-light">En la toma de decisiones estratégicas.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;