import {Image} from '@shopify/hydrogen';
import React from 'react';

const Excellences = ({item, index = 0}) => {
  const renderLeft = (subItem) => {
    return (
      <div className="flex flex-col mb-[90px]">
        <span className="font-general_sans_medium text-[24px] text-c_ED1651 ">
          {subItem?.text1}
        </span>
        <span className="font-general_sans_semiBold text-[24px] text-c_343434 mt-[12px]">
          {subItem?.text2}
        </span>
        <span className="font-general_sans_medium text-[20px] text-c_343434 mt-[5px] w-[70%]">
          {subItem?.text3}
        </span>
      </div>
    );
  };
  return (
    <div className={`grid lg:grid-cols-2 grid-cols-1 gap-[100px]`}>
      <div className="flex flex-col justify-center">
        {item?.data?.map(renderLeft)}
      </div>
      <div className={`${index % 2 === 1 ? 'lg:-order-1' : ''} lg:mb-[0px] md:mb-[142px]`}>
        <Image src={item?.image} draggable={false} />
      </div>
    </div>
  );
};

export default Excellences;
