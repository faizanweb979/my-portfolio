import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PageTwo() {
  useEffect(() => {
    const lines = gsap.utils.toArray('.rotate-text')

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        {
          rotationX: -60,
          opacity: 0,
          y: 100,
        },
        {
          rotationX: 0,
          opacity: 1,
          y: 0,
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: line,
            start: 'top 50%',   // ⭐ first word bhi animate hoga
            end: 'top 40%',
            scrub: 0.8,         // ⭐ smooth buttery scroll
            once: false,
            // markers: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div
      className="bg-white text-black uppercase font-font4 min-h-screen
                 flex flex-col items-center pt-[10vh]"
      style={{ perspective: '1500px' }}
    >
      {[
        'Building',
        'Interactive',
        'React',
        'Applications',
        'That Impress',
      ].map((text, i) => (
        <div
          key={i}
          className="rotate-text transform-gpu will-change-transform"
        >
          <h1 className="text-[30vw] leading-[25vw] select-none">
            {text}
          </h1>
        </div>
      ))}
    </div>
  )
}
