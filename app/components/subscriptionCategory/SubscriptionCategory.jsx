import {memo} from 'react';
import {subscriptionCategories} from '~/constants/App.Constants';
import Category from './Category';
const SubscriptionCategory = () => {
  const renderCategories = (item, index) => {
    return <Category item={item} />;
  };

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-[50px]">
      {subscriptionCategories?.map(renderCategories)}
    </div>
  );
};

export default memo(SubscriptionCategory);
