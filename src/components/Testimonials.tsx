
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Alex S.",
    title: "Regular user",
    content: "GentleVoice has been my lifeline during difficult times. Having someone who truly listens without judgment has helped me process my emotions in ways I never thought possible.",
    image: "/placeholder.svg"
  },
  {
    name: "Jordan M.",
    title: "Breakup support client",
    content: "After my relationship ended, I felt completely lost. The specialized breakup support helped me navigate my feelings and eventually find peace. Worth every penny.",
    image: "/placeholder.svg"
  },
  {
    name: "Taylor K.",
    title: "Monthly subscriber",
    content: "The regular check-ins have become a crucial part of maintaining my mental wellbeing. My dedicated listener remembers details about my life that make me feel truly heard.",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            Hear from people who have found comfort and support through our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
              <QuoteIcon className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg">{testimonial.name}</h4>
                  <p className="font-inter text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="font-inter text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
