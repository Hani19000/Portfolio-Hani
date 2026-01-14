import React from "react";
import CTA from "./CTA";
import HeaderSocials from "../../Data/HeaderSocials";
import HeaderTitle from "./HeaderTitle";
import HeaderImage from "./HeaderImage";
import Loading from "../Loading";
interface HeaderContentProps {
  name: string;
  title: string;
  role: string;
  description: string;
  image: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  name,
  title,
  role,
  description,
  image,
}) => (
  <div className="container header__container">
    <Loading>
      <h5>{name}</h5>
    </Loading>
    <HeaderTitle fullText={title} />
    <Loading>
      <h5 className="text-light">{role}</h5>
    </Loading>
    <Loading>
      <p className="header__description">{description}</p>
    </Loading>
    <Loading className="header__cta">
      <CTA />
    </Loading>
    <HeaderSocials />
    <HeaderImage src={image} alt={name} />
    <a href="#contact" className="scroll__down">
      Scroll Down
    </a>
  </div>
);

export default HeaderContent;
