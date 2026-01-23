import { ReactNode } from "react";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import {
  FaCss3Alt,
  FaPython,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
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

type ProjectCategory = "frontend" | "backend" | "devops" | "bdd";
export interface ExperienceItem {
  icon: ReactNode;
  title: string;
  type: ProjectCategory;
}

const experienceItems: ExperienceItem[] = [
  {
    icon: <IoLogoHtml5 />,
    title: "HTML",
    type: "frontend",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    type: "frontend",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    type: "frontend",
  },
  {
    icon: <RiReactjsLine />,
    title: "React",
    type: "frontend",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    type: "frontend",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    type: "frontend",
  },
  {
    icon: <CgFigma />,
    title: "Figma",
    type: "frontend",
  },
  {
    icon: <FaPython />,
    title: "Python/Django",
    type: "backend",
  },
  {
    icon: <FaNode />,
    title: "Node.js",
    type: "backend",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    type: "backend",
  },
  {
    icon: <BiLogoPostgresql />,
    title: "PostgreSQL",
    type: "bdd",
  },
  {
    icon: <SiMongodb />,
    title: "mongoDB",
    type: "bdd",
  },
  {
    icon: <SiSqlite />,
    title: "SQlite",
    type: "bdd",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    type: "devops",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    type: "devops",
  },
  {
    icon: <SiSentry />,
    title: "Sentry",
    type: "devops",
  },
  {
    icon: <SiGithubactions />,
    title: "Github Actions",
    type: "devops",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    type: "devops",
  },
];

export default experienceItems;
