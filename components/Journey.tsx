import React from 'react';
import { Compass, Users, Zap, BookOpen, Layers } from 'lucide-react';

const steps = [
  { number: '01', title: 'Rediseñar', description: 'La estrategia con foco en crecimiento real.' },
  { number: '02', title: 'Definir', description: 'Agenda de transformación y líderes clave.' },
  { number: '03', title: 'Diseñar', description: 'Células Estratégicas y equipos ágiles.' },
  { number: '04', title: 'Ejecutar', description: 'Sprints estratégicos continuos.' },
  { number: '05', title: 'Medir', description: 'Avance, resultados y análisis de datos.' },
  { number: '06', title: 'Revisar', description: 'Ajustar, calibrar y reiniciar el ciclo.' },
];

const methodologies = [
    { title: 'Explorar', icon: Compass, text: 'El pasado no explica el futuro. Innovar más que planificar.' },
    { title: 'Co-Crear', icon: Users, text: 'El mayor valor no está dentro, sino fuera. Ecosistemas abiertos.' },
    { title: 'Inspirar', icon: Zap, text: 'Movilizar personas hacia un camino de crecimiento compartido.' },
    { title: 'Aprender', icon: BookOpen, text: 'Instaurar la humildad para crecer y mejorar con creatividad.' },
    { title: 'Adaptar', icon: Layers, text: 'Lidiar con desafíos adaptativos sin respuesta única.' },
];

const Journey: React.FC = () => {
  return (
    <section id="journey" className="bg-white overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: The Process Timeline */}
            <div className="py-24 px-6 lg:px-16 xl:px-24">
                <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase mb-4 block">Process Flow</span>
                <h2 className="text-4xl font-serif text-guitart-navy mb-16">Impulsa <span className="italic text-guitart-slate">Journey</span></h2>
                
                <div className="relative border-l border-gray-200 ml-3 space-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pl-12 group cursor-default">
                            {/* Interactive Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-300 ring-4 ring-white group-hover:bg-guitart-blue group-hover:scale-125 transition-all duration-300"></div>
                            
                            <div className="flex flex-col opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[10px] font-bold text-guitart-blue uppercase tracking-widest mb-1">Step {step.number}</span>
                                <h3 className="text-2xl font-serif text-guitart-navy mb-2">{step.title}</h3>
                                <p className="text-sm text-guitart-slate font-light max-w-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: The Philosophy - Deep Atmosphere with RINGS identity */}
            <div className="bg-guitart-navy relative py-24 px-6 lg:px-16 xl:px-24 flex flex-col justify-center overflow-hidden">
                
                {/* Atmospheric Background with PDF "Circles" Identity */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-guitart-navy to-black"></div>
                
                {/* Interconnected Rings SVG (Visual Identity from Page 6) */}
                <div className="absolute right-[-10%] top-[-10%] opacity-10 animate-slow-zoom pointer-events-none">
                    <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
                        <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="2" />
                        <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1" />
                        <circle cx="450" cy="300" r="100" stroke="white" strokeWidth="2" strokeDasharray="10 10"/>
                        <circle cx="150" cy="300" r="100" stroke="white" strokeWidth="2" strokeDasharray="10 10"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <h3 className="text-3xl font-serif text-white mb-2">Filosofía de Gestión</h3>
                    <p className="text-blue-200/60 mb-16 font-light text-sm tracking-wide uppercase">Más que procesos, mindset.</p>

                    <div className="space-y-10">
                        {methodologies.map((item, idx) => (
                            <div key={idx} className="group flex items-start gap-6">
                                <div className="mt-1 w-10 h-10 border border-white/10 rounded-full flex flex-shrink-0 items-center justify-center text-blue-300 group-hover:bg-white group-hover:text-guitart-navy transition-all duration-500 relative z-10">
                                    <item.icon size={18} />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-serif text-white mb-2 group-hover:text-guitart-blue transition-colors duration-300">{item.title}</h4>
                                    <p className="text-sm text-blue-200/50 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

      </div>
    </section>
  );
};

export default Journey;