import { useState } from "react"


const WhatCanDo = () => {

    const [active, setActive] = useState(false);

    return (
        <div className='pt-[50px] px-32 bg-[#00000008] h-[555px] mt-24'>
            <h1 className='font-semibold text-[40px] text-[#002033]'>Что ещё умеет Faceter?</h1>
            <div className="flex gap-20">
                <div className='flex gap-20 pt-14 items-center'>
                    <div className='flex gap-10'>
                        <div className="flex flex-col gap-0 w-[4px] h-[286px]">
                            <div onClick={() => setActive(!active)} className={`h-[143px] cursor-pointer ${active ? "bg-[#0076FE]" : "bg-[#9C9C9C]"}`}>

                            </div>

                            <div onClick={() => setActive(!active)} className={`h-[143px] cursor-pointer ${!active ? "bg-[#0076FE]" : "bg-[#9C9C9C]"}`}>

                            </div>
                        </div>
                    </div>
                    <div className="w-[466px] flex flex-col gap-5 ">
                        {/* 1 */}
                        <div className="w-full h-[66px] bg-[#0076FE] rounded-2xl py-4 px-7 flex justify-between items-center">
                            <h2 className="font-semibold text-xl text-white">Добавлять тысячи камер</h2>
                            <span className="font-semibold text-xl text-white cursor-pointer">+</span>
                        </div>
                        {/* 2 */}
                        <div className="w-full h-[66px] bg-[#0076FE] rounded-2xl py-4 px-7 flex justify-between items-center">
                            <h2 className="font-semibold text-xl text-white">Просматривать весь день</h2>
                            <span className="font-semibold text-xl text-white cursor-pointer">+</span>
                        </div>
                        {/* 3 */}
                        <div className="w-full h-[66px] bg-[#0076FE] rounded-2xl py-4 px-7 flex justify-between items-center">
                            <h2 className="font-semibold text-xl text-white">Полезные уведомления</h2>
                            <span className="font-semibold text-xl text-white cursor-pointer">+</span>
                        </div>
                    </div>
                </div>
                <img src="/image copy 58.png" alt="" className="h-[286px] w-[597px] mt-14" />
            </div>
        </div>
    )
}

export default WhatCanDo