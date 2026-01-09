import { useRef } from "react";
import gsap from "gsap";

export default function CtaButton({
  onClick,
  href,
  target,
  rel,
  children,
  icon,
  showArrow = true,
  className = ""
}) {
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

  const baseClasses = `
    relative
    px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 2xl:px-12 2xl:py-5 rounded-full
    text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl font-semibold tracking-wide
    text-primary-text
    bg-glass-bg2 backdrop-blur-xl
    border border-glass-border
    shadow-[0_0_50px_rgba(56,189,248,0.18)]
    will-change-transform
    cursor-pointer
    group
    flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3
    hover:bg-primary-accent hover:border-primary-accent hover:text-primary-bg
    ${className}
  `;

  const content = (
    <>
      {icon && <span className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-2">
          →
        </span>
      )}
    </>
  );

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative inline-block pointer-events-auto"
    >
      {href ? (
        <a
          ref={btnRef}
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          style={{ fontFamily: 'font3, sans-serif' }}
        >
          {content}
        </a>
      ) : (
        <button
          ref={btnRef}
          onClick={onClick}
          className={baseClasses}
          style={{ fontFamily: 'font3, sans-serif' }}
        >
          {content}
        </button>
      )}
    </div>
  );
}