import { ReactNode } from "react";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaPython, FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript, SiExpress } from "react-icons/si";

/* Interface stricte pour une compétence */
export interface ExperienceItem {
  icon: ReactNode;
  title: string;
  description: string;
  type: "frontend" | "backend"; 
}

const experienceItems: ExperienceItem[] = [
  /* Frontend */
  { icon: <IoLogoHtml5 />, title: "HTML", description: "Experienced", type: "frontend" },
  { icon: <FaCss3Alt />, title: "CSS", description: "Intermediate", type: "frontend" },
  { icon: <IoLogoJavascript />, title: "JavaScript", description: "Experienced", type: "frontend" },
  { icon: <RiReactjsLine />, title: "React", description: "Experienced", type: "frontend" },
  { icon: <SiTypescript />, title: "TypeScript", description: "Experienced", type: "frontend" },
  /* Backend */
  { icon: <FaPython />, title: "Python/Django", description: "Experienced", type: "backend" },
  { icon: <FaNode />, title: "Node.js", description: "Intermediate", type: "backend" },
  { icon: <SiExpress />, title: "Express.js", description: "Experienced", type: "backend" },
];

export default experienceItems;