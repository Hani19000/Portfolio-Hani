import React from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'; // Icônes plus "fines"

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => (
  <button 
    className="theme-toggle" 
    onClick={onToggle}
    aria-label="Changer de thème"
  >
    {isDark ? <RiSunLine /> : <RiMoonClearLine />}
  </button>
);

export default ThemeToggle;