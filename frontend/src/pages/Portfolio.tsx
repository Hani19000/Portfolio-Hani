import "../styles/portfolio.css";
import portfolioCards, { PortfolioItem } from "../Data/PortfolioCards";
import { FaGithub } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
/* Import Swiper React components & modules */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

/* Import Swiper styles */
import "swiper/css";
import "swiper/css/pagination";

const Portfolio: React.FC = () => {
  if (!portfolioCards || portfolioCards.length === 0) return null;

  return (
    <section id="portfolio">
      <h5>Réalisations</h5>
      <h2>Mes Projets</h2>

      <Swiper
        className="container portfolio__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        observer={true}
        observeParents={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          600: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {portfolioCards.map(({ id, image, title, links }: PortfolioItem) => (
          <SwiperSlide key={id} className="portfolio__items">
            <div className="portfolio__items-image">
              <img
                src={image}
                alt={title}
                width="400"
                height="500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>{title}</h3>

            <div
              className="protfolio__item-cta"
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "left",
                flexWrap: "wrap",
              }}
            >
              {/* Bouton GitHub - S'affiche uniquement si github existe dans links */}
              {links.github && (
                <a
                  href={links.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <FaGithub /> GitHub
                </a>
              )}

              {/* Bouton Demo/Behance - S'affiche uniquement si demo existe dans links */}
              {links.demo && (
                <a
                  href={links.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <FaEarthAfrica /> Demo
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
