import { useState, useEffect } from 'react';

const useTheme = () => {
  // Initialisation plus courte : on récupère ou on met 'dark' par défaut
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light');

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    
    // Bascule la classe 'light-mode' sur <html> 
    document.documentElement.classList.toggle('light-mode', !isDark);
    
    // Sauvegarde la préférence
    localStorage.setItem('theme', theme);
  }, [isDark]);

  return { isDark, toggleTheme: () => setIsDark(!isDark) };
};

export default useTheme;