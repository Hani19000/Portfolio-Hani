import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

const Loading = ({ children }: RevealProps) => {
  return (
    <motion.div
      // État de départ : invisible et légèrement décalé vers le bas
      initial={{ opacity: 0, y: 150 }}
      // État final quand il entre dans le champ de vision
      whileInView={{ opacity: 1, y: 0 }}
      // Options de déclenchement
      viewport={{ once: true, margin: "-20px" }}
      // Transition douce : 0.8 seconde
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Loading;

//ReactNode = une variable qui dit qu'elle peut être n'importe quoi que React est capable d'afficher à l'écran (un element jsx : <div>)(string ou nombre ect)
