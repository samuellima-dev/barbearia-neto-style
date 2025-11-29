import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-leather-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-gold-600 font-sans font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-graphite-900 mb-6">
            Especialidades da Casa
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-graphite-900/10 group-hover:bg-graphite-900/0 transition-colors"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 border-b-4 border-transparent group-hover:border-gold-500 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-bold text-graphite-900 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                  <span className="font-serif text-lg font-semibold text-graphite-900">
                    {service.price}
                  </span>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">
                    Agende
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;