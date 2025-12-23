import React from 'react';
import { Globe, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white border-t border-gray-100">
      
      {/* --- THE NETWORK (PDF Page 8) --- */}
      <div className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-guitart-blue font-bold tracking-widest text-xs uppercase mb-4 block">Guitart Partners</span>
            <h2 className="text-4xl font-serif text-guitart-navy mb-8">Un Ecosistema de Innovación</h2>
            <p className="text-lg text-guitart-slate max-w-3xl mx-auto font-light leading-relaxed mb-16">
                "Somos un network que integra especialistas, activistas y emprendedores del conocimiento. 
                Nos une la pasión por el crecimiento y la transformación en un mundo que cambió radicalmente."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-sm">
                    <Globe className="w-8 h-8 text-guitart-blue mb-4 mx-auto" />
                    <h3 className="font-serif text-xl text-guitart-navy mb-2">Alcance Global</h3>
                    <p className="text-sm text-guitart-slate">Impactando organizaciones en Latinoamérica, USA y España.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-sm">
                    <Users className="w-8 h-8 text-guitart-blue mb-4 mx-auto" />
                    <h3 className="font-serif text-xl text-guitart-navy mb-2">+150 Clientes</h3>
                    <p className="text-sm text-guitart-slate">Acompañando a más de 2,000 líderes en su transformación.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-sm">
                    <Lightbulb className="w-8 h-8 text-guitart-blue mb-4 mx-auto" />
                    <h3 className="font-serif text-xl text-guitart-navy mb-2">Innovación Abierta</h3>
                    <p className="text-sm text-guitart-slate">Desarrollamos e impulsamos ecosistemas de crecimiento sostenible.</p>
                </div>
            </div>
         </div>
      </div>

      {/* --- THE LEADER (PDF Page 9) --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
                <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="CEO Portrait" 
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="absolute bottom-6 -right-6 bg-guitart-navy text-white p-6 max-w-xs shadow-xl hidden md:block">
                    <div className="text-3xl font-serif font-bold mb-1">+25</div>
                    <div className="text-xs uppercase tracking-wide opacity-80">Años de experiencia</div>
                </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
                <div className="inline-block px-3 py-1 bg-blue-50 text-guitart-blue text-xs font-bold uppercase tracking-widest mb-4">Founder</div>
                <h2 className="text-5xl font-serif text-guitart-navy mb-2">Patricio Guitart</h2>
                <p className="text-guitart-slate font-medium text-lg mb-8">Co-Founder & CEO Guitart Partners</p>
                
                <div className="space-y-6 text-lg text-guitart-slate font-light leading-relaxed mb-12">
                    <p className="italic text-guitart-navy border-l-4 border-guitart-blue pl-4">
                        "Mi misión es inspirar y empoderar a las personas para vivir de forma más saludable, consciente y con propósito."
                    </p>
                    <p>
                        Experto en estrategia e innovación. Certificado por el Instituto de Medicina Funcional (IFM) en USA. Fusiona la claridad estratégica corporativa con un enfoque holístico del liderazgo humano.
                    </p>
                </div>
                
                {/* Signature Placeholder */}
                <div className="mt-12 opacity-60">
                     <span className="font-serif italic text-4xl text-guitart-navy">Patricio Guitart</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;