import React, { useState } from "react";
import useNavActive from "./NavActive";
import NavData, { NavItem } from "./NavLinkData";
import MenuToggle from "./MenuToggle";

const NavLink: React.FC = () => {
  const { activeNav, handleNavClick } = useNavActive();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {isOpen && <div className="nav__overlay" onClick={closeMenu}></div>}
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
      <nav className={isOpen ? "nav-sidebar active" : "nav-sidebar"}>
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
      </nav>
    </>
  );
}

export default NavLink;