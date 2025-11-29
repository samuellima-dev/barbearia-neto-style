import React from 'react';
import { MapPin, Instagram, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-leather-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
               <span className="font-serif text-2xl font-bold text-white">NETO</span>
               <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500">Style</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Cuidado masculino com tradição e estilo moderno. O lugar onde você encontra sua melhor versão.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-lg font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Instagram size={18} className="text-gold-500 mt-1" />
                <a 
                  href="https://www.instagram.com/barbearia_netostyle/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gold-500 transition-colors"
                >
                  @barbearia_netostyle
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-lg font-semibold">Localização</h4>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                R. João Batista de Carvalho, 316<br />
                Senzala, Carpina - PE<br />
                CEP: 55813-250
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-lg font-semibold">Horários</h4>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-gold-500 mt-1 flex-shrink-0" />
              <ul className="text-sm space-y-1 w-full">
                <li className="flex justify-between w-full max-w-[200px]">
                  <span>Seg - Sáb:</span>
                  <span>08h - 19h</span>
                </li>
                <li className="flex justify-between w-full max-w-[200px]">
                  <span>Domingo:</span>
                  <span>08h - 12h</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Barbearia Neto Style. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;