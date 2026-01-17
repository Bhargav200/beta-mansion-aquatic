import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import BrandPromiseSection from "@/components/BrandPromiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedSection />
      <BrandPromiseSection />
      <Footer />
    </div>
  );
};

export default Index;
