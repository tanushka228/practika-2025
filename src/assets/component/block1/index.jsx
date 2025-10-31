import React from 'react';
import strelka from '../../photo/strelka.png';
import foto1 from '../../photo/foto1.png';

function Block1() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12 bg-white -mt-[30px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        
        {/* текст */} 
         <div className="lg:col-span-2 flex flex-col space-y-8 lg:pl-21 w-[900px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Make your business <br/>
            <span className="text-[#FF6800]">more powerful</span><br />
            with us
          </h1>

          <p className="text-lg text-[#6B6B6B] leading-relaxed">
          We provide various services to make <br/> 
          your business grow and get bigger. Your <br/>
          satisfaction is our first priority.
          </p>

          <button className="bg-[#4C40F7] hover:bg-[#3A30D5] text-white rounded-xl text-[16px] font-semibold w-full sm:w-[200px] h-16 flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg">
            Get Started
            <img src={strelka} alt="arrow" className="w-5 h-5" />
          </button>
        </div>

        {/* фото */}
        <div className=" lg:col-span-3 flex justify-center lg:justify-end -mt-[200px]">
          <img src={foto1} alt="foto" className="w-full max-w-[900px]" />
        </div>
      </div>
    </section>
  );
}

export default Block1;