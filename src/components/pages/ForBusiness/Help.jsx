import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const Help = () => {

    const boxs = [

        {
            mainDivClass: "w-[320px] border border-solid border-[#0076FE] rounded-[40px]",
            titleClass: "font-bold text-[#0076FE] text-xl",
            logoImg: "/image copy 29.png",
            title: "Воровство, недостача",
            desc: "Мы должны доносить до клиентов, что само наличие камер на объекте снижает риск воровства. Также мы храним архив...",
            mainImg: "/image copy 33.png",
            divClass: "bg-[#0076FE] rounded-br-[40px] rounded-bl-[40px] flex justify-center items-center h-[59px]"
        },

        {
            mainDivClass: "w-[320px] border border-solid border-[#FC0C35] rounded-[40px]",
            titleClass: "font-bold text-[#FC0C35] text-xl",
            logoImg: "/image copy 30.png",
            title: "Конфликтные ситуации с клиентами",
            desc: "Несоблюдение стандартов сервиса — мы храним запись и позволяем быстро находить нужные моменты или...",
            mainImg: "/image copy 34.png",
            divClass: "bg-[#FC0C35] rounded-br-[40px] rounded-bl-[40px] flex justify-center items-center h-[59px]"
        },

        {
            mainDivClass: "w-[320px] border border-solid border-[#FC0C35] rounded-[40px]",
            titleClass: "font-bold text-[#FC0C35] text-xl",
            logoImg: "/image copy 31.png",
            title: "Нестабильная работа видеонаблюдения ",
            desc: "Мы должны следить за тем, что камера действительно записывает и делает это стабильно - если нет...",
            mainImg: "/image copy 35.png",
            divClass: "bg-[#FC0C35] rounded-br-[40px] rounded-bl-[40px] flex justify-center items-center h-[59px]"
        },

        {
            mainDivClass: "w-[320px] border border-solid border-[#FC0C35] rounded-[40px]",
            titleClass: "font-bold text-[#FC0C35] text-xl",
            logoImg: "/image copy 32.png",
            title: "Опоздания сотрудников",
            desc: "Мы можем каждый день в определенное время присылать запись с камеры в телеграм, чтобы собственник видел кто уже на...",
            mainImg: "/image copy 36.png",
            divClass: "bg-[#FC0C35] rounded-br-[40px] rounded-bl-[40px] flex justify-center items-center h-[59px]"

        },

    ]

    return (
        <div className='pt-14 px-6'>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-[40px] '>Какие <span className='text-[#FC0C35]'>боли</span> мы помогаем решить?</h1>
                <div className="flex gap-2.5 mt-2">
                    <button className='size-[50px] bg-[#0076FE1A] rounded-full flex justify-center items-center text-[#0076FE] text-xl cursor-pointer hover:bg-[#0076FE] hover:text-white transition-colors'><FaArrowLeft /></button>
                    <button className='size-[50px] bg-[#0076FE] rounded-full flex justify-center items-center text-white text-xl cursor-pointer hover:bg-[#0076FE1A] hover:text-[#0076FE] transition-colors mb-6'><FaArrowRight /></button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-6 flex-wrap pt-10">
                {boxs.map(items => (
                    <div className={items.mainDivClass}>
                        <div className="flex flex-col gap-4">
                            <div className="px-[30px] py-[30px] flex flex-col gap-4 ">
                                <div className="flex gap-5">
                                    <img src={items.logoImg} alt="" className="size-[60px]" />
                                    <h2 className={items.titleClass}>{items.title}</h2>
                                </div>
                                <p className="font-normal text-lg">{items.desc}</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <img src={items.mainImg} alt="" className="w-full rounded-t-[40px] h-[246px]" />
                                <di className={items.divClass}>
                                    <img src="/image copy 37.png" alt="" className="w-[254px] h-[0.07px" />
                                </di>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Help