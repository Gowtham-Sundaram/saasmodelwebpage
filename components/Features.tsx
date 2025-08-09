import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of tasks per second with our optimized infrastructure."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to keep your data safe."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and reporting to make data-driven decisions."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team with built-in collaboration tools."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you succeed."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Serve customers worldwide with our global infrastructure."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you automate workflows, 
            collaborate effectively, and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}