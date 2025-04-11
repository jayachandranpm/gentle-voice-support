
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    callbackRequested: false
  });
  
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll respond to your inquiry within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      callbackRequested: false
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Contact Us</h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to start? Reach out to our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="font-poppins font-semibold text-2xl mb-6">Get in Touch</h3>
            <p className="font-inter text-gray-700 mb-8">
              We're here and ready to listen. Send us a message and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-1">Email Us</h4>
                  <p className="font-inter text-gray-700">support@gentlevoice.example</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-1">Call Us</h4>
                  <p className="font-inter text-gray-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-1">Response Time</h4>
                  <p className="font-inter text-gray-700">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="font-poppins font-semibold text-2xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-inter font-medium text-gray-700 block mb-2">Your Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="font-inter font-medium text-gray-700 block mb-2">Email Address</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="font-inter font-medium text-gray-700 block mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="callbackRequested"
                  name="callbackRequested"
                  type="checkbox"
                  checked={formData.callbackRequested}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="callbackRequested" className="ml-2 font-inter text-gray-700">
                  I'd like to request a callback
                </label>
              </div>
              
              <Button type="submit" className="bg-primary hover:bg-primary/90 w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
