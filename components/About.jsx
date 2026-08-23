import Section from "./Section";

export default function About() {
  return (
    <>
      <Section id="about" style={{
        background: "var(--gradient-surface)",
        position: "relative",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--cute)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}>
            01 — About
          </div>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "2rem",
          }}>
            Engineering<br /><em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>responsible AI</em>
          </h2>

          <div>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "1.5rem",
              fontWeight: 400,
            }}>
              I’m an Artificial Intelligence and Machine Learning undergraduate passionate about building intelligent, scalable, and practical solutions to real-world problems. With strong foundations in software engineering, machine learning, and computer vision, I enjoy turning ideas into working products.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.9, fontWeight: 400 }}>
              I have experience building AI-powered applications, scalable backend systems, and cloud-native solutions using Python, FastAPI, Docker, and Kubernetes. I’m particularly interested in exploring how AI can be applied beyond the classroom to create technology that is useful, impactful, and built for the real world.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}