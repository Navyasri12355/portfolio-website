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
    </main>
  );
}