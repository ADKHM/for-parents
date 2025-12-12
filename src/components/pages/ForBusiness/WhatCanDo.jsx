import { useState } from "react"


const WhatCanDo = () => {

    const [ active, setActive ] = useState(false);

  return (
    <div className='pt-[50px] px-32 bg-[#00000008] h-[555px] mt-24'>
        <h1 className='font-semibold text-[40px] text-[#002033]'>Что ещё умеет Faceter?</h1>
        <div className='flex gap-20 pt-14'>
            <div className='flex gap-10'>
                <div className="flex flex-col gap-0 w-[4px] h-[286px]">
                    <div onClick={() => setActive(!active)} className={`h-[143px] cursor-pointer ${active ? "bg-[#0076FE]" : "bg-[#9C9C9C]"}`}>

                    </div>

                    <div onClick={() => setActive(!active)} className={`h-[143px] cursor-pointer ${!active ? "bg-[#0076FE]" : "bg-[#9C9C9C]"}`}>

                    </div>
                </div>
            </div>
            <div className="w-[466px] flex flex-col gap-5 ">
                <div className="">

                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatCanDo