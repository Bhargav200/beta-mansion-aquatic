import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const BubbleParticles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 25; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, 
              hsla(190, 100%, 70%, ${bubble.opacity}), 
              hsla(190, 100%, 50%, ${bubble.opacity * 0.5}), 
              transparent)`,
            boxShadow: `0 0 ${bubble.size}px hsla(190, 100%, 50%, ${bubble.opacity * 0.5})`,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, bubble.opacity, bubble.opacity, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BubbleParticles;
