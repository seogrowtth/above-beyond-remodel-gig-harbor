import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-construction-secondary/90 to-construction-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Gig Harbor Home with
            <span className="text-construction-accent block">
              Expert Remodeling
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover premier Gig Harbor home remodeling services that enhance your living space, 
            boost property value, and create the home of your dreams. From kitchen and bathroom 
            renovations to complete home transformations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-construction-primary hover:bg-construction-primary/90 text-white px-8 py-4 text-lg"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-construction-secondary px-8 py-4 text-lg"
            >
              View Our Projects
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-construction-accent fill-current" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-construction-accent" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-construction-accent" />
              <span className="text-sm font-medium">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;