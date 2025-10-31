import React from 'react'
import logo from '../../photo/header/logo.png'

const HeaderComponent = () => {
  return (
    <div className='w-full h-[120px]'>
        <div className='flex gap-[281px] items-center justify-center w-full h-[120px]'>
            <img src={logo} alt='logo' className='cursor-pointer mt-5'></img>
            <div className='flex text-xl text-[#6B6B6B] font-semibold gap-[82px]'>
                <p className='text-[#4C40F7] cursor-pointer'>Home</p>
                <p className='cursor-pointer'>Works</p>
                <p className='cursor-pointer'>About</p>
            </div>
            <button className='bg-[#4C40F7] text-white rounded-xl text-[16px] font-semibold w-40 h-16 cursor-pointer hover:bg-black'>Contact us</button>
        </div>
    </div>
  )
}

export default HeaderComponent