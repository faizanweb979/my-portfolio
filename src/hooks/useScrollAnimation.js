import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCROLL ANIMATION HOOK
 * Purpose: Reusable hook for GSAP scroll-triggered animations
 * Usage: Apply consistent scroll animations across components
 */
export const useScrollAnimation = (animationType = 'fadeUp', options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      trigger: element,
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
      ...options
    };

    let animation;

    switch (animationType) {
      case 'fadeUp':
        animation = gsap.fromTo(element,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultOptions
          }
        );
        break;

      case 'fadeLeft':
        animation = gsap.fromTo(element,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultOptions
          }
        );
        break;

      case 'fadeRight':
        animation = gsap.fromTo(element,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultOptions
          }
        );
        break;

      case 'scale':
        animation = gsap.fromTo(element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultOptions
          }
        );
        break;

      case 'stagger':
        const children = element.children;
        animation = gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: defaultOptions
          }
        );
        break;

      default:
        animation = gsap.fromTo(element,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultOptions
          }
        );
    }

    return () => {
      if (animation) animation.kill();
    };
  }, [animationType, options]);

  return elementRef;
};