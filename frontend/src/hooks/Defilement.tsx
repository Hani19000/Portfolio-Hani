import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  velocity?: number; // Pour contrôler la vitesse
}

const Defilement: React.FC<MarqueeProps> = ({ text, velocity = 30 }) => {
  return (
    <div
      className="marquee-wrapper"
      style={{
        overflow: "hidden",
        width: "100vw",
        userSelect: "none",
        padding: "2rem 0",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }} // défile de la moitié pour une boucle infinie
        transition={{
          repeat: Infinity,
          duration: velocity,
          ease: "linear",
        }}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "fit-content",
        }}
      >
        {/* répète le texte plusieurs fois pour remplir l'écran */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              fontWeight: "900",
              textTransform: "uppercase",
              paddingRight: "4rem",
              color: "var(--color-primary)",
              opacity: 0.05, // Très léger comme sur Ribban
            }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Defilement;
