import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hani-derrouiche-199461372/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/Hani19000" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;