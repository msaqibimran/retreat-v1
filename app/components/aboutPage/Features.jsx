import React from 'react';
import {aboutFeatures} from '../../constants/App.Constants';

const Features = () => {
  const renderAboutFeatures = (item, index) => {
    return (
      <div className="flex flex-col">
        <span className="font-general_sans_semiBold lg:text-[30px] text-white">
          {item?.text}
        </span>
        <span className="font-sora_bold lg:text-[40px] text-white">
          {item?.text2}
        </span>
        <span className="font-general_sans_mediumt lg:text-[24px] text-white lg:mt-[25px]">
          {item?.text3}
        </span>
      </div>
    );
  };
  return (
    <div className="about-feature lg:min-h-[1000px] md:min-h-[600px] min-h-[1100px]  w-full flex items-center ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[100px] md:gap-[50px] gap-[50px] lg:px-[50px] md:px-[30px] px-[30px]">
        {aboutFeatures?.map(renderAboutFeatures)}
      </div>
    </div>
  );
};

export default Features;
