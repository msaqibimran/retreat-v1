import React from 'react';

const IntroBanner = () => {
  return (
    <div className="introBanner lg:min-h-[1000px] md:min-h-[800px] sm:min-h-[640px] overflow-hidden">
      <div className="bg-[rgba(0,0,0,0.6)] w-full lg:min-h-[1000px] md:min-h-[800px] sm:min-h-[640px] flex flex-col justify-center items-center lg:px-[300px] md:px-[100px] sm:px-[20px] px-[0] lg:py-[100px] md:py-[50px] sm:py-[60px] py-[60px]">
        <div className="flex flex-col m sm:px-[30px] px-[30px]">
          <span className="font-sora_semiBold lg:text-[32px]  md:text-[24px]  text-white font-semibold">
            일 Introduction
          </span>
          <span className="font-general_sans_medium  lg:text-[32px] md:text-[24px] sm:text-[16px]  text-white font-medium mt-[10px]">
            Welcome to Retreat Kr, where the art of formulation meets the
            science of skincare. Rooted in age-old Korean remedies, our products
            seamlessly blend the wisdom of tradition with Korean innovation,
            crafting a skincare experience that delivers industry leading
            results.
          </span>
          <span className="font-sora_semiBold lg:text-[40px] md:text-[32px] sm:text-[24px]  text-[20px] text-white font-semibold mt-[50px]">
            “Artfully crafted,clinically proven.”
          </span>
          <span className="font-general_sans_medium lg:text-[32px] md:text-[24px] sm:text-[16px] text-white font-medium mt-[30px]">
            Our tagline encapsulates Retreat Kr's commitment to blending the art
            of formulation with the science of skincare.
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
