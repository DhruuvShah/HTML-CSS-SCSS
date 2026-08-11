import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RouteTransition from "@/components/RouteTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dhruv Shah — Full Stack Developer",
    template: "%s — Dhruv Shah",
  },
  description:
    "Dhruv Shah is a full stack developer based in India, building fast, functional web experiences with React, Node.js and modern web tooling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <RouteTransition />
        <main className="w-full py-8">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
