import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";
import CursorGradient from "@/components/CursorGradient";

export default function ContactPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <CursorGradient />
      <Navbar />
      <FloatingBubbles />
      <Contact />
    </main>
  );
}
