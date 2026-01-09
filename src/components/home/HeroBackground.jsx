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
                // Subtle radial gradient for depth while maintaining color consistency
                background: `radial-gradient(ellipse at center, ${portfolioConfig.theme.background.primary} 0%, ${portfolioConfig.theme.background.primary} 60%, #010510 100%)`
            }}
        >
            {/* Right-side Developer Image - Advanced Edge Elimination */}
            <div
                ref={imageRef}
                className="absolute right-0 top-0 h-full"
                style={{
                    width: 'clamp(50%, 60vw, 70%)',
                    opacity: '0.9', // Opacity thori barha di takay clear nazar aaye
                    // 1. IMPROVED MASKING: Isse edges bilkul gayab ho jayenge
                    maskImage: 'linear-gradient(to right, transparent 0%, black 40%), linear-gradient(to top, transparent 0%, black 20%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%), linear-gradient(to top, transparent 5%, black 25%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in'
                }}
            >
                <img
                    src={developerImage}
                    alt="Developer"
                    className="w-full h-full object-contain"
                    style={{
                        // 2. COLOR CORRECTION: Background ke blue/dark tone se match karne ke liye
                        // Color graded to match #020617 background system
                        filter: 'brightness(0.8) contrast(1.1) grayscale(0.2)',
                        objectFit: 'contain',
                        objectPosition: '80% center',
                        // Ye line image ko background ke sath "chipka" degi
                        mixBlendMode: 'screen'
                    }}
                />

                {/* 3. SMOOTHING OVERLAY: Ye box ke edges ko mazeed chhupa dega */}
                <div
                    className="absolute inset-0"
                    style={{
                        // Uses exact primary background color for seamless blending
                        background: `linear-gradient(to right, ${portfolioConfig.theme.background.primary} 0%, transparent 40%)`
                    }}
                />
            </div>

            {/* Unified Background Enhancement */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    // Subtle depth gradient derived from primary background
                    background: `linear-gradient(to right, ${portfolioConfig.theme.background.primary}10 0%, transparent 60%, ${portfolioConfig.theme.background.secondary}05 100%)`
                }}
            />
        </div>
    );
};

export default HeroBackground;