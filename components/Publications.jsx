"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay },
});

const publications = [
  {
    title: "Music-Based Cryptography: Text Encryption Using Audio Features",
    conference: "IEEE IC3IT 2025",
    authors: "Pulipati, N. M. (First Author)",
    description: "Proposed an audio-feature-driven encryption framework using entropy optimization.",
    doi: "10.1109/IC3IT66137.2025.11341611",
    link: "https://doi.org/10.1109/IC3IT66137.2025.11341611",
  },
];

export default function Publications() {
  return (
    <>
      <Section id="publications" style={{
        background: "var(--gradient-surface)",
        position: "relative",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div {...fadeUp(0)} style={{
            fontFamily: "var(--cute)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}>
            05 — Publications
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
          }}>
            Research<br /><em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>Publications</em>
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {publications.map((pub, i) => (
              <motion.div key={i} {...fadeUp(0.2 + i * 0.1)} style={{
                padding: "2rem",
                borderRadius: "12px",
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
                border: "1px solid var(--glass-border)",
                boxShadow: "var(--glass-shadow)",
                transition: "all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--accent-dim)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(139, 92, 246, 0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--glass-bg)";
                e.currentTarget.style.borderColor = "var(--glass-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--glass-shadow)";
              }}
              >
                <div style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}>
                  {pub.title}
                </div>
                <div style={{
                  fontFamily: "var(--cute)",
                  fontSize: "0.7rem",
                  color: "var(--accent)",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}>
                  {pub.conference}
                </div>
                <div style={{
                  fontFamily: "var(--cute)",
                  fontSize: "0.7rem",
                  color: "var(--text-dim)",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                  fontWeight: 600,
                }}>
                  {pub.authors}
                </div>
                <p style={{
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  fontWeight: 400,
                }}>
                  {pub.description}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--cute)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 600,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                >
                  <span>DOI: {pub.doi}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
