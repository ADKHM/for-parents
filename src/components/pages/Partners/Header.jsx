import React from 'react'
import Button from '../../Button'
import Navlink from '../../Navlink'

const Header = () => {
    return (
        <header className='py-4 px-8'>
            <div className='flex justify-between items-center'>
               <a href="/" className='cursor-pointer'><img src="/image.png" alt="logo" className='w-[120px] h-9' /></a> 
                <Navlink />
                <div className='flex gap-3'>
                    <Button text="Стать партнёром" bg="#FC0C35" width={"200px"} />


                    <button className='font-semibold text-lg text-[#0076FE] hover:bg-[#0076FE] hover:text-white transition-colors border-[#0076FE] border border-solid bg-transparent flex justify-center items-center rounded-2xl cursor-pointer w-[100px] h-14'>Войти</button>
                </div>
            </div>
        </header>
    )
}

export default Header