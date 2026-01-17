import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BrandPromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800&h=1000&fit=crop"
                alt="Premium Betta Fish"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 md:p-8"
            >
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-gradient-cyan mb-2">
                  15+
                </p>
                <p className="text-sm text-muted-foreground">
                  Years of Excellence
                </p>
              </div>
            </motion.div>

            {/* Accent Line */}
            <div className="absolute -left-4 top-1/4 accent-line-vertical" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="accent-line mb-8" />
            
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Crafting Aquatic{" "}
              <span className="text-gradient-cyan">Masterpieces</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Beta Mansion was founded on a singular vision: to elevate the art
                of ornamental fishkeeping to unprecedented heights. What began as
                a passionate pursuit has evolved into a sanctuary for the world's
                most discerning aquarium enthusiasts.
              </p>
              <p>
                Our commitment to excellence permeates every aspect of our
                operation—from the meticulous selection of breeding pairs to the
                specialized care protocols that ensure each fish reaches its full
                potential. We don't simply sell fish; we curate living works of
                art.
              </p>
              <p>
                Every Betta that leaves our facility carries with it the legacy of
                countless generations of careful breeding, ensuring not just
                beauty, but health, vitality, and longevity.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground mb-2">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">Unique Varieties</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground mb-2">
                  99%
                </p>
                <p className="text-sm text-muted-foreground">Live Arrival Rate</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground mb-2">
                  24/7
                </p>
                <p className="text-sm text-muted-foreground">Expert Support</p>
              </div>
            </div>

            <motion.button
              className="btn-luxury-outline mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Heritage
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
