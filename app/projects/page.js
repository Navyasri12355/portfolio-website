import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function ProjectsPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <FloatingBubbles />
      <Projects />
    </main>
  );
}
