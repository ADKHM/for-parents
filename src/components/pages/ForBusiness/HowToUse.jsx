import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const HowToUse = () => {
  return (
    <div className='pt-[90px] px-[30px]'>
      <h1 className='font-semibold text-[40px] text-center'>Как <span className='text-[#0076FE]'>подключить</span>?</h1>
      <div className='flex justify-center gap-20 items-center pt-20'>
        <div className='w-[390px] flex flex-col gap-9'>
          <div className='flex gap-6 items-center'>
            <img src="/image copy 59.png" alt="" className='w-20 h-12 ' />
            <p className='font-normal text-lg text-[#002033]'>Приобрести камеры видеонаблюдения Faceter
              <span className='font-semibold'>с облачным</span> сервисом.</p>
          </div>
          <button className='py-[17px] px-11 rounded-2xl bg-[#0076FE] flex justify-center items-center gap-3 text-lg font-semibold text-white ml-16'>Выбрать камеру <FaArrowRight className='hover:rotate-320' /></button>
        </div>
        <h2 className='font-black text-[60px] text-[#00000008]'>ИЛИ</h2>
        <div className='w-[440px] flex flex-col gap-9'>
          <div className='flex gap-6 items-center'>
            <img src="/image copy 60.png" alt="" className='w-11 h-14 ' />
            <p className='font-normal text-lg text-[#002033]'>Подключить <span className='font-semibold'>свои IP-камеры</span>
              или видеорегистратор
              к облаку Faceter</p>
          </div>
          <button className='py-[17px] px-11 rounded-2xl bg-[#00000008]  flex justify-center items-center gap-3 text-lg font-semibold text-[#0076FE] ml-10'>Проверить совместимость <FaArrowRight className='hover:rotate-320' /></button>
        </div>
      </div>
      <h4 className='font-semibold text-lg text-[#0076FE] text-center mt-16'>Камеры, с которыми работает Faceter</h4>
      <div className='flex justify-center gap-16 items-center pt-9'>
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
      </div>
    </div>
  )
}

export default HowToUse