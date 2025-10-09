import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa6";
import Img from '../../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const linkClass = ({ isActive }) =>
        `block w-fit px-1 pb-0.5 text-sm font-medium transition-all duration-200 ${isActive
            ? 'border-b-2 border-[#8755ea] text-[#8755ea]'
            : 'border-b-2 border-transparent hover:text-[#8755ea]'
    }`;


    const links = (
        <>
            <NavLink className={linkClass} to="/">Home</NavLink>
            <NavLink className={linkClass} to="/apps">Apps</NavLink>
            <NavLink className={linkClass} to="/installation">Installation</NavLink>
        </>
    );

    return (
        <div className='sticky top-0 z-50'>
            <nav className='bg-white border-b-1 border-gray-300 w-full'>
                <div className='flex justify-between items-center py-3 md:px-10 px-1 text-black'>
                    <div className='flex items-center'>
                        <span onClick={() => setOpen(!open)} className='flex items-center '>
                            {open === true ? <IoCloseSharp className='w-5 h-5 md:hidden text-[#5633e4]' /> : <GiHamburgerMenu className='h-5 w-5 md:hidden text-[#5633e4]' />}
                            <ul className={`md:hidden absolute md:py-0 py-2 rounded bg-white ${open ? 'top-12' : '-top-48'} pl-2 pr-3 -ml-1 `}>
                                <div className='flex flex-col w-fit text-sm gap-2 font-medium'>{links}</div>
                            </ul>
                        </span>
                        <Link to={`/`} className='font-semibold flex items-center gap-1 ml-2'>
                            <img src={Img} alt={Img} className='md:w-10 w-8' />
                            <h3 className='text-[#8755ea] text-base font-semibold'> EASY.IO</h3>
                        </Link>
                    </div>

                    <ul className='md:flex hidden '>
                        <p className='font-semibold flex gap-5'>{links}</p>
                    </ul>

                    <button className=' md:text-base text-sm text-white py-2 px-4 rounded-md bg-gradient-to-r from-[#5633e4] to-[#8755ea]'>
                        <a href="https://github.com/ripon301252" target='_blank' className='flex items-center gap-1'>
                            <FaGithub />
                            <span className='font-semibold'>Contribute</span>
                        </a>
                    </button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;