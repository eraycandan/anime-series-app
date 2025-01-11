import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import chainsawman from '../images/chainsawman.jpg'
import dandadan from '../images/dandadan.jpg'
import demonslayer from '../images/demonslayer.jpg'




function Slider() {

    const images = [
        demonslayer,
        dandadan,
        chainsawman,
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    // indexim 0 ise index 3 e git değil ise 1 azalt
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
    // indexim 3 ise 0 a git değilse 1 artır 
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    //! ----------------------------------------------------
    return (

        <div className='container flex flex-row px-6 w-full h-full items-center justify-between relative'>

            <button button onClick={handlePrev} className='flex items-center'>
                <IoIosArrowDropleftCircle className='text-3xl md:text-4xl xl:text-5xl  text-yellow-500 opacity-80  absolute z-50 left-8 xl:left-6' />
            </button >
            {/* //--------------------------- GÖRSEL */}
            {/* // -------------------- absolute ile üst üste resim konuldu   */}

            <div className="relative w-full h-full overflow-hidden ">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-all grayscale hover:grayscale-50 duration-500 ease-in "
                        style={{
                            opacity: index === currentIndex ? 1 : 0,
                            // ----- index buttondaki index ile eşitse opacity 100 değilse 0
                            zIndex: index === currentIndex ? 10 : 0,  //Hover çalışması için Görünür olan resim üstte olacak

                        }}
                    />
                ))}
            </div>


            {/* <div className="w-full h-full overflow-hidden  ">
                <img
                    src={images[currentIndex]}
                    className="w-full h-full object-contain  "
                    alt={`slider-image-${currentIndex}`}
                />
            </div> */}


            {/* //--------------------------- */}
            <button onClick={handleNext} className='flex items-center'>
                <IoIosArrowDroprightCircle className='text-3xl md:text-4xl xl:text-5xl  text-yellow-500 opacity-80 absolute z-50 right-8 xl:right-6' />
            </button>

        </div >

    )


    // <img src={dandadan} className='w-full h-full object-contain' />
    // <img src={chainsawman} className='w-full h-full object-contain' />
    // <img src={demonslayer} className='w-full h-full object-contain' />
    // <img src={onepiece} className='w-full h-full object-contain' />

}

export default Slider