import { useMemo } from "react";

const HeaderParticles = ({ count = 20 }) => {
  /* Générer les positions une seule fois avec useMemo */
  const particles = useMemo(() => {
    const generateParticles = () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,
      }));
    return generateParticles();
  }, [count]);

  return (
    <div className="header__particles">
      {particles.map(({ id, left, delay, duration }) => (
        <span
          key={id}
          className="particle"
          style={{
            left: left + "%",
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default HeaderParticles;
