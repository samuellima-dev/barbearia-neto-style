import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './ui/Button';

interface HeaderProps {
  onBookClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-graphite-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full border-2 transition-colors ${isScrolled ? 'border-gold-500 text-gold-500' : 'border-white/80 text-white/90 group-hover:border-gold-400 group-hover:text-gold-400'}`}>
            <Scissors size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold leading-none tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
              NETO
            </span>
            <span className={`font-sans text-[10px] tracking-[0.3em] uppercase ${isScrolled ? 'text-gold-500' : 'text-stone-300'}`}>
              Style
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled 
                  ? 'text-stone-300 hover:text-gold-400' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="!px-6 !py-2 !text-xs shadow-none border border-transparent hover:border-gold-300"
            onClick={onBookClick}
          >
            Agendar
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-graphite-900 z-30 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0px' }}
      >
        <button 
          className="absolute top-6 right-6 text-stone-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-stone-300 hover:text-gold-500 transition-colors"
          >
            {item.label}
          </a>
        ))}
        
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => {
            setIsMobileMenuOpen(false);
            onBookClick();
          }}
        >
          Agendar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;