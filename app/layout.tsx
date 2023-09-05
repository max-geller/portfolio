import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navigation/Navbar";
import Footer from "./_components/navigation/Footer";
import ParticlesComponent from "./_components/Particles";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Fragment } from "react";
import Script from "next/script";

config.autoAddCss = false;

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
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4SEQ4XWJ32" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '4SEQ4XWJ32');
        `}
        </Script>
      </div>

      <body className={inter.className}>
        <Fragment>
          <ParticlesComponent />
          <Navbar />
          {children}
          <Footer />
        </Fragment>
      </body>
    </html>
  );
}
