import React from "react";
import "./portfolio.css";
import portfolioCards from "./PortfolioCards";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioCards.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-cta">
                <a href="" className="btn" target="_blank">
                  {github}
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={portfolioCards.image} alt="" />
          </div>
          <h3>this is a portfolio items title</h3>
          <div className="protfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}
export default Portfolio;
