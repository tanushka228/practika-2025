import React from 'react'
import bg1 from '../../photo/bg1.png'
import photo2 from '../../photo/photo2.png'

const Block3Component = () => {
  return (
    <div className='mt-[200px] relative w-full'>
        <div className='absolute top-40'>
            <img src={bg1} className='w-full'></img>
        </div>
        <div className='flex flex-col items-center justify-center gap-[60px] relative'>
            <div className='text-center flex flex-col gap-3'>
                <p className='text-[#FF2D59] text-[20px] font-semibold'>Our Documentation</p>
                <p className='whitespace-pre-line text-[42px] text-[#111029] font-semibold leading-13'>{`See what our profile is like and how we work for your\nbusiness`}</p>
            </div>
            <img src={photo2}></img>
        </div>
    </div>
  )
}

export default Block3Component