import { Linkedin } from "lucide-react";
import rancloLogo from "@assets/Logo-02_1755027290970.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={rancloLogo} 
                alt="Ranclo LLC Logo" 
                className="h-12 w-auto"
                data-testid="footer-logo"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Pioneering the future of coffee packaging with patented breath-freshening technology. 
              Transforming the coffee experience one cup at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/ranclo-llc/?viewAsMember=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-gold transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technology</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('patents')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-patents"
                >
                  Patent Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('technology')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-how-it-works"
                >
                  How It Works
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-tech-specs">
                  Technical Specs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Licensing</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('licensing')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-manufacturers"
                >
                  Manufacturers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('licensing')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-retailers"
                >
                  Retailers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-contact"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            © 2025 Ranclo LLC. All rights reserved. Caffe' Menta and associated logos are trademarks of Ranclo LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
