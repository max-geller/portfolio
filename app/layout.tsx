import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navigation/Navbar";
import Footer from "./_components/navigation/Footer";
import ParticlesComponent from "./_components/Particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Geller",
  description: "Personal portfolio website for Max Geller",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ParticlesComponent />

        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
