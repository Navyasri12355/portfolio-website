"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate bubbles with different styles
    const generatedBubbles = [
      // Filled bubbles
      { id: 1, x: "8%", y: "15%", size: 60, style: "filled", color: "#d4c5e8", duration: 20, delay: 0 },
      { id: 2, x: "85%", y: "25%", size: 45, style: "blank", color: "#c9b8e4", duration: 25, delay: 2 },
      { id: 3, x: "15%", y: "60%", size: 35, style: "dotted", color: "#b8a8d8", duration: 22, delay: 4 },

      // Striped bubbles
      { id: 4, x: "78%", y: "70%", size: 50, style: "striped", color: "#c9b8e4", duration: 28, delay: 1 },
      { id: 5, x: "10%", y: "80%", size: 40, style: "filled", color: "#b8a8d8", duration: 26, delay: 3 },

      // Outline/blank bubbles
      { id: 6, x: "70%", y: "15%", size: 30, style: "dotted", color: "#d4c5e8", duration: 24, delay: 5 },
      { id: 7, x: "50%", y: "85%", size: 55, style: "blank", color: "#a89ad6", duration: 30, delay: 2 },
      { id: 8, x: "25%", y: "35%", size: 38, style: "striped", color: "#b8a8d8", duration: 27, delay: 1 },
    ];
    setBubbles(generatedBubbles);
  }, []);

  const BubbleContent = ({ bubble }) => {
    const { style, color, size } = bubble;

    // Create SVG patterns for different styles
    if (style === "filled") {
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity: 0.15 }}>
          <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
        </svg>
      );
    }

    if (style === "striped") {
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity: 0.2 }}>
          <defs>
            <pattern id={`stripes-${bubble.id}`} patternUnits="userSpaceOnUse" width="4" height={size}>
              <line x1="0" y1="0" x2="0" y2={size} stroke={color} strokeWidth="2" />
            </pattern>
          </defs>
          <circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#stripes-${bubble.id})`} />
        </svg>
      );
    }

    if (style === "dotted") {
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity: 0.2 }}>
          <defs>
            <pattern id={`dots-${bubble.id}`} patternUnits="userSpaceOnUse" width="6" height="6">
              <circle cx="3" cy="3" r="1.5" fill={color} />
            </pattern>
          </defs>
          <circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#dots-${bubble.id})`} />
        </svg>
      );
    }

    if (style === "blank") {
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity: 0.25 }}>
          <circle cx={size / 2} cy={size / 2} r={size / 2} fill="none" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          style={{
            position: "absolute",
            left: bubble.x,
            top: bubble.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -10, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BubbleContent bubble={bubble} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
