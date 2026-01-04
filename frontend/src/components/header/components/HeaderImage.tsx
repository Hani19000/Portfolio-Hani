import React from 'react';
import OptimizedImage from '../../common/OptimizedImage';
interface HeaderImageProps {
  src: string;
  alt?: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ src, alt = "Profile" }) => (
  <div className="me">
    <OptimizedImage src={src} alt={alt} />
  </div>
);

export default HeaderImage;