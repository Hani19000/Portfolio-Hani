import React from 'react';
import './header.css';
import ME from '../../assets/me.webp';
import HeaderParticles from './components/HeaderParticles';
import HeaderContent from './components/HeaderContent';


const Header: React.FC = () => (
  <header style={{ position: 'relative' }}> 
    <HeaderParticles count={20} />
    <HeaderContent 
      name="Hani Derrouiche"
      title="Des Idées Au Dode, Donnons Vie À Vos Projets"
      role="Développeur Web Full-Stack"
      description="Un projet en tête ? Discutons-en pour voir comment je peux vous aider à le concrétiser."
      image={ME}
    />
  </header>
);

export default Header;