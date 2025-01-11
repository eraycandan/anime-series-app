import React from 'react'
import { FaYoutube } from "react-icons/fa";


function Content(animeContent) {

    // console.log(animeContent)
    const { images, score, title, synopsis, trailer, year } = animeContent.animeContent;

    //! ----------------------------------------------------
    return (

        <div className='flex flex-col items-center basis-full md:basis-1/2 lg:basis-1/4 px-1'>
            {/* // ----overflow-hidden görsel kutudan taşmaması için */}
            {/* // ----group üzerine gelince item olarak hareket etmesi için resme gelince ayrı texte ayrı değil */}
            {/* // ----relative görsel üzerindeki textlerin görsele göre konumlandırılması için */}
            <div className='group relative overflow-hidden rounded-lg bg-black'>
                {/* // --------------------- GÖRSEL */}
                <img className='min-h-96 group-hover:scale-110 group-hover:opacity-30 duration-500' src={images.jpg.image_url} />

                {/* // --------------------- ÖZET  */}
                <div className='flex flex-col absolute bottom-2 px-4 group-hover:mb-6 duration-500 '>
                    <p className='text-sm font-light italic text-justify opacity-0 group-hover:opacity-100  text-white'>
                        {synopsis.substring(0, 250)}...
                    </p>

                    {/* // --------------------- PUAN - TRAİLER */}
                    <div className='mt-4 flex flex-row items-center justify-center space-x-8'>
                        <p className='text-2xl font-black opacity-0 group-hover:opacity-100 text-orange-500'>{score}</p>
                        <a href={trailer.url} target='_blank'>
                            <FaYoutube className=' text-4xl  opacity-0 group-hover:opacity-100 text-white hover:text-red-600 duration-500' />
                        </a>
                    </div>
                </div>
            </div>

            {/* // --------------------- BAŞLIK */}
            <h3 className='py-4 text-sm font-black'>
                {title}
                <span className='font-light'> / {year}</span>
            </h3>
        </div>
    )
}

export default Content