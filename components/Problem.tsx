import React from 'react';
import { Target, Users, AlertCircle, TrendingDown, ArrowUpRight } from 'lucide-react';

const problems = [
  {
    id: '01',
    title: 'Estrategia Débil',
    description: 'Diseños abstractos sin visión de negocio. Frases obvias que nadie sabe cómo bajar a tierra.',
    stat: '60%',
    statLabel: 'Sin impacto financiero',
    icon: Target
  },
  {
    id: '02',
    title: 'Desalineamiento',
    description: 'Silos operativos donde cada área persigue intereses propios sin colaboración transversal.',
    stat: '45%',
    statLabel: 'Pérdida de eficiencia',
    icon: Users
  },
  {
    id: '03',
    title: 'Resistencia',
    description: 'Falta de urgencia. El cambio no ocurre porque no se entiende, no se cree o no se lidera.',
    stat: '70%',
    statLabel: 'Proyectos fallidos',
    icon: AlertCircle
  },
  {
    id: '04',
    title: 'Sin Liderazgo',
    description: 'Bajo nivel de accountability. Sin procesos formales de gestión del desempeño ni decisiones claras.',
    stat: '85%',
    statLabel: 'Equipos desorientados',
    icon: TrendingDown
  }
];

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-guitart-navy relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-indigo-900/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
            <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">El Problema</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                    El costo oculto de la <br/>
                    <span className="text-guitart-blue italic">inacción estratégica.</span>
                </h2>
            </div>
            <div className="lg:col-span-5">
                 <p className="text-blue-200/60 text-lg font-light leading-relaxed border-l border-white/10 pl-6">
                    9 de cada 10 empresas fallan al implementar sus estrategias. 
                    Identifique los síntomas antes de que se conviertan en resultados irreversibles.
                </p>
            </div>
        </div>

        {/* Interactive Grid - THE FOCUS MODE */}
        {/* The 'group' class on the parent allows us to control children on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
            {problems.map((problem) => (
                <div key={problem.id} className="relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm overflow-hidden transition-all duration-500 hover:!opacity-100 group-hover:opacity-40 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">
                    
                    {/* Architectural Big Number in Background */}
                    <div className="absolute -right-4 -bottom-10 text-[180px] font-serif font-bold text-white opacity-[0.03] leading-none pointer-events-none select-none">
                        {problem.id}
                    </div>

                    <div className="relative z-10">
                        {/* Icon Container */}
                        <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-blue-300 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                             {React.createElement(problem.icon, { size: 24 })}
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-serif text-white mb-4">
                            {problem.title}
                        </h3>
                        
                        <p className="text-blue-200/50 text-base leading-relaxed mb-10 font-light min-h-[3rem]">
                            {problem.description}
                        </p>

                        <div className="flex items-end justify-between border-t border-white/10 pt-6">
                            <div>
                                <span className="block text-4xl font-bold text-white mb-1">{problem.stat}</span>
                                <span className="text-xs uppercase tracking-widest text-blue-400 opacity-80">{problem.statLabel}</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-guitart-blue hover:text-white transition-all cursor-pointer">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Problem;