import { useState } from "react";
import useNavActive from "./NavActive";
import NavData from "./NavLinkData";
import MenuToggle from "./MenuToggle";
const NAV_LINKS = NavData;
// On définit les liens dans un tableau

function NavLink() {
  const { activeNav, handleNavClick } = useNavActive();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
    {isOpen && <div className="nav__overlay" onClick={closeMenu}></div>}
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
      <nav className={isOpen ? "nav-sidebar active" : "nav-sidebar"}>
        {NAV_LINKS.map(({ id, icon }) => (
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
