import { ArrowLeft, Lock, CheckCircle, Shield, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function LidAttachedTamperProof() {
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

      <section className="py-16 bg-gradient-to-b from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Lock className="text-green-600" size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="page-title">
              Lid-Attached Tamper-Proof
            </h1>
            <p className="text-xl text-green-50 max-w-3xl mx-auto" data-testid="page-subtitle">
              Premium integrated lid system combining breath-freshening technology with tamper-evident sealing, 
              delivering safety, security, and enhanced customer experience in one innovative solution.
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
                Our Lid-Attached Tamper-Proof design represents the pinnacle of coffee packaging innovation. 
                This premium solution integrates a breath-freshening component directly into the lid structure, 
                positioned over the sip hole to serve dual purposes: providing a hygienic tamper-evident seal 
                and delivering convenient breath-freshening functionality.
              </p>
              <p className="text-gray-600 mb-6">
                The design ensures that any attempt to access the beverage before purchase is immediately visible, 
                protecting both retailers and consumers. When the customer is ready to enjoy their coffee, they 
                simply peel away the breath-freshening strip, breaking the tamper-evident seal and gaining access 
                to both their beverage and a fresh breath mint.
              </p>
              <p className="text-gray-600 mb-6">
                This sophisticated integration elevates the coffee experience to a premium level while addressing 
                critical safety and hygiene concerns in today's marketplace.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee lid with security seal" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                data-testid="img-lid-attached"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center" data-testid="heading-features">
              Key Features & Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-security">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Tamper-Evident Security</h3>
                <p className="text-gray-600">
                  Visible seal over the sip hole provides immediate indication of any tampering, protecting 
                  both customer safety and retailer liability while meeting modern security standards.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-premium">
                <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-brand-navy" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Premium Positioning</h3>
                <p className="text-gray-600">
                  Sophisticated dual-function design signals quality and attention to detail, allowing retailers 
                  to position their coffee offerings at premium price points.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6" data-testid="feature-hygienic">
                <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Enhanced Hygiene</h3>
                <p className="text-gray-600">
                  The sealed design protects the drink opening from environmental contaminants during transport 
                  and display, providing additional peace of mind for health-conscious consumers.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center" data-testid="heading-applications">
              Ideal Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4" data-testid="application-premium">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Premium Coffee Retailers</h4>
                  <p className="text-gray-600">
                    Perfect for specialty coffee shops and high-end cafés that want to differentiate their 
                    brand with sophisticated packaging that reflects their premium positioning and quality standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-airports">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Airports & Transportation Hubs</h4>
                  <p className="text-gray-600">
                    Ideal for high-traffic venues where security and safety are paramount. The tamper-evident 
                    seal provides peace of mind for travelers carrying beverages through security checkpoints.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-hospitals">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Healthcare & Institutional Settings</h4>
                  <p className="text-gray-600">
                    Essential for hospitals, medical facilities, and institutions where hygiene standards are 
                    critical and tamper-evident packaging may be required by safety protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="application-delivery">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Delivery & Takeout Services</h4>
                  <p className="text-gray-600">
                    Critical for third-party delivery services and takeout operations where maintaining seal 
                    integrity during transport assures customers their order hasn't been compromised.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-navy text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="heading-cta">
              Elevate Your Brand with Premium Security
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              License our patented lid-attached tamper-proof technology to differentiate your brand 
              and meet the highest standards of safety and customer experience.
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
