
import { useState } from 'react';
import { 
  MessageSquare, 
  CalendarCheck, 
  Headphones, 
  HeartCrack, 
  HeartHandshake,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  icon: Icon,
  benefits,
  className = "" 
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <Card className={`hover:shadow-lg transition-all h-full flex flex-col ${className}`}>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-poppins text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-inter text-gray-600 mb-4">{description}</p>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center text-primary w-full justify-between mb-2"
          onClick={toggleExpand}
        >
          <span>{expanded ? "Hide Details" : "Show Details"}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>

        {expanded && (
          <div className="mt-4 bg-muted/50 p-4 rounded-md animate-fade-in">
            <h4 className="font-poppins font-semibold mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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
      price: "$39 per month",
      icon: MessageSquare,
      benefits: [
        "24/7 text messaging with a dedicated support specialist",
        "Secure and private communication channel",
        "Message history saved for your reference",
        "Photo sharing capability for emotional context",
        "Priority response within 2 hours"
      ]
    },
    {
      title: "Regular Check-ins",
      description: "We provide scheduled updates and follow-ups to ensure you're feeling supported",
      price: "$79 per month",
      icon: CalendarCheck,
      benefits: [
        "Scheduled weekly check-in calls (30 minutes each)",
        "Personalized progress tracking dashboard",
        "Custom reminder system tailored to your needs",
        "Monthly wellness report and insights",
        "Goal setting and accountability follow-ups"
      ]
    },
    {
      title: "Voice-to-Voice Connection",
      description: "Talk through your story and feelings with a compassionate listener in a personal call",
      price: "$129 per month",
      icon: Headphones,
      benefits: [
        "4 personal phone sessions per month (45 minutes each)",
        "Priority booking schedule",
        "Session recordings available upon request",
        "Personalized post-call summary notes",
        "Emergency session available when needed"
      ]
    },
    {
      title: "Healing After Heartbreak",
      description: "Specialized support to help process emotions and navigate the journey after a relationship ends",
      price: "$59 per month",
      icon: HeartCrack,
      benefits: [
        "Custom healing plan developed for your situation",
        "Expert guidance through stages of grief",
        "Weekly reflective exercises and journaling prompts",
        "Reading recommendations specific to your experience",
        "Support for rebuilding confidence and identity"
      ]
    },
    {
      title: "Marriage & Love Advice",
      description: "Professional insights and strategies for nurturing healthy relationships",
      price: "$89 per month",
      icon: HeartHandshake,
      benefits: [
        "Communication technique coaching for couples",
        "Conflict resolution strategies and practice",
        "Assessment of relationship strengths and growth areas",
        "Custom exercises to build intimacy and trust",
        "Guidance for navigating difficult conversations"
      ]
    },
    {
      title: "Friendship Building",
      description: "Guided support to develop meaningful connections and improve your social skills in a comfortable environment",
      price: "$49 per month",
      icon: Users,
      benefits: [
        "Social skill development exercises and feedback",
        "Conversation starter techniques and practice",
        "Guidance for navigating social anxiety and fears",
        "Strategies for maintaining long-term friendships",
        "Help with setting healthy boundaries in relationships"
      ]
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
              benefits={service.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
