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
          04 — Experience
          <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />
        </div>
        <h2 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          fontWeight: 300,
          color: "var(--white)",
          lineHeight: 1.18,
          letterSpacing: "-0.01em",
          marginBottom: "3.5rem",
        }}>
          Work &amp;<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>Achievements</em>
        </h2>

        {/* Experience list */}
        <div>
          {workExperience.map((exp, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4rem",
              padding: "2.5rem 0",
              borderBottom: "1px solid var(--border)",
            }}>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontWeight: 300, color: "var(--white)", marginBottom: "0.4rem", lineHeight: 1.4 }}>
                  {exp.org}
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", color: "var(--text-dim)", letterSpacing: "0.15em", marginBottom: "0.4rem" }}>
                  {exp.period}
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.08em" }}>
                  {exp.field}
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.85, paddingTop: "0.15rem", fontWeight: 300 }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{ marginTop: "4rem" }}>
          <div style={{
            fontFamily: "var(--mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}>
            Hackathons & Achievements
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {achievements.map((a, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.1rem 1.4rem",
                border: "1px solid var(--border)",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
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