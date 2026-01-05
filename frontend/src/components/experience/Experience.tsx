import React from "react";
import "./experience.css";
import ExperienceCards from "./components/ExperienceCards";
import HeaderParticles from "../header/components/HeaderParticles";

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ position: 'relative' }}>
      <HeaderParticles count={20} />
      <h5>Technologies</h5>
      <h2>Stack technique</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceCards type="frontend" />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceCards type="backend" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;