import { motion } from "framer-motion";

interface FloatingFishProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: "sm" | "md" | "lg";
  variant?: "betta" | "guppy";
  direction?: "left" | "right";
}

const FloatingFish = ({
  className = "",
  delay = 0,
  duration = 20,
  size = "md",
  variant = "betta",
  direction = "right",
}: FloatingFishProps) => {
  const sizes = {
    sm: { width: 60, height: 40 },
    md: { width: 120, height: 80 },
    lg: { width: 200, height: 130 },
  };

  const { width, height } = sizes[size];
  const isLeft = direction === "left";

  const fishPath = {
    betta: (
      <g>
        {/* Main body */}
        <ellipse
          cx="50"
          cy="50"
          rx="30"
          ry="20"
          fill="url(#bettaGradient)"
          opacity="0.9"
        />
        {/* Flowing tail */}
        <motion.path
          d="M20 50 Q-10 30, -25 45 Q-15 50, -25 55 Q-10 70, 20 50"
          fill="url(#tailGradient)"
          opacity="0.8"
          animate={{ d: [
            "M20 50 Q-10 30, -25 45 Q-15 50, -25 55 Q-10 70, 20 50",
            "M20 50 Q-5 35, -20 48 Q-12 50, -20 52 Q-5 65, 20 50",
            "M20 50 Q-10 30, -25 45 Q-15 50, -25 55 Q-10 70, 20 50",
          ]}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dorsal fin */}
        <motion.path
          d="M40 30 Q50 10, 65 25 Q55 28, 50 30"
          fill="url(#finGradient)"
          opacity="0.7"
          animate={{ 
            d: [
              "M40 30 Q50 10, 65 25 Q55 28, 50 30",
              "M40 30 Q52 15, 63 27 Q55 29, 50 30",
              "M40 30 Q50 10, 65 25 Q55 28, 50 30",
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Ventral fin */}
        <motion.path
          d="M45 70 Q50 90, 60 75 Q55 72, 50 70"
          fill="url(#finGradient)"
          opacity="0.6"
          animate={{
            d: [
              "M45 70 Q50 90, 60 75 Q55 72, 50 70",
              "M45 70 Q52 85, 58 73 Q54 71, 50 70",
              "M45 70 Q50 90, 60 75 Q55 72, 50 70",
            ]
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Eye */}
        <circle cx="68" cy="48" r="4" fill="hsl(0, 0%, 10%)" />
        <circle cx="69" cy="47" r="1.5" fill="hsl(0, 0%, 90%)" />
        
        <defs>
          <linearGradient id="bettaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(350, 80%, 55%)" />
            <stop offset="50%" stopColor="hsl(350, 75%, 45%)" />
            <stop offset="100%" stopColor="hsl(340, 70%, 35%)" />
          </linearGradient>
          <linearGradient id="tailGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(350, 80%, 50%)" />
            <stop offset="100%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(350, 75%, 55%)" />
            <stop offset="100%" stopColor="hsl(200, 100%, 60%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </g>
    ),
    guppy: (
      <g>
        {/* Body */}
        <ellipse
          cx="50"
          cy="50"
          rx="22"
          ry="12"
          fill="url(#guppyGradient)"
          opacity="0.9"
        />
        {/* Tail */}
        <motion.path
          d="M28 50 Q15 35, 10 50 Q15 65, 28 50"
          fill="url(#guppyTailGradient)"
          opacity="0.8"
          animate={{
            d: [
              "M28 50 Q15 35, 10 50 Q15 65, 28 50",
              "M28 50 Q18 40, 12 50 Q18 60, 28 50",
              "M28 50 Q15 35, 10 50 Q15 65, 28 50",
            ]
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Eye */}
        <circle cx="65" cy="48" r="3" fill="hsl(0, 0%, 10%)" />
        <circle cx="66" cy="47" r="1" fill="hsl(0, 0%, 90%)" />
        
        <defs>
          <linearGradient id="guppyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 90%, 60%)" />
            <stop offset="100%" stopColor="hsl(30, 85%, 50%)" />
          </linearGradient>
          <linearGradient id="guppyTailGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(190, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(280, 80%, 60%)" />
          </linearGradient>
        </defs>
      </g>
    ),
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width,
        height,
        transform: isLeft ? "scaleX(-1)" : "scaleX(1)",
      }}
      initial={{ x: isLeft ? "100vw" : "-100%", opacity: 0 }}
      animate={{
        x: isLeft ? "-100%" : "100vw",
        opacity: [0, 1, 1, 1, 0],
        y: [0, -30, 10, -20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width={width}
        height={height}
        className="drop-shadow-lg"
        style={{
          filter: "drop-shadow(0 0 10px hsla(190, 100%, 50%, 0.3))",
        }}
      >
        {fishPath[variant]}
      </svg>
    </motion.div>
  );
};

export default FloatingFish;
