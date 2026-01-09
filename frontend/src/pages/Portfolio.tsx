import React from "react";
import "../styles/portfolio.css";
import portfolioCards, { PortfolioItem } from "../Data/PortfolioCards";
import HeaderParticles from "../components/header/HeaderParticles";


/* Import Swiper React components & modules */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

/* Import Swiper styles */
import "swiper/css";
import "swiper/css/pagination";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" style={{ position: "relative" }}>
      <HeaderParticles count={20} />
      <h5>Réalisations </h5>
      <h2>Mes Projets</h2>

      <Swiper
        className="container portfolio__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          600: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {portfolioCards.map(({ id, image, title, github }: PortfolioItem) => {
          return (
            <SwiperSlide key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img
                  src={image}
                  alt={title}
                  width="400"
                  height="500"
                  loading="eager"
                />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
