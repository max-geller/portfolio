import "./globals.scss";
import type { Metadata } from "next";
import { Fragment, Suspense } from "react";
import Loading from "./loading";
import { Inter } from "next/font/google";
import Preloader from "./_layout/Preloader";
import Navbar from "./_layout/Navbar";
import Footer from "./_layout/Footer";
import ParticlesComponent from "./_layout/Particles";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
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
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4SEQ4XWJ32" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '4SEQ4XWJ32');
        `}
      </Script>

      <body className={inter.className}>
        <Fragment>
          <Preloader />
          {/* <ParticlesComponent /> */}
          <div className="app-container w-full min-h-[100vh] clear-both float-left relative">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Fragment>
      </body>
    </html>
  );
}
