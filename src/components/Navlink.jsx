import React from "react"

const Navlink = () => {

    const links = [

        {
            to: "/business",
            text: 'Для бизнеса'
        },

        {
            to: "/home",
            text: 'Для дома'
        },

        {
            to: "/cameras",
            text: 'Камеры'
        },

        {
            to: "/",
            text: 'Тарифы'
        },

        {
            to: "/",
            text: 'Партнёрам'
        },

        {
            to: "/",
            text: 'Поддержка'
        },
    ]

  return (
    <nav className="flex gap-10">
        {links.map((link, i) => (
            <a key={i} href={link.to} className="font-medium text-lg hover:text-[#0076FE] hover:font-semibold hover:transition-colors">{link.text}</a>
        ))}
    </nav>
  )
}

export default Navlink