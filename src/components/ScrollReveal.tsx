"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Once revealed, we don't need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px", // offset to trigger slightly before element is centered
      },
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";
  const combinedClass =
    `reveal-init ${isRevealed ? "revealed" : ""} ${delayClass} ${className}`.trim();

  return (
    <div ref={ref} className={combinedClass}>
      {children}
    </div>
  );
}
