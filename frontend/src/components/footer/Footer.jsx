import "./footer.css";
import footerLinks from "./components/FooterLinks";
import FooterIcons from "./components/FooterIcons";
import FooterLinkItem from "./components/FooterLinksItem";
import FooterCopy from "./components/FooterCopy";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hani
      </a>
      <ul className="permalinks">
        {footerLinks.map(({ id, href, text }) => (
          <FooterLinkItem key={id} href={href} text={text} />
        ))}
      </ul>

      <FooterIcons />

      <FooterCopy />
    </footer>
  );
}
export default Footer;
