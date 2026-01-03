"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

// Define skill colors to match icons
const skillColors = [
  "#E34F26", // HTML
  // "#1572B6", // CSS
  "#F7DF1E", // JS
  "#61DAFB", // React
  "#38BDF8",
   "#10B981", // Tailwind
  "#F05032", // Git
  // GSAP (green placeholder)
];

export const StickyScroll = ({ content, contentClassName }) => {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      content.length - 1,
      Math.floor(latest * content.length)
    );
    setActiveCard(index);
  });

  const gradients = [
    "bg-gradient-to-br from-cyan-500/20 to-emerald-500/20",
    "bg-gradient-to-br from-pink-500/20 to-indigo-500/20",
    "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
    "bg-gradient-to-br from-purple-500/20 to-cyan-500/20",
    "bg-gradient-to-br from-emerald-500/20 to-amber-500/20",
    "bg-gradient-to-br from-red-500/20 to-pink-500/20",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: `${content.length * 70}vh` }}
    >
      {/* Container with 10% margins (5% each side) */}
      <div className="w-[90%] mx-auto h-full flex gap-4">

        {/* LEFT TEXT SIDE - 70% of container width */}
        <div className="w-[77.78%] relative">
          {content.map((item, index) => (
            <div
              key={index}
              className="h-[70vh] w-full flex flex-col justify-center px-8 lg:px-12  "
            >
              <motion.div
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                  scale: activeCard === index ? 1 : 0.95
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-2/3 "
              >
                <motion.h2
                  className="text-3xl w-full md:text-9xl lg:text-[5vw] xl:text-[6vw] font-font1 capitalize font-bold text-white leading-tight mb-6 lg:mb-8"
                  animate={{
                    backgroundImage: activeCard === index
                      ? "linear-gradient(45deg, #ffffff, #e5e5e5, #ffffff)"
                      : "linear-gradient(45deg, #666666, #888888, #666666)",
                  }}
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  className="text-3xl  w-full lg:text-6xl md:text-5xl xl:text-7xl font-font3 text-gray-400 leading-relaxed p-5"
                  animate={{
                    color: activeCard === index ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {item.description}
                </motion.p>

                {/* Progress indicator */}
                <motion.div
                  className="mt-6 lg:mt-8 w-1/2"
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                >
                  <div className="flex items-center space-x-4 mb-4 ">
                    <div className="h-4 md:h-6 bg-gray-800 rounded-full flex-1 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full  "
                        style={{ backgroundColor: skillColors[index] }}
                        animate={{
                          width: activeCard === index ? "100%" : "0%",
                        }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                      />
                    </div>
                    <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl ps-10 text-gray-500 font-mono min-w-[60px]  ">
                      {String(index + 1).padStart(2, '0')} / {String(content.length).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* RIGHT STICKY CARD - 20% of container width */}
        <div className="w-[22.22%] relative">
          <div className="sticky top-[20vh] h-[70vh] p-4 m-4">
            <motion.div
              className={cn(
                "h-full w-full rounded-3xl bg-gradient-to-br p-1 shadow-2xl ",
                gradients[activeCard % gradients.length]
              )}
              animate={{
                scale: [1, 1.02, 1],
                rotateY: [0, 2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="h-full w-full rounded-3xl  p-10 backdrop-blur-md overflow-hidden">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full"
                >
                  {content[activeCard]?.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(ellipse at center, ${gradients[activeCard % gradients.length].includes('cyan') ? 'rgba(6, 182, 212, 0.05)' :
              gradients[activeCard % gradients.length].includes('pink') ? 'rgba(236, 72, 153, 0.05)' :
                gradients[activeCard % gradients.length].includes('orange') ? 'rgba(249, 115, 22, 0.05)' :
                  gradients[activeCard % gradients.length].includes('purple') ? 'rgba(139, 92, 246, 0.05)' :
                    gradients[activeCard % gradients.length].includes('emerald') ? 'rgba(16, 185, 129, 0.05)' :
                      'rgba(239, 68, 68, 0.05)'
            } 0%, transparent 70%)`
        }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};
