import React, {memo} from 'react';
import {dummyData} from '~/constants/App.Constants';

const ProductInfo = () => {
  const renderLeftInfo = (item) => {
    return (
      <div className="flex flex-row sm:flex-wrap text-[24px] font-sora_light text-c_343434">
        <div className="lex flex-1 justify-start">{item?.leftSide}</div>
      </div>
    );
  };

  const renderRightInfo = (item) => {
    return (
      <div className="flex flex-row sm:flex-wrap text-[24px] font-sora_light text-c_343434">
        <div className="flex flex-1 justify-end">{item?.rightSide}</div>
      </div>
    );
  };

  return (
    <div className="grid md:grid-cols-2 gap-5 mt-[40px]">
      <div>{dummyData?.map(renderLeftInfo)}</div>
      <div>{dummyData?.map(renderRightInfo)}</div>
    </div>
  );
};

export default memo(ProductInfo);
