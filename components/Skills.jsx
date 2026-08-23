"use client";
import { useState } from "react";
import Section from "./Section";

const skills = [
  {
    category: "Languages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["Python", "R", "C", "SQL"],
  },
  {
    category: "Core CS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    items: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
  },
  {
    category: "Backend",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    items: ["FastAPI", "REST APIs", "Redis"],
  },
  {
    category: "DevOps/Cloud",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: ["Docker", "Kubernetes", "Git", "Azure"],
  },
  {
    category: "AI/ML",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    items: ["Scikit-learn", "LangGraph", "MLflow", "Prefect", "RAG", "XGBoost"],
  },
  {
    category: "Soft Skills",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: ["Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"],
  },
];

const Pill = ({ label }) => {
  const [hover, setHover] = useState(false);
  return (
    <span
      style={{
        padding: "0.5rem 1rem",
        border: "1px solid var(--glass-border)",
        borderRadius: "20px",
        fontFamily: "var(--cute)",
        fontSize: "0.75rem",
        color: hover ? "var(--text)" : "var(--text-muted)",
        background: "var(--glass-bg)",
        backdropFilter: "var(--glass-blur)",
        boxShadow: "var(--glass-shadow)",
        transition: "all 0.2s ease",
        cursor: "default",
        fontWeight: 500,
      }}
      onMouseEnter={e => {
        setHover(true);
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.background = "var(--accent-dim)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.15)";
      }}
      onMouseLeave={e => {
        setHover(false);
        e.currentTarget.style.borderColor = "var(--glass-border)";
        e.currentTarget.style.background = "var(--glass-bg)";
        e.currentTarget.style.boxShadow = "var(--glass-shadow)";
      }}
    >{label}</span>
  );
};

export default function Skills() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <Section id="skills" style={{
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
            02 — Skills
          </div>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "2.5rem",
          }}>
            Technical<br /><em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>Expertise</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {skills.map(({ category, icon, items }, index) => (
              <div
                key={category}
                style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "var(--glass-bg)",
                  backdropFilter: "var(--glass-blur)",
                  border: "1px solid var(--glass-border)",
                  boxShadow: "var(--glass-shadow)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--accent-dim)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(139, 92, 246, 0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--glass-bg)";
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                }}
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                  }}>
                    {icon}
                  </div>
                  <div style={{
                    fontFamily: "var(--cute)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text)",
                    fontWeight: 600,
                  }}>
                    {category}
                  </div>
                </div>
                <div style={{ 
                  display: expanded === index ? "flex" : "none", 
                  flexWrap: "wrap", 
                  gap: "0.5rem",
                  marginTop: "1rem",
                  animation: expanded === index ? "fadeIn 0.3s ease" : "none",
                }}>
                  {items.map(item => <Pill key={item} label={item} />)}
                </div>
                {expanded !== index && (
                  <div style={{
                    fontFamily: "var(--cute)",
                    fontSize: "0.7rem",
                    color: "var(--text-dim)",
                    marginTop: "0.5rem",
                  }}>
                    {items.length} skills
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}