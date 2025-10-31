import React from 'react'
import { Star } from 'lucide-react';
import ronald from '../../photo/ronald.png'
import guy from '../../photo/guy.png'
import courthey from '../../photo/courthey.png'
import kristin from '../../photo/kristin.png'
import robert from '../../photo/robert.png'
import savannah from '../../photo/savannah.png'

const Block9 = () => {
  return (
    <div className='mt-[300px] bg-[#F9F9FD] flex flex-col items-center justify-center h-[1259px]'>
      <div className='flex flex-col gap-[120px]'>
        <div className='text-center flex flex-col gap-5'>
          <p className='text-[#FF2D59] font-semibold text-[20px]'>Testimonials</p>
          <p className='text-[42px] font-semibold'>Some testimonials from our customers</p>
        </div>
        <div className='flex gap-8'>
          <div>
            <div className='relative z-40 left-30 bottom-15'>
              <img src={ronald} className='absolute'></img>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 rounded-[20px] bg-white w-[352px] h-[358px]'>
              <div className='flex flex-col text-center gap-2'>
                <p className='text-[24px] font-semibold'>Ronald Richards</p>
                <p className='text-[16px] font-medium text-[#ABAFC7]'>Google inc.</p>
              </div>
              <p className='text-center whitespace-pre-line text-[18px] text-[#70798B]'>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
              <div className='text-[#4C40F7] flex gap-2.5'>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
              </div>
            </div>
          </div>
          <div>
            <div className='relative z-40 left-30 bottom-15'>
              <img src={guy} className='absolute'></img>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 rounded-[20px] bg-white w-[352px] h-[358px]'>
              <div className='flex flex-col text-center gap-2'>
                <p className='text-[24px] font-semibold'>Guy Hawkins</p>
                <p className='text-[16px] font-medium text-[#ABAFC7]'>Paypal inc.</p>
              </div>
              <p className='text-center whitespace-pre-line text-[18px] text-[#70798B]'>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
              <div className='text-[#4C40F7] flex gap-2.5'>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
              </div>
            </div>
          </div>
          <div>
            <div className='relative z-40 left-30 bottom-15'>
              <img src={kristin} className='absolute'></img>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 rounded-[20px] bg-white w-[352px] h-[358px]'>
              <div className='flex flex-col text-center gap-2'>
                <p className='text-[24px] font-semibold'>Kristin Watson</p>
                <p className='text-[16px] font-medium text-[#ABAFC7]'>Microsoft inc.</p>
              </div>
              <p className='text-center whitespace-pre-line text-[18px] text-[#70798B]'>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
              <div className='text-[#4C40F7] flex gap-2.5'>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-8'>
          <div>
            <div className='relative z-40 left-30 bottom-15'>
              <img src={robert} className='absolute'></img>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 rounded-[20px] bg-white w-[352px] h-[358px]'>
              <div className='flex flex-col text-center gap-2'>
                <p className='text-[24px] font-semibold'>Robert Fox</p>
                <p className='text-[16px] font-medium text-[#ABAFC7]'>Facebook inc.</p>
              </div>
              <p className='text-center whitespace-pre-line text-[18px] text-[#70798B]'>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
              <div className='text-[#4C40F7] flex gap-2.5'>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
              </div>
            </div>
          </div>
          <div>
            <div className='relative z-40 left-30 bottom-15'>
              <img src={savannah} className='absolute'></img>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 rounded-[20px] bg-white w-[352px] h-[358px]'>
              <div className='flex flex-col text-center gap-2'>
                <p className='text-[24px] font-semibold'>Savannah Nguyen</p>
                <p className='text-[16px] font-medium text-[#ABAFC7]'>Twitter inc.</p>
              </div>
              <p className='text-center whitespace-pre-line text-[18px] text-[#70798B]'>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
              <div className='text-[#4C40F7] flex gap-2.5'>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
              </div>
            </div>
          </div>
          <div>
            <div className='relative z-40 left-30 bottom-15'>
              <img src={courthey} className='absolute'></img>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 rounded-[20px] bg-white w-[352px] h-[358px]'>
              <div className='flex flex-col text-center gap-2'>
                <p className='text-[24px] font-semibold'>Courtney Henry</p>
                <p className='text-[16px] font-medium text-[#ABAFC7]'>Apple inc.</p>
              </div>
              <p className='text-center whitespace-pre-line text-[18px] text-[#70798B]'>{`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed\n do eiusmod tempor incididunt.`}</p>
              <div className='text-[#4C40F7] flex gap-2.5'>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
                <Star className='w-4 h-4 fill-[#4C40F7]'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block9