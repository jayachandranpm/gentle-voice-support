
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
          Ready to Share Your Story?
        </h2>
        <p className="font-inter text-white/90 max-w-2xl mx-auto mb-8">
          Connect with a compassionate listener today and experience the difference that being truly heard can make in your life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-white text-primary hover:bg-white/90 font-medium text-lg px-8 py-6"
            asChild
          >
            <a href="#services">Explore Our Services</a>
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
