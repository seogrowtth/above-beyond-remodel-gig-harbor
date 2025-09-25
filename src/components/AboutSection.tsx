import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Trophy, Users, MapPin } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Trophy, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: CheckCircle, number: "1000+", label: "Projects Completed" },
    { icon: Shield, number: "100%", label: "Licensed & Insured" }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "On-Time Completion",
      description: "We respect your time and complete projects within the agreed timeframe, ensuring minimal disruption to your daily life."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Every project comes with our comprehensive warranty and satisfaction guarantee, giving you peace of mind."
    },
    {
      icon: MapPin,
      title: "Local Gig Harbor Expertise",
      description: "As a local Gig Harbor remodeling contractor, we understand the unique architectural styles and building requirements of the area."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-secondary mb-6">
            Above & Beyond Construction and Remodeling
          </h2>
          <p className="text-xl text-construction-neutral max-w-3xl mx-auto leading-relaxed">
            Your Premier Gig Harbor Remodeling Contractor
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-construction-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-construction-primary" />
              </div>
              <div className="text-3xl font-bold text-construction-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-construction-neutral">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-construction-secondary mb-6">
              Transforming Gig Harbor Homes Since 2009
            </h3>
            <div className="space-y-4 text-construction-neutral leading-relaxed">
              <p>
                At <strong>Above & Beyond Construction and Remodeling</strong>, we don't just renovate homes—we 
                transform living spaces into personalized sanctuaries that reflect your unique style and 
                enhance your daily life. As a premier Gig Harbor remodeling contractor, we've built our 
                reputation on exceptional craftsmanship, attention to detail, and unwavering commitment 
                to customer satisfaction.
              </p>
              <p>
                Our experienced team of designers, craftsmen, and project managers work collaboratively 
                to bring your vision to life. Whether you're planning a complete home renovation or 
                focusing on specific areas like Gig Harbor kitchen remodeling or Gig Harbor bathroom 
                remodeling, we approach every project with the same level of dedication and expertise.
              </p>
              <p>
                We understand that your home is more than just a building—it's where memories are made, 
                families grow, and life unfolds. That's why we go above and beyond to ensure every detail 
                is perfect, every timeline is met, and every expectation is exceeded.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-construction-light rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-construction-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-construction-secondary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-construction-neutral">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To deliver exceptional Gig Harbor home remodeling services that exceed expectations, 
            enhance property values, and create beautiful, functional spaces where families can 
            thrive. We are committed to quality craftsmanship, transparent communication, and 
            building lasting relationships with our clients throughout the Gig Harbor community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;