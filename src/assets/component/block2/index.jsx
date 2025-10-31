import React from 'react';
import fire from '../../photo/icons/fire.svg';
import write from '../../photo/icons/write.svg';
import computer from '../../photo/icons/computer.svg';
import phone from '../../photo/icons/phone.svg';
import house from '../../photo/icons/house.svg';
import graphic from '../../photo/icons/graphic.svg';
import strelka1 from '../../photo/strelka1.png';

const Block2 = () => {
  const services = [
    { id: 1, title: "Ideate", description: "We help you develop creative ideas so that your business can grow more rapidly", icon: fire, bgColor: "bg-[#4C40F7]", textColor: "text-white" },
    { id: 2, title: "Design", description: "We provide services with the best designs than our designer team for your business", icon: write, bgColor: "bg-[#FFFFFF]", textColor: "text-gray-900" },
    { id: 3, title: "Web Development", description: "We help develop company websites to be more professional and attractive", icon: computer, bgColor: "bg-[#FFFFFF]", textColor: "text-gray-900" },
    { id: 4, title: "App Development", description: "We help develop company mobile apps to be more professional and attractive", icon: phone, bgColor: "bg-[#FFFFFF]", textColor: "text-gray-900" },
    { id: 5, title: "Business Growth", description: "We also provide services by providing input for your business growth", icon: house, bgColor: "bg-[#FFFFFF]", textColor: "text-gray-900" },
    { id: 6, title: "Digital Marketing", description: "We also help you market your products through an online marketplace", icon: graphic, bgColor: "bg-[#FFFFFF]", textColor: "text-gray-900" }
  ];

  return (
    <div className="min-h-screen py-16 bg-white">
        
         {/* Текст над карточками */}
      <div className="flex flex-col items-center mb-[60px]">
        <p className="text-[#FF2D59] text-[20px] font-semibold mb-5">Our Services</p>
        <h1 className="text-[42px] font-semibold text-center max-w-4xl">
          The various services we provide to make your business more powerful
        </h1>
      </div>

         {/* Карточки */}
  <div
    className="grid grid-cols-3"
    style={{
      marginLeft: 195,
      marginRight: 195,
      columnGap: 10, 
      rowGap: 60    
    }} >

    {services.map((service) => (
      <div
        key={service.id}
        className={`${service.bgColor} rounded-2xl shadow-lg flex flex-col items-center justify-between p-11`}
        style={{ width: 352, height: 458 }} >

            {/* Иконка */}
            <img src={service.icon} alt={service.title} className="w-[97px] h-[97px] object-contain" />

            {/* Заголовок */}
            <h3 className={`text-[20px] font-semibold text-center mt-6 ${service.textColor}`}>
              {service.title}
            </h3>

            {/* Подзаголовок */}
            <p className={`text-[18px] text-center mt-2 ${service.textColor === 'text-white' ? 'text-white/90' : 'text-[#6B6B6B]'}`}>
              {service.description}
            </p>

            {/* Стрелка в круге с условием цветов */}
            <div
              className="mt-6 w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
              style={{
                backgroundColor: service.id === 1 ? '#FFFFFF' : '#F3F4F6'
              }} >
             <img src={strelka1} alt="arrow" className="w-[15px] h-[15px]  " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block2;

