import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";
import  ServicesCards  from "./ServicesCards"; 

function Services() {
  return (
    <section id="services-section">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {ServicesCards.map(({ title, features }, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{title}</h3>
            </div>

            <ul className="service__list">
              {features.map((feature, i) => (
                <li key={i}>
                  <FaCheck className="service__list-icon" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;