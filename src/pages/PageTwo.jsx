import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PageTwo() {
  useEffect(() => {
    const lines = document.querySelectorAll('.rotate-text')

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        {
          rotationX: -80,
          opacity: 0,
          y: 80,
        },
        {
          rotationX: 0,
          opacity: 1,
          y: 0,
          duration: 1.2, // ⭐ smoother
          ease: 'power3.out', // ⭐ smooth easing
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play reverse play reverse', // ⭐ scroll up & down
            // markers: true
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
      className='bg-white text-center text-black uppercase font-font4 min-h-screen flex flex-col items-center justify-start pt-10'
      style={{ perspective: '1500px' }}
    >
      <div className='rotate-text mt-[2vw] transform-gpu'>
        <h1 className='text-[30vw] leading-[25vw]'>Building</h1>
      </div>
      <div className='rotate-text mt-[2vw] transform-gpu'>
        <h1 className='text-[30vw] leading-[25vw]'>Interactive</h1>
      </div>
      <div className='rotate-text mt-[2vw] transform-gpu'>
        <h1 className='text-[30vw] leading-[25vw]'>React</h1>
      </div>
      <div className='rotate-text mt-[2vw] transform-gpu'>
        <h1 className='text-[30vw] leading-[25vw]'>Applications</h1>
      </div>
      <div className='rotate-text mt-[2vw] transform-gpu'>
        <h1 className='text-[30vw] leading-[25vw]'>That Impress</h1>
      </div>
    </div>
  )
}
