import { useState, useEffect, MouseEvent } from "react";

/* Définition du type de retour pour le hook */
interface NavActiveReturn {
  activeNav: string;
  handleNavClick: (e: MouseEvent<HTMLAnchorElement>, id: string) => void;
}

function useNavActive(): NavActiveReturn {
  const [activeNav, setActiveNav] = useState<string>("#");

  useEffect(() => {
    const sectionIds = ["#", "about", "experience", "services-section", "portfolio", "testimonials", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionIds.forEach((id) => {
        const section = id === "#" ? document.querySelector("header") : document.getElementById(id);
        
        if (section && 
            scrollPosition >= (section as HTMLElement).offsetTop && 
            scrollPosition < (section as HTMLElement).offsetTop + (section as HTMLElement).offsetHeight) {
          setActiveNav(id === "#" ? "#" : `#${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveNav(id);

    const targetId = id.replace('#', '');
    const element = targetId === '' ? document.querySelector('header') : document.getElementById(targetId);
    
    element?.scrollIntoView({ behavior: 'smooth' });

    const cleanUrl = id === '#' ? '/' : `/${targetId}`;
    window.history.pushState(null, null, cleanUrl);
  };

  return { activeNav, handleNavClick };
}

export default useNavActive;