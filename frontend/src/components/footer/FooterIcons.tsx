import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const FooterIcons: React.FC = () => (
  <div className="footer__socials">
    <a
      href="https://www.linkedin.com/in/hani-derrouiche-199461372/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
    <a href="https://github.com/Hani19000" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
  </div>
);

export default FooterIcons;
