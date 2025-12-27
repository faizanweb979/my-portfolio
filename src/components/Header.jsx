import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import css from '../components/css/header.css'

export default function StaggeredMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);

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
    });

    gsap.set(itemsRef.current, {
      y: 60,
      autoAlpha: 0,
    });
  }, [position]);

  useEffect(() => {
    if (!panelRef.current) return;

    const panel = panelRef.current;

    if (open) {
      document.body.style.overflow = "hidden";

      gsap.to(panel, {
        x: "0%",
        autoAlpha: 1,
        duration: 0.6,
        ease: "power4.out",
      });

      gsap.to(itemsRef.current, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });
    } else {
      document.body.style.overflow = "";

      gsap.to(itemsRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.3,
      });

      gsap.to(panel, {
        x: position === "left" ? "-100%" : "100%",
        autoAlpha: 0,
        duration: 0.5,
        ease: "power4.in",
      });
    }
  }, [open, position]);

  return (
    <>
      {/* TOGGLE BUTTON */}
      <div className="fixed top-6 right-6 z-[100]">
        <input
          id="checkbox"
          type="checkbox"
          checked={open}
          onChange={() => setOpen(!open)}
          style={{ display: "none" }}
        />

        <label className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
          <div id="bar3" className="bars"></div>
        </label>
      </div>

      {/* FULLSCREEN PANEL */}
      <aside
        ref={panelRef}
        className="fixed inset-0 z-[90] bg-white text-black flex items-start px-16 py-10"
      >
        <div>
          <ul className="flex flex-col gap-8">
            {(itemsRef.current = [])}

            {items.map((item, index) => (
              <li
                key={item.label}
                ref={(el) => (itemsRef.current[index] = el)}
                className="text-5xl md:text-7xl font-extrabold uppercase flex items-center gap-6"
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
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {socialItems.length > 0 && (
            <div className="mt-16 flex gap-6">
              {socialItems.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase text-sm tracking-wider hover:text-gray-600"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
