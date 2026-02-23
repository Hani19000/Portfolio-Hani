import IMG1 from "../assets/portfolio1.webp";
import IMG2 from "../assets/portfolio2.webp";
import IMG3 from "../assets/portfolio3.webp";
import IMG4 from "../assets/portfolio4.webp";
import IMG5 from "../assets/portfolio5.webp";
import IMG6 from "../assets/portfolio6.webp";
import IMG7 from "../assets/portfolio7.webp";
import IMG8 from "../assets/FBurger.webp";

/* Définition de l'interface structurée */
export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  links: {
    github?: string | { frontend: string; backend: string };
    demo?: string;
  };
}

const portfolioCards: PortfolioItem[] = [
  {
    id: 1,
    image: IMG1,
    title: "ECOM-WATCH || E-commerce website",
    links: {
      github: {
        frontend: "https://github.com/Hani19000/ECOM-WATCH-Frontend",
        backend: "https://github.com/Hani19000/ECOM-WATCH-Bakcend",
      },
      demo: "https://ecomwatch.vercel.app",
    },
  },
  {
    id: 2,
    image: IMG8,
    title: "FBurger restaurant full stack platform",
    links: {
      github: {
        frontend: "https://github.com/Hani19000/FBurger-Frontend",
        backend: "https://github.com/Hani19000/FBurger-Backend",
      },
      demo: "https://fburger.vercel.app",
    },
  },
  {
    id: 3,
    image: IMG2,
    title: "QR code",
    links: {
      github: "https://github.com/Hani19000/QR-code",
    },
  },
  {
    id: 4,
    image: IMG3,
    title: "Agence de voyage",
    links: {
      github: "https://github.com/Hani19000/agence-de-voyage",
    },
  },
  {
    id: 5,
    image: IMG4,
    title: "Audio player",
    links: {
      github: "https://github.com/Hani19000/Audio_player",
    },
  },
  {
    id: 6,
    image: IMG5,
    title: "To Do List",
    links: {
      github: "https://github.com/Hani19000/To-Do-List",
    },
  },
  {
    id: 7,
    image: IMG6,
    title: "API REST Authentication",
    links: {
      github: "https://github.com/Hani19000/API_REST_TYPESCRIPT",
    },
  },
  {
    id: 8,
    image: IMG7,
    title: "Text-To-voice-converting",
    links: {
      github: "https://github.com/Hani19000/Text-To-voice-converting",
    },
  },
];

export default portfolioCards;
