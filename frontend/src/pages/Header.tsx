import "../styles/header.css";
import ME from "../assets/me.webp";
import HeaderContent from "../components/header/HeaderContent";

const Header: React.FC = () => (
  <header>
    <HeaderContent
      name="Hani Derrouiche"
      title="Des Idées Au Code, Donnons Vie À Vos Projets"
      role="Développeur Web Full-Stack"
      description="Un projet en tête ? Discutons-en pour voir comment je peux vous aider à le concrétiser."
      image={ME}
    />
  </header>
);

export default Header;
