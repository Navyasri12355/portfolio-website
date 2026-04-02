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
      alignItems: "center",
      padding: "8rem 4rem 6rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute",
        width: "700px", height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,169,110,0.055) 0%, transparent 70%)",
        top: "-150px", right: "-150px",
        pointerEvents: "none",
      }} />
      {/* Grid lines */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        pointerEvents: "none",
        maskImage: "radial-gradient(ellipse 55% 65% at 80% 50%, black, transparent)",
        WebkitMaskImage: "radial-gradient(ellipse 55% 65% at 80% 50%, black, transparent)",
      }} />

      <div style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
        <motion.div {...fadeUp(0)} style={{
          fontFamily: "var(--mono)",
          fontSize: "0.68rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}>
          <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--accent)" }} />
          AI & ML Engineer · RVCE, Bengaluru
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
          fontWeight: 300,
          lineHeight: 1.04,
          color: "var(--white)",
          marginBottom: "0.25rem",
          letterSpacing: "-0.01em",
        }}>
          Navyasri
        </motion.h1>
        <motion.h1 {...fadeUp(0.18)} style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
          fontWeight: 300,
          lineHeight: 1.04,
          color: "var(--accent)",
          fontStyle: "italic",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Pulipati
        </motion.h1>

        <motion.p {...fadeUp(0.28)} style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(1rem, 2vw, 1.4rem)",
          fontWeight: 300,
          color: "var(--text-muted)",
          fontStyle: "italic",
          marginBottom: "1.5rem",
        }}>
          3rd Year Engineering Student specializing in AI & ML
        </motion.p>

        <motion.p {...fadeUp(0.36)} style={{
          maxWidth: "520px",
          fontSize: "0.95rem",
          color: "var(--text-muted)",
          lineHeight: 1.85,
          marginBottom: "3rem",
          fontWeight: 300,
        }}>
          Focused on building ethical, scalable, and real-world systems.
          From federated learning to agentic AI - designing for societal impact.
        </motion.p>

        <motion.div {...fadeUp(0.44)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="/Navyasri Pulipati_Resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              background: "var(--accent)",
              color: "#09090b",
              fontFamily: "var(--mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 500,
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.82"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
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
              border: "1px solid var(--border-light)",
              color: "var(--text-muted)",
              fontFamily: "var(--mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}