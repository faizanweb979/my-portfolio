import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "motion/react";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Content() {
  const textRef = useRef(null);

  // Flip words
  const words = ["Frontend", "React"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- HERO TILT ---------------- */
  function handleMouseMove(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    gsap.to(textRef.current, {
      rotateY: ((e.clientX - centerX) / centerX) * 16,
      rotateX: ((e.clientY - centerY) / centerY) * -16,
      duration: 0.4,
      ease: "power3.out",
      transformPerspective: 1200,
    });
  }

  function handleMouseLeave() {
    gsap.to(textRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-screen w-screen flex items-center absolute z-20 px-20"
    >
      <div ref={textRef} className="flex flex-col items-start text-white">

        {/* INTRO */}
        <h1 className="text-[0.9vw] font-font1 uppercase tracking-[0.3em] text-white/60">
          Hello, I’m
        </h1>

        {/* NAME */}
        <h1 className="mt-2 text-[5vw] leading-[1.05] font-font2 font-semibold">
          Faizan Niaz
        </h1>

        {/* ROLE */}
        <h1 className="mt-6 text-[2vw] font-font1 flex items-center text-white/90">
          A Creative
          <motion.span
            layout
            className={cn(
              "ml-3 inline-block overflow-hidden rounded-xl px-4 py-1",
              "bg-white/10 backdrop-blur-md border border-white/20",
              "text-[1.7vw] font-semibold"
            )}
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={currentWordIndex}
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 25, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block whitespace-nowrap"
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>
          Developer
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-xl text-[1.1vw] leading-relaxed text-white/65">
          I design and build modern, high-performance web interfaces with smooth
          animations and a strong focus on user experience.
        </p>

      </div>
    </div>
  );
}
