import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import developerImage from '../../assets/images/my img 5.png';
import { portfolioConfig } from '../../config/portfolio';

/**
 * HERO BACKGROUND COMPONENT
 * Purpose: Unified background layer with seamless image integration
 * Background: Uses global #020617 background system for consistency
 * Architecture: Single background layer (not split left/right sections)
 * Image Strategy: Clearly visible on all devices with controlled blending
 */
const HeroBackground = () => {
    const backgroundRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Subtle floating animation for background image
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;

            // Gentle parallax movement for depth
            gsap.to(imageRef.current, {
                duration: 1.5,
                x: xPercent * 12,
                y: yPercent * 12,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={backgroundRef}
            className="absolute inset-0 w-full h-full bg-primary"
            style={{
                // Global background system - consistent #020617 across all sections
                background: `radial-gradient(ellipse at center, ${portfolioConfig.theme.background.primary} 0%, ${portfolioConfig.theme.background.primary} 60%, #010510 100%)`
            }}
        >
            {/* Right-side Developer Image - Clearly Visible */}
            <div
                ref={imageRef}
                className="absolute right-0 top-0 h-full"
                style={{
                    width: 'clamp(45%, 55vw, 65%)',
                    opacity: '0.95',
                    // Soft edge blending - image clearly visible
                    maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                }}
            >
                <img
                    src={developerImage}
                    alt="Developer"
                    className="w-full h-full object-contain"
                    style={{
                        // Minimal filtering - image stays bright and visible
                        filter: 'brightness(1) contrast(1.05)',
                        objectFit: 'contain',
                        objectPosition: '75% center'
                    }}
                />

                {/* Light overlay for subtle blending only */}
                <div
                    className="absolute inset-0"
                    style={{
                        // Very light overlay - image remains clearly visible
                        background: `linear-gradient(to right, ${portfolioConfig.theme.background.primary}60 0%, ${portfolioConfig.theme.background.primary}30 15%, transparent 40%)`
                    }}
                />
            </div>

            {/* Subtle background gradient for text readability */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to right, ${portfolioConfig.theme.background.primary} 0%, ${portfolioConfig.theme.background.primary}F0 35%, ${portfolioConfig.theme.background.primary}A0 55%, transparent 75%)`
                }}
            />
        </div>
    );
};

export default HeroBackground;