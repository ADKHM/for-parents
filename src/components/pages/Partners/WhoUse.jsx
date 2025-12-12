import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";

const WhoUse = () => {
  return (
    <div className='pt-[90px] px-[30px]'>
        <h1 className='font-semibold text-4xl text-center'>Камеры, с которыми <span className='text-[#0076FE]'>работает Faceter</span></h1>
        <div className='flex justify-center gap-16 items-center pt-11'>
            <button className='size-[50px] bg-[#0076FE] rounded-full flex justify-center items-center text-white text-xl cursor-pointer hover:bg-[#0076FE1A] hover:text-[#0076FE] transition-colors'><FaArrowLeft /></button>
            <div className='flex gap-16'>
                <img src="/image 27.png" alt="" className='w-[110px] h-[25px] ' />
                <img src="/image 28.png" alt="" className='w-[86px] h-[25px] ' />
                <img src="/image 29.png" alt="" className='w-[149px] h-5 ' />
                <img src="/image 30.png" alt="" className='w-[75px] h-5 ' />
                <img src="/image 31.png" alt="" className='w-[75px] h-5 ' />
                <img src="/image 32.png" alt="" className='w-[88px] h-[35px] ' />
                <img src="/image 33.png" alt="" className='w-[149px] h-5 ' />
            </div>
            <button className='size-[50px] bg-[#0076FE] rounded-full flex justify-center items-center text-white text-xl cursor-pointer hover:bg-[#0076FE1A] hover:text-[#0076FE] transition-colors mb-6'><FaArrowRight /></button>
            <div className='flex gap-16'></div>
        </div>
        <div className='flex justify-between items-center pt-[90px]'>
          <h2 className='font-semibold text-4xl text-[#0076FE] '>Кто и где <span className='text-black'>использует?</span></h2>
          <div className='flex gap-3'>
          <button className='size-[50px] bg-[#0076FE1A] rounded-full flex justify-center items-center text-[#0076FE] text-xl cursor-pointer hover:bg-[#0076FE] hover:text-white transition-colors'><FaArrowLeft /></button>
          <button className='size-[50px] bg-[#0076FE] rounded-full flex justify-center items-center text-white text-xl cursor-pointer hover:bg-[#0076FE1A] hover:text-[#0076FE] transition-colors mb-6'><FaArrowRight /></button>
          </div>
        </div>
          <div className='flex justify-between flex-wrap pt-10'>
            {/* 1 */}
            <div className='relative w-[324px] bg-[#0076FE] pt-[30px] px-4 pb-[72px] rounded-[40px] overflow-hidden'>
              <div className='absolute -top-16 -left-16 size-[174px] bg-white/20 rounded-full'></div>
              <img src="/image copy 21.png" alt="" className='absolute w-[148px] h-16 right-4' />
              <div className='flex flex-col gap-[30px] items-center '>
                <h2 className='font-semibold text-xl text-white'>ПВЗ</h2>
                <ul className='flex flex-col gap-[30px] list-disc px-4'>
                  <li className='font-normal text-lg text-white'>Соблюдение требований маркетплейса</li>
                  <li className='font-normal text-lg text-white'>Разбор спорных ситуаций при выдаче и возварте <br /> товаров</li>
                  <li className='font-normal text-lg text-white'>Контроль времени и наличия сотрудников на рабочем месте</li>
                </ul>
              </div>
              <img src="/image copy 22.png" alt="" className='absolute bottom-5 left-10 w-[223px] h-[25px]' />
            </div>
            {/* 2 */}
            <div className='relative w-[324px] bg-[#0076FE] pt-[30px] px-4 pb-[72px] rounded-[40px] overflow-hidden'>
              <div className='flex flex-col gap-[30px] items-center '>
                <h2 className='font-semibold text-xl text-white'>Рестораны и кафе</h2>
                <ul className='flex flex-col gap-[30px] list-disc px-4'>
                  <li className='font-normal text-lg text-white'>Контроль обстановки в зале, на кухне и на улице</li>
                  <li className='font-normal text-lg text-white'>Разбор спорных и конфликтных ситуаций</li>
                  <li className='font-normal text-lg text-white'>Контроль соблюдения графика работы</li>
                  <li className='font-normal text-lg text-white'>Контроль кассовой зоны</li>
                </ul>
              </div>
            </div>
            {/* 3 */}
            <div className='relative w-[324px] bg-[#0076FE] pt-[30px] px-4 pb-[72px] rounded-[40px] overflow-hidden'>
              <IoMdCloudOutline className='absolute top-40 -right-10 text-[150px] text-white/20' />
              <div className='flex flex-col gap-[30px] items-center '>
                <h2 className='font-semibold text-xl text-white'>ТСЖ</h2>
                <ul className='flex flex-col gap-[30px] list-disc px-4'>
                  <li className='font-normal text-lg text-white'>Контроль происходящего 
                  на детской площадке</li>
                  <li className='font-normal text-lg text-white'>Безопасность машин 
                  на парковке</li>
                  <li className='font-normal text-lg text-white'>Контроль въезда 
                  на территорию дома</li>
                  <li className='font-normal text-lg text-white'>Организация трансляции 
                  для жильцов</li>
                </ul>
              </div>
            </div>
            {/* 3 */}
            <div className='relative w-[324px] bg-[#0076FE] pt-[30px] px-4 pb-[72px] rounded-[40px] overflow-hidden'>
              <div className='absolute -top-16 -right-16 size-[174px] border-8 border-white/20 rounded-full'></div>
              <div className='absolute -top-5 -right-5 size-[91px] border-8 border-white/20 rounded-full'></div>
              <div className='flex flex-col gap-[30px] items-center '>
                <h2 className='font-semibold text-xl text-white'>Магазины и шоурумы</h2>
                <ul className='flex flex-col gap-[30px] list-disc px-4'>
                  <li className='font-normal text-lg text-white'>Предотвращение краж и порчи товаров в зале</li>
                  <li className='font-normal text-lg text-white'>Учёт рабочего времени сотрудников</li>
                  <li className='font-normal text-lg text-white'>Разбор спорных и конфликтных ситуаций</li>
                  <li className='font-normal text-lg text-white'>Разбор спорных и конфликтных ситуаций</li>
                </ul>
              </div>
            </div>
          </div>
    </div>
  )
}

export default WhoUse