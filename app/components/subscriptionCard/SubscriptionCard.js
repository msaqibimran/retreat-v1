import {Image} from '@shopify/hydrogen';
import React, {memo} from 'react';
import {images} from '~/config/images';
import {subscriptionData} from '~/constants/App.Constants';

const SubscriptionCard = () => {
  return (
    <div className="w-full border border-[#ED1651] rounded-[34px]  mt-[46px] overflow-hidden">
      <div className="flex flex-row justify-between items-center p-[25px]">
        <div className="flex justify-start items-center">
          <Image src={images.radioColor} className="w-[16px] h-[16px]" />
          <span className="text-[20px] font-general_sans_medium text-[#343434] ms-[20px]">
            Subscription
          </span>
        </div>
        <div className="">
          <span className="text-[14px] italic  font-general_sans_light text-[#222329] me-[20px]">
            Every 2 months
          </span>
          <span className="text-[18px] font-general_sans_semiBold text-[#F14574]">$29</span>
        </div>
      </div>
      <div className="px-[25px] pb-[0px] mb-[25px]">
        {subscriptionData?.map((item) => {
          return (
            <div className="font-general_sans_medium text-[16px]">
              • <span className="text-[#ED1651] ">{item?.leftSide}</span>
              <span>{item?.rightSide}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-row justify-between items-center border-t border-t-[#ED1651] py-[15px] px-[25px]">
        <div className="flex justify-start items-center">
          <img src={images.radioLight} className="w-[16px] h-[16px] me-[20px]" />
          <span className="text-c_7A7A7A font-general_sans_semiBold text-[20px]">
            One Time Purchase:
          </span>
        </div>
        <div className="text-c_7A7A7A font-general_sans_semiBold text-[18px]">$34</div>
      </div>
      <div className="flex flex-row justify-between items-center py-[25px] px-[25px] bg-c_ED1651">
        <span className="text-white text-[16px] font-general_sans_semiBold">Add to Cart</span>
        <img src={images.cart} className="w-[18px] h-[16px]" />
      </div>
    </div>
  );
};

export default memo(SubscriptionCard);
