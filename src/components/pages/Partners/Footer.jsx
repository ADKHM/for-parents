import React from 'react'
import Button from '../../Button'
import { RiTelegram2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";

const Footer = () => {

    const narsalar = [
        {
            text: "Условия"
        },

        {
            text: "Преимущества"
        },

        {
            text: "Вознаграждение"
        },

        {
            text: "Инструкции"
        },

        {
            text: "FAQ"
        },
    ]

    return (
        <div className='pt-[90px] px-[30px]'>
            <div className='w-full rounded-[40px] bg-[#0076FE] p-[30px] overflow-hidden'>
                <div className='flex justify-between items-center'>
                    {/* 1 */}
                    <div className='flex flex-col gap-[77px]'>
                        <div className='flex flex-col gap-9'>
                            <img src="/image copy 25.png" alt="logo" className='w-[120px] h-9' />
                            <Button bg={"white"} color={"#0076FE"} text={"Стать партнёром"} borderColor={"#0076FE"}  />
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            <h2 className='font-normal text-lg text-white'>ООО "Авалаб"</h2>
                            <p className='font-normal text-base text-white/50 w-[370px]'>Свидетельство о государственной регистрации в ФСИН № 2020612066 от 19.02.2020</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='flex flex-col gap-10'>
                        <ul className='flex flex-col gap-6'>
                            {narsalar.map((text) => (
                                <li className='font-normal text-lg text-white'>{text.text}</li>
                            ))}
                        </ul>
                        <h5 className='font-normal text-[14px] text-white/50'>Политика конфиденциальности</h5>
                    </div>
                    {/* 3 */}
                    <div className='flex flex-col gap-10'>
                        {/* 1 */}
                        <div className='flex flex-col gap-2.5'>
                            <h2 className='font-normal text-lg text-white'>Менеджер по продажам:</h2>
                            <h3 className='font-semibold text-2xl text-white'>@faceter.cam</h3>
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col gap-2.5'>
                            <h2 className='font-normal text-lg text-white'>Менеджер по продажам:</h2>
                            <h3 className='font-semibold text-2xl text-white'>support@faceter.ru</h3>
                        </div>
                        {/* 3 */}
                        <div className='flex flex-col gap-2.5'>
                            <h2 className='font-normal text-lg text-white'>Номер для связи:</h2>
                            <h3 className='font-semibold text-2xl text-white'>8 800 222 32 49</h3>
                        </div>
                    </div>
                    <div className='flex flex-col gap-14'>
                        <Button text={"Получить консультацию"} width={"300px"} borderColor={"white"} />
                        <div className='relative flex justify-between'>
                            <div className='flex flex-col gap-4'>
                                <button className='size-[47px] bg-white text-[#0076FE] flex justify-center items-center text-4xl rounded-2xl hover:bg-gray-400 hover:text-white transition-colors'><RiTelegram2Line /></button>
                                <button className='size-[47px] bg-white text-[#0076FE] flex justify-center items-center text-4xl rounded-2xl hover:bg-gray-400 hover:text-white transition-colors'><IoIosCall /></button>
                            </div>
                            <img src="/image copy 26.png" alt="" className='size-[271px] absolute -bottom-28 -right-16' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer