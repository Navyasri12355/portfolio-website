import About from "@/components/About";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";
import CursorGradient from "@/components/CursorGradient";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <CursorGradient />
      <Navbar />
      <FloatingBubbles />
      <About />
    </main>
  );
}
