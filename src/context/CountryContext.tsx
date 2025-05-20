'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface Country {
  id: number;
  name: string;
  code: string;
}

interface CountryContextType {
  country: Country | null;
  setCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const savedCountry = localStorage.getItem('country');
    if (savedCountry) {
      setCountry(JSON.parse(savedCountry));
    }
  }, []);

  const handleSetCountry = (newCountry: Country) => {
    setCountry(newCountry);
    localStorage.setItem('country', JSON.stringify(newCountry));
  };

  return (
    <CountryContext.Provider value={{ country, setCountry: handleSetCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
} 