import { ReactNode } from "react";
import { IoMdHome, IoMdContact } from "react-icons/io";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";

export interface NavItem {
  id: string;
  icon: ReactNode;
}

const NavData: NavItem[] = [
  // Ajout de la classe "icon-large" sur les icônes ciblées
  { id: "#", icon: <IoMdHome className="nav__icon-large" /> },
  { id: "#about", icon: <FaUser /> },
  { id: "#experience", icon: <FaBookOpen /> },
  { id: "#services-section", icon: <RiServiceFill /> },
  { id: "#portfolio", icon: <FaBriefcase /> },
  { id: "#contact", icon: <IoMdContact className="nav__icon-large" /> },
];

export default NavData;
