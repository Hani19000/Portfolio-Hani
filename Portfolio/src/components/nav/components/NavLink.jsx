import  useNavActive  from './NavActive'
import NavData from './NavLinkData';

const NAV_LINKS = NavData;
// On définit les liens dans un tableau

function NavLink() {
  const { activeNav, handleNavClick } = useNavActive();

return (
    <nav>
      {NAV_LINKS.map(({ id, icon }) => (
        <a
          key={id}
          href={id}
          // On utilise la nouvelle fonction de clic ici
          onClick={(e) => handleNavClick(e, id)} 
          className={activeNav === id ? "active" : ""}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}
export default NavLink;