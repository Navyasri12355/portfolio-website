import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Your Name | Portfolio",
  description: "AI/ML Engineering Student Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
