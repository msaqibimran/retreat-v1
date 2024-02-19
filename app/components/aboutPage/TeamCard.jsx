import {Image} from '@shopify/hydrogen';
import React from 'react';
import {images} from '~/config/images';

const TeamCard = ({item}) => {
  return (
    <div className="min-w-[498px] h-[564px] border rounded-[34px] overflow-hidden bg-white drop-shadow-sm">
      <div className="h-[385.75px] w-full bg-c_D1DEBB">
        <Image src={item?.image} className="object-cover h-full" draggable={false} />
      </div>
      <div className="min-w-full  p-[16px]">
        <p className="font-sora_semiBold text-c_ED1651 text-[18px]">
          {item?.name}
        </p>
        <p className="font-sora_light text-c_7A7A7A text-[12px] uppercase mt-[4px]">
          {item?.position}
        </p>
        <p className="font-general_sans_regular text-c_222329 text-[14px] mt-[8px]">
          {item?.position}
        </p>

        <div className="flex items-center gap-[9px] mt-[30px]">
          <img src={images.facebook2} />
          <img src={images.instagram2} />
          <img src={images.twitter} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
