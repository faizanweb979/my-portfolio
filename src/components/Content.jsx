import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "motion/react";

// Optional: agar cn helper use karna ho
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Content() {
  const textRef = useRef(null);

  // Flip words for "FRONT END"
  const words = ["FRONTEND", "REACT"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // flip every 3s
    return () => clearInterval(interval);
  }, []);

  // GSAP tilt effect
  function handleMouseMove(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const diffX = e.clientX - centerX;
    const diffY = e.clientY - centerY;
    const rotateY = (diffX / centerX) * 25;
    const rotateX = (diffY / centerY) * -25;

    gsap.to(textRef.current, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power3.out",
      transformPerspective: 1000,
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
        {/* I AM <FRONT END> with Glassmorphism flip box */}
        <h1 className="text-7xl font-font1 leading-none flex items-center">
          I AM{" "}
          <motion.span
            layout
            className={cn(
              "ml-2 inline-block relative w-fit overflow-hidden rounded-2xl px-6 py-3 font-font1 text-[3vw] font-bold tracking-tight",
              "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white",
             
            )}
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={currentWordIndex}
                initial={{ y: -40, filter: "blur(10px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={cn("inline-block whitespace-nowrap")}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>
        </h1>

        {/* DEVELOPER line */}
        <h1 className="text-[7vw] font-font2 tracking-wide mt-2">
          DEVELOPER
        </h1>

        {/* TO HIRE */}
        <h1 className="text-7xl font-font1 leading-none mt-2">
          TO HIRE
        </h1>
      </div>
    </div>
  );
}
