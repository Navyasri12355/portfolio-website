import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function ContactPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <FloatingBubbles />
      <Contact />
    </main>
  );
}
