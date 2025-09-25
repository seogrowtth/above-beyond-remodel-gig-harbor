import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-construction-secondary">
              Above & Beyond
              <span className="block text-sm font-normal text-construction-neutral">
                Construction & Remodeling
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-construction-neutral">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(253) 555-0123</span>
            </div>
            <Button variant="default" className="bg-construction-primary hover:bg-construction-primary/90">
              Free Estimate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex items-center space-x-2 text-construction-neutral pt-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(253) 555-0123</span>
              </div>
              <Button variant="default" className="bg-construction-primary hover:bg-construction-primary/90 w-fit">
                Free Estimate
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;