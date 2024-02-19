import {Image} from '@shopify/hydrogen';
import React from 'react';
import {images} from '~/config/images';
import ContactUsForm from './ContactUsForm';

const MessageSection = () => {
  return (
    <div className="messageSection lg:min-h-[1000px] md:min-h-[800px] sm:min-h-[640px] overflow-hidden ">
      <div className="bg-[rgba(0,0,0,0.6)] w-full lg:min-h-[1200px] md:min-h-[800px] sm:min-h-[640px] flex flex-col justify-center items-center lg:px-[50px] md:px-[50px] sm:px-[20px] px-[20px] lg:py-[100px] md:py-[50px] sm:py-[60px] py-[60px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] md:gap-[0] sm:gap-[80px]">
          <div className="flex flex-col items-start justify-center lg:gap-[50px] gap-[20px]">
            <Image
              src={
                'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/retreat-icon-white.svg?v=1706889963'
              }
              className="w-[120px] object-contain"
            />
            <span className="font-sora_semiBold lg:text-[60px] md:text-[30px] text-[20px] text-white">
              So now you know a bit more{' '}
              <span className="font-sora_semiBold text-c_D1DEBB">
                about us.
              </span>
            </span>
            <span className="font-sora_medium text-white lg:text-[24px] w-[80%]">
              Still got questions? Ask us directly. We aim to get back to all
              inquiries within 24 hours.
            </span>
            <img
              src={images.curveImage}
              className="lg:self-end mt-[-120px]  lg:ml-[20px] md:ml-[510px] ml-[200px] "
            />
          </div>
          <div className="">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
