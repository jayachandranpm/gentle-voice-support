
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-2xl mb-4">GentleVoice</h3>
            <p className="font-inter text-gray-300 mb-6">
              A compassionate ear when you need it most. Professional emotional support tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="font-inter space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Services</h4>
            <ul className="font-inter space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Daily Chat Support</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Regular Check-ins</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Phone Support</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Breakup Support</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Relationship Guidance</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Legal</h4>
            <ul className="font-inter space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center font-inter text-gray-400">
          <p>&copy; {currentYear} GentleVoice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
