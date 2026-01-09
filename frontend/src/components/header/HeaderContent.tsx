import React from 'react';
import CTA from './CTA';
import HeaderSocials from '../../Data/header/HeaderSocials';
import HeaderTitle from './HeaderTitle';
import HeaderImage from './HeaderImage';

interface HeaderContentProps {
  name: string;
  title: string;
  role: string;
  description: string;
  image: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ name, title, role, description, image }) => (
  <div className="container header__container">
    <h5>{name}</h5>
    <HeaderTitle fullText={title} />
    <h5 className="text-light">{role}</h5>
    <h5 className="header__description">{description}</h5>
    <CTA />
    <HeaderSocials />
    <HeaderImage src={image} alt={name} />
    <a href="#contact" className="scroll__down">Scroll Down</a>
  </div>
);

export default HeaderContent;