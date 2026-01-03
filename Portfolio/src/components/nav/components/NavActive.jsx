import { useState, useEffect } from "react";

function NavActive() {
  const [activeNav, setActiveNav] = useState("#");

  const sectionIds = ["#", "about", "experience", "services-section", "portfolio", "testimonials", "contact"];

  // --- LOGIQUE DU SCROLL (Automatique) ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionIds.forEach((id) => {
        const section = id === "#" ? document.querySelector("header") : document.getElementById(id);
        
        section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight &&
          setActiveNav(id === "#" ? "#" : `#${id}`);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- LOGIQUE DU CLIC (Manuel) ---
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveNav(id); // On change l'état immédiatement pour la réactivité visuelle

    const targetId = id.replace('#', '');
    const element = targetId === '' ? document.querySelector('header') : document.getElementById(targetId);
    
    element?.scrollIntoView({ behavior: 'smooth' });

    // Nettoyage de l'URL
    const cleanUrl = id === '#' ? '/' : `/${targetId}`;
    window.history.pushState(null, null, cleanUrl);
  };

  // On retourne TOUT ce dont le composant NavLink a besoin
  return { activeNav, handleNavClick };
}

export default NavActive;