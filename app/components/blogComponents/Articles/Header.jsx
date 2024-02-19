import React from 'react';
import PaginatedItems from '../../pagination/Pagination';

const Header = ({onClick = () => {}, headerItem}) => {
  return (
    <div className="flex lg:justify-between md:justify-between sm:justify-center justify-center  items-center lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap md:px-[20px] md:py-[80px] sm:py-[80px] py-[80px] sm:gap-[10px] gap-[10px]">
      <div className="text-[32px] text-c_222329 font-sora_bold lg:text-left md:text-left sm:text-center text-center">
        All Articles
      </div>
      <div className="flex justify-center items-center lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap lg:gap-[29px] md:gap-[29px] sm:gap-[10px] gap-[10px]">
        {headerItem?.map((item, index) => (
          <div
            key={index + 1}
            className={`font-sora_medium cursor-pointer ${
              item?.selected ? 'text-c_495057 ' : 'text-c_C4C4C4'
            } lg:text-[16px]`}
            onClick={onClick(index)}
          >
            {item?.name}
          </div>
        ))}
      </div>
      <div className="lg:block md:hidden sm:hidden hidden">
        <PaginatedItems />
      </div>
    </div>
  );
};

export default Header;
