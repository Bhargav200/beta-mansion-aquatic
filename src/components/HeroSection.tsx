import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import heroBetta from "@/assets/hero-betta.png";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#featured");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-transparent z-10" />
      
      {/* Fish Image - Right Side */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 top-0 h-full w-[60%] z-0"
      >
        <img 
          src={heroBetta} 
          alt="Premium Siamese Fighting Fish" 
          className="h-full w-full object-cover object-center"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </motion.div>

      {/* Content - Left Side */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Premium Collection
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-2 leading-[0.9]"
          >
            <span className="block text-primary">SIAMESE</span>
            <span className="block">FIGHTING</span>
            <span className="block text-muted-foreground/30 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">FISH</span>
          </motion.h1>

          {/* Slide Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-baseline gap-2 mt-8 mb-8"
          >
            <span className="font-serif text-4xl text-foreground">01</span>
            <span className="font-serif text-xl text-muted-foreground/50">03</span>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xs tracking-[0.2em] uppercase text-foreground">Overview</h3>
              <div className="h-px w-12 bg-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The Siamese fighting fish, commonly known as the Betta, is a popular fish in the aquarium trade. Bettas are a member of the gourami family and are known to be highly territorial. Males, in particular, are prone to high levels of aggression.
            </p>
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Read More
            </button>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-4 mt-12"
          >
            <button className="w-12 h-12 border border-muted-foreground/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 border border-muted-foreground/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6"
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground rotate-90 origin-center mb-8">Share Us</span>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
