import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  placeholderSrc?: string;
  lazy?: boolean;
}

export function Image(props: ImageProps) {
  const {
    src,
    alt,
    className = '',
    fallbackSrc,
    placeholderSrc,
    lazy = true,
    ...rest
  } = props;
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt="loading"
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
      )}
      <img
        src={hasError ? fallbackSrc || placeholderSrc || '' : src}
        alt={alt}
        className={`object-cover transition-opacity duration-500 size-full ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={lazy ? 'lazy' : undefined}
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        {...rest}
      />
    </div>
  );
}
