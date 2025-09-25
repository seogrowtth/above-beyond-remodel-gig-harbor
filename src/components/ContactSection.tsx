import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().trim().max(1000, "Description must be less than 1000 characters").optional()
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', validatedData);
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        description: ''
      });
      
      alert('Thank you! We will contact you soon.');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-construction-neutral mb-2">
                    First Name *
                  </label>
                  <Input 
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`border-construction-neutral/30 focus:border-construction-primary ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-construction-neutral mb-2">
                    Last Name *
                  </label>
                  <Input 
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`border-construction-neutral/30 focus:border-construction-primary ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Email *
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`border-construction-neutral/30 focus:border-construction-primary ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Phone Number *
                </label>
                <Input 
                  type="tel"
                  placeholder="(253) 555-0123"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`border-construction-neutral/30 focus:border-construction-primary ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Project Type
                </label>
                <select 
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className={`w-full p-3 border border-construction-neutral/30 rounded-lg focus:border-construction-primary focus:outline-none ${errors.projectType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a service...</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Remodeling</option>
                  <option value="home">Complete Home Renovation</option>
                  <option value="addition">Room Addition</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-construction-neutral mb-2">
                  Project Description
                </label>
                <Textarea 
                  placeholder="Tell us about your Gig Harbor home remodeling project..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className={`border-construction-neutral/30 focus:border-construction-primary min-h-[120px] ${errors.description ? 'border-red-500' : ''}`}
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
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
              
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-construction-primary hover:bg-construction-primary/90 text-lg py-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Request Free Estimate'}
              </Button>
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
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-construction-secondary"
                onClick={() => window.open(`tel:${encodeURIComponent('(253) 555-0123')}`, '_self')}
              >
                Call (253) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;