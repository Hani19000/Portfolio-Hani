import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-container ${className}`}>
      {!isLoaded && (
        <div 
          className="image-skeleton" 
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : 'auto' 
          }} 
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
};

export default OptimizedImage;