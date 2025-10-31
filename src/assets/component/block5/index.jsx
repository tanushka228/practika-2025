import React from 'react'
import '../../../index.css'
import vector from '../../photo/vector.png'



const Block5 = () => {
  return (
    <div className='mt-[200px] relative'>
        <div className='absolute top-45'>
            <img src={vector} className='w-full'></img>
        </div>
        <div className='absolute top-160'>
            <img src={vector} className='w-full'></img>
        </div>
        <div className='flex flex-col items-center justify-center gap-[60px]'>
            <div className='text-center gap-5 flex flex-col'>
                <p className='text-[20px] font-semibold text-[#FF3B2F]'>Working space</p>
                <p className='text-[42px] font-semibold text-[#111029]'>Let’s meet our interior room decoration</p>
            </div>
            <div className='w-full flex gap-8 items-center justify-center'>
                <div className='flex flex-col gap-[30px]'>
                    <div className='relative w-[353px] h-[400px] background_image11'>
                        <div className='flex absolute mt-[350px] ml-7 w-full h-full'>
                            <p className='text-[18px] relative z-10 text-white'>Front working space</p>
                        </div>
                    </div>
                    <div className='relative w-[353px] h-[550px] background_image12'>
                        <div className='flex absolute mt-[495px] ml-7 w-full h-full'>
                            <p className='text-[18px] relative z-10 text-white'>Guest rest room</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='relative w-[352px] h-[530px] background_image21'>
                        <div className='flex absolute mt-[480px] ml-7 w-full h-full'>
                            <p className='text-[18px] relative z-10 text-white'>Meeting corner</p>
                        </div>
                    </div>
                    <div className='relative w-[352px] h-[420px] background_image22'>
                        <div className='flex absolute mt-[370px] ml-7 w-full h-full'>
                            <p className='text-[18px] relative z-10 text-white'>Single working space</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='relative w-[353px] h-[450px] background_image31'>
                        <div className='flex absolute mt-[400px] ml-7 w-full h-full'>
                            <p className='text-[18px] relative z-10 text-white'>Guest meeting room</p>
                        </div>
                    </div>
                    <div className='relative w-[353px] h-[500px] background_image32'>
                        <div className='flex absolute mt-[450px] ml-7 w-full h-full'>
                            <p className='text-[18px] relative z-10 text-white'>Kitchen room</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Block5