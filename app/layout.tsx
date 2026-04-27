import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "../components/nav/navbar";
import "./globals.css";
import { Footer } from "../components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lab Zeitlabs",
  description: "Open edX learning platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* Fixed frosted glass bar — bottom of every page */}
        <div className="fixed bottom-0 left-0 right-0 z-[9998] h-16 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", maskImage: "linear-gradient(to top, black 20%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)" }} />
      </body>
    </html>
  );
}
