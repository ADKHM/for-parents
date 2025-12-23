import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdOutlineStarPurple500 } from "react-icons/md";

const Feedback = () => {

    const [ activeIndex, setActiveIndex ] = useState(null);

    const comments = [
        {
            id: 1,
            logo: "/image copy 3.png",
            user: "Михаил Шапошников",
            place: "ЖК Авеню 77",
            shortText: "Используем программу Faceter на протяжении двух лет для наблюдения за детской площадкой в жилом комплексе. К счастью, происшествий не было...",
            fullText: "Используем программу Faceter на протяжении двух лет для наблюдения за детской площадкой в жилом комплексе. К счастью, происшествий не было. Камеры работают стабильно, изображение чёткое как днём, так и в вечернее время. Очень удобно, что архив записей легко просматривается и при необходимости можно быстро найти нужный момент. Управляющая компания и жильцы довольны уровнем безопасности, который удалось обеспечить с помощью этой системы. Планируем и дальше пользоваться Faceter и рекомендуем его для подобных объектов.",
        },

        {
            id: 2,
            logo: "/image copy 3.png",
            user: "Карина Халиулина",
            place: "Парикмахерские",
            shortText: "Систему видеонаблюдения мы запустили сразу с открытия заведения, камеры отслеживают ситуацию в зале и на кассе. Самое важное для нас — это…",
            fullText: "Систему видеонаблюдения мы запустили сразу с открытия заведения, камеры отслеживают ситуацию в зале и на кассе. Самое важное для нас — это безопасность сотрудников и клиентов, а также контроль качества обслуживания. Система помогает быстро разбирать спорные ситуации, предотвращать возможные конфликты и следить за соблюдением внутренних стандартов. Благодаря удобному интерфейсу и стабильной работе камер мы чувствуем уверенность в повседневной работе и можем сосредоточиться на развитии бизнеса.",
        },

        {
            id: 3,
            logo: "/image copy 64.png",
            user: "Анна Перепелкина",
            place: "“Лепим и Варим”",
            shortText: "До Faceter мы пользовались другим продуктом. В Faceter приглянулась очень простая прокрутка архива, поэтому перешли на него...",
            fullText: "До Faceter мы пользовались другим продуктом. В Faceter приглянулась очень простая прокрутка архива, поэтому перешли на него. Интерфейс оказался интуитивно понятным, сотрудники быстро разобрались без дополнительного обучения. Поиск нужных записей занимает минимум времени, что особенно важно в рабочем процессе. Система работает стабильно, без сбоев, и полностью оправдала наши ожидания. На данный момент менять решение не планируем и можем смело рекомендовать Faceter.",
        },
    ]

  return (
    <div className='py-[90px] px-[30px]'>
        <div className='flex flex-col gap-5 items-center'>
            <h4 className='font-semibold text-xl text-[#0076FE]'>780040+ Довольных пользователей</h4>
            <h1 className='font-semibold text-[40px] '>Отзывы, которые говорят сами за себя</h1>
                {/* Buttons  */}
            <div className='flex gap-5'>
                <button className='size-[50px] bg-[#0076FE] rounded-full flex justify-center items-center text-white text-xl cursor-pointer hover:bg-[#0076FE1A] hover:text-[#0076FE] transition-colors'><FaArrowLeft /></button>
                <button className='size-[50px] bg-[#0076FE] rounded-full flex justify-center items-center text-white text-xl cursor-pointer hover:bg-[#0076FE1A] hover:text-[#0076FE] transition-colors'><FaArrowRight /></button>
            </div>
        </div>
        <div className='flex gap-[30px] flex-wrap justify-center pt-12'>
            {comments.map((item, index) => (
                <div key={index} className='w-[420px] rounded-[40px] bg-[#0076FE0D] px-[30px] py-[50px]'>
                    <img src={item.logo} alt="" className='size-11' />
                    <div className='flex justify-between mt-3 items-center'>
                        <h1 className='font-semibold text-lg'>{item.user}</h1>
                        <span className='font-semibold text-lg text-[#0000004D]'>{item.place}</span>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <img src="/Frame 179.png" alt="" className='w-[115px] h-[25px] mt-2.5' />
                        <p className={`font-normal text-lg overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[170px]" : "max-h-[104px]"} `}>
                            {activeIndex === index ? item.fullText : item.shortText}
                        </p>
                        <button onClick={() => setActiveIndex(activeIndex === index ? null : index) } className='font-semibold text-lg text-[#0076FE] underline text-left'>
                            {activeIndex === index ? "Скрыть ⬆️" : "Читать полностью ⬇️"}
                        </button>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feedback