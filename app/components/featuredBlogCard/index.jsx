import {Image} from '@shopify/hydrogen';
import React from 'react';

export const FeaturedBlogCard = ({item}) => {
  return (
    <div>
      <div className="flex items-start lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap   lg:gap-[20px] md:gap-[20px]">
        <div className="lg:min-w-[321px] md:min-w-[321px] sm:w-full w-full lg:min-h-[321px] md:min-h-[321px] sm:min-h-[321px] min-h-[321px]  rounded-[16px] overflow-hidden">
          <Image className="w-full h-full object-fill" src={item?.image} />
        </div>
        <div className="sm:px-[15px] px-[15px]">
          <div className="flex justify-between items-center mb-[25px]">
            <div className="bg-c_F47397 self-start w-[79px] py-[8px] px-[17px] rounded-[34px]">
              <div className="text-white text-[12px] font-general_sans_regular">
                Design
              </div>
            </div>
            <div className="font-general_sans_medium text-[12px] text-c_343434 mb-[15px]">
              {item?.readStatus}
            </div>
          </div>
          <div>
            <span className="font-sora_semiBold lg:text-[30px]">
              {item?.title}
            </span>
          </div>
          <div>
            <span className="text-c_7A7A7A  font-general_sans_regular lg:text-[16px]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
