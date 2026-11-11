import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Madonna University Library Digital Portal", template: "%s | Madonna University Library" },
  description: "Official digital portal of Madonna University Library, Okija: library services, profile and access to academic research databases.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
      <Header /><main id="main">{children}</main><Footer />
    </body></html>
  );
}
