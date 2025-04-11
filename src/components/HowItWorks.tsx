
import { Check } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose your service",
      description: "Select the support option that best suits your current needs and preferences."
    },
    {
      number: "02",
      title: "Schedule your first session",
      description: "Pick a time that works for you, or start chatting immediately with available listeners."
    },
    {
      number: "03",
      title: "Connect with your dedicated support person",
      description: "Meet your compassionate listener who's ready to hear your story without judgment."
    },
    {
      number: "04",
      title: "Continue as needed",
      description: "Enjoy flexible scheduling for follow-up conversations whenever you need additional support."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">How It Works</h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            Getting the support you need is simple and straightforward with our easy process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-5 left-6 bg-primary text-white font-poppins font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                {step.number}
              </div>
              <h3 className="font-poppins font-semibold text-xl mt-6 mb-4">{step.title}</h3>
              <p className="font-inter text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-accent rounded-lg p-8 md:p-12">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-6 text-center">Why Choose GentleVoice?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">Professional, compassionate listeners</h4>
                  <p className="font-inter text-gray-700">Our team is trained to provide empathetic, non-judgmental support.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">Completely confidential</h4>
                  <p className="font-inter text-gray-700">Your privacy is our priority. All conversations remain private.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">Available when you need support</h4>
                  <p className="font-inter text-gray-700">Flexible scheduling to fit your life, even outside typical hours.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">No judgment, just understanding</h4>
                  <p className="font-inter text-gray-700">Share freely in a safe space with someone who truly listens.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">Flexible options for different needs</h4>
                  <p className="font-inter text-gray-700">Choose the format and frequency that works best for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
