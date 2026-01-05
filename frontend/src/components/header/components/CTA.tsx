import React from 'react';
import CV from "../../../assets/cv.pdf"; 

const CTA: React.FC = () => (
  <div className="cta">
    <a href={CV} download className='btn'>Télécharger Mon CV</a>
    <a href="#contact" className='btn btn-primary'>Me Contacter</a>
  </div>
);

export default CTA;