
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-poppins font-bold text-2xl text-primary">
            GentleVoice
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="font-inter text-gray-700 hover:text-primary transition-colors">Home</a>
          <a href="#services" className="font-inter text-gray-700 hover:text-primary transition-colors">Services</a>
          <a href="#how-it-works" className="font-inter text-gray-700 hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="font-inter text-gray-700 hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="font-inter text-gray-700 hover:text-primary transition-colors">Contact Us</a>
          <Button className="bg-primary hover:bg-primary/90">
            Start Sharing Today
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="font-inter text-gray-700 hover:text-primary transition-colors py-2">Home</a>
            <a href="#services" className="font-inter text-gray-700 hover:text-primary transition-colors py-2">Services</a>
            <a href="#how-it-works" className="font-inter text-gray-700 hover:text-primary transition-colors py-2">How It Works</a>
            <a href="#testimonials" className="font-inter text-gray-700 hover:text-primary transition-colors py-2">Testimonials</a>
            <a href="#contact" className="font-inter text-gray-700 hover:text-primary transition-colors py-2">Contact Us</a>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Start Sharing Today
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
