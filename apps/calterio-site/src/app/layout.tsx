"use client";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mono",
});

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="author" content="Calterio Logic" />
        <link rel="icon" href="/images/calterio-site-icon.png" sizes="any" />
        <title>Calterio Logic - Factory Operating System</title>
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-background text-text-primary`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}

