import React from 'react'

const Features = () => {
    return (
        <div className='pt-10 px-10'>
            <h1 className='font-semibold text-[40px] text-center'>Эффективное и удобное использование</h1>
            {/* Features phone */}
            <div className='flex flex-col gap-14 items-center pt-12'>
                {/* 1 circle */}
                <div className='flex justify-between gap-[180px]'>
                    <div className='size-[570px] rounded-full border-10 border-[#0076FE] border-solid py-[60px] px-[120px] flex flex-col gap-5'>
                        <div className='flex flex-col gap-[30px] items-center'>
                            <img src="/image copy 52.png" alt="" className='size-20' />
                            <h2 className='font-semibold text-[40px] text-[#0076FE]'>Удобный архив</h2>
                        </div>
                        <div className=''>
                            <ul className='list-disc marker:text-red-500 flex flex-col gap-5'>
                                <li className='text-normal text-xl text-center'>Аналитика прямо в таймлайне</li>
                                <li className='text-normal text-xl text-center'>Загрузка 1 секунды</li>
                                <li className='text-normal text-xl text-center'>Видны отметки движения</li>
                                <li className='text-normal text-xl text-center'>Мгновенная загрузка</li>
                                <li className='text-normal text-xl text-center'>Быстрая навигация</li>
                            </ul>
                        </div>
                    </div>
                    <img src="/image copy 53.png" alt="" className='w-[287px] h-[597px]' />
                </div>
                {/* 2 circle */}
                <div className='flex justify-between gap-[200px]'>
                    <img src="/image copy 55.png" alt="" className='w-[287px] h-[597px] mt-10' />
                    <div className='size-[730px] bg-[#0076FE0D] border-2 border-[#0076FE] flex justify-center items-center rounded-full'>
                        <div className='size-[610px] rounded-full border-[27px] border-[#0076FE] border-solid py-[60px] px-[120px] flex flex-col gap-5'>
                            <div className='flex flex-col gap-[30px] items-center'>
                                <img src="/image copy 54.png" alt="" className='w-12 h-20' />
                                <h2 className='font-semibold text-[40px] text-[#0076FE]'>Легко делиться</h2>
                            </div>
                                <ul className='list-disc marker:text-red-500 flex flex-col gap-5'>
                                    <li className='text-normal text-xl text-center'>По ссылке, QR коду <br /> 
                                    и через социальные сети</li>
                                    <li className='text-normal text-xl text-center'>Временный доступ для ваших клиентов, чтобы они были уверены в качестве услуг</li>
                                    <li className='text-normal text-xl text-center'>Полный контроль 
                                    и удобный интерфейс</li>
                                </ul>
                        </div>
                    </div>
                </div>
                {/* 3 circle */}
                <div className='flex justify-between gap-[200px]'>
                    <div className='size-[648px] bg-[#0076FE0D] border-2 border-[#0076FE] flex justify-center items-center rounded-full'>
                        <div className='size-[610px] rounded-full border-2 bg-[#0076FE] border-[#0076FE] border-solid py-[60px] px-[120px] flex flex-col gap-5'>
                            <div className='flex flex-col gap-[30px] items-center'>
                                <img src="/image copy 56.png" alt="" className='size-20' />
                                <h2 className='font-semibold text-[40px] text-[#0076FE] text-white text-center'>Полезные <br /> уведомления</h2>
                            </div>
                                <ul className='list-disc marker:text-red-500 flex flex-col gap-5'>
                                    <li className='text-normal text-xl text-center text-white'>По ссылке, QR коду <br /> 
                                    и через социальные сети</li>
                                    <li className='text-normal text-xl text-center text-white'>Временный доступ для ваших клиентов, чтобы они были уверены в качестве услуг</li>
                                    <li className='text-normal text-xl text-center text-white'>Полный контроль 
                                    и удобный интерфейс</li>
                                </ul>
                        </div>
                    </div>
                    <img src="/image copy 57.png" alt="" className='w-[287px] h-[597px] mt-10' />

                </div>
            </div>
        </div>
    )
}

export default Features