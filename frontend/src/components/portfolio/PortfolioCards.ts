import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";

/* Définition de l'interface */

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
    title: "E-commerce website",
    github: "https://github.com/Hani19000/E-commerce-website"
  },
  {
    id: 2,
    image: IMG2,
    title: "QR code",
    github: "https://github.com/Hani19000/QR-code"
  },
  {
    id: 3,
    image: IMG3,
    title: "Audio_player",
    github: "https://github.com/Hani19000/Audio_player"
  },
  {
    id: 4,
    image: IMG4,
    title: "Agence de voyage",
    github: "https://github.com/Hani19000/agence-de-voyage"
  },
  {
    id: 5,
    image: IMG5,
    title: "To Do List",
    github: "https://github.com/Hani19000/To-Do-List"
  },
  {
    id: 6,
    image: IMG6,
    title: "API REST Authentication",
    github: "https://github.com/Hani19000/API_REST_TYPESCRIPT"
  },
    {
    id: 7,
    image: IMG7,
    title: "Text-To-voice-converting",
    github: "https://github.com/Hani19000/Text-To-voice-converting"
  },
];

export default portfolioCards;