import React from 'react';
import { Check, Shield, Zap, TrendingUp } from 'lucide-react';
import { PricingFeature } from '../types';

const features: PricingFeature[] = [
  { name: 'Assessment XPA', core: true, advanced: true, bold: true },
  { name: 'Re-Diseño Estratégico', core: true, advanced: true, bold: true },
  { name: 'Workshops Trimestrales', core: true, advanced: true, bold: true },
  { name: 'Iniciativas Estratégicas', core: true, advanced: false, bold: true },
  { name: 'Agenda de Transformación', core: false, advanced: true, bold: true },
  { name: 'Tendencias del Sector', core: false, advanced: true, bold: true },
  { name: 'Células Estratégicas', core: false, advanced: true, bold: true },
  { name: 'Alineamiento Sistema Directivo', core: false, advanced: false, bold: true },
  { name: 'Coaching C-Level', core: false, advanced: false, bold: true },
];

const Plans: React.FC = () => {
  const planCards = [
    // CORE
    {
      id: 0,
      title: 'Core',
      subtitle: 'Fundamentos',
      desc: 'Ideal para empresas que necesitan ordenar sus bases estratégicas.',
      icon: Shield,
      features: features.filter(f => f.core),
      highlight: false
    },
    // ADVANCED
    {
      id: 1,
      title: 'Advanced',
      subtitle: 'Profundización',
      desc: 'Para organizaciones en crecimiento que requieren alineamiento directivo.',
      icon: TrendingUp,
      features: features.filter(f => f.advanced),
      highlight: false
    },
    // BOLD
    {
      id: 2,
      title: 'Bold',
      subtitle: 'Transformación',
      desc: 'Para líderes de mercado que buscan reinvención completa y resultados.',
      icon: Zap,
      features: features.filter(f => f.bold),
      highlight: true
    }
  ];

  return (
    <section id="plans" className="py-24 lg:py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-guitart-navy mb-6">Planes de Inversión</h2>
          <p className="text-guitart-slate max-w-xl mx-auto font-light text-lg">
            Seleccione el nivel de profundidad adecuado para el momento de su organización.
          </p>
        </div>

        {/* DESKTOP VIEW (Grid) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 items-start">
            {planCards.map((plan) => (
                <div 
                    key={plan.id}
                    className={`relative bg-white flex flex-col h-full transition-all duration-300 border ${
                        plan.highlight 
                        ? 'border-guitart-navy shadow-2xl scale-105 z-10' 
                        : 'border-gray-200 shadow-sm hover:shadow-lg mt-8'
                    }`}
                >
                    {plan.highlight && (
                        <div className="bg-guitart-navy text-white text-center py-3 uppercase text-xs font-bold tracking-widest">
                            Most Popular
                        </div>
                    )}
                    
                    <div className="p-8 lg:p-10 flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg ${plan.highlight ? 'bg-guitart-blue/10 text-guitart-blue' : 'bg-gray-100 text-gray-500'}`}>
                                {React.createElement(plan.icon, { size: 20 })}
                            </div>
                            <span className={`text-xs uppercase tracking-widest font-bold ${plan.highlight ? 'text-guitart-blue' : 'text-gray-400'}`}>
                                {plan.subtitle}
                            </span>
                        </div>

                        <h3 className="text-3xl font-serif text-guitart-navy mb-4">{plan.title}</h3>
                        <p className="text-sm text-guitart-slate/80 leading-relaxed mb-8 min-h-[40px]">
                            {plan.desc}
                        </p>

                        <div className="space-y-4 mb-8">
                            {plan.features.map((f, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Check size={16} className={`mt-1 flex-shrink-0 ${plan.highlight ? 'text-guitart-blue' : 'text-gray-400'}`} />
                                    <span className={`text-sm ${plan.highlight ? 'text-guitart-navy font-medium' : 'text-gray-600'}`}>{f.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 pt-0 mt-auto">
                        <a 
                            href="#contact" 
                            className={`block w-full py-4 text-center text-sm font-bold transition-colors ${
                                plan.highlight 
                                ? 'bg-guitart-navy text-white hover:bg-guitart-blue' 
                                : 'border border-gray-200 text-guitart-navy hover:border-guitart-navy hover:bg-gray-50'
                            }`}
                        >
                            Solicitar {plan.title}
                        </a>
                    </div>
                </div>
            ))}
        </div>

        {/* MOBILE VIEW (Horizontal Native Scroll) */}
        {/* Usamos snap-x para que las tarjetas se 'peguen' al centro, pero permitimos scroll nativo para no bloquear el vertical */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 -mx-6 scrollbar-hide">
            {planCards.map((plan) => (
                <div 
                    key={plan.id}
                    className="min-w-[85vw] sm:min-w-[60vw] snap-center flex flex-col bg-white border border-gray-200 shadow-xl overflow-hidden rounded-sm"
                >
                    {plan.highlight && (
                        <div className="bg-guitart-navy text-white text-center py-2 uppercase text-[10px] font-bold tracking-widest">
                            Recomendado
                        </div>
                    )}
                    
                    <div className="p-8 flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg ${plan.highlight ? 'bg-guitart-blue/10 text-guitart-blue' : 'bg-gray-100 text-gray-500'}`}>
                                {React.createElement(plan.icon, { size: 24 })}
                            </div>
                            <span className={`text-xs uppercase tracking-widest font-bold ${plan.highlight ? 'text-guitart-blue' : 'text-gray-400'}`}>
                                {plan.subtitle}
                            </span>
                        </div>

                        <h3 className="text-3xl font-serif text-guitart-navy mb-4">{plan.title}</h3>
                        <p className="text-sm text-guitart-slate leading-relaxed mb-8">
                            {plan.desc}
                        </p>

                        <div className="space-y-3 mb-4">
                            {plan.features.map((f, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Check size={16} className={`mt-1 flex-shrink-0 ${plan.highlight ? 'text-guitart-blue' : 'text-gray-400'}`} />
                                    <span className="text-sm text-gray-700">{f.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-6 pt-0 mt-auto">
                        <a href="#contact" className={`block w-full py-3 text-center text-sm font-bold rounded-sm ${plan.highlight ? 'bg-guitart-navy text-white' : 'bg-gray-100 text-guitart-navy'}`}>
                            Consultar {plan.title}
                        </a>
                    </div>
                </div>
            ))}
            {/* Spacer para que la última tarjeta tenga margen derecho al scrollear */}
            <div className="min-w-[1px] w-[1px]"></div>
        </div>
        
        {/* Indicador visual de scroll horizontal en mobile */}
        <div className="lg:hidden flex justify-center gap-2 mt-2">
            <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-guitart-blue/20 w-1/3 animate-pulse"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">Deslizar</span>
        </div>

      </div>
    </section>
  );
};

export default Plans;