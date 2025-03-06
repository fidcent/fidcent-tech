
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-fade-in">
            Empowering Businesses Through Innovation
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up">
            We deliver cutting-edge software solutions that enhance growth, efficiency, and competitive advantage.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
