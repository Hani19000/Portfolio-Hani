import React from "react";
import "./footer.css";
import footerLinks, { FooterLink } from "./components/FooterLinks";
import FooterIcons from "./components/FooterIcons";
import FooterLinkItem from "./components/FooterLinksItem";
import FooterCopy from "./components/FooterCopy";

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