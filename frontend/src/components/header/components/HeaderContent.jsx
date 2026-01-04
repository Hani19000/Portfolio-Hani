// components/HeaderContent.jsx
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import HeaderTitle from './HeaderTitle';
import HeaderImage from './HeaderImage';

const HeaderContent = ({ name, title, role, description, image }) => (
  <div className="container header__container">
    <h5>{name}</h5>
    <HeaderTitle fullText={title} />
    <h5 className="text-light">{role}</h5>
    <p className="header__description">{description}</p>
    <CTA />
    <HeaderSocials />
    <HeaderImage src={image} alt={name} />
    <a href="#contact" className="scroll__down">Scroll Down</a>
  </div>
);

export default HeaderContent;