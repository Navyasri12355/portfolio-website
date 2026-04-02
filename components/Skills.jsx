"use client";
import Section from "./Section";

const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "C", "SQL"],
  },
  {
    category: "Machine Learning & AI",
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "NLP", "DNNs", "CNNs"],
  },
  {
    category: "Embedded Systems",
    items: ["Jetson Nano", "Raspberry Pi", "ESP8266", "Arduino Uno"],
  },
  {
    category: "Containerization, MLOps & Cloud",
    items: ["Docker", "Kubeflow", "MLflow", "Prefect", "Apache Airflow", "Evidently AI"],
  },
];

function Pill({ label }) {
  return (
    <span style={{
      padding: "0.38rem 0.9rem",
      border: "1px solid var(--border)",
      fontFamily: "var(--mono)",
      fontSize: "0.7rem",
      color: "var(--text-muted)",
      letterSpacing: "0.05em",
      cursor: "default",
      transition: "border-color 0.2s, color 0.2s, background 0.2s",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.color = "var(--accent)";
      e.currentTarget.style.background = "var(--accent-glow)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.color = "var(--text-muted)";
      e.currentTarget.style.background = "transparent";
    }}
    >{label}</span>
  );
}

export default function Skills() {
  return (
    <>
      <div style={{ width: "100%", height: "1px", background: "var(--border)", maxWidth: "1200px", margin: "0 auto" }} />
      <Section id="skills">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }}>
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
              02 — Skills
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
              Technical<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>Expertise</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {skills.map(({ category, items }) => (
              <div key={category}>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.64rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}>{category}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map(item => <Pill key={item} label={item} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}