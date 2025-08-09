import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "How long is the free trial?",
    answer: "We offer a 14-day free trial with full access to all features. No credit card required to get started."
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing adjustments."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, regular security audits, and comply with SOC 2 Type II and GDPR requirements."
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes, Professional and Enterprise plans include custom integrations. Our API is also available for all plans to build your own integrations."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <Button variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}