import React from 'react'
import { useState } from 'react';
import {FaXmark} from "react-icons/fa6";
import {FaBars} from "react-icons/fa";
const Navbar =()=> {
    const [showMenu,SetshowMenu] = useState(false) ;
    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 py-4 px-8 background-blur-sm shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <a href="#" className='text-3xl font-bold text-white'>
                        Ritesh
                        <span className='text-purple'> Raj</span>
                        <div className='w-4 h-4 rounded-full bg-purple'></div>
                    </a>
                </div>
                <div className='hidden md:flex space-x-10 '>
                    {/*  home  */}
                    <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                   {/* About */}
                     <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    {/* Skill  */}
                     <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Skills</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    {/* Categories  */}
                     <a href="#categories" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Categories</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    {/* Experience  */}
                     <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Experience</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    {/* Contact  */}
                     <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </div>

                {/* Mobile button */}
                <div className='md:hidden'>
                    {
                        showMenu ? 
                        <FaXmark onClick={()=> SetshowMenu(!showMenu)} className="text-2xl cursor-pointer"/> :
                        <FaBars onClick={()=> SetshowMenu(!showMenu)} className="text-2xl cursor-pointer"/>
                    }
                </div>
            </div>

            {/* Mobile menus  */}
            {
                showMenu && (
                    <div className='flex flex-col md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 space-y-4 justify-center text-center'>
                         {/*  home  */}
                    <a  onClick={()=> SetshowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Home</span>
                      
                    </a>

                   {/* About */}
                     <a  onClick={()=> SetshowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>About</span>
                      
                    </a>

                    {/* Skill  */}
                     <a  onClick={()=> SetshowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Skills</span>
                       
                    </a>

                    {/* Categories  */}
                     <a  onClick={()=> SetshowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Categories</span>
                        
                    </a>

                    {/* Experience  */}
                     <a  onClick={()=> SetshowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Experience</span>
                       
                    </a>

                    {/* Contact  */}
                     <a  onClick={()=> SetshowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Contact</span>
                        
                    </a>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar