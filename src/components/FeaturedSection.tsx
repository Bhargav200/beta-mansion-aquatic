import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Droplets, Star, Shield } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Premium Selection",
    description:
      "Handpicked specimens from the finest breeding lines worldwide, ensuring exceptional color and finnage.",
  },
  {
    icon: Droplets,
    title: "Expert Care",
    description:
      "Each fish is nurtured in pristine conditions with specialized care protocols and premium nutrition.",
  },
  {
    icon: Star,
    title: "Rare Varieties",
    description:
      "Access exclusive collections featuring rare morphs and championship-grade Bettas.",
  },
  {
    icon: Shield,
    title: "Live Guarantee",
    description:
      "Every purchase backed by our comprehensive live arrival guarantee and aftercare support.",
  },
];

const fishShowcase = [
  {
    name: "Halfmoon Betta",
    subtitle: "Signature Collection",
    image: "https://images.unsplash.com/photo-1520302519878-3c0a26e8f1dc?w=600&h=800&fit=crop",
    color: "Royal Blue",
  },
  {
    name: "Crown Tail Betta",
    subtitle: "Premium Series",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&h=800&fit=crop",
    color: "Crimson Red",
  },
  {
    name: "Galaxy Koi Betta",
    subtitle: "Rare Collection",
    image: "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=600&h=800&fit=crop",
    color: "Multi-Color",
  },
];

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="featured"
      ref={ref}
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 gradient-ocean-radial opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto mb-6" />
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Exceptional Specimens
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
            Each fish in our collection represents the pinnacle of selective
            breeding, featuring stunning colors and perfect finnage.
          </p>
        </motion.div>

        {/* Fish Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {fishShowcase.map((fish, index) => (
            <motion.div
              key={fish.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-card">
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-primary/10" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-widest uppercase text-primary mb-2">
                    {fish.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                    {fish.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{fish.color}</p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-luxury"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
