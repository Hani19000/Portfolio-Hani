import React from "react";
import "./about.css";
import ME from "../../assets/me-about.webp";
import aboutCards from "./AboutCards";
function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {aboutCards.map((card, index) => (
              <article className="about__card" key={index}>
                <span className="about__icon">{card.icon}</span>
                <h5>{card.title}</h5>
                <small>{card.description}</small>
              </article>
            ))}
          </div>

          <p>
            Passionné par les technologies web modernes, j’aime concevoir des
            applications performantes et bien pensées. Du design à la mise en
            production, je m’implique dans chaque étape pour créer des solutions
            solides et évolutives.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
