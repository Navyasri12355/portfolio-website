import Publications from "@/components/Publications";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";
import CursorGradient from "@/components/CursorGradient";

export default function PublicationsPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <CursorGradient />
      <Navbar />
      <FloatingBubbles />
      <Publications />
    </main>
  );
}
