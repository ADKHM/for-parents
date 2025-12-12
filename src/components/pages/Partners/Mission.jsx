import React from 'react'

const Mission = () => {
    return (
        <div className='pt-[90px] px-[30px]'>
            <h1 className='font-semibold text-[40px] text-[#0076FE]'>Наши преимущества</h1>

            <div className='flex flex-col gap-[160px]'>
                <div className='flex justify-between pt-14'>
                    <div className='flex flex-col gap-[60px]'>
                        {/* 1 */}
                        <div className='flex gap-10 w-[564px] '>
                            <img src="/image copy 16.png" alt="" className='size-[50px] ' />
                            <div className='flex flex-col gap-2.5'>
                                <h2 className='font-semibold text-xl text-[#0076FE]'>Экспертиза</h2>
                                <p className='font-normal text-lg'>Все технологии от обработки кадров до сохранения в облаке разработаны нами. </p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex gap-10 w-[635px] '>
                            <img src="/image copy 6.png" alt="" className='size-[50px] ' />
                            <div className='flex flex-col gap-2.5'>
                                <h2 className='font-semibold text-xl text-[#0076FE]'>Конфиденциальность</h2>
                                <p className='font-normal text-lg'>Все данные передаются и хранятся в зашифрованном виде, что обеспечивает строгую конфиденциальность <br />
                                    и защищенность.</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex gap-10 w-[550px] '>
                            <img src="/image copy 11.png" alt="" className='size-[50px] ' />
                            <div className='flex flex-col gap-2.5'>
                                <h2 className='font-semibold text-xl text-[#0076FE]'>Искусственный интеллект</h2>
                                <p className='font-normal text-lg'>Внедрение искусственного интеллекта с этапа формирования архитектуры системы.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[678px] h-[470px] flex justify-center items-center border-l-4 border-r-4 border-y-2 border-y-white rounded-full border-[#0076FE]'>
                        <div className='w-[500px] h-[371px] border-l-4 border-r-4 border-y-2 border-y-white border-[#FC0C35] rounded-full  flex justify-center items-center'>
                            <img src="image copy 23.png" alt="" className='w-[400px] h-300px]' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <img src="/image copy 24.png" alt="" className='w-[564px] h-[512px]' />
                    <div className='flex flex-col gap-[60px] mt-10'>
                        {/* 1 */}
                        <div className='flex gap-10 w-[564px] '>
                            <img src="/image copy 16.png" alt="" className='size-[50px] ' />
                            <div className='flex flex-col gap-2.5'>
                                <h2 className='font-semibold text-xl text-[#0076FE]'>Экспертиза</h2>
                                <p className='font-normal text-lg'>Все технологии от обработки кадров до сохранения в облаке разработаны нами. </p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex gap-10 w-[635px] '>
                            <img src="/image copy 6.png" alt="" className='size-[50px] ' />
                            <div className='flex flex-col gap-2.5'>
                                <h2 className='font-semibold text-xl text-[#0076FE]'>Конфиденциальность</h2>
                                <p className='font-normal text-lg'>Все данные передаются и хранятся в зашифрованном виде, что обеспечивает строгую конфиденциальность <br />
                                    и защищенность.</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex gap-10 w-[550px] '>
                            <img src="/image copy 11.png" alt="" className='size-[50px] ' />
                            <div className='flex flex-col gap-2.5'>
                                <h2 className='font-semibold text-xl text-[#0076FE]'>Искусственный интеллект</h2>
                                <p className='font-normal text-lg'>Внедрение искусственного интеллекта с этапа формирования архитектуры системы.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission