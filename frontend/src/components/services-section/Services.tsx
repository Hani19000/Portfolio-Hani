import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";
/* Importation des données et du type */
import ServicesCards, { ServiceItem } from "./ServicesCards"; 
import HeaderParticles from "../header/components/HeaderParticles";

const Services: React.FC = () => {
  return (
<section id="services-section" style={{ position: 'relative' }}>
      <HeaderParticles count={20} />
      <h5>Offre De Services</h5>
      <h2>Expertise & Accompagnement</h2>

      <div className="container services__container">
        {ServicesCards.map(({ title, features, price }: ServiceItem, index: number) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{title}</h3>
            </div>

            <ul className="service__list">
              {features.map((feature: string, i: number) => (
                <li key={i}>
                  <FaCheck className="service__list-icon" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            <div className="service__footer">
              <span className="service__price">{price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;