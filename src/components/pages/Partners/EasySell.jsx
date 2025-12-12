import React from 'react'

const EasySell = () => {
  return (
    <div className='pt-20'>
        <div className='w-full bg-[#0076FE1A] py-[50px] px-[30px] '>
            <h1 className='font-semibold text-[40px] text-center'>Почему продукты Faceter <span className='text-[#0076FE]'>легко продавать?</span></h1>
            <div className='flex flex-wrap gap-[25px] pt-[30px]'>
                {/* 1 */}
                <div className='w-[430px] h-[241px] bg-white rounded-[30px] p-[30px] '>
                    <p className='font-normal text-lg'>Мы разработали универсальную 
                    линейку камер и даем на них <br /> <span className='text-[#0076FE]'>5 лет гарантии</span></p>
                    <div className='relative flex justify-end mt-3'>
                        <img src="/image copy 17.png" alt="" className='absolute right-32 -bottom-20  size-20' />
                        <img src="/image copy 18.png" alt="" className='absolute right-16 -bottom-20  size-20' />
                        <img src="/image copy 19.png" alt="" className='absolute right-0  -bottom-20 size-20' />
                    </div>
                </div>
                {/* 2 */}
                <div className='w-[430px] h-[241px] bg-white rounded-[30px] p-[30px] '>
                    <p className='font-normal text-lg'>Ваши клиенты получат  
                      <span className='text-[#0076FE]'> неделю <br /> бесплатного подключения</span> к облачному хранению в подарок</p>
                    <div className='flex justify-end items-end'>
                        <h2 className='font-mediaum text-[70px] text-[#0076FE]'>02</h2>
                    </div>
                </div>
                {/* 3 */}
                <div className='w-[430px] h-[241px] bg-white rounded-[30px] p-[30px] '>
                    <p className='font-normal text-lg'>У нас<span className='text-[#0076FE]'>комфортные тарифные планы</span> для клиентов</p>
                    <div className='flex justify-end items-end mt-8'>
                        <h2 className='font-mediaum text-[70px] text-[#0076FE]'>03</h2>
                    </div>
                </div>
                {/* 4 */}
                <div className='w-[430px] h-[241px] bg-white rounded-[30px] p-[30px] '>
                    <p className='font-normal text-lg'>Мы <span className='text-[#0076FE]'>отслеживаем</span> рекомендуемые розничные цены</p>
                    <div className='flex justify-end items-end mt-8'>
                        <h2 className='font-mediaum text-[70px] text-[#0076FE]'>04</h2>
                    </div>
                </div>
                {/* 5 */}
                <div className='w-[430px] h-[241px] bg-white rounded-[30px] py-[30px] pl-[30px]'>
                    <p className='font-normal text-lg'>Мы <span className='text-[#0076FE]'>отслеживаем</span> рекомендуемые розничные цены</p>
                    <div className='flex justify-end -mt-8'>
                        <img src="/image copy 20.png" alt="" className='w-[230px] h-[200px] object-cover' />
                    </div>
                </div>
                {/* 6 */}
                <div className='w-[430px] h-[241px] bg-white rounded-[30px] p-[30px] '>
                    <p className='font-normal text-lg'>У нас <span className='text-[#0076FE]'>выгодные условия</span> для партнеров. Мы возвращаем вам до 40% от суммы оплаты ваших клиентов</p>
                    <div className='flex justify-end items-end'>
                        <h2 className='font-mediaum text-[70px] text-[#0076FE] mt-3'>06</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EasySell