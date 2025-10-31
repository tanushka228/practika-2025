import React from 'react'
import { ChevronDown } from 'lucide-react';
import vectorleft from '../../photo/vectorleft.png'
import vectorright from '../../photo/vectorright.png'

const Block8 = () => {
  return (
    <div className='mt-[200px] w-[1440px]'>
        <div className='relative z-0 bottom-186'>
            <img className='absolute transform translate-x-256' src={vectorright}></img>
        </div>
        <div className='relative z-0'>
            <img className='absolute' src={vectorleft}></img>
        </div>
        <div className='flex flex-col gap-[60px] relative z-10'>
            <div className='flex flex-col text-center gap-5'>
                <p className='text-[20px] font-semibold text-[#FF2D59]'>Frequently Ask Question</p>
                <p className='text-[42px] font-semibold'>Some of our frequently asked questions</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='w-[1120px] border-[#D8D8D8] bg-white border-2 rounded-lg h-[88px] flex flex-col items-center justify-center'>
                    <div className='flex justify-between w-[1056px]'>
                        <p className='text-[16px] font-medium'>What are the services provided to customers?</p>
                        <button className='cursor-pointer'><ChevronDown/></button>
                    </div>
                </div>
                <div className='w-[1120px] border-[#D8D8D8] bg-white border-2 rounded-lg h-[88px] flex flex-col items-center justify-center'>
                    <div className='flex justify-between w-[1056px]'>
                        <p className='text-[16px] font-medium'>How can I submit a proposal for cooperation?</p>
                        <button className='cursor-pointer'><ChevronDown/></button>
                    </div>
                </div>
                <div className='w-[1120px] border-[#D8D8D8] bg-white border-2 rounded-lg h-[88px] flex flex-col items-center justify-center'>
                    <div className='flex justify-between w-[1056px]'>
                        <p className='text-[16px] font-medium'>I come from a faraway place, can collaboration be done full time online through several meeting applications?</p>
                        <button className='cursor-pointer'><ChevronDown/></button>
                    </div>
                </div>
                <div className='w-[1120px] border-[#D8D8D8] bg-white border-2 rounded-lg h-[88px] flex flex-col items-center justify-center'>
                    <div className='flex justify-between w-[1056px]'>
                        <p className='text-[16px] font-medium'>How do I get the payment complete?</p>
                        <button className='cursor-pointer'><ChevronDown/></button>
                    </div>
                </div>
                <div className='w-[1120px] border-[#D8D8D8] bg-white border-2 rounded-lg h-[88px] flex flex-col items-center justify-center'>
                    <div className='flex justify-between w-[1056px]'>
                        <p className='text-[16px] font-medium'>How long can the collaboration last?</p>
                        <button className='cursor-pointer'><ChevronDown/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Block8