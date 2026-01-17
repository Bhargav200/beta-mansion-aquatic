import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dxybe6uw2/video/upload/v1768649803/Untitled_design_2_ejfjot.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/30 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content - Left Side */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-2xl">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-2 leading-[0.9]"
            style={{ marginTop: "10vh" }}
          >
            <span className="block text-primary">SIAMESE</span>
            <span className="block">FIGHTING</span>
            <span className="block text-muted-foreground/50 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">FISH</span>
          </motion.h1>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-md mt-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xs tracking-[0.2em] uppercase text-foreground">Overview</h3>
              <div className="h-px w-12 bg-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The Siamese fighting fish, commonly known as the Betta, is a popular fish in the aquarium trade. Bettas are a member of the gourami family and are known to be highly territorial. Males, in particular, are prone to high levels of aggression.
            </p>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
