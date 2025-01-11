import React from 'react'


function ContentSide({ characters }) {
    // console.log(characters)
    const { images, name } = characters.character;


    //! ----------------------------------------------------
    return (

        <div className='group relative overflow-hidden flex flex-col items-center md:bg-black basis:full md:basis-1/2 lg:basis-1/4'>

            <img className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-2/3 md:w-full'
                src={images.jpg.image_url} />
            <p className=' text-xs md:text-sm font-light italic md:text-white absolute bottom-2 px-4 group-hover:mb-3 opacity-0 group-hover:opacity-100 duration-500'>
                {name}
            </p>

        </div>
    )
}

export default ContentSide