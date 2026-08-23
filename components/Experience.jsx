"use client";
import { useState } from "react";
import Section from "./Section";

const workExperience = [
  {
    org: "Anthrasync Solutions Pvt. Ltd.",
    period: "3 Months",
    field: "AI Research & Development",
    description: "Developed core AI agents for the company's agentic AI platform.",
    details: {
      technologies: ["Python", "LangChain", "OpenAI API", "FastAPI", "Docker", "Redis"],
      responsibilities: [
        "Developed Translation Agent for multilingual communication support across 15+ languages",
        "Built Summarizer Agent using advanced NLP techniques for content condensation",
        "Created Internet Resource Finder Agent for intelligent information retrieval",
        "Integrated agents into unified agentic AI platform with seamless inter-agent communication",
      ],
      achievements: "Successfully deployed all three agents to production, reducing manual translation time by 80% and improving information retrieval accuracy by 35%.",
    },
  },
  {
    org: "Xtelify Limited (Airtel Digital)",
    period: "6 Months",
    field: "AI Research & Development",
    description: "Developed an agentic AI system for autonomous telecom capacity management.",
    details: {
      technologies: ["Python", "PyTorch", "TensorFlow", "Prometheus", "Grafana"],
      responsibilities: [
        "Designed multi-agent framework with predictive, optimization, anomaly-detection, and orchestrator agents",
        "Implemented real-time resource allocation algorithms for telecom capacity management",
        "Built monitoring and alerting system using Prometheus and Grafana",
      ],
      achievements: "Achieved 95% prediction accuracy for capacity needs and reduced resource wastage by 40% through autonomous optimization.",
    },
  },
  {
    org: "Aeronautical Development Agency (ADA)",
    period: "4 Weeks",
    field: "Edge AI Deployment & Testing",
    description: "Built a real-time testing framework for Automatic Target Recognition (ATR) systems.",
    details: {
      technologies: ["Python", "GStreamer", "NVIDIA DeepStream SDK", "CUDA", "C++", "OpenCV"],
      responsibilities: [
        "Developed custom GStreamer plugins for real-time video processing",
        "Integrated NVIDIA DeepStream SDK for edge AI deployment",
        "Built testing framework for ATR systems with performance metrics",
        "Optimized inference pipeline for low-latency edge deployment",
      ],
      achievements: "Successfully deployed ATR testing framework achieving 30 FPS inference on edge devices.",
    },
  },
];

const achievements = [
  "Advanced to the semi-finals in the DSU TechFlix Hackathon",
  "Participated in RVCE Gen AI Hackathon",
  "Participated in Smart India Hackathon",
];

function ExperienceModal({ experience, onClose }) {
  if (!experience) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 200, padding: "1.5rem",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "var(--glass-blur)",
          border: "1px solid var(--glass-border)",
          maxWidth: "650px", width: "100%",
          maxHeight: "85vh", overflowY: "auto",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "var(--glass-shadow)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "var(--text)", flex: 1, paddingRight: "1rem", lineHeight: 1.3 }}>
            {experience.org}
          </h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--text-dim)", fontSize: "1.5rem", cursor: "pointer", lineHeight: 1, flexShrink: 0 }}>×</button>
        </div>

        {/* Meta info */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.08em",
            color: "var(--text-dim)", background: "var(--surface2)", padding: "0.4rem 0.8rem",
            borderRadius: "4px", fontWeight: 600,
          }}>{experience.period}</span>
          <span style={{
            fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.08em",
            color: "var(--accent)", background: "var(--accent-dim)", padding: "0.4rem 0.8rem",
            borderRadius: "4px", fontWeight: 600,
          }}>{experience.field}</span>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{
            fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600,
          }}>Technologies</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {experience.details.technologies.map((tech, i) => (
              <span key={i} style={{
                fontFamily: "var(--cute)", fontSize: "0.7rem", color: "var(--text-muted)",
                background: "var(--surface2)", padding: "0.3rem 0.7rem", borderRadius: "4px",
                fontWeight: 500,
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{
            fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600,
          }}>Key Responsibilities</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {experience.details.responsibilities.map((resp, i) => (
              <li key={i} style={{
                fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75,
                marginBottom: "0.5rem", paddingLeft: "1.2rem", position: "relative",
              }}>
                <span style={{
                  position: "absolute", left: 0, color: "var(--accent)", fontSize: "0.4rem",
                  top: "0.6rem",
                }}>◆</span>
                {resp}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <div style={{
            fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600,
          }}>Key Achievements</div>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
            {experience.details.achievements}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Section id="experience" style={{
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
            04 — Experience
          </div>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
          }}>
            Work &amp;<br /><em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>Achievements</em>
          </h2>

          {/* Experience list */}
          <div style={{ marginBottom: "3rem" }}>
            {workExperience.map((exp, i) => (
                <div key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "3rem",
                  padding: "2rem",
                  marginBottom: "1rem",
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
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(139, 92, 246, 0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--glass-bg)";
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                }}
                >
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                    {exp.org}
                  </div>
                  <div style={{ fontFamily: "var(--cute)", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.08em", marginBottom: "0.5rem", fontWeight: 600 }}>
                    {exp.period}
                  </div>
                  <div style={{ fontFamily: "var(--cute)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.05em", fontWeight: 600 }}>
                    {exp.field}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.85, paddingTop: "0.25rem", fontWeight: 400, marginBottom: "1rem" }}>
                    {exp.description}
                  </p>
                  <button
                    onClick={() => setSelected(exp)}
                    style={{
                      fontFamily: "var(--cute)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      background: "transparent",
                      border: "1px solid var(--accent)",
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontWeight: 600,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "var(--accent-dim)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <div style={{
              fontFamily: "var(--cute)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.5rem",
              fontWeight: 600,
            }}>
              Hackathons & Achievements
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {achievements.map((a, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  background: "var(--glass-bg)",
                  backdropFilter: "var(--glass-blur)",
                  boxShadow: "var(--glass-shadow)",
                  transition: "all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "var(--accent-dim)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(139, 92, 246, 0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "var(--glass-bg)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                }}
              >
                  <span style={{ color: "var(--accent)", fontSize: "0.4rem", flexShrink: 0 }}>◆</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ExperienceModal experience={selected} onClose={() => setSelected(null)} />
    </>
  );
}