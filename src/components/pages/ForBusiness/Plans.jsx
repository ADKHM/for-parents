import React, { useState } from 'react'
import Button from '../../Button'

const Plans = () => {

    const [hasActive, setHasActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const dayPlans = [
        {
            day: "3 дня"
        },

        {
            day: "7 дней"
        },

        {
            day: "14 дней"
        },

        {
            day: "30 дней"
        },

        {
            day: "90 дней"
        }
    ]

    const plans = [
        {
            id: "1",
            logoImg: "/image copy 61.png",
            imgSize: "size-10",
            title: "Online",
            rightTitle: "0 дней хранения",
            desc: "Тариф с непрерывной записью видео и качеством записи - HD на 3 дня хранения, любым количеством дней хранения на выбор",
            hasDayplan: false,
            features: [
                { label: "Дней хранения архива", value: 0 },
                { label: "Разрешение", value: "1920x1080" },
                { label: "Микрофон и динамик", value: "Да" },
                { label: "Поворотная", value: "Да" },
                { label: "Ночное видение", value: "Да" },
                { label: "Интеллектуальное отслеживание", value: "Да" },
                { label: "Облако", value: "Да" }
            ],
            price: "299 ₽ /месяц"
        },

        {
            id: "2",
            logoImg: "/image copy 62.png",
            imgSize: "w-[63px] h-10",
            title: "Cloud",
            rightTitle: "3 дня хранения",
            desc: "Выберите срок хранения в облаке",
            hasDayplan: true,
            features: [
                { label: "Дней хранения архива", value: 0 },
                { label: "Разрешение", value: "1920x1080" },
                { label: "Микрофон и динамик", value: "Да" },
                { label: "Поворотная", value: "Да" },
                { label: "Ночное видение", value: "Да" },
                { label: "Интеллектуальное отслеживание", value: "Да" },
                { label: "Облако", value: "Да" }
            ],
            price: "449 ₽ /месяц"
        },

        {
            id: "3",
            logoImg: "/image copy 63.png",
            imgSize: "w-[60px] h-10",
            title: "Custom",
            rightTitle: "на выбор",
            desc: "Тариф с непрерывной записью видео и качеством записи - HD с любым количеством дней хранения на выбор. на выбор",
            hasDayplan: false,
            features: [
                { label: "Дней хранения архива", value: 3 },
                { label: "Разрешение", value: "1920x1080" },
                { label: "Микрофон и динамик", value: "Да" },
                { label: "Поворотная", value: "Да" },
                { label: "Ночное видение", value: "Да" },
                { label: "Интеллектуальное отслеживание", value: "Да" },
                { label: "Облако", value: "Да" }
            ],
            price: "449 ₽ /месяц"
        },
    ]

    const [active, setActive] = useState(false)

    return (
        <div className='pt-[90px] px-[30px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-[40px] text-[#002033]'>Наши тарифы</h1>
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-6 p-2 rounded-[18px] border border-[#0076FE] '>
                        <button onClick={() => setActive(!active)} className={`py-3 px-7 rounded-2xl font-semibold text-lg cursor-pointer ${active ? "bg-[#0076FE] text-white" : "bg-white text-[#0076FE]"}`}>Оплата за 3 месяца</button>
                        <button onClick={() => setActive(!active)} className={`py-3 px-7 rounded-2xl font-semibold text-lg cursor-pointer ${!active ? "bg-[#0076FE] text-white" : "bg-white text-[#0076FE]"}`}>12 месяцев</button>
                    </div>
                    <Button text={"Все тарифы"} bg={"#0076FE"} borderColor={"white"} width={"200px"} />
                </div>
            </div>
            <div className='pt-8 flex justify-between flex-wrap '>
                {plans.map(item => (
                    <div key={item.id} className='w-[443px] rounded-4xl border border-[#0076FE] border-solid'>
                        <div className={`flex justify-between items-center rounded-t-4xl py-8 px-5 ${item.hasDayplan ? "bg-[#0076FE]" : "bg-[#0076FE1A]"}`}>
                            <div className='flex gap-2.5 items-center'>
                                <img src={item.logoImg} alt="" className={item.imgSize} />
                                <h2 className={`font-semibold text-xl ${item.hasDayplan ? "text-white" : "text-[#0076FE]"}`}>{item.title}</h2>
                            </div>
                            <h3 className={`font-medium text-lg ${item.hasDayplan ? "text-white" : "text-[#0076FE]"}`}>{item.rightTitle}</h3>
                        </div>
                        <div className='px-5 pt-12 pb-4'>
                            {item.hasDayplan ? <div className='flex flex-col gap-3.5 '>
                                <p>{item.desc}</p>
                                <div className='p-1.5 rounded-xl bg-[#0076FE] flex gap-3 py-1.5 px-3.5'>
                                    {dayPlans.map((days, index) => (
                                        <button key={index} onClick={() => setActiveIndex(index)} className={` flex justify-center items-center px-2 py-2 cursor-pointer rounded-xl font-semibold tex-[14px] ${activeIndex === index ? "bg-white text-black" : "bg-[#0076FE] text-white"}`}>{days.day}</button>
                                    ))}
                                </div>
                            </div> : <p className='font-semibold text-lg text-[#002033]'>{item.desc}</p>
                            }
                            <div className='flex flex-col gap-16 pt-14'>
                                <div className='flex gap-3 flex-col'>
                                {item.features.map((f, i) => ( <div key={i} className='flex justify-between items-center'> <span className='font-semibold tex-base text-[#002033]'>{f.label}</span> 
                                <span className='font-medium tex-base text-[#002033]'>{f.value}</span> 
                                </div> 
                            ))}
                                </div>
                            <div className='flex justify-between items-center'>
                                <Button text={"Купить"} width={"149px"} bg={"#0076FE"} border={"white"} />
                                <h2 className='font-semibold text-2xl'>{item.price}</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans