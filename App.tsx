import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-leather-100 font-sans text-graphite-900">
      <Header onBookClick={handleOpenBooking} />
      
      <main>
        <Hero onBookClick={handleOpenBooking} />
        <Services />
        <About />
        <Testimonials />
        <BookingSection onBookClick={handleOpenBooking} />
      </main>

      <Footer />
      <WhatsAppButton />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBooking} 
      />
    </div>
  );
};

export default App;