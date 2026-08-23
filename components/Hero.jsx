"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "8rem 2rem 4rem",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: "absolute",
        width: "800px", height: "800px",
        borderRadius: "50%",
        background: "var(--gradient-glow)",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        filter: "blur(80px)",
      }} />
      
      {/* Additional gradient orbs */}
      <div style={{
        position: "absolute",
        width: "400px", height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
        top: "20%", left: "10%",
        pointerEvents: "none",
        filter: "blur(60px)",
      }} />
      <div style={{
        position: "absolute",
        width: "300px", height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)",
        bottom: "30%", right: "15%",
        pointerEvents: "none",
        filter: "blur(50px)",
      }} />

      <div style={{ width: "100%", maxWidth: "800px", position: "relative", zIndex: 1 }}>
        <motion.div {...fadeUp(0)} style={{
          fontFamily: "var(--cute)",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "2rem",
          fontWeight: 600,
        }}>
          AI & ML Student · RVCE, Bengaluru
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(4rem, 12vw, 8rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: "var(--text)",
          marginBottom: "0.5rem",
          letterSpacing: "-0.04em",
        }}>
          Navyasri
        </motion.h1>
        <motion.h1 {...fadeUp(0.18)} style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(4rem, 12vw, 8rem)",
          fontWeight: 400,
          lineHeight: 1,
          color: "var(--accent)",
          fontStyle: "italic",
          marginBottom: "2.5rem",
          letterSpacing: "-0.04em",
        }}>
          Pulipati
        </motion.h1>

        <motion.p {...fadeUp(0.28)} style={{
          fontSize: "1.1rem",
          color: "var(--text-muted)",
          lineHeight: 1.8,
          marginBottom: "3rem",
          fontWeight: 400,
          maxWidth: "600px",
          margin: "0 auto 3rem",
        }}>
          AI/ML undergraduate passionate about turning intelligent ideas into real-world solutions.
        </motion.p>

        <motion.div {...fadeUp(0.36)} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/Navyasri_Pulipati_Resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              background: "var(--gradient-primary)",
              color: "var(--white)",
              fontFamily: "var(--cute)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(139, 92, 246, 0.3)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(139, 92, 246, 0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.3)";
            }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 6l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
          <a
            href="https://github.com/Navyasri12355"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              border: "1px solid var(--glass-border)",
              background: "var(--glass-bg)",
              backdropFilter: "var(--glass-blur)",
              color: "var(--text)",
              fontFamily: "var(--cute)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              borderRadius: "8px",
              boxShadow: "var(--glass-shadow)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(139, 92, 246, 0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--glass-border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--glass-shadow)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}