import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  { title: "Камеры с премиальными сенсорами Sony", text: "Высокая детализация и стабильная работа 24/7." },
  { title: "Гарантия 5 лет на всё оборудование", text: "Надёжность, которую вы можете уверенно продавать клиентам." },
  { title: "Облачное хранение данных", text: "Безопасный доступ к архиву из любой точки мира." },
  { title: "Готовая презентация для клиентов", text: "Профессиональные материалы для лёгких продаж." },
  { title: "Обучение техникам продаж", text: "Как уверенно работать с возражениями клиентов." },
  { title: "Высокая маржинальность для партнёров", text: "Мы помогаем вам зарабатывать больше." },
  { title: "Техническая поддержка 24/7", text: "Мы всегда на связи, чтобы помочь вам и вашим клиентам." },
  { title: "Персональный менеджер", text: "Помощь в развитии и сопровождении вашего бизнеса." },
];

const BecomePartner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title scroll animation
      gsap.from(".title-animate", {
        scrollTrigger: {
          trigger: ".title-animate",
          start: "top 80%",
        },
        opacity: 0,
        y: -20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Steps scroll animation
      gsap.from(".steps-animate", {
        scrollTrigger: {
          trigger: ".steps-animate",
          start: "top 85%",
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Card scroll animation
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (index) => {
    setActiveIndex(index);
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  return (
    <div className="pt-20" ref={containerRef}>
      <h1 className="font-semibold text-4xl text-center title-animate">
        Как стать <span className="text-[#0076FE]">авторизованным</span> партнером
      </h1>

      {/* Steps */}
      <div className="px-[100px] pt-[100px] flex justify-between">
        {/* left side */}
        <div className="flex flex-col gap-[115px]">
          <div className="w-[300px] steps-animate">
            <div className="flex gap-5">
              <h4 className="font-semibold text-xl text-[#0076FE]">01</h4>
              <h2 className="font-semibold text-xl text-[#002033]">Подписать соглашение <br />о партнерстве</h2>
            </div>
            <p className="font-normal text-base text-black ml-10">
              <span className="font-semibold text-xl text-[#0076FE] underline">Скачать</span> шаблон (docx, 27 КБ)
            </p>
          </div>

          <div className="w-[300px] steps-animate">
            <div className="flex gap-5">
              <h4 className="font-semibold text-xl text-[#0076FE]">04</h4>
              <h2 className="font-semibold text-xl text-[#002033]">Подключить клиентов <br /> с продуктами Faceter</h2>
            </div>
            <p className="font-normal text-base text-black ml-11">
              Камеры с сенсорами Sony, гарантия 5 лет<br />Услуга облачного хранения
            </p>
          </div>
        </div>

        {/* PNG circles & lines */}
        <div className="relative w-[350px] flex justify-center items-center pt-3">
          <img src="/Ellipse 198.png" className="absolute right-[140px]" />
          <img src="/Ellipse 199.png" className="absolute right-[90px]" />
          <img src="/Ellipse 200.png" className="absolute right-10" />
          <img src="/Ellipse 201.png" className="absolute -top-8 left-40 mt-2" />

          <div className="absolute top-4 right-40 w-[310px] h-0.5 bg-[#BFDDFF]"></div>
          <div className="absolute top-10 -right-24 w-[270px] h-0.5 bg-[#80BAFF]"></div>
          <div className="absolute bottom-28 right-44 w-[300px] h-0.5 bg-[#0076FE]"></div>
          <div className="absolute bottom-20 -right-24 w-[290px] h-0.5 bg-[#4098FE]"></div>
        </div>

        {/* right side */}
        <div className="flex flex-col gap-[70px] mt-6">
          <div className="w-[300px] steps-animate">
            <div className="flex gap-5">
              <h4 className="font-semibold text-xl text-[#0076FE]">02</h4>
              <h2 className="font-semibold text-xl text-[#002033]">Получить презентацию</h2>
            </div>
            <p className="font-normal text-base text-black ml-11">
              Разработанную специально <br /> для ваших клиентов.
            </p>
          </div>

          <div className="w-[300px] steps-animate">
            <div className="flex gap-5">
              <h4 className="font-semibold text-xl text-[#0076FE]">03</h4>
              <h2 className="font-semibold text-xl text-[#002033]">Пройти обучение</h2>
            </div>
            <p className="font-normal text-base text-black ml-11 mt-3">Работа с возражениями.</p>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="pt-16">
        <h1 className="font-semibold text-4xl text-center title-animate">Мы предлагаем вам</h1>

        <div className="flex justify-center">
          <div className="relative w-[600px] rounded-4xl mt-16 group py-8 flex flex-col justify-center items-center">
            <div ref={textRef}>
              <h2 className="font-semibold text-xl text-[#002033] text-center">{offers[activeIndex].title}</h2>
              <p className="font-normal text-lg mt-2">{offers[activeIndex].text}</p>
            </div>

            {/* 4 corner borders */}
            <span className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FC0C35] rounded-tl-full transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#0076FE] rounded-br-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></span>
            <span className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#0076FE] rounded-tr-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
            <span className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#0076FE] rounded-bl-full transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 justify-center mt-20">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => handleChange(index)}
              className={`w-[105px] h-[57px] rounded-2xl flex justify-center items-center font-semibold text-[40px] border cursor-pointer transition-all duration-200 ${
                activeIndex === index
                  ? "text-[#0076FE] border-[#0076FE]"
                  : "text-[#0020331A] border-[#0020331A]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
