import React from "react";

const MediaSection = () => {
  return (
    <div className="h-screen relative bg-white flex items-center justify-center">
      {/* Foreground image */}
      <img
        className="absolute z-20 h-[80vh] w-[70vw] object-contain"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1248,h_717,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png"
        alt="no-img"
      />

      {/* Background video */}
      <video
        className="h-[69vh] w-[52vw] z-10 object-cover relative"
        src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Horizontal lines */}
      <div className="h-0.5 w-3/5 top-[40%] bg-black absolute z-5 left-1/2 -translate-x-1/2"></div>
      <div className="h-0.5 w-4/5 top-[58%] bg-black absolute z-5 left-1/2 -translate-x-1/2"></div>
      <div className="h-0.5 w-full top-[76%] bg-black absolute z-5 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default MediaSection;
