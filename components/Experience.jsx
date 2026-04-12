"use client";
import Section from "./Section";

const workExperience = [
  {
    org: "Anthrasync Solutions Pvt. Ltd.",
    period: "3 Months",
    field: "AI Research & Development",
    description: "Developed core AI agents for the company's agentic AI platform, including a Translation Agent, Summarizer Agent, and Internet Resource Finder Agent — driving improvements in multilingual communication, content summarization, and intelligent information retrieval.",
  },
  {
    org: "Xtelify Limited (Airtel Digital)",
    period: "6 Months",
    field: "AI Research & Development",
    description: "Developed an agentic AI system for autonomous telecom capacity management, using a multi-agent framework (predictive, optimization, anomaly-detection, and orchestrator agents) to enable real-time, adaptive, and predictive resource allocation.",
  },
  {
    org: "Aeronautical Development Agency (ADA)",
    period: "4 Weeks",
    field: "Edge AI Deployment & Testing",
    description: "Built a real-time testing framework with custom-built GStreamer plugins for Automatic Target Recognition (ATR) systems at ADA using NVIDIA DeepStream SDK.",
  },
];

const achievements = [
  "Advanced to the semi-finals in the DSU TechFlix Hackathon",
  "Participated in RVCE Gen AI Hackathon",
  "Participated in Smart India Hackathon",
];

export default function Experience() {
  return (
    <>
      <div style={{ width: "100%", height: "1px", background: "var(--border)", maxWidth: "1200px", margin: "0 auto" }} />
      <Section id="experience">
        <div style={{
          fontFamily: "var(--cute)",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--purple-dark)",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontWeight: 700,
        }}>
          04 — Experience
          <span style={{ display: "inline-block", width: "40px", height: "2px", background: "var(--purple-dark)", opacity: 0.6 }} />
        </div>
        <h2 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          fontWeight: 600,
          color: "var(--text)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: "3.5rem",
        }}>
          Work &amp;<br /><em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>Achievements</em>
        </h2>

        {/* Experience list */}
        <div>
          {workExperience.map((exp, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "4rem",
                padding: "2.5rem",
                marginBottom: "1.2rem",
                borderRadius: "8px",
                background: "var(--surface2)",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--accent-dim)";
                e.currentTarget.style.transform = "translateX(6px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--surface2)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
              >
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem", lineHeight: 1.4 }}>
                  {exp.org}
                </div>
                <div style={{ fontFamily: "var(--cute)", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.08em", marginBottom: "0.4rem", fontWeight: 600 }}>
                  {exp.period}
                </div>
                <div style={{ fontFamily: "var(--cute)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.05em", fontWeight: 700 }}>
                  {exp.field}
                </div>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.95, paddingTop: "0.15rem", fontWeight: 400 }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{ marginTop: "4rem" }}>
          <div style={{
            fontFamily: "var(--cute)",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--purple-dark)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontWeight: 700,
          }}>
            Hackathons & Achievements
            <span style={{ display: "inline-block", width: "40px", height: "2px", background: "var(--purple-dark)", opacity: 0.6 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {achievements.map((a, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.2rem 1.5rem",
                border: "1.5px solid var(--border)",
                borderRadius: "6px",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                background: "var(--white)",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.background = "var(--purple-light)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "var(--white)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              >
                <span style={{ color: "var(--accent)", fontSize: "0.45rem", flexShrink: 0 }}>◆</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}