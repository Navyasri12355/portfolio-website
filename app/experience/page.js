import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function ExperiencePage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <FloatingBubbles />
      <Experience />
    </main>
  );
}
