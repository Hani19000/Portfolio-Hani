import './header.css';
import ME from '../../assets/me.webp';
import HeaderParticles from './components/HeaderParticles';
import HeaderContent from './components/HeaderContent';


const Header = () => (
  <header style={{ position: 'relative' }}> 
    <HeaderParticles count={20} />
    <HeaderContent 
      name="Hani Derrouiche"
      title="Des idées au code, donnons vie à vos projets"
      role="développeur web full-stack"
      description="Passionné par les technologies web modernes, j'aime concevoir des applications performantes et bien pensées."
      image={ME}
    />
  </header>
);

export default Header;