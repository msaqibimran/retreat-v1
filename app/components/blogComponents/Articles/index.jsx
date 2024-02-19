import React, {useState} from 'react';
import {NewsHeader, blogs} from '../../../constants/App.Constants';
import Header from './Header';
import ProductCard from '../../../components/productCard/ProductCard';
import PaginatedItems from '../../pagination/Pagination';

const Articles = () => {
  const [newsItems, setNewsItems] = useState(NewsHeader);

  const handlenavigationHeader = (data) => (setData) => (matchIndex) => () => {
    let mapped = data?.map((item, index) => {
      if (index === matchIndex) {
        return {...item, selected: true};
      }
      return {...item, selected: false};
    });
    setData(mapped);
  };
  return (
    <div className="w-full">
      <Header
        headerItem={newsItems}
        onClick={handlenavigationHeader(newsItems)(setNewsItems)}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[35px]">
        {blogs?.map((item, index) => (
          <div>
            <ProductCard key={index + 1} item={item} isShow={false} />
          </div>
        ))}
      </div>
      <div className="lg:hidden md:block sm:block block mt-[15px]">
        <PaginatedItems />
      </div>
    </div>
  );
};

export default Articles;
