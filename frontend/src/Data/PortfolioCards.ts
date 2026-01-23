import IMG1 from "../assets/portfolio1.webp";
import IMG2 from "../assets/portfolio2.webp";
import IMG3 from "../assets/portfolio3.webp";
import IMG4 from "../assets/portfolio4.webp";
import IMG5 from "../assets/portfolio5.webp";
import IMG6 from "../assets/portfolio6.webp";
import IMG7 from "../assets/portfolio7.webp";
import IMG8 from "../assets/FBurger.webp";


/* Définition de l'interface */
export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
Plateform: "Github" | "Behance";
  Link: string;
}

const portfolioCards: PortfolioItem[] = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce website",
    Plateform: "Github",
    Link : "https://github.com/Hani19000/E-commerce-website",
  },
  {
    id: 2,
    image: IMG8,
    title: "FBurger (UI/UX)",
    Plateform: "Behance",
    Link :"https://www.behance.net/gallery/242794027/Design-restaurant-fictif?",
  },
  {
    id: 3,
    image: IMG2,
    title: "QR code",
    Plateform: "Github",
    Link :"https://github.com/Hani19000/QR-code",
  },
  {
    id: 4,
    image: IMG3,
    title: "Agence de voyage",
    Plateform: "Github",
    Link :"https://github.com/Hani19000/Audio_player",
  },
  {
    id: 5,
    image: IMG4,
    title: "Audio_player",
    Plateform: "Github",
    Link :"https://github.com/Hani19000/agence-de-voyage",
  },
  {
    id: 6,
    image: IMG5,
    title: "To Do List",
    Plateform:"Github",
    Link : "https://github.com/Hani19000/To-Do-List",
  },
  {
    id: 7,
    image: IMG6,
    title: "API REST Authentication",
    Plateform:"Github",
    Link : "https://github.com/Hani19000/API_REST_TYPESCRIPT",
  },
  {
    id: 8,
    image: IMG7,
    title: "Text-To-voice-converting",
    Plateform:"Github",
    Link : "https://github.com/Hani19000/Text-To-voice-converting",
  },
];

export default portfolioCards;
