import React from 'react'

const Features = () => {
    return (
        <div className='pt-20 px-[30px]'>
            <div className='w-full items-center gap-20 flex pt-[35px] px-10 rounded-[40px] bg-[#002033] overflow-hidden'>
                <h1 className='font-medium text-[70px] text-white w-[647px] leading-20'>Нас выбрали уже <span className='text-[#0076FE]'>более миллиона клиентов</span></h1>
                <img src="/image copy 13.png" alt="phone-img" className='w-[340px]' />
            </div>
            <div className='mt-24'>
                <h2 className='font-semibold text-[40px] text-[#0076FE] text-center'>Почему клиенты выбирают <span className='text-black'>Faceter?</span></h2>
                <div className='flex justify-center items-center gap-[200px] mt-8 pt-0'>
                    {/* 1 column */}
                    <div className='flex flex-col gap-[60px]'>
                        {/* 1 box */}
                        <div className='w-[383px] flex flex-col gap-10 items-center '>
                            <img src="/image copy 10.png" alt="" className='size-[60px]' />
                            <div className='flex flex-col gap-[15px]'>
                                <h2 className='font-semibold text-xl text-center'>1 000 000+ клиентов</h2>
                                <p className='font-normal text-lg'>успешно пользуются нашим приложением</p>
                            </div>
                        </div>
                        {/* 2 box */}
                        <div className='w-[383px] flex flex-col gap-10 items-center b'>
                            <img src="/image copy 14.png" alt="" className='size-[60px]' />
                            <div className='flex flex-col gap-[15px]'>
                                <h2 className='font-semibold text-xl text-center'>1 секунды</h2>
                                <p className='font-normal text-lg text-center'>навигация по архиву без задержек:
                                    доступ к любому отрывку записи</p>
                            </div>
                        </div>
                        {/* 3 box */}
                        <div className='w-[383px] flex flex-col gap-10 items-center b'>
                            <img src="/image copy 15.png" alt="" className='w-20 h-[60px]' />
                            <div className='flex flex-col gap-[15px]'>
                                <h2 className='font-semibold text-xl text-center'>Современные приложения</h2>
                                <p className='font-normal text-lg text-center'>для iOS, Android и Web-версия <br />
                                    для Windows и Mac OS</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 column */}
                    <div className='flex flex-col gap-[60px] pt-9'>
                        {/* 1 box */}
                        <div className='w-[383px] flex flex-col gap-10 items-center '>
                            <img src="/image copy 11.png" alt="" className='size-[60px]' />
                            <div className='flex flex-col gap-[15px]'>
                                <h2 className='font-semibold text-xl text-center'>Просто</h2>
                                <p className='font-normal text-lg'>можно быстро поделиться видео, отправив ссылку</p>
                            </div>
                        </div>
                        {/* 2 box */}
                        <div className='w-[383px] flex flex-col gap-10 items-center b'>
                            <img src="/image copy 7.png" alt="" className='w-9 h-[60px]' />
                            <div className='flex flex-col gap-[15px]'>
                                <h2 className='font-semibold text-xl text-center'>Индивидуальные настройки</h2>
                                <p className='font-normal text-lg text-center'>уведомлений о движении, звуках, 
                                отключении камер, пересечении зоны</p>
                            </div>
                        </div>
                        {/* 3 box */}
                        <div className='w-[383px] flex flex-col gap-10 items-center b'>
                            <img src="/image copy 16.png" alt="" className='size-[60px]' />
                            <div className='flex flex-col gap-[15px]'>
                                <h2 className='font-semibold text-xl text-center'>Интеллектуальная детекция</h2>
                                <p className='font-normal text-lg text-center'>событий и установка меток на временную шкалу. 
                                Экономия времени поиска наступившего события</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features