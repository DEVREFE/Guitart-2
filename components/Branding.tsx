import React from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';

const Branding: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const colors = [
    { name: 'Guitart Navy', hex: '#0f172a', usage: 'Fondos principales, Texto, Autoridad' },
    { name: 'Guitart Blue', hex: '#0033cc', usage: 'Acentos, Acciones, Energía (Impulsa)' },
    { name: 'Guitart Slate', hex: '#64748b', usage: 'Texto secundario, Sofisticación' },
    { name: 'Surface White', hex: '#ffffff', usage: 'Espacio negativo, Limpieza' },
    { name: 'Surface Gray', hex: '#f8fafc', usage: 'Fondos secundarios' },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <div className="bg-guitart-navy text-white py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-guitart-navy to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-white mb-8 transition-colors text-sm font-bold tracking-widest uppercase"
          >
            <ArrowLeft size={16} /> Volver a la Landing
          </button>
          <h1 className="text-5xl lg:text-7xl font-serif mb-4">Design System</h1>
          <p className="text-xl text-blue-200/60 font-light max-w-2xl">
            Documentación de la identidad visual "Corporate Clarity" de Impulsa.
            Un sistema diseñado para transmitir autoridad, modernidad y ejecución.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-24">
        
        {/* 1. Philosophy */}
        <section>
          <div className="mb-10 border-b border-gray-100 pb-4">
            <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase">01. Filosofía</span>
            <h2 className="text-3xl font-serif text-guitart-navy mt-2">Strategic Minimalism</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                <h3 className="font-serif text-xl mb-4 text-guitart-navy">Corporate Clarity</h3>
                <p className="text-guitart-slate leading-relaxed">
                    Priorizamos el espacio en blanco (Whitespace) para comunicar claridad mental. 
                    Evitamos la decoración innecesaria. Cada elemento tiene una función narrativa.
                </p>
            </div>
            <div className="bg-guitart-navy p-8 rounded-sm text-white">
                <h3 className="font-serif text-xl mb-4">Deep Authority</h3>
                <p className="text-blue-200/60 leading-relaxed">
                    Usamos el modo oscuro (Navy) para secciones de alto impacto emocional o dramático (como "El Problema" o "Filosofía"). 
                    Contraste alto = Mensaje urgente.
                </p>
            </div>
          </div>
        </section>

        {/* 2. Color Palette */}
        <section>
          <div className="mb-10 border-b border-gray-100 pb-4">
            <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase">02. Color</span>
            <h2 className="text-3xl font-serif text-guitart-navy mt-2">Paleta Cromática</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {colors.map((color) => (
                <div key={color.hex} className="group">
                    <div 
                        className="h-32 w-full rounded-sm shadow-sm mb-4 border border-gray-100 relative group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: color.hex }}
                    ></div>
                    <h4 className="font-serif text-lg text-guitart-navy">{color.name}</h4>
                    <p className="text-xs text-guitart-slate mb-2">{color.usage}</p>
                    
                    <button 
                        onClick={() => copyToClipboard(color.hex)}
                        className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-guitart-blue transition-colors uppercase"
                    >
                        {color.hex}
                        {copied === color.hex ? <Check size={12} /> : <Copy size={12} />}
                    </button>
                </div>
            ))}
          </div>
        </section>

        {/* 3. Typography */}
        <section>
          <div className="mb-10 border-b border-gray-100 pb-4">
            <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase">03. Tipografía</span>
            <h2 className="text-3xl font-serif text-guitart-navy mt-2">Editorial Hierarchy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <span className="text-6xl block font-serif text-guitart-navy mb-4">Aa</span>
                <h3 className="text-xl font-serif text-guitart-navy mb-2">Playfair Display</h3>
                <p className="text-sm text-guitart-slate mb-6">Headlines & Display</p>
                <div className="space-y-4">
                    <p className="text-4xl font-serif text-guitart-navy">Driving Growth & Results</p>
                    <p className="text-3xl font-serif text-guitart-navy italic">Strategy Execution Journey</p>
                    <p className="text-2xl font-serif text-guitart-navy">La Estrategia en Acción</p>
                </div>
            </div>
            <div>
                <span className="text-6xl block font-sans font-bold text-guitart-navy mb-4">Aa</span>
                <h3 className="text-xl font-sans font-bold text-guitart-navy mb-2">Inter</h3>
                <p className="text-sm text-guitart-slate mb-6">Body & UI Elements</p>
                <div className="space-y-4">
                    <p className="text-base font-sans text-guitart-slate leading-relaxed">
                        Impulsa está diseñada para asegurar una implementación efectiva de la estrategia. 
                        Combinamos reflexión de alto nivel con una agenda de transformación real.
                    </p>
                    <p className="text-xs font-sans font-bold tracking-widest uppercase text-guitart-blue">
                        Programa Anual para C-Level
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* 4. Key Visuals */}
        <section>
          <div className="mb-10 border-b border-gray-100 pb-4">
            <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase">04. Key Visuals</span>
            <h2 className="text-3xl font-serif text-guitart-navy mt-2">Identidad Gráfica</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Arc */}
            <div className="border border-gray-100 rounded-sm overflow-hidden">
                <div className="bg-gray-50 p-8 h-64 flex items-center justify-center relative overflow-hidden">
                    {/* Mini Hero Recreation */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-guitart-blue/10"></div>
                    <div className="absolute inset-0 text-gray-50">
                        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                             <path d="M 0 0 L 20 0 Q 65 50 20 100 L 0 100 Z" fill="currentColor" className="text-white drop-shadow-lg" />
                        </svg>
                    </div>
                    <span className="relative z-10 font-serif text-guitart-navy text-2xl">The Brand Arc</span>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-guitart-navy mb-2">La Máscara Orgánica</h3>
                    <p className="text-sm text-guitart-slate">
                        Utilizada en el Hero. Una curva convexa suave que integra la imagen corporativa con el espacio en blanco, dando prioridad al texto y recuperando la identidad visual del PDF.
                    </p>
                </div>
            </div>

            {/* The Orbit */}
            <div className="border border-gray-100 rounded-sm overflow-hidden">
                <div className="bg-guitart-navy p-8 h-64 flex items-center justify-center relative">
                    <svg className="absolute w-40 h-40 animate-spin-slow opacity-20" viewBox="0 0 100 100">
                         <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    </svg>
                    <div className="w-4 h-4 bg-guitart-blue rounded-full shadow-[0_0_20px_rgba(0,51,204,1)] relative z-10"></div>
                    <div className="absolute w-8 h-8 bg-white/10 rounded-full top-1/4 right-1/4"></div>
                    <span className="absolute bottom-4 font-serif text-white text-lg">The Orbit</span>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-guitart-navy mb-2">El Sistema Orbital</h3>
                    <p className="text-sm text-guitart-slate">
                        Utilizado en Filosofía. Representa un ecosistema vivo donde los valores (satélites) giran alrededor de un propósito central.
                        Sustituye a las listas jerárquicas tradicionales.
                    </p>
                </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Branding;