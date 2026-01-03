function FooterLinkItem({ href, text, isLogo }) {
  return (
    <li>
      <a href={href} className={isLogo ? "footer__logo" : ""}>
        {text}
      </a>
    </li>
  );
}

export default FooterLinkItem;
