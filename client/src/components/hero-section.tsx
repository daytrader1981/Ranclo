import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Professional_with_coffee_cup_smiling_d24dd315.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-brand-navy to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Revolutionary Coffee 
              <span className="text-brand-gold"> Packaging Technology</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Patented breath-freshening technology integrated into coffee packaging. Transform your coffee service with our innovative solutions that combine convenience, hygiene, and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('patents')}
                className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold py-4 px-8 text-lg"
                data-testid="button-explore-product"
              >
                Explore Product
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-white text-white font-semibold py-4 px-8 text-lg font-sans"
                data-testid="button-licensing-inquiry"
              >
                Licensing Inquiry
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional with coffee cup" 
              className="rounded-xl shadow-2xl w-full"
              data-testid="hero-image"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
