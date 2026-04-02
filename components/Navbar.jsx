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
      background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.4s ease",
    }}>
      <a href="#hero" style={{
        fontFamily: "var(--mono)",
        fontSize: "0.75rem",
        letterSpacing: "0.2em",
        color: "var(--accent)",
        textTransform: "uppercase",
        textDecoration: "none",
      }}>NP</a>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{
              fontFamily: "var(--mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"}
            onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
            >{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}