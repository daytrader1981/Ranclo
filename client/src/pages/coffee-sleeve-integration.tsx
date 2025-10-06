import { ArrowLeft, Coffee, CheckCircle, Leaf, Shield, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import coffeeSleeveImage from "@assets/Picture1_1759782387757.png";

export default function CoffeeSleeveIntegration() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-brand-navy text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            onClick={() => setLocation('/')}
            variant="ghost"
            className="text-white hover:text-brand-gold hover:bg-brand-navy/80 -ml-4"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-brand-navy to-brand-navy/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-brand-gold rounded-xl flex items-center justify-center mx-auto mb-6">
              <Coffee className="text-brand-navy" size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="page-title">
              Coffee Sleeve Integration
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-testid="page-subtitle">
              Revolutionary breath-freshening technology seamlessly integrated into protective coffee sleeves, 
              combining convenience and functionality in a single innovative solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6" data-testid="heading-overview">
                Technology Overview
              </h2>
              <p className="text-gray-600 mb-6" data-testid="text-overview">
                Our patented Coffee Sleeve Integration technology represents a breakthrough in beverage packaging. 
                By incorporating breath-freshening elements directly into the coffee sleeve, we've created a dual-purpose 
                solution that protects hands from heat while providing customers with a convenient breath freshener.
              </p>
              <p className="text-gray-600 mb-6">
                The design ensures that the breath-freshening component is easily accessible, hygienic, and doesn't 
                interfere with the sleeve's primary function. This innovation transforms a simple packaging element 
                into a value-added customer experience.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <img 
                src={coffeeSleeveImage} 
                alt="Coffee cup with sleeve" 
                className="rounded-lg shadow-lg w-full h-64 object-contain"
                data-testid="img-coffee-sleeve"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center" data-testid="heading-features">
              Key Features & Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-seamless">
                <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-4">
                  <Package className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Seamless Integration</h3>
                <p className="text-gray-600">
                  Breath-freshening elements are built directly into the sleeve structure, maintaining the familiar 
                  form factor while adding premium functionality.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-hygienic">
                <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-brand-navy" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Hygienic Design</h3>
                <p className="text-gray-600">
                  Protected packaging ensures the breath-freshening component remains clean and sanitary until 
                  the moment of use, meeting all food safety standards.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-sustainable">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Eco-Friendly Materials</h3>
                <p className="text-gray-600">
                  Compatible with recyclable and biodegradable sleeve materials, supporting sustainability 
                  initiatives without compromising functionality.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center" data-testid="heading-applications">
              Ideal Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4" data-testid="application-coffee-shops">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Coffee Shops & Cafés</h4>
                  <p className="text-gray-600">
                    Perfect for specialty coffee retailers looking to differentiate their brand and enhance 
                    customer experience with a memorable added value.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-convenience">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Convenience Stores</h4>
                  <p className="text-gray-600">
                    Ideal for high-volume retailers serving on-the-go customers who appreciate convenient, 
                    multi-functional packaging solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-corporate">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Corporate Cafeterias</h4>
                  <p className="text-gray-600">
                    Enhance workplace coffee service with premium amenities that employees will notice and 
                    appreciate throughout their workday.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-events">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Events & Catering</h4>
                  <p className="text-gray-600">
                    Add a unique touch to special events and catered functions with innovative packaging that 
                    guests will remember and talk about.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-navy text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="heading-cta">
              Interested in Licensing This Technology?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join industry leaders in bringing this innovative packaging solution to your customers. 
              Our team is ready to discuss licensing opportunities and implementation strategies.
            </p>
            <Button 
              onClick={() => {
                setLocation('/');
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              size="lg"
              className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold text-lg px-8 py-6"
              data-testid="button-contact"
            >
              Contact Our Licensing Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
