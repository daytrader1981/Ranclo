import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TechnologyOverview from "@/components/technology-overview";
import PatentShowcase from "@/components/patent-showcase";
import LicensingSections from "@/components/licensing-sections";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TechnologyOverview />
      <PatentShowcase />
      <LicensingSections />
      <ContactSection />
      <Footer />
    </div>
  );
}
