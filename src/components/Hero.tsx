import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6">
              Someone Who <span className="text-primary">Truly Listens</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 mb-8 max-w-lg">
              Professional emotional support tailored to your needs. Connect with compassionate listeners ready to hear your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium text-lg px-8 py-6">
                Explore Our Services
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-medium text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="bg-accent rounded-full absolute -z-10 w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 blur-3xl"></div>
              <img alt="People connecting" className="w-full h-auto rounded-xl shadow-xl max-w-md mx-auto" src="/lovable-uploads/36d751be-85e3-4323-be3f-422b32f1842f.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;