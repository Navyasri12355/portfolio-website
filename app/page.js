import Hero from "@/components/Hero";
import FloatingBubbles from "@/components/FloatingBubbles";
import Navbar from "@/components/Navbar";
import CursorGradient from "@/components/CursorGradient";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <CursorGradient />
      <Navbar />
      <FloatingBubbles />
      <Hero />
    </main>
  );
}