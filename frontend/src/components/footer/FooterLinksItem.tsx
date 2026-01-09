import React from 'react';

interface FooterLinkItemProps {
  href: string;
  text: string;
  isLogo?: boolean;
}

const FooterLinkItem: React.FC<FooterLinkItemProps> = ({ href, text, isLogo }) => (
  <li>
    <a href={href} className={isLogo ? "footer__logo" : ""}>
      {text}
    </a>
  </li>
);

export default FooterLinkItem;