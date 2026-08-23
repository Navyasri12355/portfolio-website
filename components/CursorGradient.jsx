"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function CursorGradient() {
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      
      setTrail(prev => {
        const newTrail = [newPosition, ...prev];
        // Reduce trail length to prevent lingering during quick movements
        return newTrail.slice(0, 8);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrail([]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Reduce intensity significantly in light mode
  const baseOpacity = theme === "light" ? 0.06 : 0.25;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {trail.map((pos, index) => {
        const opacity = baseOpacity * (1 - index / trail.length) * 0.8;
        const scale = 1 - (index / trail.length) * 0.4;
        const size = 150 * scale;
        
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, rgba(139, 92, 246, ${opacity}) 0%, rgba(139, 92, 246, ${theme === "light" ? 0.02 : 0.08}) 25%, transparent 60%)`,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              opacity: isVisible ? 1 : 0,
              filter: "blur(20px)",
            }}
          />
        );
      })}
      
      {/* Secondary smaller gradient for depth at current position */}
      {trail.length > 0 && (
        <div
          style={{
            position: "absolute",
            left: trail[0].x,
            top: trail[0].y,
            width: "80px",
            height: "80px",
            background: `radial-gradient(circle, rgba(168, 85, 247, ${baseOpacity * 0.8}) 0%, rgba(168, 85, 247, ${theme === "light" ? 0.02 : 0.1}) 30%, transparent 70%)`,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            opacity: isVisible ? 1 : 0,
            filter: "blur(10px)",
          }}
        />
      )}
    </div>
  );
}
