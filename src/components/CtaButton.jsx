import { useRef } from "react";
import gsap from "gsap";

export default function CtaButton() {
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);

  function handleMove(e) {
    const wrapper = wrapperRef.current;
    const btn = btnRef.current;

    if (!wrapper || !btn) return;

    const rect = wrapper.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(btn, {
      x: x * 0.5,
      y: y * 0.5,
      duration: 0.35,
      ease: "power3.out",
    });
  }

  function handleLeave() {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });
  }

  function handleClick() {
    const contact = document.getElementById("contact");
    if (!contact) return;
    contact.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        relative inline-block
        pointer-events-auto   /* 🔥 MOST IMPORTANT */
      "
    >
      <button
        ref={btnRef}
        onClick={handleClick}
        className="
          relative
          px-12 py-5 rounded-full
          text-[1vw] font-semibold tracking-wide
          text-white
          bg-white/10 backdrop-blur-xl
          border border-white/30
          shadow-[0_0_50px_rgba(255,255,255,0.18)]
          will-change-transform
          cursor-pointer
          group
        "
      >
        Let’s Work Together <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:rotate-45">→</span> 
      </button>
    </div>
  );
}
