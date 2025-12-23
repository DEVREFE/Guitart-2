import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  { 
    number: '01', 
    title: 'Rediseñar', 
    subtitle: 'Growth Strategy',
    description: 'Rediseñar la estrategia con foco obsesivo en el crecimiento y la propuesta de valor.' 
  },
  { 
    number: '02', 
    title: 'Definir', 
    subtitle: 'Agenda & Leaders',
    description: 'Establecer una agenda de transformación clara y alinear a los líderes clave.' 
  },
  { 
    number: '03', 
    title: 'Diseñar', 
    subtitle: 'Strategic Cells',
    description: 'Configurar Células Estratégicas y equipos ágiles multidisciplinarios.' 
  },
  { 
    number: '04', 
    title: 'Ejecutar', 
    subtitle: 'Continuous Sprints',
    description: 'Implementación mediante Sprints estratégicos continuos de 90 días.' 
  },
  { 
    number: '05', 
    title: 'Medir', 
    subtitle: 'Data & Analytics',
    description: 'Seguimiento implacable del avance, resultados e indicadores clave (KPIs).' 
  },
  { 
    number: '06', 
    title: 'Revisar', 
    subtitle: 'Calibrate',
    description: 'Ciclos de aprendizaje: ajustar, calibrar la puntería y reiniciar el ciclo.' 
  },
];

const Roadmap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez visible, dejamos de observar para que no se reinicie la animación al hacer scroll arriba/abajo
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { 
        threshold: 0.2, // Dispara cuando el 20% de la sección es visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
        id="roadmap" 
        ref={sectionRef}
        className="py-24 bg-white border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className={`mb-20 text-center max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase mb-4 block">Fase Operativa</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-guitart-navy mb-6">Impulsa <span className="italic text-guitart-slate">Journey</span></h2>
            <p className="text-guitart-slate text-lg font-light leading-relaxed">
                Un proceso secuencial y cíclico diseñado para mover a la organización del plan a la acción.
            </p>
        </div>

        {/* --- DESKTOP TIMELINE (Horizontal) --- */}
        <div className="hidden lg:block relative">
            {/* Connecting Line Base */}
            <div className={`absolute top-[24px] left-0 h-[2px] bg-gray-100 z-0 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'w-full' : 'w-0'}`}></div>
            
            {/* Connecting Line Gradient */}
            <div className={`absolute top-[24px] left-0 h-[2px] bg-gradient-to-r from-guitart-blue to-transparent z-0 transition-all duration-1500 ease-out delay-500 ${isVisible ? 'w-1/3' : 'w-0'}`}></div>

            <div className="grid grid-cols-6 gap-4 relative z-10">
                {steps.map((step, index) => (
                    <div 
                        key={index} 
                        className={`group relative pt-12 hover:-translate-y-2 transition-all duration-700 ease-out`}
                        style={{ 
                            transitionDelay: `${index * 150}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        {/* Dot */}
                        <div className={`absolute top-[18px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-gray-300 rounded-full group-hover:border-guitart-blue group-hover:scale-125 transition-all duration-300 z-10 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
                        
                        {/* Number Ghost */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl font-serif font-bold text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none -z-10">
                            {step.number}
                        </div>

                        <div className="text-center px-2">
                            <span className="text-[10px] font-bold text-guitart-blue uppercase tracking-widest block mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                Step {step.number}
                            </span>
                            <h3 className="text-xl font-serif text-guitart-navy mb-1 group-hover:text-guitart-blue transition-colors">
                                {step.title}
                            </h3>
                            <span className="text-xs uppercase tracking-wide text-gray-400 mb-4 block font-medium">
                                {step.subtitle}
                            </span>
                            <p className="text-sm text-guitart-slate leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* --- MOBILE TIMELINE (Vertical) --- */}
        <div className="lg:hidden relative border-l-2 border-gray-100 ml-4 space-y-12 py-4">
            {steps.map((step, index) => (
                <div 
                    key={index} 
                    className={`relative pl-8 pr-4 transition-all duration-700 ease-out`}
                    style={{ 
                        transitionDelay: `${index * 150}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                >
                    {/* Dot */}
                    <div className="absolute top-0 -left-[9px] w-4 h-4 bg-white border-[3px] border-guitart-blue rounded-full"></div>
                    
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-guitart-blue uppercase tracking-widest mb-1">Step {step.number}</span>
                        <h3 className="text-2xl font-serif text-guitart-navy mb-1">
                            {step.title}
                        </h3>
                         <span className="text-xs uppercase tracking-wide text-gray-400 mb-3 font-medium">
                            {step.subtitle}
                        </span>
                        <p className="text-sm text-guitart-slate leading-relaxed font-light">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Roadmap;