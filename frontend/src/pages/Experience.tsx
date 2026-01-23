import React from "react";
import "./../styles/experience.css";
import Defilement from "../hooks/Defilement";
import experienceItems from "../Data/ExperiencesItems";

const Experience: React.FC = () => {
  // Filtrage par catégories précises
  const frontend = experienceItems.filter((i) => i.type === "frontend");
  const backend = experienceItems.filter((i) => i.type === "backend");
  // Note: Pense à bien mettre à jour ton fichier ExperiencesItems.tsx avec ces types
  const bdd = experienceItems.filter((i) => i.type === "bdd");
  const devops = experienceItems.filter((i) => i.type === "devops");

  return (
    <section id="experience">
      <h5>Mes Compétences</h5>
      <h2>Stack Technique</h2>

      {/* --- PHRASE ARCHITECTURE UML --- */}
      <div className="container experience__uml">
        <p>
          Ma méthodologie repose sur une phase de conception rigoureuse où la
          modélisation <strong>UML</strong> devient la colonne vertébrale du
          projet. En structurant l'architecture en amont, je garantis une
          scalabilité optimale et une documentation technique native,
          transformant la complexité métier en un code clair et maintenable.
        </p>
      </div>

      <div className="experience__marquee-stack">
        <div className="marquee-group">
          <h4>Frontend & Design</h4>
          <Defilement velocity={25}>
            {frontend.map((item, index) => (
              <div key={index} className="tech-item">
                {item.icon} <span>{item.title}</span>
              </div>
            ))}
          </Defilement>
        </div>

        <div className="marquee-group">
          <h4>Backend Development</h4>
          <Defilement velocity={30} direction="right">
            {backend.map((item, index) => (
              <div key={index} className="tech-item">
                {item.icon} <span>{item.title}</span>
              </div>
            ))}
          </Defilement>
        </div>

        <div className="marquee-group">
          <h4>Bases de données</h4>
          <Defilement velocity={20}>
            {bdd.map((item, index) => (
              <div key={index} className="tech-item">
                {item.icon} <span>{item.title}</span>
              </div>
            ))}
          </Defilement>
        </div>

        <div className="marquee-group">
          <h4>DevOps & Monitoring</h4>
          <Defilement velocity={35} direction="right">
            {devops.map((item, index) => (
              <div key={index} className="tech-item">
                {item.icon} <span>{item.title}</span>
              </div>
            ))}
          </Defilement>
        </div>
      </div>
    </section>
  );
};

export default Experience;
