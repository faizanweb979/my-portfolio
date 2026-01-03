"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import SkillCard from "./SkillCard";

const content = [
  {
    title: "html & Css",
    description: "Building the foundation of modern web development with semantic HTML5 and advanced CSS3. Mastering responsive layouts using Flexbox and CSS Grid, creating smooth animations and transitions, implementing modern design patterns.",
    content: (
      <SkillCard
        title="HTML & CSS"
        logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        level="Expert"
        percentage={95}
        tags={["Semantic HTML", "CSS3", "Flexbox", "Grid", "Animations"]}
      />
    ),
  },
  {
    title: "JavaScript ES6+",
    description: "Mastering modern JavaScript with ES6+ features including arrow functions, destructuring, async/await, promises, modules, and classes. Expert in DOM manipulation, event handling, API integration, and building interactive web applications.",
    content: (
      <SkillCard
        title="JavaScript ES6+"
        logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        level="Expert"
        percentage={90}
        tags={["ES6+", "Async/Await", "DOM", "APIs", "Modules"]}
      />
    ),
  },
  {
    title: "React.js",
    description: "Creating powerful single-page applications with React ecosystem including hooks, context API, component lifecycle, and state management. Expert in building reusable components, implementing modern React patterns, and performance optimization.",
    content: (
      <SkillCard
        title="React.js"
        logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        level="Advanced"
        percentage={88}
        tags={["Hooks", "Components", "State Management", "SPA", "Performance"]}
      />
    ),
  },
  {
    title: "Tailwind CSS",
    description: "Crafting beautiful, responsive designs with utility-first CSS framework. Expert in creating custom components, implementing dark mode, building consistent design systems, and rapid prototyping with maintainable code.",
    content: (
      <SkillCard
        title="Tailwind CSS"
        logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        level="Expert"
        percentage={92}
        tags={["Utility-first", "Responsive", "Design System", "Dark Mode"]}
      />
    ),
  },
  {
    title: "GSAP & Animations",
    description: "Creating stunning animations and micro-interactions that enhance user experience. Expert in GSAP timeline animations, scroll-triggered effects, morphing, and complex motion graphics for modern web applications.",
    content: (
      <SkillCard
        title="GSAP & Motion"
        logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        level="Advanced"
        percentage={78}
        tags={["Timeline", "ScrollTrigger", "Motion Graphics", "Micro-interactions"]}
      />
    ),
  },
  {
    title: "Git & GitHub",
    description: "Version control mastery with Git workflows, branching strategies, and collaborative development. Expert in managing complex projects, handling merge conflicts, maintaining clean commit histories, and implementing CI/CD pipelines.",
    content: (
      <SkillCard
        title="Git & GitHub"
        logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        level="Advanced"
        percentage={87}
        tags={["Version Control", "Collaboration", "CI/CD", "Workflows"]}
      />
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-black mt-5">
      <StickyScroll content={content} />
    </div>
  );
}