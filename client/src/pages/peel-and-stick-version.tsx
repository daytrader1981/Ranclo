import { ArrowLeft, Tag, CheckCircle, Zap, DollarSign, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import peelStickImage1 from "@assets/Picture3_1759782607894.jpg";
import peelStickImage2 from "@assets/Picture4_1759782607894.jpg";

export default function PeelAndStickVersion() {
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

      <section className="py-16 bg-gradient-to-b from-brand-gold to-brand-gold/90 text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Tag className="text-brand-gold" size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="page-title">
              Peel-and-Stick Version
            </h1>
            <p className="text-xl text-brand-navy/80 max-w-3xl mx-auto" data-testid="page-subtitle">
              Versatile adhesive breath-freshening strips that can be applied to any existing coffee packaging, 
              providing maximum flexibility and retrofit compatibility.
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
                Our Peel-and-Stick Version represents the ultimate in flexibility and adaptability. This innovative 
                adhesive solution allows any coffee retailer to add breath-freshening functionality to their existing 
                packaging without changing their current cup or sleeve suppliers.
              </p>
              <p className="text-gray-600 mb-6">
                The peel-and-stick design features a strong, food-safe adhesive that securely attaches to cups, lids, 
                or sleeves while remaining easy to remove when needed. Each strip is individually wrapped to maintain 
                freshness and hygiene until the moment of use.
              </p>
              <p className="text-gray-600 mb-6">
                This solution is perfect for businesses that want to test the breath-freshening concept or add it 
                as a premium upgrade without committing to entirely new packaging infrastructure.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={peelStickImage1} 
                  alt="Peel-and-stick adhesive holder - red version" 
                  className="rounded-lg shadow-lg w-full h-48 object-contain"
                  data-testid="img-peel-stick-1"
                />
                <img 
                  src={peelStickImage2} 
                  alt="Peel-and-stick adhesive holder - transparent version" 
                  className="rounded-lg shadow-lg w-full h-48 object-contain"
                  data-testid="img-peel-stick-2"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center" data-testid="heading-features">
              Key Features & Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-versatility">
                <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-brand-navy" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Universal Compatibility</h3>
                <p className="text-gray-600">
                  Works with any existing coffee cup, lid, or sleeve design. No need to change suppliers or 
                  inventory systems – simply add to your current packaging.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-cost">
                <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Cost-Effective Entry</h3>
                <p className="text-gray-600">
                  Lower initial investment compared to custom-integrated solutions. Perfect for businesses 
                  wanting to test market response before full implementation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-easy">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Easy Implementation</h3>
                <p className="text-gray-600">
                  Quick staff training and simple application process. Can be added during existing 
                  packaging workflows with minimal disruption to operations.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center" data-testid="heading-applications">
              Ideal Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4" data-testid="application-retrofit">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Existing Operations Retrofit</h4>
                  <p className="text-gray-600">
                    Perfect for established coffee businesses wanting to add breath-freshening functionality 
                    without disrupting their current packaging supply chain or inventory systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-test">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Market Testing & Trials</h4>
                  <p className="text-gray-600">
                    Ideal for businesses that want to gauge customer response to breath-freshening amenities 
                    before committing to integrated packaging solutions with higher upfront costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-seasonal">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Seasonal & Promotional Campaigns</h4>
                  <p className="text-gray-600">
                    Great for limited-time promotions or seasonal offerings. Add breath fresheners during 
                    peak seasons or special events without permanent packaging changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-franchises">
                <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Multi-Location Franchises</h4>
                  <p className="text-gray-600">
                    Allows franchise operators to offer breath-freshening amenities as an opt-in premium 
                    service while maintaining brand consistency across all locations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-navy text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="heading-cta">
              Ready to Add Flexibility to Your Packaging?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Explore licensing opportunities for our versatile peel-and-stick solution. 
              Our team can help you implement this technology seamlessly into your existing operations.
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
