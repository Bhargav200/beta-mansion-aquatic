import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BrandPromiseSection from "@/components/BrandPromiseSection";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-20"> {/* Add padding for fixed nav */}
                <BrandPromiseSection />
            </div>
            <Footer />
        </div>
    );
};

export default About;
