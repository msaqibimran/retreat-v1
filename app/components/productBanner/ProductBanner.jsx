import React, {memo} from 'react';
import {images} from '~/config/images';

const ProductBanner = () => {
  return (
    <div
      className={`banner md:h-[861px] h-[1200px] bg-c_d8d8d838 w-full overflow-hidden bg-cover mt-[55px]`}
    >
      <div className="bg-[rgba(0,0,0,0.3)]  w-full h-full flex flex-col md:justify-center justify-start lg:px-[128px] md:px-[10px] px-[10px] md:py-0 py-[10px]">
        <div className=" lg:w-[861px] md:w-full sm:w-full bg-c_ED1651 rounded-[34px] md:p-[50px] p-[30px]">
          <div className="flex justify-between items-center flex-wrap">
            <div className="text-[30px] font-semibold text-c_D1DEBB">
              Skincare 피부 관리
            </div>
            <div className="flex justify-center items-center gap-10">
              <span className="text-[12px] font-normal text-white">
                MADE IN KOREA
              </span>
              <img src={images.koreaLogo} />
            </div>
          </div>
          <div className="text-[44px] font-bold text-white uppercase mb-[20px]">
            The Korean Way
          </div>
          <div>
            <img src={images.layer} />
          </div>
          <div className="text-[24px] text-white font-medium mt-[10px]">
            At the heart of the Korean skincare philosophy lies the belief in
            the transformative power of nature and science working in harmony.
            Each Retreat Kr product embodies this philosophy by seamlessly
            blending centuries of Korean tradition with cutting-edge skincare
            technology.
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductBanner);
