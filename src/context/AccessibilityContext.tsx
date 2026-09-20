import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontSizeLevel: number; // 0 = 100%, 1 = 110%, 2 = 120%
  highContrast: boolean;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleHighContrast: () => void;
  resetAccessibility: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(() => {
    const saved = localStorage.getItem('sorriso_font_size');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('sorriso_high_contrast') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sorriso_font_size', fontSizeLevel.toString());
    const root = document.documentElement;
    if (fontSizeLevel === 0) {
      root.style.setProperty('--font-scale', '1rem');
    } else if (fontSizeLevel === 1) {
      root.style.setProperty('--font-scale', '1.1rem');
    } else if (fontSizeLevel === 2) {
      root.style.setProperty('--font-scale', '1.2rem');
    }
  }, [fontSizeLevel]);

  useEffect(() => {
    localStorage.setItem('sorriso_high_contrast', highContrast.toString());
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const increaseFontSize = () => {
    setFontSizeLevel((prev) => Math.min(prev + 1, 2));
  };

  const decreaseFontSize = () => {
    setFontSizeLevel((prev) => Math.max(prev - 1, 0));
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const resetAccessibility = () => {
    setFontSizeLevel(0);
    setHighContrast(false);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSizeLevel,
        highContrast,
        increaseFontSize,
        decreaseFontSize,
        toggleHighContrast,
        resetAccessibility,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
