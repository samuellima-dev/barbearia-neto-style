import React from 'react';
import Button from './ui/Button';

interface BookingSectionProps {
  onBookClick: () => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({ onBookClick }) => {
  return (
    <section className="py-24 bg-graphite-900 relative overflow-hidden">
      {/* Background Image - Blurred */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=2000" 
          alt="Barber atmosphere" 
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-graphite-900/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
          Pronto para renovar o visual?
        </h2>
        <p className="font-sans text-stone-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Garanta seu horário de forma rápida e prática. Escolha o serviço, o dia e o horário que melhor se adaptam à sua rotina.
        </p>
        
        <div className="pt-8">
          <Button onClick={onBookClick} className="text-lg px-10 py-4 shadow-gold-500/20 shadow-xl">
            Agendar Agora
          </Button>
        </div>
        
        <p className="text-sm text-stone-500 pt-4">
          Atendimento com hora marcada para sua comodidade.
        </p>
      </div>
    </section>
  );
};

export default BookingSection;