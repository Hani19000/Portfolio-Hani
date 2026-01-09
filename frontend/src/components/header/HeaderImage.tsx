import React from "react";

interface HeaderImageProps {
  src: string;
  alt?: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ src, alt = "Profile" }) => (
  <div className="me">
    <img src={src} alt={alt} width="400" height="500" loading="eager" />
  </div>
);

export default HeaderImage;
