import React, { useState } from "react";
import useNavActive from "./NavActive";
import useTheme from "../../hooks/useTheme";
import NavData, { NavItem } from "../../Data/nav/NavLinkData";
import MenuToggle from "./MenuToggle";
import ThemeToggle from "./ThemeToggle";

const NavLink: React.FC = () => {
  const { activeNav, handleNavClick } = useNavActive();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleThemeChange = () => {toggleTheme(); closeMenu();};
  return (
    <>
      {isOpen && <div className="nav__overlay" onClick={closeMenu} />}
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />

      <nav className={`nav-sidebar ${isOpen ? "active" : ""}`}>
        {NavData.map(({ id, icon }: NavItem) => (
          <a
            key={id}
            href={id}
            onClick={(e) => {
              handleNavClick(e, id);
              closeMenu();
            }}
            className={activeNav === id ? "active" : ""}
          >
            {icon}
          </a>
        ))}

        <div className="nav__divider" />
        <ThemeToggle isDark={isDark} onToggle={handleThemeChange} />
      </nav>
    </>
  );
};

export default NavLink;
