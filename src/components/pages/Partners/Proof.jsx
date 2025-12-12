import React from 'react'

const Proof = () => {
    return (
        <div className='pt-20 px-3'>
            <h1 className='font-bold text-[40px] text-center'>Почему клиенты выбирают <br /> <span className='text-[#0076FE]'>облачное видеонаблюдение?</span></h1>
            <div className='flex  gap-8 flex-wrap mt-16 justify-end'>
                {/* 1 */}
                <div className='w-[324px] bg-[#0076FE0D] h-[450px] rounded-[40px] border border-[#0076FE] pt-[30px] px-[30px]'>
                    <img src="/image copy 6.png" alt="lock-icon" className='size-[60px]' />
                    <p className='font-semibold text-xl text-[#0076FE] mt-20'>Данные надежно <br />
                        хранятся на серверах <br />
                        в облаке. <br />
                        Архив не украдут</p>
                </div>
                {/* 2 */}
                <div className='relative w-[324px] overflow-hidden bg-[#0076FE0D] h-[450px] rounded-[40px] border border-[#0076FE] pt-[30px] px-[30px]'>
                    <div className='absolute -top-28 -left-20 w-[250px] h-[250px] rounded-full bg-[#0076FE0D] '></div>
                    <img src="/image copy 7.png" alt="lock-icon" className='w-9 h-[60px]' />
                    <p className='font-semibold text-xl text-[#0076FE] mt-20'>Вы получаете <br /> моментальный доступ <br /> 
                    к видеоархивам</p>
                </div>
                {/* 3 */}
                <div className='relative w-[324px] overflow-hidden bg-[#0076FE0D] h-[450px] rounded-[40px] border border-[#0076FE] pt-[30px] px-[30px]'>
                
                    <img src="/Vector 103.png" alt="" className='absolute size-[52px] bottom-14 right-[84px]'  />
                    <img src="/Vector 104.png" alt="" className='absolute w-[191px] h-[119px] -bottom-2 -right-3' />
                    <img src="/image copy 8.png" alt="lock-icon" className='w-[51px] h-[60px]' />
                    <p className='font-semibold text-xl text-[#0076FE] mt-20'>Можно просматривать <br /> видео из любой <br /> 
                    точки мира</p>
                </div>
                {/* 4 */}
                <div className='w-[324px] bg-[#0076FE0D] h-[450px] rounded-[40px] border border-[#0076FE] pt-[30px] px-[30px]'>
                    <img src="/image copy 9.png" alt="lock-icon" className='size-[60px]' />
                    <p className='font-semibold text-xl text-[#0076FE] mt-20'>Не нужно покупать дорогое оборудование</p>
                </div>
                {/* 5 */}
                <div className='relative w-[324px] bg-[#0076FE0D] overflow-hidden h-[450px] rounded-[40px] border border-[#0076FE] pt-[30px] px-[30px]'>
                    <img src="/image copy 11.png" alt="lock-icon" className='size-[60px]' />
                    <p className='font-semibold text-xl text-[#0076FE] mt-20'>Передовой функционал и аналитика доступны сразу, без обновления оборудования</p>
                    <img src="/image copy 12.png" alt="" className='absolute -bottom-0 right-0 size-[134px] ' />
                </div>
                {/* 6 */}
                <div className='w-[324px] bg-[#0076FE0D] h-[450px] rounded-[40px] border border-[#0076FE] pt-[30px] px-[30px]'>
                    <img src="/image copy 10.png" alt="lock-icon" className='size-[60px]' />
                    <p className='font-semibold text-xl text-[#0076FE] mt-20'>Собственные <br /> 
                    хранилища данных</p>
                </div>
                {/* 7 */}
                <div className='w-[324px] h-[450px] rounded-[40px] border bg-[#0076FE] flex justify-center items-center'>
                    <p className='font-semibold text-xl text-white underline mt-20 cursor-pointer'>Стать партнёром</p>
                </div>
            </div>
        </div>
    )
}

export default Proof