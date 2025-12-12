import React from 'react'
import Button from '../../Button'

const Hero = () => {
    return (
        <section className='pt-6 px-14'>
            <div className='flex justify-between'>
                <div className='w-[850px] mt-14'>
                    <h1 className='font-medium text-[69px] text-[#0076FE] '>Стань партнером <strong>Faceter</strong></h1>
                    <h3 className='font-normal text-xl text-[#002033] mt-3 '>Предлагайте клиентам лучший опыт</h3>
                    <Button text="Стать партнёром" bg="#002033" mt="30px" width={"200px"} />
                    <div className='relative w-[600px] flex justify-between items-center p-3 mt-[150px] ml-10 group'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='font-medium text-4xl text-center'>24/7</h2>
                            <p className='font-medium text-lg text-center'>работает <br /> без перебоев</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='font-medium text-4xl text-center'>1.000.000</h2>
                            <p className='font-medium text-lg text-center'>скачиваний в сторах</p>
                            <img src="/image copy.png" alt="rate" className='w-[170px] h-8 pl-3' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <button className='bg-transparent border w-[170px] border-black border-solid rounded-xl flex justify-center items-center gap-1 hover:text-[#0076FE] transition-colors text-black font-semibold text-lg p-2'>
                                <img src="/image copy 2.png" alt="apple-logo" className='w-[35px] h-[35px]' />
                                App Store
                            </button>
                            <button className='bg-transparent border w-[170px] border-black border-solid rounded-xl flex justify-center items-center gap-1 text-black hover:text-[#0076FE] transition-colors font-semibold text-lg p-2'>
                                <img src="/image copy 3.png" alt="apple-logo" className='w-8 h-[30px]' />
                                Google Play
                            </button>
                        </div>

                        {/* Tez chap border */}
                        <span className='absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-black rounded-tl-full transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1'></span>

                        {/* Past o‘ng border */}
                        <span className='absolute -bottom-5 -right-5 w-8 h-8 border-b-4 border-r-4 border-black rounded-br-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1'></span>

                    </div>

                </div>
                <div className='relative w-[330px] h-[570px] rounded-4xl mt-16 group'>
                    {/* Image */}
                    <img
                        src="/image copy 4.png"
                        alt="camera-main-img"
                        className='absolute -top-10 right-32 w-[600px] h-[450px] object-contain z-10'
                    />

                    {/* Text */}
                    <div className='absolute bottom-5 left-6 flex gap-4 flex-col'>
                        <img src="/image copy 5.png" alt="" className='w-[260px] h-[60px]' />
                        <p className='font-normal text-xl text-[#0076FE] underline text-center'>Российская компания <br /> собственное производство</p>
                    </div>

                    {/* Top-left qizil border */}
                    <span className='absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FC0C35] rounded-tl-full z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1'></span>

                    {/* Past-o‘ng ko‘k border */}
                    <span className='absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#0076FE] rounded-br-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1'></span>

                    {/* Top-right ko‘k border */}
                    <span className='absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#0076FE] rounded-tr-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'></span>

                    {/* Past-chap ko‘k border */}
                    <span className='absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#0076FE] rounded-bl-full transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1'></span>
                </div>

            </div>
        </section>
    )
}

export default Hero