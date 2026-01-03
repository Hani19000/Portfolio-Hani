import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";

const NavData = [
  { id: '#', icon: <IoMdHome /> },
  { id: '#about', icon: <FaUser /> },
  { id: '#experience', icon: <FaBookOpen /> },
  { id: '#services-section', icon: <RiServiceFill /> },
  { id: '#portfolio', icon: <FaBriefcase /> },
  { id: '#testimonials', icon: <FaStarHalfStroke /> },
  { id: '#contact', icon: <IoMdContact /> },
];

export default NavData;