import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    quote: "SaasFlow transformed our workflow completely. We've increased productivity by 300% and reduced manual work by 80%.",
    author: "Sarah Johnson",
    title: "CEO, TechStart",
    avatar: "SJ"
  },
  {
    quote: "The analytics dashboard gives us insights we never had before. Making data-driven decisions has never been easier.",
    author: "Michael Chen",
    title: "CTO, GrowthCorp",
    avatar: "MC"
  },
  {
    quote: "Excellent customer support and the platform is incredibly intuitive. Our team was up and running in just a few hours.",
    author: "Emily Rodriguez",
    title: "Operations Manager, ScaleCo",
    avatar: "ER"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-foreground italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}