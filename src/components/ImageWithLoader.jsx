import React, { useState } from "react";

/**
 * Image component with loading placeholder and smooth fade-in
 * Shows shimmer effect while image is loading
 */
const ImageWithLoader = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  aspectRatio = "auto",
  objectFit = "cover",
  objectPosition = "center",
  loading = "lazy",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Shimmer placeholder - shown while loading */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 animate-pulse"
          style={{ background: "linear-gradient(90deg, var(--cream) 0%, var(--ivory) 50%, var(--cream) 100%)" }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(182,138,62,0.1) 50%, transparent 100%)",
              animation: "shimmer 2s infinite"
            }}
          />
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          objectFit,
          objectPosition,
          aspectRatio
        }}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        {...props}
      />

      {/* Error state - shown if image fails to load */}
      {hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "var(--cream)" }}
        >
          <p className="text-sm" style={{ color: "var(--maroon-soft)" }}>
            Image unavailable
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageWithLoader;
