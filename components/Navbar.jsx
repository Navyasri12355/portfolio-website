"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
      padding: "1.5rem 3rem",
      borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
      background: scrolled ? "var(--glass-bg)" : "transparent",
      backdropFilter: scrolled ? "var(--glass-blur)" : "none",
      boxShadow: scrolled ? "var(--glass-shadow)" : "none",
      transition: "all 0.3s ease",
    }}>
      <Link href="/" style={{
        fontFamily: "var(--cute)",
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        color: "var(--text)",
        textTransform: "uppercase",
        textDecoration: "none",
        fontWeight: 600,
      }}>NP</Link>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} style={{
              fontFamily: "var(--cute)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === href ? "var(--accent)" : "var(--text-muted)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontWeight: pathname === href ? 600 : 500,
            }}
            onMouseEnter={e => {
              if (pathname !== href) {
                e.target.style.color = "var(--accent)";
              }
            }}
            onMouseLeave={e => {
              if (pathname !== href) {
                e.target.style.color = "var(--text-muted)";
              }
            }}
            >{label}</Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}