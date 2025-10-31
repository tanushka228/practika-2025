import React from 'react'
import exclude from '../../photo/exclude.png'
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Block7 = () => {
  return (
    <div className='w-full h-[548px] bg-[#FE9602] flex flex-col items-center justify-center mt-[200px] relative z-10'>
        <div className='flex items-center gap-[154px]'>
            <button className='cursor-pointer w-[45px] h-[45px] rounded-full bg-white hover:bg-[#4C40F7] hover:text-white duration-300 flex items-center justify-center'><ArrowLeft/></button>
            <div className='flex flex-col gap-11 items-center justify-center'>
                <div className='flex gap-[7px]'>
                    <img src={exclude}></img>
                    <img src={exclude}></img>
                </div>
                <p className='text-center text-[28px] whitespace-pre-line text-white'>{`We are serious about providing our best service to\n all the customers we help. Customers satisfaction is\n our number one priority.`}</p>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='text-white flex flex-col gap-2 text-center'>
                        <p className='text-[20px] font-semibold'>Mark Garfield</p>
                        <p className='text-[20px] font-semibold'>CEO & Head of Product</p>
                    </div>
                    <div className='flex gap-1 font-bold rounded-xs'>
                        <p className='text-white'>_</p>
                        <p className='text-[#FFCC00]'>_</p>
                        <p className='text-[#FFCC00]'>_</p>
                        <p className='text-[#FFCC00]'>_</p>
                    </div>
                </div>
            </div>
            <button className='cursor-pointer w-[45px] h-[45px] rounded-full bg-white hover:bg-[#4C40F7] hover:text-white duration-300 flex items-center justify-center'><ArrowRight/></button>
        </div>
    </div>
  )
}

export default Block7