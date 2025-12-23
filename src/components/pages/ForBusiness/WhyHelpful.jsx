import React from 'react'

const WhyHelpful = () => {
  return (
    <div className='pt-[90px] px-[30px]'>
      <h1 className='font-semibold text-[40px] text-center'>Почему <span className='text-[#0076FE]'>облачное</span> видеонаблюдение <span className='text-[#0076FE]'>лучше</span> ?</h1>
      <div className='flex flex-col gap-5 pt-10'>
        <div className='flex flex-col gap-2.5'>
          <div className='flex flex-col gap-0 '>
            <span className='font-normal text-[40px] ml-[22px]'>Инсталляция</span>
            <hr className='text-[#0076FE]' />
          </div>
          <div className='flex flex-col gap-0 '>
            <span className='font-normal text-[40px] ml-[22px]'>Настройка</span>
            <hr className='text-[#0076FE]' />
          </div>
        </div>
        <div className='py-[15px] pl-5 pr-8 rounded-4xl border border-[#0076FE] border-solid flex flex-col gap-3'>
          <h2 className='font-medium text-[40px] '>Удаленный доступ</h2>
          <div className='flex gap-5'>
            <button className='py-2.5 px-6 font-semibold text-lg rounded-2xl border border-[#0076FE] border-solid bg-transparent text-[#0076FE] hover:text-white hover:bg-[#0076FE] transition-colors cursor-pointer'>Облачное</button>
            <p className='font-normal text-lg'>Базовая функция работающая на высоком уровне. Есть возможность просмотра видеозаписей, скачивания архива, настройки уведомлений и полный доступ к функционалу.</p>
          </div>
          <div className='flex gap-5'>
            <button className='py-2.5 px-6 font-semibold text-lg rounded-2xl border border-[#FC0C35] border-solid bg-transparent text-[#FC0C35] hover:text-white hover:bg-[#FC0C35] transition-colors cursor-pointer'>Локальное</button>
            <p className='font-normal text-lg'>Базовая функция работающая на высоком уровне. Есть возможность просмотра видеозаписей, скачивания архива, настройки уведомлений и полный доступ к функционалу.</p>
          </div>
        </div>
        <div className='flex flex-col gap-2.5'>
          <div className='flex flex-col gap-0 '>
            <span className='font-normal text-[40px] ml-[22px]'>Обновление</span>
            <hr className='text-[#0076FE]' />
          </div>
          <div className='flex flex-col gap-0 '>
            <span className='font-normal text-[40px] ml-[22px]'>Хранение</span>
            <hr className='text-[#0076FE]' />
          </div>
          <div className='flex flex-col gap-0 '>
            <span className='font-normal text-[40px] ml-[22px]'>Защита</span>
            <hr className='text-[#0076FE]' />
          </div>
          <div className='flex flex-col gap-0 '>
            <span className='font-normal text-[40px] ml-[22px]'>Стоимость</span>
            <hr className='text-[#0076FE]' />
          </div>
          <div className='flex flex-col gap-0 '>
            <span className='font-normal text-[40px] ml-[22px]'>Дополнительные возможности</span>
            <hr className='text-[#0076FE]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyHelpful