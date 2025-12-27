import React from "react";
import { motion } from "framer-motion";

const RollText = ({ text, className = "", center = false }) => {
  const letters = text.split("");

  return (
    <div className={`flex ${center ? "justify-center" : "justify-start"} overflow-hidden`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
          className={className}
          style={{ marginRight: letter === " " ? "0.25rem" : 0 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default function Footer() {
  return (
    <div className="min-h-screen flex items-end absolute z-30 px-20 py-14 uppercase">
      <div className="flex flex-col items-start text-white font-font3 text-3xl space-y-2">
        <RollText text="React  |  GSAP  | Tailwind" className="text-4xl" />
        <RollText text="BESPOKE  FREELANCE" className="text-4xl" />
      </div>
    </div>
  );
}
