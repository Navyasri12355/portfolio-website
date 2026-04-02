"use client";
import Section from "./Section";

export default function Contact() {
  return (
    <>
      <div style={{ width: "100%", height: "1px", background: "var(--border)", maxWidth: "1200px", margin: "0 auto" }} />
      <Section id="contact" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}>
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />
            05 — Contact
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />
          </div>

          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 300,
            color: "var(--white)",
            lineHeight: 1.18,
            letterSpacing: "-0.01em",
            marginBottom: "1.2rem",
          }}>
            Let's<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>Connect</em>
          </h2>

          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.7, fontWeight: 300 }}>
            Feel free to reach out for opportunities, collaborations, or discussions.
          </p>

          <a
            href="mailto:pulipatinavyasri@gmail.com"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "var(--white)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "3rem",
              borderBottom: "1px solid var(--border-light)",
              paddingBottom: "0.3rem",
              fontStyle: "italic",
              fontWeight: 300,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.borderColor = "var(--border-light)"; }}
          >
            pulipatinavyasri@gmail.com
          </a>

          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/navyasri-pulipati-42a599284/",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                label: "GitHub",
                href: "https://github.com/Navyasri12355",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}