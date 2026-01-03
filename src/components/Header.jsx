import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import css from "../components/css/header.css";

export default function StaggeredMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const logoRef = useRef(null); // Added ref for logo to animate/hide it

  const items = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "#" },
    { label: "Twitter", link: "#" },
    { label: "LinkedIn", link: "#" },
  ];

  const position = "right";
  const accentColor = "#ff6b6b";

  useEffect(() => {
    if (!panelRef.current) return;

    gsap.set(panelRef.current, {
      x: position === "left" ? "-100%" : "100%",
      autoAlpha: 0,
      rotationY: position === "left" ? -90 : 90, // Added 3D rotation for depth
      transformOrigin: position === "left" ? "left center" : "right center",
    });

    gsap.set(itemsRef.current, {
      y: 60,
      autoAlpha: 0,
      rotationX: -45, // Added 3D tilt for items
    });

    gsap.set(logoRef.current, {
      autoAlpha: 1,
    });
  }, [position]);

  useEffect(() => {
    if (!panelRef.current) return;

    const panel = panelRef.current;
    const logo = logoRef.current;

    if (open) {
      document.body.style.overflow = "hidden";

      // Hide logo with animation
      gsap.to(logo, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // Enhanced panel animation with 3D
      gsap.to(panel, {
        x: "0%",
        autoAlpha: 1,
        rotationY: 0, // Rotate to flat
        duration: 0.8,
        ease: "back.out(1.7)", // Smoother, bouncy ease
      });

      // Enhanced items animation with 3D
      gsap.to(itemsRef.current, {
        y: 0,
        autoAlpha: 1,
        rotationX: 0, // Untilt
        stagger: 0.15, // Slightly longer stagger for smoothness
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });
    } else {
      document.body.style.overflow = "";

      // Show logo with animation
      gsap.to(logo, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Reverse animations
      gsap.to(itemsRef.current, {
        y: 40,
        autoAlpha: 0,
        rotationX: -45,
        duration: 0.4,
        ease: "power2.in",
      });

      gsap.to(panel, {
        x: position === "left" ? "-100%" : "100%",
        autoAlpha: 0,
        rotationY: position === "left" ? -90 : 90,
        duration: 0.6,
        ease: "power4.in",
      });
    }
  }, [open, position]);

  return (
    <>
      {/* TOP BAR: LEFT LOGO + RIGHT HAMBURGER (SPACE-BETWEEN) */}
      <div className="fixed top-24 left-24 right-24 z-[100] flex items-center justify-between text-white">
        {/* LOGO (LEFT) - Increased text size from text-2xl to text-4xl for bigger logo text */}
        <a
          ref={logoRef}
          href="/"
          className="text-4xl font-extrabold uppercase tracking-wider transition-opacity duration-300"
        >
          portfolio
        </a>

        {/* TOGGLE BUTTON (RIGHT) - Added scale-125 for larger hamburger icon */}
        <div className="pr-4 "> {/* Added padding-right for better spacing */}
          <input
            id="checkbox"
            type="checkbox"
            checked={open}
            onChange={() => setOpen(!open)}
            style={{ display: "none" }}
          />

          <label className={`toggle cursor-pointer scale-150  ${open?'open-menu':""}`} htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars "></div>
            <div id="bar3" className="bars"></div>
          </label>
        </div>
      </div>

      {/* FULLSCREEN PANEL - Added perspective for 3D effect, and flex-col justify-between to position socials at bottom */}
      <aside
        ref={panelRef}
        className="fixed inset-0 z-[90] bg-white text-black flex flex-col justify-between px-16 py-10"
        style={{ perspective: "3000px" }} // Added CSS perspective for 3D depth
      >
        {/* MENU ITEMS SECTION - Top part */}
        <div>
          <ul className="flex flex-col gap-8">
            {(itemsRef.current = [])}

            {items.map((item, index) => (
              <li
                key={item.label}
                ref={(el) => (itemsRef.current[index] = el)}
                className="text-7xl md:text-[11rem] font-font2 font-extrabold  uppercase flex items-center gap-6"
                style={{ lineHeight: 1.2 }} // Increased line height for better readability
              >
                <span
                  className="text-xl md:text-2xl"
                  style={{ color: accentColor }}
                >
                  0{index + 1}
                </span>

                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-600 transition"
                  style={{ lineHeight: 1.2 }} // Consistent line height
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIALS SECTION - Bottom part */}
        {socialItems.length > 0 && (
          <div className="mt-16">
            <h1 className="text-5xl font-font1 md:text-8xl font-extrabold uppercase mb-16">Socials</h1>
            <div className="flex gap-6">
              {socialItems.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase text-5xl mb-16 tracking-wider hover:text-gray-600"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}