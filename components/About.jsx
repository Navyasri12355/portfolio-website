"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function About() {
  return (
    <>
      <Section id="about" style={{
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
            01: About
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "2rem",
          }}>
            Engineering<br /><em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>responsible AI</em>
          </motion.h2>

          <motion.div {...fadeUp(0.2)}>
            <motion.p {...fadeUp(0.3)} style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "1.5rem",
              fontWeight: 400,
            }}>
              I'm an Artificial Intelligence and Machine Learning undergraduate passionate about building intelligent, scalable, and practical solutions to real-world problems. With strong foundations in software engineering, machine learning, and computer vision, I enjoy turning ideas into working products.
            </motion.p>
            <motion.p {...fadeUp(0.4)} style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.9, fontWeight: 400 }}>
              I have experience building AI-powered applications, scalable backend systems, and cloud-native solutions using Python, FastAPI, Docker, and Kubernetes. I'm particularly interested in exploring how AI can be applied beyond the classroom to create technology that is useful, impactful, and built for the real world.
            </motion.p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}