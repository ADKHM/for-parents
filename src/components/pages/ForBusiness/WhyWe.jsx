import React from 'react'

const WhyWe = () => {

    const image = [
        {
            image: '/image copy 45.png'
        },

        {
            image: '/image copy 46.png'
        },
    ]

    const cardsData = [
        {
          id: 1,
          icon: "/image copy 38.png",
          title: "Установка за 10 минут",
          description:
            "Наши камеры может подключить даже не профессионал. А если возникают вопросы мы бесплатно проконсультируем",
          hasImage: true,
          titleClass: "font-semibold text-xl text-[#0076FE]",
          containerClass: "relative overflow-hidden w-[320px] pb-[150px] rounded-[40px] border border-solid border-[#0076FE] bg-[#0076FE0D] px-[30px] pt-[30px] flex flex-col gap-[90px]"
        },
        {
          id: 2,
          icon: "/image copy 39.png",
          title: "Собственная линейка камер",
          description:
            "У нас собственное производство, поэтому вы получаете качественное оборудование без переплат",
          hasImage: false,
          titleClass: "font-semibold text-xl text-[#0076FE]",
          containerClass: "w-[320px] pb-[150px] rounded-[40px] border border-solid border-[#0076FE] bg-[#0076FE0D] px-[30px] pt-[30px] flex flex-col gap-[90px]"
        },
        {
          id: 3,
          icon: "/image copy 40.png",
          title: "Гарантия 5 лет",
          description:
            "Мы гарантируем бесплатный ремонт или замену видеокамеры в случае поломки",
          hasImage: false,
          titleClass: "font-semibold text-xl text-[#0076FE]",
          containerClass: "w-[320px] pb-[150px] rounded-[40px] border border-solid border-[#0076FE] bg-[#0076FE0D] px-[30px] pt-[30px] flex flex-col gap-[90px]"
        },
        {
          id: 4,
          icon: "/image copy 41.png",
          title: "Умные уведомления",
          description: "",
          hasImage: false,
          titleClass: "font-semibold text-xl text-[#0076FE]",
          containerClass: "w-[320px] pb-[150px] rounded-[40px] border border-solid border-[#0076FE] bg-[#0076FE0D] px-[30px] pt-[30px] flex flex-col gap-[90px]"
        },
        {
          id: 5,
          icon: "/image copy 42.png",
          title: "Скорость доступа к архиву < 1 сек",
          description:
            "Вы получаете самый быстрый доступ к архиву на рынке облачного видеонаблюдения",
          hasImage: false,
          titleClass: "font-semibold text-xl text-[#0076FE]",
          containerClass: "relative w-[320px] pb-[150px] rounded-[40px] border border-solid border-[#0076FE] bg-[#0076FE0D] px-[30px] pt-[30px] flex flex-col gap-[90px]"
        },
        {
          id: 6,
          icon: "/image copy 43.png",
          title: "Работаем со всеми камерами",
          description:
            "99% сторонних камер могут работать с облаком Faceter",
          hasImage: true,
          titleClass: "font-semibold text-xl text-[#0076FE]",
          containerClass: "relative  overflow-hidden w-[320px] pb-[150px] rounded-[40px] border border-solid border-[#0076FE] bg-[#0076FE0D] px-[30px] pt-[30px] flex flex-col gap-[90px]"
          
        },
        {
          id: 7,
          icon: "/image copy 44.png",
          title: "Лучшие предложения тарифов",
          description:
            "Высокое качество изображения, удобство использования и умные уведомления включены во все тарифы!",
          hasImage: false,
          titleClass: "font-semibold text-xl text-[#0076FE]",
          containerClass: "w-[320px] pb-[150px] rounded-[40px] border border-solid border-[#0076FE] bg-[#0076FE0D] px-[30px] pt-[30px] flex flex-col gap-[90px]"
          
        },
        {
          id: 8,
          icon: null,
          title: "Подключить Faceter",
          description: "  ",
          hasImage: false,
          titleClass: "font-semibold text-xl text-white underline",
          containerClass: "w-[320px] rounded-[40px] bg-[#0076FE] flex justify-center items-center"
        }
      ];
    
  return (
    <div className='pt-[90px] px-[30px]'>
        <h1 className='font-semibold text-[40px] text-center'>Почему мы?</h1>
        <div className='flex gap-6 flex-wrap'>
            {cardsData.map(card => (
                <div key={card.id} className={card.containerClass}>
                    <div className='flex gap-4'>
                        {card.icon && <img src={card.icon} alt="" className='size-[50px]' />}
                        <h2 className={card.titleClass}>{card.title}</h2>
                    </div>
                    {card.description ? (<p className='font-medium text-lg text-center'>{card.description}</p>) : (<div>
                        <div className='flex flex-col gap-3'>
                            {image.map(img => (
                                <img src={img.image} alt="" className='w-[284px] h-[61px]' />
                            ))}
                        </div>
                    </div>) }
                    {card.hasImage && <img src="/image copy 47.png" className='absolute -bottom-6 -right-6 size-[134px]' />}
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhyWe