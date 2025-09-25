import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Bath, Home, Hammer, Paintbrush, Wrench } from "lucide-react";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import exteriorImage from "@/assets/exterior-remodel.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Gig Harbor Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with custom cabinetry, premium countertops, modern appliances, and innovative layouts. Our Gig Harbor kitchen remodeling experts create functional and beautiful spaces that increase your home's value.",
      image: kitchenImage,
      features: ["Custom Cabinet Design", "Granite & Quartz Countertops", "Modern Appliance Installation", "Kitchen Island Construction"]
    },
    {
      icon: Bath,
      title: "Gig Harbor Bathroom Remodeling", 
      description: "Experience luxury with our comprehensive bathroom renovation services. From spa-like master baths to efficient guest bathrooms, we deliver exceptional craftsmanship and attention to detail in every Gig Harbor bathroom remodeling project.",
      image: bathroomImage,
      features: ["Tile & Flooring Installation", "Luxury Fixture Upgrades", "Walk-in Shower Design", "Vanity & Storage Solutions"]
    },
    {
      icon: Home,
      title: "Complete Home Renovations",
      description: "Trust our experienced Gig Harbor remodeling contractor for whole-home transformations. We handle everything from structural changes to finishing touches, ensuring your renovation project exceeds expectations.",
      image: exteriorImage,
      features: ["Structural Modifications", "Room Additions", "Exterior Renovations", "Interior Design Integration"]
    }
  ];

  const additionalServices = [
    {
      icon: Hammer,
      title: "Custom Carpentry",
      description: "Handcrafted built-ins, trim work, and custom millwork that adds character and functionality to your space."
    },
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Professional design consultation to ensure your remodel reflects your personal style and maximizes space efficiency."
    },
    {
      icon: Wrench,
      title: "Plumbing & Electrical",
      description: "Licensed professionals handle all plumbing and electrical work to ensure your remodel meets all safety codes and standards."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-secondary mb-6">
            Comprehensive Gig Harbor Home Remodeling Services
          </h2>
          <p className="text-xl text-construction-neutral max-w-3xl mx-auto leading-relaxed">
            As your trusted Gig Harbor remodeling contractor, we specialize in transforming homes 
            throughout the Pacific Northwest. Our expert team delivers exceptional craftsmanship 
            and personalized service for every project.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-construction-secondary/20 group-hover:bg-construction-secondary/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-construction-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-construction-neutral mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-construction-neutral">
                      <div className="w-2 h-2 bg-construction-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-construction-primary text-construction-primary hover:bg-construction-primary hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <h3 className="text-3xl font-bold text-construction-secondary mb-8 text-center">
            Additional Remodeling Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-construction-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-construction-primary" />
                </div>
                <h4 className="text-xl font-semibold text-construction-secondary mb-3">
                  {service.title}
                </h4>
                <p className="text-construction-neutral">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;