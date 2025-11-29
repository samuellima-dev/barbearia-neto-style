import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-graphite-900">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute top-6 right-6 text-stone-200">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
                />
                <div>
                  <h4 className="font-serif font-bold text-graphite-900">{t.name}</h4>
                  <p className="text-xs font-sans text-stone-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
              
              <p className="font-sans text-stone-600 italic leading-relaxed">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;