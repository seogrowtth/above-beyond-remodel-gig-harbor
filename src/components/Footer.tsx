import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";

const Footer = () => {
  const services = [
    "Gig Harbor Kitchen Remodeling",
    "Gig Harbor Bathroom Remodeling", 
    "Complete Home Renovations",
    "Room Additions",
    "Custom Carpentry",
    "Interior Design Consultation"
  ];

  const serviceAreas = [
    "Gig Harbor, WA",
    "Tacoma, WA", 
    "University Place, WA",
    "Fox Island, WA",
    "Key Peninsula, WA",
    "Surrounding Areas"
  ];

  return (
    <footer className="bg-construction-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Above & Beyond
              <span className="block text-sm font-normal opacity-80">
                Construction & Remodeling
              </span>
            </h3>
            <p className="text-white/80 leading-relaxed">
              Premier Gig Harbor remodeling contractor specializing in kitchen and bathroom 
              renovations, complete home remodeling, and custom construction services.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-construction-accent fill-current" />
              ))}
              <span className="ml-2 text-sm text-white/80">4.9/5 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-white/80 hover:text-construction-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-construction-accent" />
                <span className="text-white/80 text-sm">(253) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-construction-accent" />
                <span className="text-white/80 text-sm">info@abovebeyondgigharbor.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-construction-accent" />
                <span className="text-white/80 text-sm">Gig Harbor, WA</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-construction-accent hover:text-construction-secondary p-2 rounded-lg transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-construction-accent hover:text-construction-secondary p-2 rounded-lg transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Above & Beyond Construction and Remodeling. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-construction-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-construction-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-construction-accent transition-colors">
                License #12345
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;