import React from "react";
import "../styles/footer.css";
import footerLinks, { FooterLink } from "../Data/footer/FooterLinks";
import FooterIcons from "../components/footer/FooterIcons";
import FooterLinkItem from "../components/footer/FooterLinksItem";
import FooterCopy from "../components/footer/FooterCopy";

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hani
      </a>
      <ul className="permalinks">
        {footerLinks.map(({ id, href, text }: FooterLink) => (
          <FooterLinkItem key={id} href={href} text={text} />
        ))}
      </ul>

      <FooterIcons />
      <FooterCopy />
    </footer>
  );
};

export default Footer;