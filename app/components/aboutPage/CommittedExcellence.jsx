import React from 'react';
import {images} from '~/config/images';
import Excellences from './Excellences';
import {committeds} from '../../constants/App.Constants';

const CommittedExcellence = () => {
  const renderExcellences = (item, index) => {
    return <Excellences item={item} index={index} />;
  };

  return (
    <div className="w-full lg:px-[50px] md:px-[40px] mb-[100px]">
      <div className="flex flex-col">
        <span className="lg:text-[72px] font-sora_bold text-c_343434">
          Committed to
        </span>
        <span className="lg:text-[72px] font-sora_bold text-c_ED1651 ">
          Excellence
        </span>
        <img
          src={images.lineUnderHeading}
          className=" lg:w-[312.28px] md:w-[162.27px] w-[162.27px] object-contain "
        />
      </div>
      {committeds?.map(renderExcellences)}
    </div>
  );
};

export default CommittedExcellence;
