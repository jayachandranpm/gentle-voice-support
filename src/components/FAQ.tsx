
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Who are your listeners/advisors?",
      answer: "Our listeners are trained professionals with backgrounds in psychology, counseling, and related fields. Each undergoes a rigorous vetting process and receives ongoing training to provide the highest quality emotional support."
    },
    {
      question: "Is my information kept private?",
      answer: "Absolutely. We maintain strict confidentiality protocols. Your personal information and the content of your conversations are never shared with third parties. We use enterprise-grade encryption to protect all communications."
    },
    {
      question: "How do I schedule calls?",
      answer: "After subscribing to a service, you'll gain access to our scheduling platform where you can see your listener's availability and book sessions that work with your schedule. For immediate support, our chat options connect you with available listeners right away."
    },
    {
      question: "Can I change my subscription?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the end of your current billing cycle. There are no long-term commitments, giving you complete flexibility."
    },
    {
      question: "What if I need immediate crisis support?",
      answer: "While we strive to provide responsive support, GentleVoice is not an emergency service. If you're experiencing a crisis or emergency situation, please contact your local emergency services, crisis hotline, or go to your nearest emergency room."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-poppins font-medium text-lg text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
