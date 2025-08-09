import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground mb-8">
            <span>✨ New: Advanced Analytics Dashboard</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
            Streamline Your Business With{" "}
            <span className="text-primary">Smart Automation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Boost productivity, reduce manual work, and scale your operations with our
            powerful SaaS platform. Join 10,000+ companies already transforming their workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-secondary rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-muted rounded-full border-2 border-background"></div>
              </div>
              <span>Trusted by 10,000+ companies</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <span>⭐⭐⭐⭐⭐ 4.9/5 from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}