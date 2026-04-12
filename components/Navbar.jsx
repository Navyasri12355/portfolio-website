"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.4rem 4rem",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      background: scrolled ? "rgba(248, 247, 252, 0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.4s ease",
    }}>
      <a href="#hero" style={{
        fontFamily: "var(--cute)",
        fontSize: "0.8rem",
        letterSpacing: "0.1em",
        color: "var(--purple-dark)",
        textTransform: "uppercase",
        textDecoration: "none",
        fontWeight: 700,
      }}>NP</a>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{
              fontFamily: "var(--cute)",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text)",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              paddingBottom: "0.25rem",
              borderBottom: "1px solid transparent",
              fontWeight: 600,
            }}
            onMouseEnter={e => {
              e.target.style.color = "var(--accent)";
              e.target.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={e => {
              e.target.style.color = "var(--text)";
              e.target.style.borderColor = "transparent";
            }}
            >{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}