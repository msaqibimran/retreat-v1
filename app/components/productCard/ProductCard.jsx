import {Image} from '@shopify/hydrogen';
import React from 'react';

const ProductCard = ({item, isShow = true}) => {
  return (
    <div>
    <div className="flex drop-shadow-lg">
      <div className="flex flex-col bg-white rounded-[34px] max-h-[580px] md:w-full pb-[25px]">
        <Image src={item.img} draggable={false} />
        <div className="flex justify-between items-center py-[30px] px-[30px]">
          <button className="bg-c_F47397 font-general_sans_regular  text-white text-[12px] min-w-[79px] rounded-full min-h-[28.94px]">
            Design
          </button>
          <span className="text-[12px] text-[#343434] font-general_sans_medium">
            {item?.time}
          </span>
        </div>
        <div className="px-[25px]">
          <span className="text-[16px] font-general_sans_medium text-[#343434]">
            {item?.text}
          </span>
          {isShow ? (
            <div className="flex gap-x-2 items-center py-4">
              <div className="bg-[#C0C0C0] w-[27.75px] h-[27.75px] rounded-full"></div>
              <span className="text-[#343434] text-[12px] font-general_sans_medium">
                {item?.profileName}
              </span>
              <span className="text-[#616265] font-general_sans_medium text-[12px]">
                {item?.postTime}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>

    </div>
  );
};

export default ProductCard;
