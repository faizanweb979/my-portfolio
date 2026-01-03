import React from 'react'
import portfoliimag from '../assets/images/portfolio-image.png'

export default function Page1() {
  return (
    <div className='h-screen p-3 bg-white' >
        {/* <div className='h-full  w-full shadow-xl shadow-gray-700 bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2476,h_1136,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] rounded-[30px]'></div> */}
        <img className="h-screen  w-full shadow-xl shadow-gray-700  object-cover rounded-[30px]"  src={portfoliimag} alt="" />
    </div>
  )
}
