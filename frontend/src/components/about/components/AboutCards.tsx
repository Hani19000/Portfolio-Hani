import { ReactNode } from "react";
import { BsFillAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { LuFolderCode } from "react-icons/lu";

/* Interface pour les petites cartes du haut */
export interface AboutCardItem {
  icon: ReactNode;
  title: string;
  description: string;
}

/* Interface générique pour les éléments de la Timeline (Education ou Work) */
export interface TimelineItem {
  year: string;
  title: string;
  institution?: string; 
  company?: string;     
  description: string;
}

export const aboutCards: AboutCardItem[] = [
  { icon: <BsFillAwardFill />, title: "Experience", description: "3+ Years Working" },
  { icon: <FaUser />, title: "Clients", description: "200+ worldwide" },
  { icon: <LuFolderCode />, title: "Projects", description: "20+ Projects" },
];

export const educationData: TimelineItem[] = [
  {
    year: "Oct 2025 - En cours",
    title: "Bachelor Développeur d'application Python",
    institution: "Formation Bachelor (Bac+3)",
    description: "Formation centrée sur Django et les bonnes pratiques logicielles.",
  },
  {
    year: "Oct 2024 - En cours",
    title: "Graduat Développeur Web Full-stack",
    institution: "Formation Graduate (Bac+2)",
    description: "Maîtrise des technologies front-end et back-end.",
  }
];

export const workExperienceData: TimelineItem[] = [
  {
    year: "2024 - Présent",
    title: "Développeur Full-Stack",
    company: "Projets Personnels",
    description: "Développement d'applications comme EcoRide ou Audio Player.",
  }
];