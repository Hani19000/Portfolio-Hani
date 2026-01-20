import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollZoomProps {
  children: React.ReactNode;
  image: string;
}

const ScrollZoomSection: React.FC<ScrollZoomProps> = ({ children, image }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // On suit la progression du scroll sur ce conteneur spécifique
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // On transforme le scroll (0 à 1) en échelle (1 à 1.5) et en opacité
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="scroll-zoom-container"
      style={{ height: "150vh", position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* L'image qui zoom en arrière-plan */}
        <motion.div
          style={{
            scale,
            opacity,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            zIndex: -1,
          }}
        />

        {/* Le contenu (titres, boutons) qui reste par-dessus */}
        <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollZoomSection;
