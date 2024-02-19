import React, {Fragment} from 'react'
import { Disclosure } from '@headlessui/react';
import { Image } from '@shopify/hydrogen';

const QuestionArray = [
    {
      question: 'Question 1',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  ',
    },
    {
      question: 'Question 2',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  ',
    },
    {
      question: 'Question 3',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  ',
    },
    {
      question: 'Question 4',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  ',
    },
    {
      question: 'Question 5',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  ',
    },
    {
      question: 'Question 6',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  ',
    },
  ];
const FrequentlyAskedQuestions = () => {
  return (
    <Fragment>
<div className="flex flex-col py-16 lg:px-8">
      <div className="flex gap-1 items-center sm:flex flex-wrap">
        <span className="text-[32px] sm:text-base md:text-[52px] font-sora_semiBold text-[#343434]">
          Frequently
        </span>
        <span className="text-[32px] sm:text-base md:text-[52px] font-sora_semiBold text-[#ED1651]">
          asked
        </span>
        <span className="text-[32px] sm:text-base md:text-[52px] font-sora_semiBold text-[#ED1651]">
          questions
        </span>
      </div>
      <div className="w-full pt-8">
        <div className="w-full rounded-2xl bg-white">
          {QuestionArray?.map((item, index) => {
            return (
              <Disclosure defaultOpen={index === 0}>
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  py-2 text-left text-sm font-medium">
                      <span
                        className={
                          open
                            ? 'w-full text-[24px] font-sora_semiBold text-[#ED1651] pb-8 py-4'
                            : 'w-full text-[24px] font-sora_semiBold text-[#222329] pb-8 py-4'
                        }
                      >
                        {item?.question}
                      </span>
                      {open ? (
                        <div className="flex justify-end">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0853/3341/0089/files/xmark.svg?v=1707854021"
                            className="h-[29.94px] w-[29.94px] float-end"
                          />
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0853/3341/0089/files/plus.svg?v=1707854784"
                            className="h-[29.94px] w-[29.94px] float-end"
                          />
                        </div>
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm text-gray-500 font-general_sans_regular  border-black border-b pb-4">
                      {item?.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default FrequentlyAskedQuestions