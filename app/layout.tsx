import connectDB from '@/libs/Database'
import React, { ReactNode } from 'react'
import type { Metadata } from "next";

import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Script from "next/script";

import "./globals.css";
// import "@/public/css/normalize.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SettingsProvider } from '@/context/SettingsProvider';

connectDB()

async function fetchSettings() {
  const URL = process.env.NEXT_PUBLIC_URL as string
            
  const res = await fetch(`${URL}/api/setting`, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
      },
      cache: 'no-store'
  })
  
  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export async function metadata(): Promise<Metadata> {
  const settings = await fetchSettings()
  const setting = settings.data.website
  const seo = settings.data.website.seo.meta
  const title = `${setting.title.charAt(0).toUpperCase()}${setting.title.slice(1)}`

  return {
      title: `${title} | ${setting.desc}`,
      description: seo.desc,
      keywords: setting.keywords,
      openGraph: {
        title: setting.seo.title,
        images: [`${seo.image}`],
      },
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const data = await fetchSettings()
  
  return (
    <html lang="en">
      <head>
        <Script src="https://pro.fontawesome.com/releases/v5.15.0/js/all.js" />
      </head>
      <body>
        <SettingsProvider settings={data}>
          <Navbar />
            <div className="container mx-auto z-0">
              <div className="relative flex flex-col px-6 lg:px-0 w-full min-h-screen">
                <div className="relative pt-[70px] mb-16">
                  {children}
                </div>
              </div>
            </div>
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
