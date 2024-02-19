import { Image } from '@shopify/hydrogen';
import React, { Fragment } from 'react';

const retreatCard = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/retreat-cream.png?v=1707901250',
    time: '8 min read',
    text: 'Lorem ipsum dolor sit amet consectetur. Fames sit etiam. Lorem ipsum dolor sit amet consectetur. Fames sit etiam.',
    profileName: 'Anna Smith',
    postTime: '4 day ago',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/retreat-cream.png?v=1707901250',
    time: '8 min read',
    text: 'Lorem ipsum dolor sit amet consectetur. Fames sit etiam. Lorem ipsum dolor sit amet consectetur. Fames sit etiam.',
    profileName: 'Anna Smith',
    postTime: '4 day ago',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/retreat-cream.png?v=1707901250',
    time: '8 min read',
    text: 'Lorem ipsum dolor sit amet consectetur. Fames sit etiam. Lorem ipsum dolor sit amet consectetur. Fames sit etiam.',
    profileName: 'Anna Smith',
    postTime: '4 day ago',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/retreat-cream.png?v=1707901250',
    time: '8 min read',
    text: 'Lorem ipsum dolor sit amet consectetur. Fames sit etiam. Lorem ipsum dolor sit amet consectetur. Fames sit etiam.',
    profileName: 'Anna Smith',
    postTime: '4 day ago',
  },
];
const RetreatCardSection = () => {
  return (
    <Fragment>
      <div className="">
        <div className='min-h-[1014px] flex md:items-center sm:pt-2 rounded-[34px] object-cover bg-[url("https://cdn.shopify.com/s/files/1/0853/3341/0089/files/retreat-bg.png?v=1707899495")]'>
          <div>
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col   sm:p-6 sm:gap-y-0 lg:gap-y-4 md:px-12 sm:px-6">
                <span className="lg:text-left mb-4 text-center text-[32px] sm:text-base font-sora_regular md:text-[40px] text-white">블로그</span>
                <span className=" lg:text-left text-center text-[32px] font-sora_regular sm:text-base md:text-[72px] text-white">
                  Rētreat Kr’s
                </span>
                <span className=" lg:text-left text-center text-[32px] font-sora_regular sm:text-base md:text-[72px] text-white md:mt-8 sm:mt-0">
                  Latest
                </span>
                <div className='flex lg:items-start items-center lg:justify-start justify-center'>
                <button className={
                    'mt-8 lg:mt-8 bg-c_ED1651 font-general_sans_medium min-w-[300px] min-h-[60px] items-center text-[16px] text-white px-10 py-2 rounded-full flex flex-row justify-between sm:text-center'
                  }>View All</button>
               </div>
              </div>
              <div className='min-w-[100%] mt-3 lg:mt-0'>
                <div className="flex gap-3 w-full flex-nowrap  overflow-x-auto overflow-y-hidden">
                  {retreatCard?.map((item) => {
                    return (
                      <div className="flex  md:min-w-min min-w-[90%]">
                        <div className="flex flex-col bg-white rounded-[34px] max-h-[580px] md:min-w-[420px]">
                          <Image src={item.img} draggable={false}/>
                          <div className="flex justify-between items-center py-[30px] px-[36px]">
                            <button className="bg-[#F47397]  text-white text-[12px] min-w-[79px] rounded-full min-h-[28.94px]">
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
                            <div className="flex gap-x-2 items-center py-4">
                              <div className="bg-[#C0C0C0] w-[27.75px] h-[27.75px] rounded-full"></div>
                              <span className="text-[#343434] text-[12px] font-general_sans_medium">
                                {item?.profileName}
                              </span>
                              <span className="text-[#616265] font-general_sans_medium text-[12px]">
                                {item?.postTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RetreatCardSection;
