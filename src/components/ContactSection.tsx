import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Today",
      details: "(253) 555-0123",
      description: "Speak directly with our Gig Harbor remodeling experts"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@abovebeyondgigharbor.com",
      description: "Get detailed information about your project"
    },
    {
      icon: MapPin,
      title: "Service Area", 
      details: "Gig Harbor, WA & Surrounding Areas",
      description: "Proudly serving the Greater Gig Harbor community"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-6PM, Sat: 8AM-4PM",
      description: "Emergency services available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-secondary mb-6">
            Ready to Transform Your Gig Harbor Home?
          </h2>
          <p className="text-xl text-construction-neutral max-w-3xl mx-auto leading-relaxed">
            Contact our experienced Gig Harbor remodeling contractor team today for a free consultation 
            and estimate. Let's discuss how we can bring your home renovation dreams to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-construction-secondary mb-6">
              Get Your Free Estimate
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-construction-neutral mb-2">
                    First Name *
                  </label>
                  <Input 
                    placeholder="John"
                    className="border-construction-neutral/30 focus:border-construction-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-construction-neutral mb-2">
                    Last Name *
                  </label>
                  <Input 
                    placeholder="Smith"
                    className="border-construction-neutral/30 focus:border-construction-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Email *
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="border-construction-neutral/30 focus:border-construction-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Phone Number *
                </label>
                <Input 
                  type="tel"
                  placeholder="(253) 555-0123"
                  className="border-construction-neutral/30 focus:border-construction-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Project Type
                </label>
                <select className="w-full p-3 border border-construction-neutral/30 rounded-lg focus:border-construction-primary focus:outline-none">
                  <option>Select a service...</option>
                  <option>Kitchen Remodeling</option>
                  <option>Bathroom Remodeling</option>
                  <option>Complete Home Renovation</option>
                  <option>Room Addition</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Project Description
                </label>
                <Textarea 
                  placeholder="Tell us about your Gig Harbor home remodeling project..."
                  className="border-construction-neutral/30 focus:border-construction-primary min-h-[120px]"
                />
              </div>
              
              
              <p className="text-sm text-construction-neutral text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-medium">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-6 w-6 text-construction-accent fill-current" />
                <h3 className="text-xl font-bold text-construction-secondary">
                  Award-Winning Service
                </h3>
              </div>
              <p className="text-construction-neutral mb-4">
                Recognized as Gig Harbor's top remodeling contractor with over 500 satisfied customers 
                and a 4.9-star average rating. Licensed, bonded, and fully insured for your protection.
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-construction-accent fill-current" />
                ))}
                <span className="ml-2 text-construction-neutral">4.9/5 (127 reviews)</span>
              </div>
            </Card>

            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-construction-light rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-construction-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-construction-secondary mb-1">
                      {info.title}
                    </h4>
                    <p className="text-construction-primary font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-construction-neutral">
                      {info.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Call to Action */}
            <div className="bg-gradient-hero rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-3">
                Ready to Start Your Project?
              </h4>
              <p className="mb-4">
                Call now for immediate assistance and same-day estimates on all 
                Gig Harbor home remodeling projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;