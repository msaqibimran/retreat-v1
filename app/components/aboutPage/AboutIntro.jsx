import { Image } from '@shopify/hydrogen';
import React from 'react';
import Button from '~/components/Button';
import {images} from '~/config/images';

const AboutIntro = () => {
  return (
    <div className="flex flex-col justify-end  gap-[15px] ">
      <span className="font-general_sans_bold md:text-[30px] sm:text-[20px] text-[20px] lg:text-left text-center  font-bold text-c_343434">
        한국 스킨케어의 재정의
      </span>
      <span className="font-sora_semiBold  lg:text-[72px] md:text-[48px] sm:text-[32px] text-[32px]  lg:text-left text-center font-semibold text-c_343434">
        Rētreat Kr is Korean Skincare Redefined
      </span>
      <span className="font-general_sans_medium  md:text-[30px] sm:text-[20px] text-[20px] lg:text-left text-center font-medium text-c_343434">
        We celebrate the uniqueness of each individual, painting the world with
        the vibrant colors of Korea, leaving a lasting legacy of confidence and
        self-expression.
      </span>
      <Button
        chidlren={
          <span className="space-x-4 w-full  flex justify-between items-center">
            <span className='font-general_sans_medium'>Shop</span>
            <div className="flex gap-[10px]">
              <span>가게</span>
              <img src={images.forwardArrow} />
            </div>
          </span>
        }
        className={
          'lg:self-start self-center mt-10 bg-c_ED1651  text-white px-5 py-2 rounded-full flex flex-row justify-between lg:w-[320px] md:w-[320px] h-[68px] items-center'
        }
      />
    </div>
  );
};

export default AboutIntro;
