import { Image } from '@shopify/hydrogen'
import { useState } from 'react'
import Button from '~/components/Button'

const bluePrintsData = [{
    id: "1",
    krLabel: "세정",
    engLabel: "Cleanse",
    description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
    image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
    collapse: true,
}, {
    id: "2",
    krLabel: "영양",
    engLabel: "Nourish",
    description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
    image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
    collapse: false,
}, {
    id: "3",
    krLabel: "세정",
    engLabel: "Soothe",
    description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
    image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
    collapse: false,
}, {
    id: "4",
    krLabel: "보호",
    engLabel: "Protect",
    description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
    image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
    collapse: false,
}, {
    id: "5",
    krLabel: "광채",
    engLabel: "Glow",
    description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
    image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
    collapse: false,
}]

export const BluePrints = () => {

    const [bluePrints, setBluePrints] = useState(bluePrintsData)
    const handleCollapse = (id) => setBluePrints((prev) => prev?.map((item) => item?.id === id ? ({ ...item, collapse: true }) : ({ ...item, collapse: false })))

    return (
        <div className="flex flex-col mt-20 gap-x-8">
            <div className='grid lg:grid-cols-2 gap-5'>
                <div>
                    <div>
                        <span className='text-c_333333 xl:text-[72px] sm:text-[48px] text-[32px] font-sora_semiBold  sm:leading-[90.72px] leading-[60.48px]'>Rētreat Kr’s,<br /> Korean Beauty</span>
                    </div>
                    <div>
                        <span className='text-c_7CA0CC xl:text-[72px] sm:text-[48px] text-[32px] font-sora_semiBold sm:leading-[90.72px] leading-[60.48px]'>Blueprint</span>
                    </div>
                    <Button
                        chidlren={
                            <span className='space-x-4 w-full flex justify-between'>
                                <span>Shop</span>
                                <div className='flex gap-x-1 items-center'>
                                <span>가게</span>
                                <img src='https://cdn.shopify.com/s/files/1/0853/3341/0089/files/forward-arrow.svg?v=1707843033' className='w-3 h-3' />
                                </div>
                            </span>
                        }
                        className={
                            'self-start mt-10 border border-black text-c_222329 px-5 py-2 rounded-full flex flex-row justify-between w-[220px]'
                        }
                    />
                </div>
                <div className='space-y-5 '>
                    {bluePrints?.map((bluePrint) => (
                        <div className='flex space-x-10 cursor-pointer' onClick={() => handleCollapse(bluePrint?.id)}>
                            <div className={`min-h-full w-[12px] rounded-full ${bluePrint?.collapse ? "bg-c_ED1651" : "bg-c_FBD0DC"}`}></div>
                            <div className='space-y-3'>
                                <div className='flex justify-between items-center'>
                                    <div className={` ${bluePrint?.collapse ? "" : "flex space-x-5 items-center"}`}>
                                        <div>
                                            <span className='xl:text-[40px] sm:text-[30px] text-[20px]'>{bluePrint?.krLabel}</span>
                                        </div>
                                        <div>
                                            <span className='sm:text-[30px] font-sora_regular text-[20px]'>{bluePrint?.engLabel}</span>
                                        </div>
                                    </div>
                                    {bluePrint?.collapse && (
                                        <div>
                                            <Image className='h-[90.21px]' src={bluePrint?.image} />
                                        </div>
                                    )}
                                </div>
                                {bluePrint?.collapse && (
                                    <div>
                                        <span className='sm:text-[24px] font-general_sans_regular text-[12px]'>{bluePrint?.description}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


