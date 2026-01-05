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
    institution: "STUDI | bac +3",
    description: "formation complète centrée sur la conception et la mise en œuvre de solutions web avec Python, l’intégration de bases de données, et la maîtrise des bonnes pratiques de développement logiciel.",
  },
  {
    year: "Oct 2024 - En cours",
    title: "Graduat Développeur Web Full-stack",
    institution: "STUDI | bac +2",
    description: "Développement d’applications web full stack. Mise en œuvre de projets complets intégrant authentification, gestion des données et interactions front-end / back-end optimisées.",
  },
    {
    year: "Septemrbe 2023 - Juin 2025",
    title: "Diplome universitaire Animaton et Gestion des activités sportives et culutrel (DEUST AGAPSC)",
    institution: "Université lyon 1 | bac +2",
    description: "Formation axée sur la gestion et l’animation d’équipes, la conduite de projets éducatifs, la coordination d’acteurs, la résolution de conflits et le renforcement des compétences en leadership et communication.",
  }
];

export const workExperienceData: TimelineItem[] = [
  {
    year: "2024 - Présent",
    title: "Développeur Full-Stack Indépendant",
    company: "Projets Personnels",
    description: "Développement d’applications web full stack incluant une plateforme e-commerce, une application de lecture audio et des API REST sécurisées. Approche orientée performance, expérience utilisateur et fiabilité des fonctionnalités.",
  },
    {
    year: "2022 - 2024",
    title: "Animateur/Directeur adjoint",
    company: "Venissieux/St-Priest",
    description: "Direction et animation d’équipes dans des projets éducatifs et socioculturels, incluant la conception et la mise en œuvre d’actions adaptées aux publics, la coordination des intervenants, la gestion des conflits, ainsi que le développement de compétences en leadership et en communication.",
  }
];