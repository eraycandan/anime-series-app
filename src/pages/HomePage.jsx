import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'
import ContentSide from '../components/ContentSide'
import Slider from '../components/Slider'
import ContentBottom from '../components/ContentBottom'

import animeDataService from '../services/AnimeDataService'


function HomePage() {


    const [animes, setAnimes] = useState([]);
    const [animeName, setAnimeName] = useState('');

    const [characterAnime, setCharacterAnime] = useState([]);
    const firstTwentyCharacters = characterAnime.slice(0, 20);
    // console.log(firstTwentyCharacters)


    const [reviewsAnime, setReviewsAnime] = useState([]);
    const firstSixReviews = reviewsAnime.slice(0, 6);
    // console.log(firstFiveReviews)

    // ---------------------------------------------------- ANİME DATASI SERVİSTEN ÇEKMEK
    const getAnimeByName = async () => {
        try {
            const response = await animeDataService.getAnimeByName(animeName);
            // console.log(response)
            if (response && response.length > 0) {
                setAnimes(response)
            } else {
                setAnimes([]);
            }
        } catch (error) {
            console.log(error)
            setAnimes([]);
            throw error;
        }
    };
    // ------------------------------- ANİME DATASININ İLK NESNESİNİN ID KISMINI YAKALAYIP KARAKTERLERİ ÇEKMEK
    const getCharactersByAnime = async () => {
        try {
            const response = await animeDataService.getCharactersByAnime(animes[0].mal_id);
            // console.log(response)
            setCharacterAnime(response)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    // ------------------------------- ANİME DATASININ İLK NESNESİNİN ID KISMINI YAKALAYIP ELEŞTİRİLERİ ALMA
    const getAnimeReviews = async () => {
        try {
            const response = await animeDataService.getAnimeReviews(animes[0].mal_id);
            // console.log(response)
            setReviewsAnime(response)
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    // ----------------------------------------------------  NAVBARDAN GELEN SORGUYU SETLEME
    const handleSearch = (query) => {
        setAnimeName(query);
        // navigate(`/home?search=${query}`); // URL'ye arama terimi ekleniyor
    }

    // ----------------------------------------------------  SAYFA YÜKLENİRKEN -----
    useEffect(() => {
        getAnimeByName();
    }, [animeName])     // animeName değiştiğinde anime verisini çek


    useEffect(() => {
        if (animes && animes.length > 0) {
            getCharactersByAnime();
        }
    }, [animes])


    useEffect(() => {
        if (animes && animes.length > 0) {
            getAnimeReviews();
        }
    }, [animes])

    //! ----------------------------------------------------
    return (

        <div className='flex flex-col items-center'>
            {/* // ------------------------------- NAVBAR */}
            <div className=' bg-black w-full flex items-center justify-center'>
                <Navbar onSearch={handleSearch} />  {/* onSearch fonksiyonunu Navbar'a geldi */}
            </div>
            {/* // ------------------------------- SLİDE */}
            <div className='bg-black w-full h-96 flex items-center justify-center'>
                <Slider />
            </div>
            {/* // ------------------------------- İÇERİK VE SİDE */}

            <div className='container flex flex-row space-x-4 px-6 py-4'>
                <div className='flex flex-row flex-wrap basis-3/4'>
                    {
                        animes && animes.length > 0 ? (
                            animes && animes.map((anime, index) => (
                                <Content key={index} animeContent={anime} />
                            ))
                        ) : (
                            <div> Arama Sonuçları Bulunamadı </div>
                        )
                    }
                </div>

                <div className='flex flex-row flex-wrap justify-start basis-1/4 h-full'>
                    {
                        firstTwentyCharacters && firstTwentyCharacters.map((char, index) => (
                            <ContentSide key={index} characters={char} />
                        ))
                    }
                </div>
            </div>

            {/* // ------------------------------- ELEŞTİRİLER */}
            <div className='flex flex-col items-center py-6 bg-black w-full'>
                <div>
                    <h2 className='font-bold uppercase text-lg text-animemories-color'>
                        Popular Posts
                    </h2>
                </div>
                <div className='container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                    {
                        firstSixReviews && firstSixReviews.map((review, index) => (
                            <ContentBottom key={index} reviews={review} />
                        ))
                    }
                </div>
            </div>

            {/* // ------------------------------- FOOTER */}
            <div className='w-full bg-black flex items-center justify-center'>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage