import { ReactNode } from "react";
import { IoMdHome, IoMdContact } from "react-icons/io";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { FaBookOpen, FaStarHalfStroke } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";

// Interface pour un lien de navigation
export interface NavItem {
  id: string;
  icon: ReactNode; // ReactNode permet de stocker du JSX (les icônes)
}

const NavData: NavItem[] = [
  { id: '#', icon: <IoMdHome /> },
  { id: '#about', icon: <FaUser /> },
  { id: '#experience', icon: <FaBookOpen /> },
  { id: '#services-section', icon: <RiServiceFill /> },
  { id: '#portfolio', icon: <FaBriefcase /> },
  // { id: '#testimonials', icon: <FaStarHalfStroke /> },
  { id: '#contact', icon: <IoMdContact /> },
];

export default NavData;