import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, className = "", direction = "" }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const directionClass = direction ? `reveal-${direction}` : "";

  return (
    <div
      ref={elementRef}
      className={`reveal ${directionClass} ${isVisible ? "active" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
