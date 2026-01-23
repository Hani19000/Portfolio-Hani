import "../styles/portfolio.css";
import portfolioCards, { PortfolioItem } from "../Data/PortfolioCards";
import { FaGithub, FaBehanceSquare } from "react-icons/fa";

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
        /* Ajout des observateurs pour éviter l'erreur getComputedStyle */
        observer={true}
        observeParents={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          600: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {portfolioCards.map(
          ({ id, image, title, Plateform, Link }: PortfolioItem) => (
            <SwiperSlide key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img
                  src={image}
                  alt={title}
                  width="400"
                  height="500"
                  loading="lazy"
                  /* Optimisation du rendu */
                  decoding="async"
                />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-cta">
                <a
                  href={Link}
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
                  {/* Icône dynamique + Texte dynamique */}
                  {Plateform === "Behance" ? <FaBehanceSquare /> : <FaGithub />}
                  {Plateform === "Behance"
                    ? "Voir sur Behance"
                    : "Voir sur Github"}
                </a>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default Portfolio;
