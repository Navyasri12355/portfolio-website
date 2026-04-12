import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <FloatingBubbles />
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
        maxWidth: "1300px",
        margin: "0 auto",
      }}>
        <p style={{ fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--text-dim)", fontWeight: 600 }}>
          Navyasri Pulipati
        </p>
        <p style={{ fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--text-dim)", fontWeight: 600 }}>
          RVCE · Bengaluru · AI & ML Engineering
        </p>
      </footer>
    </main>
  );
}