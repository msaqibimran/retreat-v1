import React, {memo} from 'react';
import {Disclosure} from '@headlessui/react';
import {Image} from '@shopify/hydrogen';
import {images} from '~/config/images';

const Accordion = ({item}) => {
  return (
    <Disclosure
      as="div"
      className="w-full rounded-[34px] bg-c_F9F9F9 border px-[25px] py-[15px] "
    >
      <Disclosure.Button className=" w-full  flex   justify-between items-center">
        <div>
          <span className='text-f_24 font-general_sans_medium text-c_343434'> {item?.title}</span>
        </div>
        <div>
          <Image src={images.arrowDown} className="w-[14px] h-[6.5px]" />
        </div>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 font-general_sans_regular bg-c_F9F9F9 mt-[10px]">
        <span>{item?.desc}</span>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default memo(Accordion);
