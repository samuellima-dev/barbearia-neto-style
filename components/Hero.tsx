import React from 'react';
import Button from './ui/Button';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-graphite-900">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1622295023576-e413346b31eb?auto=format&fit=crop&q=80&w=2000" 
          alt="Barber working" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center md:items-end pb-20 md:pb-0 h-full">
        <div className="flex flex-col items-start justify-center h-full md:w-2/3 space-y-6 pt-20">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-sm">
              Desde 2018
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]">
            Mais que um <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-stone-500">
              corte, um legado.
            </span>
          </h1>
          
          <p className="font-sans text-stone-300 text-lg md:text-xl max-w-lg font-light leading-relaxed">
            Experimente o cuidado tradicional da barbearia clássica combinado com técnicas modernas em um ambiente acolhedor e sofisticado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Button onClick={onBookClick} className="w-full sm:w-auto">
              Agendar Horário
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-stone-300 border-stone-500 hover:border-white hover:text-white hover:bg-transparent">
              Conheça os Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-8 md:p-12 z-10 hidden md:block">
        <div className="text-right text-stone-500 font-serif italic text-lg">
          "O detalhe é o que nos diferencia."
        </div>
      </div>
    </section>
  );
};

export default Hero;