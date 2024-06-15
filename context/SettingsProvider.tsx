"use client"

import React, { createContext, useContext, ReactNode } from 'react';

interface SEO {
  title: string;
  logo: string;
  meta: {
    url: string;
    image: string;
    desc: string;
  };
}

interface MenuItem {
  name: string;
  text: string;
  icon: string;
  href: string;
  type: string;
}

interface Navbar {
  title: string;
  logo: string;
  menu: MenuItem[];
}

interface Website {
  title: string;
  desc: string;
  logo: string;
  keywords: string;
  status: string;
  seo: SEO;
  navbar: Navbar;
}

interface Settings {
  website: Website;
  updatedAt: boolean;
  createdAt: Date;
}

interface SettingsProviderProps {
  children: ReactNode;
  settings: Settings;
}

const SettingsContext = createContext<Settings | null>(null);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children, settings }) => {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}