import './header.css'
import CTA from './components/CTA'
import ME from '../../assets/me.webp'
import HeaderSocials from "./components/HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Hani</h1>
        <h5 className="text-light">Full stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" loading="lazy"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header;