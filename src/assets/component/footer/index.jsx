import React from 'react'
import logo from '../../photo/logo.png'
import map from '../../photo/map.png'
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <div className='w-full mt-[370px]'>
        <div className='w-full h-[710px] bg-[#00113B]'>
            <div className='items-center flex flex-col gap-11'>
                <div className='relative right-[555px] bottom-43'>
                    <div className='bg-[#4C40F7] rounded-[20px] w-[1120px] h-[340px] items-center justify-center flex flex-col absolute '>
                        <div className='flex flex-col gap-8 items-center'>
                            <div className='text-white text-center flex flex-col gap-4'>
                                <p className='font-medium text-[16px]'>Get Notified About Project</p>
                                <p className='font-semibold text-[42px]'>Subscribe Now</p>
                            </div>
                            <div className='flex'>
                                <input className='bg-white rounded-l-[11px] w-[500px] h-[72px] px-5 py-2 flex-1'
                                    type='email'
                                    placeholder='Email'>
                                </input>
                                <button className='h-[72px] bg-white rounded-r-[11px] w-[75px] text-gray-300 flex items-center justify-center cursor-pointer'><Send className='fill-[#8F94B4]'/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[100px] mt-[215px]'>
                    <div className='flex flex-col gap-8'>
                        <div className='bg-[#4C40F7] rounded-2xl w-12 h-12 flex flex-col items-center justify-center'>
                            <img src={logo}></img>
                        </div>
                        <p className='whitespace-pre-line font-medium text-[16px] text-white leading-5.5'>{`Lorem ipsum dolor sit amet, consectetur\n adipiscing elit, sed do eiusmod tempor\n incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud\n exercitation ullamco laboris nisi ut aliquip ex\n ea commodo consequat. Duis aute irure\n dolor in reprehenderit in voluptate velit esse\n cillum dolore eu fugiat nulla pariatur.`}</p>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='text-[20px] font-semibold text-white'>Our Office</p>
                        <img src={map}></img>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='font-semibold text-[20px] text-white'>Contact</p>
                        <div className='text-[16px] font-medium text-white flex flex-col gap-5'>
                            <p className='whitespace-pre-line'>{`Jl KH Samanhudi\n Metro Atom Plaza Bl\n AKS 1/11, Dki Jakarta`}</p>
                            <p className='whitespace-pre-line'>{`info@yourdomain.\ncom`}</p>
                            <p>+62 (0) 000 0000 00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[1120px] h-px bg-white'></div>
                <div className='flex gap-[535px]'>
                    <p className='text-[#ABAFC7] text-[16px] font-medium'>© 2021 Creative Agency</p>
                    <div className='text-[#ABAFC7] text-[16px] font-medium flex gap-9'>
                        <p>Home</p>
                        <p>Works</p>
                        <p>About</p>
                        <p>Pricing</p>
                        <p>About</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer