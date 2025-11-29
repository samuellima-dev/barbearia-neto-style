import React from 'react';
import { Star, Scissors } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-graphite-900 text-stone-200 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-[-20px] left-[-20px] w-24 h-24 border-t-2 border-l-2 border-gold-500 hidden md:block"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1200" 
                alt="Neto working" 
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 border-b-2 border-r-2 border-gold-500 hidden md:block"></div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-sm hidden md:block">
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl font-bold text-gold-500">10+</span>
                <span className="font-sans text-xs font-bold text-graphite-900 uppercase tracking-widest">Anos de Experiência</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
                A Mente por trás da Tesoura
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Resgatando a <span className="text-gold-500 italic">autoestima</span> masculina através do estilo.
              </h2>
            </div>

            <p className="font-sans text-stone-400 text-lg leading-relaxed">
              Olá, sou o Neto. Minha jornada na barbearia começou não apenas como uma profissão, mas como uma paixão pela arte de transformar. Acredito que um corte de cabelo vai além da estética; é sobre confiança, presença e bem-estar.
            </p>
            <p className="font-sans text-stone-400 text-lg leading-relaxed">
              Na Barbearia Neto Style, criei um ambiente onde o clássico encontra o contemporâneo. Aqui, não temos pressa. Cada cliente é único, e cada serviço é executado com a máxima atenção aos detalhes para garantir que você saia da cadeira sentindo-se a sua melhor versão.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gold-400">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="font-serif text-white font-medium">Excelência em Atendimento</p>
              </div>
              <div className="space-y-2">
                 <div className="flex items-center gap-2 text-gold-400">
                   <Scissors size={20} />
                 </div>
                 <p className="font-serif text-white font-medium">Produtos Premium</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;