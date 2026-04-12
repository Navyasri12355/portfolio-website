"use client";
import Section from "./Section";

const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "C", "SQL"],
  },
  {
    category: "Machine Learning & AI",
    items: [
    "Vision-Language Models (VLM)", // Hallucination Benchmarking
    "Federated Learning & MLOps",   // Flower, MLflow, CI/CD for FL
    "Healthcare AI & Ayurveda",     // Ayurvedic Clinical Bridge, IITM-Hack
    "Adversarial Robustness",       // Fingerprint Defender, Hallucination diagnostics
    "Real-time Streaming (Pathway)",// Financial/Medical data ingestion
    "Multi-modal AI (Voice/Vision)",// Voice-Activated Systems, OCR
    "Hardware Optimization",        // ONNX, 4-bit Quantization, Ryzen/T4
    "PyTorch, TensorFlow & Scikit", // Core framework proficiency
  ],
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
      padding: "0.55rem 1.2rem",
      border: "1.5px solid var(--accent)",
      borderRadius: "25px",
      fontFamily: "var(--cute)",
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "var(--text)",
      letterSpacing: "0.03em",
      background: "var(--purple-light)",
      cursor: "default",
      transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
      display: "inline-block",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "var(--purple-dark)";
      e.currentTarget.style.color = "var(--white)";
      e.currentTarget.style.background = "var(--accent)";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(169, 154, 214, 0.2)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.color = "var(--text)";
      e.currentTarget.style.background = "var(--purple-light)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
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
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}>
              Technical<br /><em style={{ fontStyle: "italic", color: "var(--purple-dark)", fontWeight: 400 }}>Expertise</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {skills.map(({ category, items }) => (
              <div key={category}>
                <div style={{
                  fontFamily: "var(--cute)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--purple-dark)",
                  marginBottom: "1rem",
                  fontWeight: 700,
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