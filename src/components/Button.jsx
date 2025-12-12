import React from 'react'
import { MdBorderColor } from 'react-icons/md'

const Button = ({ text, bg, mt, color, mainbordercolor, width, borderColor, border}) => {
    return (
        <button
            className={`group relative cursor-pointer  h-[55px] rounded-[20px] p-2 font-black text-lg text-white
        transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-lg`}
            style={{ backgroundColor: bg, marginTop: mt, color: color, borderColor: mainbordercolor, width: width, border: border }} 
        >
            {text}
            <span className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2  rounded-tr-full transition-all duration-300
        group-hover:translate-x-1 group-hover:-translate-y-1`} style={{ borderColor: borderColor }}></span>
            <span className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 rounded-bl-full transition-all duration-300
        group-hover:-translate-x-1 group-hover:translate-y-1`} style={{ borderColor: borderColor }}></span>
        </button>

    )
}

export default Button