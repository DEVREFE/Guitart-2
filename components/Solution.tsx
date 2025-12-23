import React, { useState } from 'react';
import { PenTool, Share2, Rocket, Settings, Check, ChevronRight, ChevronDown } from 'lucide-react';

const pillars = [
  {
    id: 'design',
    title: 'Diseño',
    subtitle: 'Claridad y Foco',
    description: 'Una estrategia clara, enfocada y conectada con el negocio real. Eliminamos la ambigüedad para encontrar las oportunidades reales de crecimiento.',
    icon: PenTool,
    items: ['Assessment ADN Organizacional', 'Re-Diseño de Visión y Estrategia', 'Workshops de Revisión Estratégica', 'Detección de Oportunidades']
  },
  {
    id: 'align',
    title: 'Alineamiento',
    subtitle: 'Dirección Compartida',
    description: 'Toda la organización remando en la misma dirección. Rompemos los silos para que los objetivos sean compartidos y claros en todos los niveles.',
    icon: Share2,
    items: ['Rediseño Sistema Directivo', 'Alineamiento Vertical y Horizontal', 'Gestión de Células Estratégicas', 'Coaching C-Level']
  },
  {
    id: 'transform',
    title: 'Transformación',
    subtitle: 'Evolución',
    description: 'Líderes preparados para adaptarse, aprender y evolucionar. Preparamos a la cultura organizacional para enfrentar el cambio constante.',
    icon: Rocket,
    items: ['Agenda de Transformación', 'Análisis de Tendencias Globales', 'Coaching de Liderazgo', 'Gestión del Cambio']
  },
  {
    id: 'execute',
    title: 'Ejecución',
    subtitle: 'Precisión',
    description: 'Hacer que las cosas pasen. Implementamos sistemas de medición y seguimiento implacable para asegurar resultados de alto impacto.',
    icon: Settings,
    items: ['Gestión de Iniciativas Estratégicas', 'Sprints de Ejecución', 'Revisión Trimestral Estratégica', 'Dashboard de Resultados']
  }
];

const Solution: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="solution" className="py-24 lg:py-32 bg-guitart-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase mb-4 block">Nuestra Metodología</span>
                <h2 className="text-4xl md:text-5xl font-serif text-guitart-navy leading-tight">
                    La Estrategia en <span className="italic text-guitart-slate">Acción</span>
                </h2>
            </div>
            <p className="text-guitart-slate max-w-md text-lg font-light leading-relaxed hidden md:block">
                Convertimos planes estáticos en sistemas dinámicos de ejecución a través de 4 pilares fundamentales.
            </p>
        </div>

        {/* --- DESKTOP VIEW (Tabs & Diagram) --- */}
        <div className="hidden lg:block bg-white rounded-sm shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="grid grid-cols-12 min-h-[600px]">
                {/* Navigation */}
                <div className="col-span-4 bg-gray-50 border-r border-gray-100 flex flex-col">
                    {pillars.map((pillar, index) => (
                        <button
                            key={pillar.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 flex flex-col justify-center px-8 py-6 text-left transition-all duration-500 border-b border-gray-100 last:border-0 group relative overflow-hidden ${
                                activeTab === index ? 'bg-white' : 'hover:bg-gray-100'
                            }`}
                        >
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-guitart-blue transition-transform duration-300 ${activeTab === index ? 'scale-y-100' : 'scale-y-0'}`}></div>
                            <span className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors ${activeTab === index ? 'text-guitart-blue' : 'text-gray-400'}`}>
                                0{index + 1}
                            </span>
                            <h3 className={`text-xl font-serif transition-colors ${activeTab === index ? 'text-guitart-navy' : 'text-gray-500'}`}>
                                {pillar.title}
                            </h3>
                            <div className={`mt-2 flex items-center text-xs font-medium uppercase tracking-wider transition-all duration-300 ${activeTab === index ? 'opacity-100 translate-x-0 text-guitart-slate' : 'opacity-0 -translate-x-4 text-transparent'}`}>
                                <span>Ver Detalle</span>
                                <ChevronRight size={12} className="ml-1" />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="col-span-5 p-16 flex flex-col justify-center relative">
                     <div key={activeTab} className="animate-fade-in">
                        <div className="w-14 h-14 bg-guitart-blue/5 text-guitart-blue rounded-full flex items-center justify-center mb-8">
                            {React.createElement(pillars[activeTab].icon, { size: 28, strokeWidth: 1.5 })}
                        </div>
                        <h3 className="text-3xl font-serif text-guitart-navy mb-2">
                            {pillars[activeTab].subtitle}
                        </h3>
                         <div className="h-1 w-20 bg-guitart-blue mb-6"></div>
                        <p className="text-lg text-guitart-slate mb-10 leading-relaxed font-light">
                            {pillars[activeTab].description}
                        </p>
                        <ul className="space-y-4">
                            {pillars[activeTab].items.map((item, idx) => (
                                <li key={idx} className="flex items-start text-sm text-guitart-navy font-medium group">
                                    <div className="mt-1 mr-3 rounded-full p-0.5 bg-green-50 group-hover:bg-guitart-blue transition-colors duration-300">
                                        <Check className="w-3 h-3 text-guitart-blue group-hover:text-white" />
                                    </div>
                                    <span className="text-gray-600 group-hover:text-guitart-navy transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                     </div>
                </div>

                {/* Living Diagram */}
                <div className="col-span-3 bg-guitart-navy relative overflow-hidden flex items-center justify-center p-8">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] text-white transition-all duration-1000 ease-in-out">
                        {/* Core / Design */}
                        <circle cx="100" cy="100" r="30" className={`transition-all duration-700 ${activeTab === 0 ? 'fill-guitart-blue opacity-100' : 'fill-transparent stroke-white/20 opacity-50'}`} strokeWidth="2" />
                        <circle cx="100" cy="100" r="15" className={`transition-all duration-700 delay-100 ${activeTab === 0 ? 'fill-white opacity-100' : 'fill-white/10 opacity-30'}`} />
                        
                        {/* Alignment */}
                        <g className={`transition-all duration-700 ${activeTab === 1 ? 'opacity-100' : 'opacity-20'}`}>
                             <line x1="100" y1="70" x2="100" y2="40" stroke="currentColor" strokeWidth="2" />
                             <line x1="100" y1="130" x2="100" y2="160" stroke="currentColor" strokeWidth="2" />
                             <line x1="70" y1="100" x2="40" y2="100" stroke="currentColor" strokeWidth="2" />
                             <line x1="130" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" />
                             <circle cx="100" cy="30" r="5" fill="currentColor" />
                             <circle cx="100" cy="170" r="5" fill="currentColor" />
                             <circle cx="30" cy="100" r="5" fill="currentColor" />
                             <circle cx="170" cy="100" r="5" fill="currentColor" />
                        </g>

                        {/* Transform */}
                        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className={`origin-center transition-all duration-1000 ${activeTab === 2 ? 'scale-110 opacity-100 stroke-guitart-blue' : 'scale-100 opacity-20'}`} />
                        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className={`origin-center transition-all duration-1000 delay-100 ${activeTab === 2 ? 'scale-105 opacity-80' : 'scale-100 opacity-10'}`} />

                        {/* Execute */}
                         <g className={`transition-all duration-700 origin-center ${activeTab === 3 ? 'rotate-90 opacity-100' : 'opacity-10'}`}>
                             <path d="M 100 10 A 90 90 0 0 1 190 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={activeTab === 3 ? 'text-guitart-blue' : ''} />
                             <path d="M 100 190 A 90 90 0 0 1 10 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                         </g>
                    </svg>
                </div>
            </div>
        </div>

        {/* --- MOBILE VIEW (Accordion) --- */}
        <div className="lg:hidden space-y-4">
            {pillars.map((pillar, index) => (
                <div key={pillar.id} className="bg-white rounded-sm border border-gray-100 overflow-hidden shadow-sm">
                    <button 
                        onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <span className={`text-xs font-bold uppercase tracking-widest ${activeTab === index ? 'text-guitart-blue' : 'text-gray-400'}`}>
                                0{index + 1}
                            </span>
                            <h3 className={`text-lg font-serif ${activeTab === index ? 'text-guitart-navy' : 'text-gray-600'}`}>
                                {pillar.title}
                            </h3>
                        </div>
                        <div className={`transition-transform duration-300 ${activeTab === index ? 'rotate-180 text-guitart-blue' : 'text-gray-400'}`}>
                            <ChevronDown size={20} />
                        </div>
                    </button>
                    
                    {/* Expandable Content */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 pb-8 pt-2">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-guitart-blue/5 rounded-full text-guitart-blue">
                                     {React.createElement(pillar.icon, { size: 20 })}
                                </div>
                                <span className="font-serif text-xl text-guitart-navy">{pillar.subtitle}</span>
                             </div>
                             <p className="text-guitart-slate text-sm leading-relaxed mb-6 font-light">
                                {pillar.description}
                            </p>
                            <ul className="space-y-3 bg-gray-50 p-4 rounded-sm">
                                {pillar.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-xs text-guitart-navy font-medium">
                                        <Check className="w-3 h-3 text-guitart-blue mt-0.5 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Solution;