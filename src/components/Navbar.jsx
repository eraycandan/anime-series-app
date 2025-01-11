import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar({ onSearch }) {

    // Menü görünürlüğü için state - hamburger
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //!--------------------------------- search menu 
    const [query, setQuery] = useState('');
    // const history = useHistory();

    //? submit yada enter tetiklendiğinde çalışacak
    // alınan değer onSearch ile HomePage Navbara üzerinden üst  sayfaya propslanacak
    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (query.trim() !== '') {
            onSearch(query);
            // İsteğe bağlı olarak, URL'e parametre ekleyebilirsiniz
            //   history.push(`/home?search=${query}`);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e) => {
        // console.log(e.keyCode)
        if (e.key === 'Enter' || e.keyCode === 13) {
            handleSearchSubmit(e);
        }
    }
    //!-------------------------------- hamburger menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        // console.log(isMenuOpen)
    };

    //! ----------------------------------------------------
    return (


        <div className='container flex flex-col space-y-4 py-6 px-6'>
            {/* // --------------------- LOGO  */}
            <div className='flex items-center justify-center' >
                <a href="#" className='font-gemunu pb-4 uppercase text-lg lg:text-3xl font-light text-white tracking-[0.8em] lg:hover:tracking-[2em] duration-500 ease-in'>
                    <span className='text-yellow-400 '>#</span>
                    animemories
                </a>
            </div>
            {/* // --------------------- NAVBAR LINK  */}

            <div className='flex items-center'>

                <div className='basis-1/4 md:basis-1/2 '>
                    {/* // --------------------- FOR LARGE PAGE TOGGLE  */}
                    <div className='font-gemunu tracking-[0.2em] hidden md:flex flex-row uppercase text-sm lg:text-lg space-x-6 lg:space-x-16 xl:space-x-32 text-white'>
                        <a href="#" className='hover:text-yellow-400 duration-500 ease-in'>homepage</a>
                        <a href="#" className='hover:text-yellow-400 duration-500'>about</a>
                        <a href="#" className='hover:text-yellow-400 duration-500'>news</a>
                        <a href="#" className='hover:text-yellow-400 duration-500'>contact</a>
                    </div>
                    {/* // --------------------- FOR SMALL PAGE TOGGLE  */}
                    <button className='text-white ml-3 text-2xl md:hidden ' onClick={toggleMenu}><GiHamburgerMenu /></button>
                    <div className={`md:hidden ${isMenuOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'} font-gemunu tracking-[0.2em] mt-1 ml-3 text-sm flex flex-col space-y-1 text-white transition-all duration-500 ease-in`}>
                        <a href="#" className='hover:text-yellow-400 duration-500 ease-in-out'>homepage</a>
                        <a href="#" className='hover:text-yellow-400 duration-500'>about</a>
                        <a href="#" className='hover:text-yellow-400 duration-500'>news</a>
                        <a href="#" className='hover:text-yellow-400 duration-500'>contact</a>
                    </div>
                </div>


                {/* // --------------------- SEARCH - LOG  */}
                <div className='basis-3/4 md:basis-1/2  flex justify-end'>
                    <form onSubmit={handleSearchSubmit} className='group mr-6 flex items-center'>
                        <input
                            type="text"
                            placeholder='search anime...'
                            value={query}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className='bg-transparent 
                            placeholder:text-sm 
                            placeholder:font-gemunu 
                            placeholder:tracking-[0.2em]
                            text-white border-b-2
                            group-hover:border-yellow-400 
                            focus:outline-none 
                            w-36 xl:w-72 xl:hover:w-100 duration-500' />
                        <button type='submit'>
                            <FaSearch className='text-white group-hover:text-yellow-400 duration-500' />
                        </button>
                    </form>

                    <div className='uppercase flex flex-col md:flex-row items-center space-x-0 md:space-x-4  space-y-2 md:space-y-0'>
                        <a href="#" className='font-gemunu text-white text-sm lg:text-lg hover:text-yellow-400 duration-500'>Login</a>
                        <a href="#" className='font-gemunu text-black hover:text-white text-sm lg:text-lg  bg-yellow-400 hover:bg-yellow-600 px-3 py-1 duration-500'>Sign Up</a>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Navbar