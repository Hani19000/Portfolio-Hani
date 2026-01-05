import React from "react";
import "./about.css";
import ME from "../../assets/me-about.webp";
import Timeline from "./components/Timeline";
import HeaderParticles from "../header/components/HeaderParticles";
import {
  aboutCards,
  educationData,
  workExperienceData,
  AboutCardItem,
} from "./components/AboutCards";

const About: React.FC = () => {
  return (
    <section id="about" style={{ position: "relative" }}>
      <HeaderParticles count={20} />
      <h5>Mon Parcours</h5>
      <h2>À Propos De Moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt="Photo de profil"
              width={360}
              height={440}
              className="about-img"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {aboutCards.map(
              ({ icon, title, description }: AboutCardItem, i) => (
                <article className="about__card" key={i}>
                  <span className="about__icon">{icon}</span>
                  <h5>{title}</h5>
                  <small>{description}</small>
                </article>
              )
            )}
          </div>

          <p>
            Bonjour ! Je suis Hani Derrouiche, développeur web full-stack
            passionné par la création d'application web complète fonctionnelles
            et performantes, en accordant une grande importance à la qualité du
            code et aux bonnes pratiques. J’aime comprendre ce que je développe
            et chercher des solutions propres, adaptées aux besoins réels d’un
            projet..
          </p>

          <a href="#contact" className="btn btn-primary">
            Me Contacter
          </a>
        </div>
      </div>

      <div className="container about__timeline-wrapper">
        <Timeline data={educationData} type="education" />
        <Timeline data={workExperienceData} type="work" />
      </div>
    </section>
  );
};

export default About;
