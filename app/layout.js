import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Navyasri Pulipati | AI/ML Engineer",
  description: "AI/ML Engineering Student at RVCE — building ethical, scalable, real-world systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "var(--bg)" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}