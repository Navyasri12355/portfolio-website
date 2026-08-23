import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";
import CursorGradient from "@/components/CursorGradient";

export default function ProjectsPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <CursorGradient />
      <Navbar />
      <FloatingBubbles />
      <Projects />
    </main>
  );
}
