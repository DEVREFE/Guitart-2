import React from 'react';
import { Mail, Globe, Linkedin, ArrowUp, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-guitart-navy text-white">
        
      {/* Pre-Footer CTA */}
      <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                  <div className="max-w-2xl">
                      <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                          ¿Listo para transformar <br/> la estrategia en <span className="text-guitart-blue italic">resultados?</span>
                      </h2>
                      <p className="text-blue-200/60 text-lg font-light">
                          Agende una sesión exploratoria de 30 minutos para analizar el momento de su organización.
                      </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                      <a href="mailto:info@guitartpartners.com" className="group px-8 py-4 bg-white text-guitart-navy font-bold flex items-center justify-center hover:bg-guitart-blue hover:text-white transition-all duration-300">
                          <span>Hablemos</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                  </div>
              </div>
          </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                     <div className="w-8 h-8 bg-guitart-blue rounded-tr-lg rounded-bl-lg"></div>
                     <span className="font-serif font-bold text-xl tracking-tight">Guitart Partners</span>
                </div>
                <p className="text-sm text-blue-200/50 leading-relaxed mb-6">
                    Agencia de consultoría en estrategia e innovación. Impulsando el crecimiento en Latinoamérica, USA y España.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-guitart-blue transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-serif text-lg mb-6 text-white/90">Explorar</h4>
                <ul className="space-y-4 text-sm text-blue-200/60">
                    <li><a href="#home" className="hover:text-white transition-colors">Inicio</a></li>
                    <li><a href="#problem" className="hover:text-white transition-colors">El Desafío</a></li>
                    <li><a href="#solution" className="hover:text-white transition-colors">Metodología</a></li>
                    <li><a href="#plans" className="hover:text-white transition-colors">Planes</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-serif text-lg mb-6 text-white/90">Contacto</h4>
                <ul className="space-y-4 text-sm text-blue-200/60">
                    <li className="flex items-center gap-3">
                        <Mail size={16} className="text-guitart-blue"/>
                        <a href="mailto:info@guitartpartners.com" className="hover:text-white transition-colors">info@guitartpartners.com</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Globe size={16} className="text-guitart-blue"/>
                        <a href="https://www.guitartpartners.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.guitartpartners.com</a>
                    </li>
                </ul>
            </div>

            {/* Legal / Certified */}
            <div>
                <h4 className="font-serif text-lg mb-6 text-white/90">Certificaciones</h4>
                <div className="bg-white/5 p-4 border border-white/10 rounded-sm">
                    <p className="text-xs text-blue-200/40 uppercase tracking-widest mb-2">Member of</p>
                    <p className="font-serif text-lg text-white">IFM Institute</p>
                    <p className="text-xs text-blue-200/40 mt-1">Functional Medicine, USA</p>
                </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/30">
            <p>&copy; {new Date().getFullYear()} Guitart Partners. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;