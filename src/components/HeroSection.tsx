import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BubbleParticles from "./BubbleParticles";
import FloatingFish from "./FloatingFish";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-ocean"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-ocean-radial opacity-50" />
      
      {/* Bubble Particles */}
      <BubbleParticles />

      {/* Floating Fish */}
      <FloatingFish
        variant="betta"
        size="lg"
        direction="right"
        delay={2}
        duration={25}
        className="top-1/4"
      />
      <FloatingFish
        variant="betta"
        size="md"
        direction="left"
        delay={8}
        duration={30}
        className="top-2/3"
      />
      <FloatingFish
        variant="guppy"
        size="sm"
        direction="right"
        delay={5}
        duration={18}
        className="top-1/2"
      />
      <FloatingFish
        variant="guppy"
        size="sm"
        direction="left"
        delay={12}
        duration={22}
        className="top-3/4"
      />

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6"
        >
          Where Aquatic Elegance Meets Excellence
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground mb-6 leading-tight"
        >
          <span className="block">BETTA</span>
          <span className="block text-gradient-cyan">MANSION</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Discover the world's most exquisite collection of premium Betta fish,
          rare ornamental species, and luxury aquarium essentials.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            className="btn-luxury min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>
          <motion.button
            className="btn-luxury-outline min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Story
          </motion.button>
        </motion.div>

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 inline-flex items-center gap-3 glass-light px-6 py-3 rounded-full"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Trusted by 10,000+ Aquarium Enthusiasts
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
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
