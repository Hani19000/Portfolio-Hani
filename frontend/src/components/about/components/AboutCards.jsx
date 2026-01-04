import { BsFillAwardFill } from "react-icons/bs";
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { LuFolderCode } from "react-icons/lu";

// Cards existantes
export const aboutCards = [
  {
    icon: <BsFillAwardFill />,
    title: "Experience",
    description: "3+ Years Working",
  },
  {
    icon: <FaUser />,
    title: "Clients",
    description: "200+ worldwide",
  },
  {
    icon: <LuFolderCode />,
    title: "Projects",
    description: "20+ Projects",
  },
];

// Nouvelles données Education
export const educationData = [
  {
    year: "Oct 2025 - En cours",
    title: "Bachelor Développeur d'application Python",
    institution: "Formation Bachelor (Bac+3)",
    description: "Formation complète centrée sur la conception et la mise en œuvre de solutions web avec Django, l'intégration de bases de données, et la maîtrise des bonnes pratiques de développement logiciel.",
  },
  {
    year: "Oct 2024 - En cours",
    title: "Graduat Développeur Web Full-stack",
    institution: "Formation Graduate (Bac+2)",
    description: "Formation complète en développement web full-stack, maîtrise des technologies front-end et back-end, et des bonnes pratiques de développement.",
  },
  {
    year: "2023",
    title: "Advanced UI/UX Design Course",
    institution: "DesignCode",
    description: "Explored advanced design systems, motion design, and accessibility best practices.",
  },
];

// Nouvelles données Work Experience
export const workExperienceData = [
  {
    year: "2024 - Présent",
    title: "Développeur Full-Stack",
    company: "Projets Personnels",
    description: "Développement de plusieurs projets personnels incluant EcoRide, Audio Player, et diverses applications web pour perfectionner mes compétences.",
  },
  {
    year: "2022 - Present",
    title: "UI Engineer",
    company: "Freelance / Remote Work",
    description: "Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.",
  },
];

export default aboutCards;