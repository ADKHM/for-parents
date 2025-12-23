
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button'
import Navlink from '../../Navlink'

import { useAuth } from '../../../context/AuthContext'

const Header = () => {
    const { user, logout, isAuthenticated } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className='py-4 px-8'>
            <div className='flex justify-between items-center'>
               <Link to="/" className='cursor-pointer'><img src="/image.png" alt="logo" className='w-[120px] h-9' /></Link> 
                <Navlink />
                <div className='flex gap-3'>
                    <Button text="Стать партнёром" bg="#FC0C35" width={"200px"} />

                    {!isAuthenticated ? (
                        <Link 
                            to="/signin" 
                            className='font-semibold text-lg text-[#0076FE] hover:bg-[#0076FE] hover:text-white transition-colors border-[#0076FE] border border-solid bg-transparent flex justify-center items-center rounded-2xl cursor-pointer w-[100px] h-14'
                        >
                            Войти
                        </Link>
                    ) : (
                        <div className='flex items-center gap-3'>
                            <span className='text-gray-600 text-sm'>Welcome, {user?.name || user?.email}</span>
                            <button 
                                onClick={handleLogout}
                                className='font-semibold text-lg text-[#FC0C35] hover:bg-[#FC0C35] hover:text-white transition-colors border-[#FC0C35] border border-solid bg-transparent flex justify-center items-center rounded-2xl cursor-pointer w-[100px] h-14'
                            >
                                Выйти
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
