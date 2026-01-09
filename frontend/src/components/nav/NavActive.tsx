import { useState, useEffect, MouseEvent } from "react";

interface NavActiveReturn {
  activeNav: string;
  handleNavClick: (e: MouseEvent<HTMLAnchorElement>, id: string) => void;
}

function useNavActive(): NavActiveReturn {
  const [activeNav, setActiveNav] = useState<string>("#");

  useEffect(() => {
    const sectionIds = [
      "about",
      "experience",
      "services-section",
      "portfolio",
      "testimonials",
      "contact",
    ];

    // On observe les sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Déclenche quand la section est au milieu
        threshold: 0,
      }
    );

    // Observer le header pour le retour en haut (#)
    const header = document.querySelector("header");
    if (header) {
      const headerObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setActiveNav("#");
      });
      headerObserver.observe(header);
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveNav(id);

    const targetId = id.replace("#", "");
    const element =
      targetId === ""
        ? document.querySelector("header")
        : document.getElementById(targetId);

    element?.scrollIntoView({ behavior: "smooth" });

    const url = id === "#" ? "/" : window.location.pathname;
    window.history.replaceState(null, "", url);
  };

  return { activeNav, handleNavClick };
}

export default useNavActive;
