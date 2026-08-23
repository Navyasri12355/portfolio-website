import Publications from "@/components/Publications";
import Navbar from "@/components/Navbar";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function PublicationsPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <FloatingBubbles />
      <Publications />
    </main>
  );
}
