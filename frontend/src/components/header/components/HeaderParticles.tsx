import { useMemo, useEffect, useState } from 'react';

interface ParticlesProps {
  count?: number;
}

const HeaderParticles = ({ count = 15 }: ParticlesProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particleCount = isMobile ? Math.floor(count / 2) : count;

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + (Math.random() * 7),
    }));
  }, [particleCount]);

  return (
    <div className="header__particles">
      {particles.map(({ id, left, delay, duration }) => (
        <span
          key={id}
          className="particle"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default HeaderParticles;