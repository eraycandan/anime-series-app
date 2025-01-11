import React from 'react'

import { MdFavorite } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

function ContentBottom({ reviews }) {
    console.log(reviews)
    const { date, reactions, review, score, user } = reviews;


    //---------------------------------------------- SCORE
    const renderStars = (score) => {
        let stars = [];

        if (score >= 8) {
            stars = [<IoStar />, <IoStar />, <IoStar />, <IoStar />, <IoStar />]
        } else if (score >= 6) {
            stars = [<IoStar />, <IoStar />, <IoStar />, <IoStar />, <IoStarOutline />]
        } else if (score >= 3) {
            stars = [<IoStar />, <IoStar />, <IoStarOutline />, <IoStarOutline />, <IoStarOutline />]
        } else {
            stars = [<IoStar />, <IoStarOutline />, <IoStarOutline />, <IoStarOutline />, <IoStarOutline />]
        }
        return stars;
    }

    //---------------------------------------------- TARİH SADELEŞTİRME
    // 'T' karakterinden bölüyoruz
    const dateOnly = date.split('T')[0];
    // console.log(dateOnly);


    //! ----------------------------------------------------
    return (
        <div className='px-6 py-6'>
            <div className=' grid grid-cols-6 border border-animemories-color text-white'>

                {/* //-------------------- KULLANICI */}
                <div className='col-span-6 p-4 border-b border-animemories-color'>
                    <div className='flex justify-between items-center'>

                        <p className='font-bold'>{user.username}</p>
                        <img src={user.images.jpg.image_url} className='w-16 h-16 rounded-full' />

                    </div>
                </div>
                {/* //-------------------- YORUM */}
                <div className='col-span-6  p-4 border-b border-animemories-color'>
                    <p className='text-justify font-light italic text-xs md:text-sm'>{review.substring(0, 300)}...</p>
                </div>
                {/* //-------------------- TARİH - PUAN - BEGENI */}
                <div className='col-span-6  p-4'>
                    <div className='flex items-center justify-between'>

                        <div className='italic text-sm'>{dateOnly}</div>

                        <div className='flex items-center gap-2'>
                            <div className='flex'>{renderStars(score)}</div>
                            <div className='text-sm'>{score}</div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='text-animemories-color'><MdFavorite /></div>
                            <div className='text-sm'>{reactions.overall}</div>
                        </div>

                    </div>
                </div>
                {/* //-------------------- */}

            </div>
        </div>
    )
}

export default ContentBottom