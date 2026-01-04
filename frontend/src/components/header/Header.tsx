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
      title="Des idées au code, donnons vie à vos projets"
      role="développeur web full-stack"
      description="Vous avez un projet ou une idée à concrétiser ? Parlons-en je serai ravi d’échanger et de voir comment je peux vous aider à la réaliser."
      image={ME}
    />
  </header>
);

export default Header;