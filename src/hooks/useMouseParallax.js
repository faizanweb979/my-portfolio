import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * MOUSE PARALLAX HOOK
 * Purpose: Create smooth mouse-following parallax effects
 * Usage: Add subtle 3D depth to elements based on cursor position
 */
export const useMouseParallax = (intensity = 1, smooth = 0.8) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage from center
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Apply parallax transform with intensity multiplier
      gsap.to(element, {
        duration: smooth,
        x: xPercent * intensity * 20,
        y: yPercent * intensity * 20,
        rotationY: xPercent * intensity * 5,
        rotationX: -yPercent * intensity * 5,
        ease: "power2.out"
      });
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, smooth]);

  return elementRef;
};