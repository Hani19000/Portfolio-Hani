import { ReactNode } from "react";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaPython, FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiSqlite } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
/* Interface stricte pour une compétence */
export interface ExperienceItem {
  icon: ReactNode;
  title: string;
  description: string;
  type: "frontend" | "backend";
}

const experienceItems: ExperienceItem[] = [
  /* Frontend */
  {
    icon: <IoLogoHtml5 />,
    title: "HTML",
    description: "Intermediate",
    type: "frontend",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    description: "Intermediate",
    type: "frontend",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    description: "Intermediate",
    type: "frontend",
  },
  {
    icon: <RiReactjsLine />,
    title: "React",
    description: "Intermediate",
    type: "frontend",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    description: "Intermediate",
    type: "frontend",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    description: "Intermediate",
    type: "frontend",
  },
  {
    icon: <CgFigma />,
    title: "Figma",
    description: "Intermediate",
    type: "frontend",
  },
  /* Backend */
  {
    icon: <FaPython />,
    title: "Python/Django",
    description: "Intermediate",
    type: "backend",
  },
  {
    icon: <FaNode />,
    title: "Node.js",
    description: "Intermediate",
    type: "backend",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    description: "Intermediate",
    type: "backend",
  },
  {
    icon: <BiLogoPostgresql />,
    title: "PostgreSQL",
    description: "Intermediate",
    type: "backend",
  },
  {
    icon: <SiMongodb />,
    title: "mongoDB",
    description: "Intermediate",
    type: "backend",
  },
  {
    icon: <SiSqlite />,
    title: "SQlite",
    description: "Intermediate",
    type: "backend",
  },
];

export default experienceItems;
