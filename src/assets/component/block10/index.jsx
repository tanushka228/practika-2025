import React from 'react'
import { MoveRight } from 'lucide-react';
import vector from '../../photo/vector.png'

const Block10 = () => {
  return (
    <div className='mt-[200px]'>
        <div className='relative bottom-15 -z-10'>
            <img src={vector} className='absolute w-full'></img>
        </div>
        <div className='relative top-94 -z-10'>
            <img src={vector} className='absolute w-full'></img>
        </div>
        <div className='items-center justify-center flex flex-col'>
            <div className='rounded-[20px] w-[1120px] h-[340px] bg-[#FFCC00] flex flex-col gap-8 items-center justify-center'>
                <div className='text-white flex flex-col gap-5 text-center'>
                    <p className='font-medium text-[16px]'>Are You Ready For</p>
                    <p className='font-semibold text-[42px]'>Start a New Project</p>
                </div>
                <button className='flex text-[16px] font-semibold text-white w-[200px] h-16 bg-[#4C40F7] gap-3 items-center justify-center rounded-xl cursor-pointer'>Start Now<MoveRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Block10