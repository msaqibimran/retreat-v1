import React from 'react';
import { FeaturedBlogCard } from '../../components/featuredBlogCard';
import { news } from '../../constants/App.Constants';

export const FeaturedReading = () => {
  return (
    <div
      className="m-5 rounded-[34px] overflow-hidden"
      style={{
        boxShadow: '0px 0px 16px 0px #00000040',
      }}
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-[20px]">
        <div className="">
          <div className="lg:pl-[30px]  md:px-[20px] sm:px-[20px] lg:py-[67px] md:py-[37px] flex flex-col gap-[25px]">
            {news?.map((item, index) => (
              <FeaturedBlogCard key={index + 1} item={item} />
            ))}
          </div>
        </div>
        <div className='bg-cover bg-[url("https://cdn.shopify.com/s/files/1/0853/3341/0089/files/unsplash_jloWf465qgU.png?v=1708083981")] lg:min-h-full  md:min-h-[241px] ' />
      </div>
    </div>
  );
};
