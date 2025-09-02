import { Leaf, Shield, Dna } from "lucide-react";

export default function TechnologyOverview() {
  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Patented Innovation in Coffee Packaging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our breakthrough technology integrates breath-freshening capabilities directly into coffee packaging, 
            offering unprecedented value to retailers and enhanced experience for consumers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-testid="feature-breath-freshening">
            <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mb-6">
              <Leaf className="text-2xl text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-brand-navy mb-4">Breath Freshening</h3>
            <p className="text-gray-600">Mint-infused technology neutralizes coffee breath, providing immediate freshness after consumption.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-testid="feature-tamper-proof">
            <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-6">
              <Shield className="text-2xl text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-brand-navy mb-4">Tamper-Proof Sealing</h3>
            <p className="text-gray-600">Advanced sealing technology ensures product integrity and provides visible evidence of tampering.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-testid="feature-protein-delivery">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Dna className="text-2xl text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-brand-navy mb-4">Protein Delivery</h3>
            <p className="text-gray-600">Optional protein supplementation integrated into the packaging system for enhanced nutritional value.</p>
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Beverage packaging innovation" 
            className="rounded-xl shadow-lg w-full h-64 object-cover"
            data-testid="innovation-image"
          />
          <div className="absolute inset-0 bg-brand-navy bg-opacity-40 rounded-xl flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Innovation in Action</h3>
              <p className="text-lg">See how our technology integrates seamlessly into existing packaging workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
