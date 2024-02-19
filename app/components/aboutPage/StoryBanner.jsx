import React from 'react';

const StoryBanner = () => {
  return (
    <div className="storyBanner lg:min-h-[1000px] md:min-h-[800px] sm:min-h-[640px] overflow-hidden">
      <div className="bg-[rgba(0,0,0,0.6)] w-full lg:min-h-[1000px] md:min-h-[800px] sm:min-h-[640px] flex flex-col justify-center items-center lg:px-[300px] md:px-[100px] sm:px-[20px] px-[0] lg:py-[100px] md:py-[50px] sm:py-[60px] py-[60px]">
        <div className="flex flex-col m sm:px-[30px] px-[30px]">
          <span className="font-sora_semiBold  lg:text-[32px]  md:text-[24px]  text-white font-semibold">
            이 Our Story
          </span>
          <span className="font-general_sans_medium  lg:text-[32px] md:text-[24px] sm:text-[16px]  text-white font-medium mt-[10px]">
            Our journey began with a shared frustration, struggling to find
            skincare products that were natural, clinically effective, and
            suitable for a range of different skin types. With a deep
            appreciation for Korean skincare philosophy, we set out to develop
            solutions that cater to everyone's unique skin care needs.
          </span>
          <span className="font-sora_semiBold  lg:text-[40px] md:text-[32px] sm:text-[24px]  text-[20px] text-white font-semibold mt-[50px]">
            “We're not just passionate about skincare; we're dedicated to a
            mission.”
          </span>
          <span className="font-general_sans_medium  lg:text-[32px] md:text-[24px] sm:text-[16px] text-white font-medium mt-[30px]">
            We're here to redefine skincare by blending Korean tradition with
            cutting-edge science and making it accessible to all.
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryBanner;
