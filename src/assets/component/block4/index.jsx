import React from 'react';
import { CircleCheck } from 'lucide-react'; 

const Block4 = () => {
  return (
    <div className='h-[900px] w-full bg-[#F9F9FD] z-40 relative flex flex-col items-center justify-center'>
      <div className='flex gap-20'>
        <div className='flex gap-10 items-center justify-center'>
          <div className='flex flex-col gap-10 mt-14'>
            <div className='w-[270px] h-[300px] rounded-[20px] bg-white flex flex-col items-center justify-center text-center gap-5'>
              <p className='text-[#4C40F7] text-[56px] font-semibold'>70K+</p>
              <p className='text-[#111029] text-[18px] whitespace-pre-line'>{`We have more than\n customers`}</p>
            </div>
            <div className='w-[270px] h-[300px] rounded-[20px] bg-white flex flex-col items-center justify-center text-center gap-5'>
              <p className='text-[#FF2D59] text-[56px] font-semibold'>10M+</p>
              <p className='text-[#111029] text-[18px] whitespace-pre-line'>{`People who are helped\n because of our hard\n work`}</p>
            </div>
          </div>

          <div className='flex flex-col gap-12'>
            <div className='w-[270px] h-[300px] rounded-[20px] bg-white flex flex-col items-center justify-center text-center gap-5'>
              <p className='text-[#FF6800] text-[56px] font-semibold'>100+</p>
              <p className='text-[#111029] text-[18px] whitespace-pre-line'>{`Projects we have\n completed`}</p>
            </div>
            <div className='w-[270px] h-[300px] rounded-[20px] bg-white flex flex-col items-center justify-center text-center gap-5'>
              <p className='text-[#4ADB61] text-[56px] font-semibold'>200+</p>
              <p className='text-[#111029] text-[18px] whitespace-pre-line'>{`Support from world-\nrenowned companies`}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[35px]'>
          <p className='font-semibold text-[56px] whitespace-pre-line leading-[1.15]'>{`Customer\n satisfaction is\n our first priority`}</p>
          <p className='text-[#6B6B6B] text-[18px] whitespace-pre-line leading-8'>{`We serve many customers, ranging from small\n businesses, medium entrepreneurs, to world-\nrenowned companies. Their satisfaction is our\n pleasure. We strive to provide the best service by:`}</p>
          
          <div className='flex flex-col gap-4'>
            <div className='flex gap-6 items-center'>
              <CircleCheck className='fill-[#4C40F7] text-[#F9F9FD]' />
              <p className='text-[19px] text-[#6B6B6B]'>Provide idea support from our creative team</p>
            </div>
            <div className='flex gap-6 items-center'>
              <CircleCheck className='fill-[#4C40F7] text-[#F9F9FD]' />
              <p className='text-[19px] text-[#6B6B6B] whitespace-pre-line'>{`Provide attractive and professional design\n services`}</p>
            </div>
            <div className='flex gap-6 items-center'>
              <CircleCheck className='fill-[#4C40F7] text-[#F9F9FD]' />
              <p className='text-[19px] text-[#6B6B6B]'>Support for service 24 hours a week</p>
            </div>
            <div className='flex gap-6 items-center'>
              <CircleCheck className='fill-[#4C40F7] text-[#F9F9FD]' />
              <p className='text-[19px] text-[#6B6B6B]'>Helping our customers to grow their business</p>
            </div>
            <div className='flex gap-6 items-center'>
              <CircleCheck className='fill-[#4C40F7] text-[#F9F9FD]' />
              <p className='text-[19px] text-[#6B6B6B] whitespace-pre-line'>{`Provide support to market products through\n online marketplace`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;