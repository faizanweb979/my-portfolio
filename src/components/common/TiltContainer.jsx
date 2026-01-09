import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * TILT CONTAINER COMPONENT
 * Purpose: Reusable 3D tilt effect container with mouse-follow parallax
 * Architecture: Single parent container handles all tilt transforms
 * 3D Effect: Uses CSS perspective and preserve-3d to create depth illusion on child elements
 * 
 * Why this approach:
 * - Single mouse position source prevents conflicting transforms
 * - Parent container tilt creates cohesive movement
 * - Child elements maintain relative positioning but appear 3D through CSS perspective
 * - Clean separation of concerns - container handles motion, children handle content
 */
const TiltContainer = ({ 
  children, 
  className = '', 
  intensity = 8, 
  perspective = 1000,
  duration = 0.6 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Single mouse position source for entire tilt effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage from center
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Apply 3D transforms ONLY to parent container
      // This creates cohesive movement where all child elements move as one solid piece
      gsap.to(container, {
        duration,
        rotationY: xPercent * intensity,
        rotationX: -yPercent * intensity,
        transformPerspective: perspective,
        ease: "power2.out"
      });
    };

    // Mouse leave handler to return to neutral position
    const handleMouseLeave = () => {
      gsap.to(container, {
        duration: duration * 1.5,
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out"
      });
    };

    // Add mouse listeners
    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Initial 3D setup - enables 3D depth illusion for child elements
    gsap.set(container, {
      transformPerspective: perspective,
      transformStyle: "preserve-3d"
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, perspective, duration]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        // CSS perspective creates 3D depth illusion
        // Child elements appear to have depth when container tilts
        transformStyle: "preserve-3d",
        perspective: `${perspective}px`
      }}
    >
      {children}
    </div>
  );
};

export default TiltContainer;