import React, { ReactNode } from 'react'
import type { Metadata } from "next";

import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Script from "next/script";

import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export async function metadata(): Promise<Metadata> {
  return {
      title: `FullTech : Full Service Software Development`,
      description: "Full Service Software Development",
      keywords: 'fulltect',
      openGraph: {
        title: "FullTech",
        images: [``],
      },
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://pro.fontawesome.com/releases/v5.15.0/js/all.js" />
      </head>
      <body>
        <Navbar />
          <div className="container mx-auto z-0">
            <div className="relative flex flex-col px-6 lg:px-0 w-full min-h-screen">
              <div className="relative pt-[70px] mb-16">
                {children}
              </div>
            </div>
          </div>
        <Footer />
      </body>
    </html>
  );
}
