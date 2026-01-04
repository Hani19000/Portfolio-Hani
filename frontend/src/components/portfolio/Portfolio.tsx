import React from "react";
import "./portfolio.css";
import portfolioCards, { PortfolioItem } from "./PortfolioCards";
import HeaderParticles from "../header/components/HeaderParticles";

/* Import Swiper React components & modules */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

/* Import Swiper styles */
import "swiper/css";
import "swiper/css/pagination";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" style={{ position: 'relative' }}>
      <HeaderParticles count={20} />
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper 
        className="container portfolio__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {portfolioCards.map(({ id, image, title, github }: PortfolioItem) => {
          return (
            <SwiperSlide key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Portfolio;