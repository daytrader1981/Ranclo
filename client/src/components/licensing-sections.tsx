import { Factory, Store, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LicensingSections() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const manufacturerBenefits = [
    "Technology integration into existing production lines",
    "Minimal production process modifications required",
    "Competitive differentiation in the market",
    "Royalty-based licensing model available"
  ];

  const retailerBenefits = [
    "Enhanced customer experience and satisfaction",
    "Premium pricing opportunities",
    "Brand differentiation in competitive market",
    "Flexible implementation options"
  ];

  return (
    <section id="licensing" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Licensing Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us to bring this revolutionary technology to your customers. We offer flexible licensing models for manufacturers and retailers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cup Manufacturers Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg" data-testid="manufacturers-section">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mr-4">
                <Factory className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy">Cup Manufacturers</h3>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
              alt="Coffee cup manufacturing process" 
              className="rounded-lg w-full h-48 object-cover mb-6"
              data-testid="manufacturing-image"
            />
            
            <div className="space-y-4 mb-8">
              {manufacturerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start" data-testid={`manufacturer-benefit-${index}`}>
                  <CheckCircle className="text-brand-gold text-lg mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-brand-navy text-white hover:bg-brand-navy/90"
              data-testid="button-manufacturing-license"
            >
              Discuss Manufacturing License
            </Button>
          </div>

          {/* Coffee Retailers Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg" data-testid="retailers-section">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mr-4">
                <Store className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy">Coffee Retailers</h3>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
              alt="Coffee retail business environment" 
              className="rounded-lg w-full h-48 object-cover mb-6"
              data-testid="retail-image"
            />
            
            <div className="space-y-4 mb-8">
              {retailerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start" data-testid={`retailer-benefit-${index}`}>
                  <CheckCircle className="text-brand-gold text-lg mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-brand-gold text-white hover:bg-brand-gold/90"
              data-testid="button-retail-partnership"
            >
              Explore Retail Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
