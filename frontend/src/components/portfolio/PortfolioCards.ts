// src/components/portfolio/PortfolioCards.ts

import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.webp";

// Définition de l'interface
export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  github: string;
}

const portfolioCards: PortfolioItem[] = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Item 1",
    github: "https://github.com/votre-lien-1"
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio Item 2",
    github: "https://github.com/votre-lien-2"
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio Item 3",
    github: "https://github.com/votre-lien-3"
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Item 4",
    github: "https://github.com/votre-lien-4"
  },
  {
    id: 5,
    image: IMG5,
    title: "Portfolio Item 5",
    github: "https://github.com/votre-lien-5"
  },
  {
    id: 6,
    image: IMG6,
    title: "Portfolio Item 6",
    github: "https://github.com/votre-lien-6"
  },
];

export default portfolioCards;