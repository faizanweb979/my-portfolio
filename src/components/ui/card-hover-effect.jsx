"use client";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export const HoverEffect = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;

        // Initial GSAP animation for cards entrance
        gsap.fromTo(cards,
            {
                opacity: 0,
                y: 50,
                scale: 0.9,
                rotateX: 15
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.1,
                delay: 0.3
            }
        );

        // Animate progress bars
        cards.forEach((card, index) => {
            const progressBar = card?.querySelector('.progress-bar');
            if (progressBar) {
                gsap.fromTo(progressBar,
                    { width: "0%" },
                    {
                        width: items[index]?.percentage || "0%",
                        duration: 2,
                        ease: "power2.out",
                        delay: 0.8 + (index * 0.1)
                    }
                );
            }
        });

        // Floating animation for icons
        cards.forEach((card) => {
            const icon = card?.querySelector('.skill-icon');
            if (icon) {
                gsap.to(icon, {
                    y: -5,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: Math.random() * 2
                });
            }
        });

    }, [items]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        const card = cardsRef.current[index];
        if (card) {
            gsap.to(card, {
                scale: 1.05,
                y: -10,
                rotateY: 5,
                duration: 0.4,
                ease: "power2.out"
            });

            // Animate icon on hover
            const icon = card.querySelector('.skill-icon');
            if (icon) {
                gsap.to(icon, {
                    scale: 1.2,
                    rotate: 10,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            }
        }
    };

    const handleMouseLeave = (index) => {
        setHoveredIndex(null);
        const card = cardsRef.current[index];
        if (card) {
            gsap.to(card, {
                scale: 1,
                y: 0,
                rotateY: 0,
                duration: 0.4,
                ease: "power2.out"
            });

            // Reset icon
            const icon = card.querySelector('.skill-icon');
            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotate: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-full max-w-7xl mx-auto ",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.title}
                    ref={el => cardsRef.current[idx] = el}
                    className="relative group block h-full w-full cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl "
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="flex flex-col items-center text-center h-full justify-center space-y-10">

                            {/* Skill Icon */}
                            <div className="skill-icon p-5 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="h-32 w-32 object-contain"
                                />
                            </div>

                            {/* Skill Title */}
                            <CardTitle className="mt-2 ">
                                {item.title}
                            </CardTitle>

                            {/* Skill Description */}
                            <CardDescription className="max-w-[85%] mt-2 ">
                                {item.description}
                            </CardDescription>

                            {/* Skill Level */}
                            <div className="w-full space-y-4 mt-10">
                                <div className="flex justify-between text-3xl text-gray-400">
                                    <span>Proficiency</span>
                                    <span>{item.level}</span>
                                </div>

                                <div className="h-2 bg-black/30 rounded-full overflow-hidden border border-white/10">
                                    <div
                                        className="progress-bar h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                                        style={{ width: "0%" }}
                                    />
                                </div>
                            </div>

                        </div>
                    </Card>

                </div>
            ))}
        </div>
    );
};

export const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-3xl h-full w-full p-6 overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm relative z-20 min-h-[280px]",
                className
            )}
        >
            <div className="relative z-50 h-full">
                {children}
            </div>
        </div>
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h4 className={cn("text-white font-bold tracking-wide text-xl", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p
            className={cn(
                "text-gray-300 tracking-wide leading-relaxed text-sm flex-1",
                className
            )}
        >
            {children}
        </p>
    );
};