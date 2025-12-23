import React, { useState } from 'react';
import { Compass, Users, Zap, BookOpen, Layers } from 'lucide-react';

const values = [
    { 
        title: 'Explorar', 
        icon: Compass, 
        quote: 'Innovar más que planificar.',
        text: 'El pasado ya no explica el futuro. Experimentamos con tendencias para encontrar nuevos espacios de mercado.' 
    },
    { 
        title: 'Co-Crear', 
        icon: Users, 
        quote: 'Colaboración radical.',
        text: 'El mayor valor no está dentro, sino fuera. Integramos colaboradores, clientes y aliados en el diseño.' 
    },
    { 
        title: 'Inspirar', 
        icon: Zap, 
        quote: 'Movilizar, no solo alinear.',
        text: 'Conectamos a las personas con un propósito de crecimiento y transformación que genera pertenencia.' 
    },
    { 
        title: 'Aprender', 
        icon: BookOpen, 
        quote: 'Humildad y transparencia.',
        text: 'Instauramos un ámbito de aprendizaje continuo para crecer y mejorar con creatividad.' 
    },
    { 
        title: 'Adaptar', 
        icon: Layers, 
        quote: 'Resiliencia estratégica.',
        text: 'Preparamos a la organización para lidiar con desafíos adaptativos donde no existe una única solución.' 
    }
];

const Philosophy: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Configuration for the orbit layout
  const RADIUS = 260; // Distance from center
  const CENTER = 350; // Center coordinate (assuming 700x700 container)

  return (
    <section className="relative py-24 lg:py-32 bg-guitart-navy overflow-hidden min-h-[900px] flex items-center">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Mountain Horizon" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-guitart-navy via-guitart-navy/95 to-guitart-navy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0f172a_80%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header (Visible on Mobile, Hidden on Desktop inside Orbit) */}
        <div className="text-center mb-12 lg:hidden">
             <span className="text-blue-300/80 font-bold tracking-widest text-xs uppercase mb-2 block">Mindset Cultural</span>
             <h2 className="text-3xl font-serif text-white">Filosofía de Gestión</h2>
        </div>

        {/* --- DESKTOP: THE PRECISION ORBIT --- */}
        <div className="hidden lg:block relative w-[700px] h-[700px] mx-auto">
            
            {/* SVG Layer: Handles Rings only (Lines removed for cleaner look) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Outer Ring */}
                <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {/* Inner Ring */}
                <circle cx={CENTER} cy={CENTER} r={RADIUS * 0.7} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Central Nucleus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] text-center z-10 flex flex-col items-center justify-center">
                 
                 {/* Central Glow Effect - Replaces the connecting line */}
                 <div className="absolute inset-0 bg-guitart-blue/10 blur-[60px] rounded-full -z-10 animate-fade-in transition-all duration-700"></div>

                 <span className="text-blue-300/40 font-bold tracking-widest text-[10px] uppercase mb-6 block">Filosofía de Gestión</span>
                
                <div key={activeIdx} className="animate-fade-in flex flex-col items-center">
                    <h3 className="text-5xl font-serif text-white mb-6">{values[activeIdx].title}</h3>
                    
                    {/* Decorative separator */}
                    <div className="flex items-center gap-2 mb-6 opacity-50">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-guitart-blue"></div>
                        <div className="h-1 w-1 bg-guitart-blue rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-guitart-blue"></div>
                    </div>

                    <p className="text-guitart-blue text-xs uppercase tracking-widest font-bold mb-4">{values[activeIdx].quote}</p>
                    <p className="text-blue-100/80 text-lg font-light leading-relaxed">
                        "{values[activeIdx].text}"
                    </p>
                </div>
            </div>

            {/* Satellites (Planets) */}
            {values.map((val, idx) => {
                // Trigonometry for precise positioning
                // 72 degrees = 360 / 5 items. Start at -90 (12 o'clock)
                const angleDeg = (idx * 72) - 90;
                const angleRad = angleDeg * (Math.PI / 180);
                const left = CENTER + RADIUS * Math.cos(angleRad);
                const top = CENTER + RADIUS * Math.sin(angleRad);

                const isActive = activeIdx === idx;

                return (
                    <button
                        key={idx}
                        onMouseEnter={() => setActiveIdx(idx)}
                        className={`absolute w-24 h-24 -ml-12 -mt-12 rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer z-20 group
                            ${isActive 
                                ? 'bg-guitart-blue shadow-[0_0_40px_rgba(0,51,204,0.6)] scale-110 z-30 border-2 border-white/20' 
                                : 'bg-guitart-navy border border-white/10 hover:border-guitart-blue/50 hover:bg-white/5'
                            }
                        `}
                        style={{ left: `${left}px`, top: `${top}px` }}
                    >
                        <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-blue-300/50'}`}>
                             {React.createElement(val.icon, { size: 24 })}
                        </div>
                        <span className={`text-[10px] font-bold uppercase mt-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-blue-200/30'}`}>
                            {val.title}
                        </span>
                    </button>
                );
            })}
        </div>

        {/* --- MOBILE: CONNECTED NODE LIST --- */}
        <div className="lg:hidden mt-8 space-y-0 relative">
            {/* Continuous Vertical Line */}
            <div className="absolute left-[24px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-guitart-blue via-white/10 to-transparent"></div>

            {values.map((val, idx) => (
                <div key={idx} className="relative pl-16 py-8 group">
                    {/* Node Circle */}
                    <div className={`absolute left-[10px] top-8 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,51,204,0.2)] transition-colors
                        ${idx === activeIdx ? 'bg-guitart-blue border-guitart-blue text-white' : 'bg-guitart-navy border-guitart-blue/30 text-blue-300/50'}
                    `}>
                        {React.createElement(val.icon, { size: 14 })}
                    </div>
                    
                    <h3 className="text-2xl font-serif text-white mb-1">{val.title}</h3>
                    <p className="text-guitart-blue text-xs font-bold tracking-widest uppercase mb-3">{val.quote}</p>
                    <p className="text-blue-100/60 text-sm font-light leading-relaxed border-b border-white/5 pb-8">
                        {val.text}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;