import React from 'react';
import {images} from '~/config/images';
import TeamCard from './TeamCard';
import {Teams} from '../../constants/App.Constants';

const MeetTeam = () => {
  const renderTeam = (item) => {
    return <TeamCard item={item} />;
  };
  return (
    <div className="w-ful mt-[60px]">
      <div className="flex justify-around lg:flex-nowrap flex-wrap items-center">
        <div className="lg:w-[40%] md:w-[50%] w-[100%] relative lg:text-left md:text-left text-center">
          <div>
            <div>
              <span className="font-sora_semiBold lg:text-[72px] md:text-[40px] text-[32px] text-c_333333 font-semibold ">
                Meet
                <span className="text-c_ED1651"> the Team</span>
              </span>
            </div>
            <div className="flex justify-end lg:mr-20  sm:mr-24 mr-16">
              <img
                src={images.lineUnderHeading}
                className=" lg:w-[312.28px] md:w-[162.27px] w-[162.27px] object-contain "
              />
            </div>
          </div>
        </div>
        <div className="font-general_sans_medium  lg:w-[60%] md:w-[50%] w-[100%] lg:text-left md:text-left text-center lg:mt-[0] md:mt-[0px] mt-[25px]">
          We are a diverse mix of skincare enthusiasts, product experts, and
          innovators, all driven by a shared commitment to creating the best
          possible  skincare solutions.
        </div>
      </div>
      <div className="min-w-[100%] overflow-x-auto overflow-y-hidden">
        <div className="flex justify-between items-start flex-nowrap gap-[35px] mt-[100px]">
          {Teams?.map(renderTeam)}
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
