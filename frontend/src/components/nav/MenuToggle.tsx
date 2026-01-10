import React from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, toggle }) => {
  // le bouton disparaît totalement
  if (isOpen) return null;
  return (
    <button className="menu-toggle" onClick={toggle} aria-label="Toggle Menu">
      {isOpen ? <HiX /> : <HiMenuAlt3 />}
    </button>
  );
};

export default MenuToggle;
