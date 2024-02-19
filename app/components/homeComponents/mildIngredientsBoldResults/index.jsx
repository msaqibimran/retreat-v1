import { Fragment } from "react";
import Button from "~/components/Button";

export const MildIngredientsBoldResults = () => {
    return (
        <div className="flex flex-col mt-20 gap-x-8">
            <Fragment>
                <div className='flex items-center lg:min-h-[1149.67px] min-h-[1120px] bg-[url("https://cdn.shopify.com/s/files/1/0853/3341/0089/files/green_mountains.png?v=1707843126")] bg-cover bg-no-repeat bg-center rounded-[34px] text-white p-5'>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div>
                            <div className='md:text-left text-center'>
                                <span className='text-[30px]'>마일드한 성분, 최적의 효과</span>
                            </div>
                            <div className='md:text-left text-center'>
                                <span className='md:text-[72px] text-[32px] font-sora_bold uppercase'>Mild ingredients, bold results.</span>
                            </div>
                            <div className='md:text-left text-center md:text-[20px] text-f_16 font-general_sans_semiBold'>
                                <span>We choose naturally-derived ingredients that are gentle on your skin while still proving their effectiveness. Our formulations prioritize the necessary components, leaving out any unnecessary additives.</span>
                            </div>
                            <div className='flex sm:flex-row flex-col flex-wrap lg:gap-5 gap-2'>
                                <Button
                                    chidlren={
                                        <span className='space-x-4 w-full flex justify-between'>
                                            <span>Shop</span>
                                            <span>가게</span>
                                        </span>
                                    }
                                    className={
                                        'self-start mt-10 bg-c_ED1651  text-white px-5 py-2 rounded-full flex flex-row justify-between lg:w-[320px] w-full'
                                    }
                                />
                                <Button
                                    chidlren={
                                        <span className='space-x-4 w-full flex justify-between'>
                                            <span>About</span>
                                            <span>가게</span>
                                        </span>
                                    }
                                    className={
                                        'self-start mt-10  border-white border text-white px-5 py-2 rounded-full flex flex-row justify-between lg:w-[320px] w-full'
                                    }
                                />
                            </div>
                        </div>
                        <div className='xl:text-[40px] sm:text-[24px] text-[16px] flex justify-end items-center w-full'>
                            <div className='space-y-10 w-full'>
                                {Array.from({ length: 4 })?.map(() => (
                                    <div className='flex md:justify-end justify-center space-x-3 flex-wrap '>
                                        <div>
                                            <span className="text-f_24 font-general_sans_medium">임상 테스트 완료</span>
                                        </div>
                                        <div>
                                            <span className="text-f_24 font-general_sans_medium">Clinically tested</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
};
