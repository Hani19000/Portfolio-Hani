import { ReactNode } from "react";
import { BsFillAwardFill } from "react-icons/bs";
import { FaBusinessTime } from "react-icons/fa";
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
  { icon: <BsFillAwardFill />, title: "Experience", description: "1+ Years Working" },
  { icon: <FaBusinessTime />, title: "Disponibilité", description: "5J/7" },
  { icon: <LuFolderCode />, title: "Projects", description: "20+ Projects" },
];

export const educationData: TimelineItem[] = [
  {
    year: "Oct 2025 - En cours",
    title: "Bachelor Développeur d'application Python (bac+3)",
    institution: "STUDI | ECOLE EN LIGNE",
    description: "formation complète centrée sur la conception et la mise en œuvre de solutions web avec Python, l’intégration de bases de données, et la maîtrise des bonnes pratiques de développement logiciel.",
  },
  {
    year: "Oct 2024 - En cours",
    title: "Graduat Développeur Web Full-stack",
    institution: "STUDI | ECOLE EN LIGNE",
    description: "Développement d’applications web full stack. Mise en œuvre de projets complets intégrant authentification, gestion des données et interactions front-end / back-end optimisées.",
  }
];

export const workExperienceData: TimelineItem[] = [
  {
    year: "2024 - Présent",
    title: "Développeur Full-Stack Indépendant",
    company: "Projets Personnels",
    description: "Développement d’applications web full stack incluant une plateforme e-commerce, une application de lecture audio et des API REST sécurisées. Approche orientée performance, expérience utilisateur et fiabilité des fonctionnalités.",
  }
];