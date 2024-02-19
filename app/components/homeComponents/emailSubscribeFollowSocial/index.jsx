import React from 'react'
import { socialIcons } from '../../../constants/App.Constants'
import { Image } from '@shopify/hydrogen-react'
import Button from '~/components/Button';

 const EmailSubscribeFollowSocial = () => {
    return (
        <div className=' lg:p-[100px] sm:p-[50px] p-[20px] rounded-[34px] min-h-[318px] bg-c_EDF4FE mt-10'>
            <div className='flex justify-between items-center flex-wrap gap-10'>
                <div className="flex gap-8 items-center flex-wrap">
                    <div className='lg:block flex gap-2 lg:text-[40px] sm:text-[48px] leading-[50.4px]'>
                        <div>
                            <span className='text-black font-sora_semiBold text-f_40'>
                                Stay up
                            </span>
                        </div>
                        <div>
                            <span className='text-c_ED1651 font-sora_semiBold text-f_40'>
                                to date
                            </span>
                        </div>

                    </div>
                    <div className='space-y-2'>
                        <div className='flex w-full sm:flex-nowrap flex-wrap'>
                            <div className='w-full flex lg:items-end'>
                                <input type='text' placeholder='Enter your e-mail to sign up' className='hover:outline-none pb-2 w-full border-0 border-b border-black font-general_sans_regular bg-transparent outline-none  lg:text-[24px] text-[20px] placeholder:lg:text-[24px] placeholder:text-[20px] placeholder:text-black' />
                            </div>
                            <div className='sm:w-auto w-full'>
                                <Button
                                    chidlren={
                                        <span className='space-x-4 w-full font-general_sans_medium flex justify-between'>
                                            <span>Sign up</span>
                                            <span>가게</span>
                                        </span>
                                    }
                                    className={
                                        'whitespace-nowrap self-start sm:mt-10 mt-5 bg-c_ED1651  text-white px-5 py-3 rounded-full flex flex-row justify-between lg:w-[288px] w-full'
                                    }
                                />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <input type='checkbox' />
                            </div>
                            <div>
                                <span className='text-[12px] font-general_sans_medium'>Subscribe to receive communications from Rētreat KR. By subscribing, you confirm you have read and understood our privacy policy.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='space-y-5'>
                        <div className='lg:text-[40px] sm:text-[48px] font-sora_regular text-[32px] leading-[50.4px]'>
                            <span className='text-black'>
                                Follow
                            </span>
                            <span className='text-c_ED1651'>
                                {" "}us on
                            </span>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {socialIcons?.map((item) => <div className='border rounded-full flex justify-center items-center w-[48px] h-[48px]'>
                                <Image src={item?.icon} alt={item?.name} className='w-[24px] h-[24px] object-contain' />
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmailSubscribeFollowSocial;