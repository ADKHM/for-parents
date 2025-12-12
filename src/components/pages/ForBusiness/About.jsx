import React from 'react'

const About = () => {

    const companys = [
        {
            logos: '/image copy 48.png',
            class: 'w-[79px] h-[47px] '
        },

        {
            logos: '/image copy 49.png',
            class: 'w-[45px] h-[34px]'
        },

        {
            logos: '/image copy 48.png',
            class: 'w-[79px] h-[47px] '
        },

        {
            logos: '/image copy 50.png',
            class: 'w-[80px] h-[24px] '
        },

        {
            logos: '/image copy 49.png',
            class: 'w-[45px] h-[34px] '
        },

        {
            logos: '/image copy 51.png',
            class: 'w-[90px] h-[27px] '
        },

        {
            logos: '/image copy 50.png',
            class: 'w-[80px] h-[24px] '
        },

        {
            logos: '/image copy 49.png',
            class: 'w-[45px] h-[34px] '
        },

        {
            logos: '/image copy 50.png',
            class: 'w-[80px] h-[24px] '
        },
    ]

    return (
        <div className='px-14 py-[90px]'>
            <h1 className='font-semibold text-[40px] '>Пресса о нас</h1>
                <div className="pt-16">

                    {/* Card */}
                    <div className="flex justify-center">
                        <div className="relative w-[700px] rounded-4xl mt-16 group py-8 flex flex-col justify-center items-center">
                            <div className='p-5'>
                                <p className="font-normal text-lg mt-2 text-center">      Объединяйте и группируйте камеры по адресам, объектам и как вам удобно. Количество камер на аккаунте не ограничено. Как вам удобно. Количество камер на аккаунте не ограничено. Объединяйте и группируйте камеры по адресам, объектам и как вам удобно. Количество камер на аккаунте не ограничено. </p>
                            </div>

                            {/* 4 corner borders */}
                            <span className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FC0C35] rounded-tl-full transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
                            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#0076FE] rounded-br-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                            <span className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#0076FE] rounded-tr-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                            <span className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#0076FE] rounded-bl-full transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></span>
                        </div>
                    </div>
                    {/* Companys */}
                    <div className='flex justify-between pt-[100px] gap-5'>
                        {companys.map(logo => (
                            <div className='w-[134px] h-[57px] rounded-[17px] border border-gray-400 bg-transparent flex justify-center items-center cursor-pointer'>
                                <img src={logo.logos} alt="logo" className={logo.class} />
                            </div>
                        ))}
                    </div>
                </div>
        </div>
            )
}

            export default About