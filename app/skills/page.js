import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function SkillsPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <FloatingBubbles />
      <Skills />
    </main>
  );
}
