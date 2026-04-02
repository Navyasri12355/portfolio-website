import Section from "./Section";

export default function About() {
  return (
    <>
      <div style={{ width: "100%", height: "1px", background: "var(--border)", maxWidth: "1200px", margin: "0 auto" }} />
      <Section id="about">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}>
              01 — About
              <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />
            </div>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              color: "var(--white)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}>
              Engineering<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>responsible AI</em>
            </h2>
          </div>

          <div>
            <p style={{
              fontFamily: "var(--serif)",
              fontSize: "1.2rem",
              fontWeight: 300,
              color: "var(--text)",
              fontStyle: "italic",
              lineHeight: 1.75,
              marginBottom: "1.4rem",
            }}>
              I am a third-year AI/ML engineering student with experience building end-to-end systems in accessibility, ethical AI, applied machine learning, computer vision, federated learning, and transfer learning.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.9, fontWeight: 300 }}>
              I seek opportunities to apply my skills to real-world challenges and contribute to the development of responsible AI for societal impact.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}