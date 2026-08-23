import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";
import CursorGradient from "@/components/CursorGradient";

export default function SkillsPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <CursorGradient />
      <Navbar />
      <FloatingBubbles />
      <Skills />
    </main>
  );
}
