import {Image} from '@shopify/hydrogen';
import React, {memo} from 'react';

const Category = ({item}) => {
  return (
    <div className="rounded-[34px] flex flex-col items-center gap-2 justify-center py-[30px] md:px-[30px] px-[100px] bg-c_EDF4FE">
      <Image src={item.icon} alt="hi" className="w-[48px] h-[48px]" />
      <p className="text-center text-[18px] font-sora_semiBold text-c_222329">
        {item?.name}
      </p>
    </div>
  );
};

export default memo(Category);
