import React, {memo, useState} from 'react';
import {images} from '~/config/images';
import {benefitsAds} from '~/constants/App.Constants';

const BenefitAds = () => {
  const [indexImage, setIndex] = useState(null);
  return (
    <div className="min-w-[100%] overflow-x-auto overflow-y-hidden mt-[60px]">
      <div className="flex justify-between items-center flex-nowrap gap-[20px] ">
        {benefitsAds?.map((item, index) => {
          return (
            <div
              key={index + 1}
              className="min-w-[815px] min-h-[815px] relative overflow-hidden"
              onMouseOver={() => setIndex(index)}
              onMouseOut={() => setIndex(null)}
            >
              {indexImage === index ? (
                <div className="absolute  bg-c_ED1651 rounded-[34px] w-full h-full flex flex-col justify-start px-[48px] py-[75px]">
                  <div className="text-[34px] font-semibold text-c_F9F9F9">
                    One Toner Pad 토너 패드
                  </div>
                  <div className="text-[34px] font-semibold text-c_D1DEBB">
                    Countless Benefits
                  </div>
                  <div className="text-[28px] font-medium text-white mt-[10px]">
                    Our Green Tea Toner Pads respect your skin's delicate
                    balance, exfoliating gently yet effectively, soothing
                    without irritation, and infusing hydration for a radiant,
                    healthy complexion. In line with the Korean skincare ethos,
                    it simplifies your routine without compromising on results,
                    making self-care a delightful and effective journey towards
                    the beautiful, glowing skin you deserve.
                  </div>
                  <img src={images.halfCircle} className="w-[192px] h-[256px] absolute bottom-0 right-0" />
                </div>
              ) : null}
              <img src={item?.image} style={{objectFit: 'cover'}} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(BenefitAds);
