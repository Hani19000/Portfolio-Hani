import { useState, useEffect, MouseEvent } from "react";

/***  Interface définissant les valeurs de retour du hook de navigation. ***/

interface NavActiveReturn {
  activeNav: string;
  handleNavClick: (e: MouseEvent<HTMLAnchorElement>, id: string) => void;
}

/*** Hook personnalisé permettant de synchroniser l'état de la navigation avec le défilement. Utilise l'API Intersection Observer pour détecter la section active dans le viewport. ***/

function useNavActive(): NavActiveReturn {
  const [activeNav, setActiveNav] = useState<string>("#");

  useEffect(() => {
    // Liste des identifiants correspondant aux IDs définis dans les composants de section.
    const sectionIds = [
      "about",
      "experience",
      "services-section",
      "portfolio",
      // "testimonials",
      "contact",
    ];

    // Configuration de l'IntersectionObserver.Le rootMargin à -30% crée une zone de détection centrale pour éviter les chevauchements.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(
              entry.target.tagName === "HEADER" ? "#" : `#${entry.target.id}`,
            );
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.1,
      },
    );
    /**
     * Initialise l'observation des éléments du DOM.
     * Cette fonction cible le header et les sections préalablement identifiées.
     */
    const initObserver = () => {
      // Observer le Header (déjà présent)
      const header = document.querySelector("header");
      if (header) observer.observe(header);

      // Observer les sections (qui arrivent via lazy load)
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    };

    // On tente une première fois
    initObserver();

    /**
     * Temporisation nécessaire pour pallier le chargement asynchrone (React.lazy).
     * Garantit l'attachement de l'observateur une fois les composants injectés dans le DOM.
     */
    const timeoutId = setTimeout(initObserver, 1000);
    // Nettoyage des processus asynchrones et des observateurs au démontage du composant.
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []); // [] car on veut que l'observer soit configuré au montage

  /**
   * Gère le défilement fluide lors d'un clic sur un élément de navigation.
   * @param e Événement de clic.
   * @param id Identifiant de la section cible.
   */
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    // Neutralisation du comportement par défaut pour éviter l'altération de l'URL. (monportfolio.fr/) au lieu de (monportfolio.fr/#portfolio)
    e.preventDefault();
    setActiveNav(id);
    const targetId = id.replace("#", "");
    const element =
      targetId === ""
        ? document.querySelector("header")
        : document.getElementById(targetId);
    // Exécution du défilement fluide vers l'élément cible si ce dernier est présent.
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return { activeNav, handleNavClick };
}

export default useNavActive;

/* Par défaut, une balise <a href="#portfolio"> possède deux fonctions natives :
-Saut immédiat : Elle déplace la vue instantanément vers la section, sans animation.
-Mise à jour de l'URL : Elle ajoute automatiquement #portfolio à la fin de l'adresse dans la barre du navigateur.
L'instruction e.preventDefault() dit au navigateur : "Stoppe ces deux actions prioritaires, je vais gérer la suite moi-même en JavaScript" */
