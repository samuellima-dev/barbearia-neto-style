import React, { useEffect, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { BOOKING_URL } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-900/90 backdrop-blur-sm p-4 sm:p-6 transition-opacity duration-300">
      <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-leather-100">
          <h3 className="font-serif text-xl font-semibold text-graphite-900">Agendar Horário</h3>
          <button 
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-graphite-900 hover:bg-stone-200 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 relative bg-stone-50">
          {loading && (
             <div className="absolute inset-0 flex items-center justify-center z-10 bg-stone-50 text-gold-600">
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
                 <span className="text-sm font-sans text-stone-500">Carregando agenda...</span>
               </div>
             </div>
          )}
          
          <iframe 
            src={BOOKING_URL} 
            title="Agendamento Barbearia Neto Style"
            className="w-full h-full border-0"
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Footer with fallback */}
        <div className="px-6 py-3 bg-white border-t border-stone-200 text-center">
          <p className="text-sm text-stone-500 flex items-center justify-center gap-2">
            Não conseguiu visualizar? 
            <a 
              href={BOOKING_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold-600 font-semibold hover:underline flex items-center gap-1"
            >
              Abrir em nova aba <ExternalLink size={14}/>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;