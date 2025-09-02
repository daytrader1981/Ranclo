import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-brand-gold font-bold text-lg">CM</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-brand-navy font-semibold text-lg">Ranclo LLC</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-gray-700 hover:text-brand-navy font-medium transition-colors"
              data-testid="nav-technology"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('patents')}
              className="text-gray-700 hover:text-brand-navy font-medium transition-colors"
              data-testid="nav-patents"
            >
              Patents
            </button>
            <button 
              onClick={() => scrollToSection('licensing')}
              className="text-gray-700 hover:text-brand-navy font-medium transition-colors"
              data-testid="nav-licensing"
            >
              Licensing
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-navy text-white hover:bg-brand-navy/90"
              data-testid="nav-contact"
            >
              Contact
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('technology')}
                className="text-gray-700 hover:text-brand-navy font-medium transition-colors text-left"
                data-testid="mobile-nav-technology"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('patents')}
                className="text-gray-700 hover:text-brand-navy font-medium transition-colors text-left"
                data-testid="mobile-nav-patents"
              >
                Patents
              </button>
              <button 
                onClick={() => scrollToSection('licensing')}
                className="text-gray-700 hover:text-brand-navy font-medium transition-colors text-left"
                data-testid="mobile-nav-licensing"
              >
                Licensing
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-navy text-white hover:bg-brand-navy/90 w-fit"
                data-testid="mobile-nav-contact"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
