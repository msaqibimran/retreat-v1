import React from 'react';
import Input from '../input/Input';
import Button from '~/components/Button';
import {Image} from '@shopify/hydrogen';
import {images} from '~/config/images';

const ContactUsForm = () => {
  return (
    <div className="w-full border min-h-[700px] rounded-[34px] bg-white lg:py-[30px] md:py-[30px] py-[20px] lg:px-[70px] md:px-[30px] px-[20px]">
      <p className="font-sora_bold text-c_ED1651 lg:text-[40px] lg:mb-[40px] mb-[40px]">
        Send us a message!
      </p>
      <div className="flex flex-col gap-[60px]">
        <Input placeholder="Full Name*" />
        <Input placeholder="Email*" />
        <Input placeholder="Phone*" />
        <Input placeholder="Phone*" />
        <Input placeholder="Type your message here" />
        <Button
          chidlren={
            <span className="space-x-4 w-full flex justify-between items-center">
              <span>Send message</span>
              <div className="flex gap-[10px]">
                <span>문자 보내</span>
                <img src={images.forwardArrow} />
              </div>
            </span>
          }
          className={
            'lg:self-start self-center mt-[20px] bg-c_ED1651  text-white px-5 py-2 rounded-full  flex flex-row justify-between lg:w-full md:w-full h-[68px] items-center'
          }
        />
        <div className="flex justify-center items-center gap-[16px] mt-[-40px]">
          <input type="checkbox" />
          <p className="font-general_sans_medium text-[12px] text-c_343434">
            Disclaimer text here if needed for waitlist??
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
