import React from 'react';

const Input = ({
  placeholder = '"Enter your e-mail to sign up"',
  value = '',
  onChnage = () => {},
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChnage}
      className="hover:outline-none pb-2 w-full border-0 border-b border-black bg-transparent outline-none  lg:text-[24px] text-[20px] placeholder:lg:text-[24px] placeholder:text-[20px] placeholder:text-black font-general_sans_regular"
    />
  );
};

export default Input;
