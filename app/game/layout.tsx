import "./../globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Geller",
  description: "Personal portfolio website for Max Geller",
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return;
  <section>{children}</section>;
}
