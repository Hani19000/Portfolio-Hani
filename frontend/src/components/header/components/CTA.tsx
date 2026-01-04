import React from 'react';
import CV from "../../../assets/cv.pdf"; // TypeScript validera via vite-env.d.ts

const CTA: React.FC = () => (
  <div className="cta">
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's talk</a>
  </div>
);

export default CTA;