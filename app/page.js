import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--text-dim)" }}>
          © 2025 Navyasri Pulipati
        </p>
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--text-dim)" }}>
          RVCE · Bengaluru · AI & ML Engineering
        </p>
      </footer>
    </main>
  );
}