
import { 
  MessageSquare, 
  CalendarCheck, 
  Headphones, 
  HeartCrack, 
  HeartHandshake 
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ title, description, price, icon: Icon, className = "" }) => {
  return (
    <Card className={`hover:shadow-lg transition-shadow h-full flex flex-col ${className}`}>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-poppins text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-inter text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-poppins font-semibold text-2xl text-primary mb-4">{price}</p>
        <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Share Your Feelings",
      description: "Unlimited text-based chat support with a dedicated listener who responds throughout the day",
      price: "$20 per day",
      icon: MessageSquare
    },
    {
      title: "Regular Check-ins",
      description: "We provide scheduled updates and follow-ups to ensure you're feeling supported",
      price: "$50 per day",
      icon: CalendarCheck
    },
    {
      title: "Voice-to-Voice Connection",
      description: "Talk through your story and feelings with a compassionate listener in a personal call",
      price: "$100 per day",
      icon: Headphones
    },
    {
      title: "Healing After Heartbreak",
      description: "Specialized support to help process emotions and navigate the journey after a relationship ends",
      price: "$30 per day",
      icon: HeartCrack
    },
    {
      title: "Marriage & Love Advice",
      description: "Professional insights and strategies for nurturing healthy relationships",
      price: "$50 per week",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            Choose the right support option that fits your needs and schedule. All services include access to our compassionate, professional listeners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              price={service.price} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
