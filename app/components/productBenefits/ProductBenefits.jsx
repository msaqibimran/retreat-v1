import React, {memo} from 'react';
import {productBenefits} from '~/constants/App.Constants';

const ProductBenefits = () => {
  const renderBenefits = (item) => {
    return (
      <div>
        <div className="text-f_24 font-semibold text-c_222329">
          {item?.title}
        </div>
        <div className="text-f_16 font-general_sans_medium text-c_343434">
          {item?.desc}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mt-[60px] lg:px-[100px]">
      <div className="text-[34px] text-c_ED1651 font-bold">
        The Benefits 이익
      </div>
      <div className="text-[48px] text-c_333333 font-bold">
        Reveal a glass skin glow
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-[100px] gap-y-[62px] mt-[64px]">
        {productBenefits?.map(renderBenefits)}
      </div>
    </div>
  );
};

export default memo(ProductBenefits);
