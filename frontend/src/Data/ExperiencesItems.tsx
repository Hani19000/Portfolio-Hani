import { ReactNode } from "react";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaPython, FaNode, FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiSqlite,
  SiSentry,
  SiGithubactions,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { MdHealthAndSafety } from "react-icons/md";

type ProjectCategory = "frontend" | "backend" | "devops";
export interface ExperienceItem {
  icon: ReactNode;
  title: string;
  description: string;
  type: ProjectCategory;
}

const experienceItems: ExperienceItem[] = [
  /* Frontend */
  {
    icon: <IoLogoHtml5 />,
    title: "HTML",
    description: "intermédiaire",
    type: "frontend",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    description: "intermédiaire",
    type: "frontend",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    description: "intermédiaire",
    type: "frontend",
  },
  {
    icon: <RiReactjsLine />,
    title: "React",
    description: "intermédiaire",
    type: "frontend",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    description: "intermédiaire",
    type: "frontend",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    description: "intermédiaire",
    type: "frontend",
  },
  {
    icon: <CgFigma />,
    title: "Figma",
    description: "intermédiaire",
    type: "frontend",
  },

  /* Backend */
  {
    icon: <FaPython />,
    title: "Python/Django",
    description: "intermédiaire",
    type: "backend",
  },
  {
    icon: <FaNode />,
    title: "Node.js",
    description: "intermédiaire",
    type: "backend",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    description: "intermédiaire",
    type: "backend",
  },
  {
    icon: <BiLogoPostgresql />,
    title: "PostgreSQL",
    description: "intermédiaire",
    type: "backend",
  },
  {
    icon: <SiMongodb />,
    title: "mongoDB",
    description: "intermédiaire",
    type: "backend",
  },
  {
    icon: <SiSqlite />,
    title: "SQlite",
    description: "intermédiaire",
    type: "backend",
  },

  /* DevOps */
  {
    icon: <FaGitAlt />,
    title: "Git",
    description: "intermédiaire",
    type: "devops",
  },
  {
    icon: <SiSentry />,
    title: "Sentry",
    description: "intermédiaire",
    type: "devops",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Git",
    description: "intermédiaire",
    type: "devops",
  },
  {
    icon: <SiGithubactions />,
    title: "Github Actions",
    description: "intermédiaire",
    type: "devops",
  },
];

export default experienceItems;
