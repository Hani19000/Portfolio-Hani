import React from 'react';
import CV from "../../../assets/cv.pdf"; 

const CTA: React.FC = () => (
  <div className="cta">
    <a href={CV} target='_blank' rel="noreferrer" className='btn'>Visualiser Mon CV</a>
    <a href="#contact" className='btn btn-primary'>Me Contacter</a>
  </div>
);

export default CTA;