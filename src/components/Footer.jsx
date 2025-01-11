import React from 'react'

import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {


    //! ----------------------------------------------------
    return (
        <div className='container py-6 px-6 flex flex-col'>



            <div className='flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
                {/* //------------------ LOGO */}
                <div className='basis-1/3 flex items-center'>
                    <p className='font-gemunu uppercase text-lg xl:text-2xl text-white tracking-[0.4em] lg:tracking-[0.5em] xl:hover:tracking-[1.5em] duration-500 ease-in'>
                        <span className='text-yellow-400'>#</span>
                        animemories
                    </p>
                </div>
                {/* //------------------ SOCIAL MEDIA */}
                <div className='basis-1/3 flex flex-row items-center justify-center gap-8 lg:gap-14'>
                    <a href="https://www.youtube.com" target='_blank' className='text-3xl xl:text-4xl xl:hover:text-5xl text-white  hover:text-red-400 duration-500 '>
                        <FaYoutube />
                    </a>
                    <a href="https://x.com/?mx=2" target='_blank' className='text-3xl xl:text-4xl xl:hover:text-5xl text-white hover:text-gray-400 duration-500 '>
                        <FaXTwitter />
                    </a>
                    <a href="https://www.instagram.com" target='_blank' className='text-3xl xl:text-4xl xl:hover:text-5xl text-white  hover:text-pink-400 duration-500 '>
                        <GrInstagram />
                    </a>
                    <a href="https://www.facebook.com" target='_blank' className='text-3xl xl:text-4xl xl:hover:text-5xl text-white  hover:text-blue-400 duration-500 '>
                        <FaFacebookSquare />
                    </a>
                </div>
                {/* //------------------ SUBSCRIBE */}
                <div className='basis-1/3 flex flex-col items-end '>
                    <form className='flex '>
                        <input type="text"
                            placeholder='TYPE YOUR EMAIL'
                            className='text-xs xl:text-sm text-white py-1 px-2 
                        bg-transparent 
                        border-2 
                        border-yellow-400  
                        placeholder:font-gemunu
                        placeholder:tracking-[0.1em]
                        placeholder:text-xs 
                        xl:placeholder:text-sm
                      placeholder:text-white 
                        outline-none'
                        />
                        <button className='uppercase font-gemunu py-1 px-2 text-sm xl:text-lg tracking-[0.1em] bg-yellow-400 hover:bg-yellow-600 duration-500 '>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* //------------------ COPYRIGHT */}
            <div className='flex justify-center lg:justify-end py-2'>
                <p className='font-gemunu tracking-[0.1em] text-white text-xs'>2025 EC &copy; COPYRIGHT</p>
            </div>

        </div>
    )
}

export default Footer