import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DefilementProps {
  children: ReactNode;
  velocity?: number;
  direction?: "left" | "right";
}

const Defilement: React.FC<DefilementProps> = ({
  children,
  velocity = 20,
  direction = "left",
}) => {
  const xTranslation = direction === "left" ? ["0%", "-20%"] : ["-20%", "0%"];

  return (
    <div className="marquee-container">
      <motion.div
        animate={{ x: xTranslation }}
        transition={{ repeat: Infinity, duration: velocity, ease: "linear" }}
        className="marquee-content"
      >
        {/* répète 10 fois pour combler le vide si tu as peu d'items */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="marquee-item-wrapper">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Defilement;
