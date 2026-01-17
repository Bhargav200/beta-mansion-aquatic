import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedSection from "@/components/FeaturedSection";

const OurFish = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-20"> {/* Add padding for fixed nav */}
                <FeaturedSection />
            </div>
            <Footer />
        </div>
    );
};

export default OurFish;
