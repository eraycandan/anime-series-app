import axios from 'axios';


class AnimeDataService {

    BASE_URL = "https://api.jikan.moe/v4/";

    // --------------------------------- İSME GÖRE ANİME DATASI 
    //! query parametresi düzgün veri getirmediği için japonca karakterden dolayı tüm data üzerinde döndüm
    async getAnimeByName(animeName) {
        try {
            const response = await axios.get(`${this.BASE_URL}anime?q=${animeName}`);
            // console.log(response)
            return response.data.data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // --------------------------------- ANİME KARAKTER DATASI 
    async getCharactersByAnime(animeId) {
        try {
            const response = await axios.get(`${this.BASE_URL}anime/${animeId}/characters`);
            // console.log(response)
            return response.data.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // --------------------------------- ANİME ELEŞTİRİ
    async getAnimeReviews(animeId) {
        try {
            const response = await axios.get(`${this.BASE_URL}anime/${animeId}/reviews`);
            // console.log(response)
            return response.data.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // --------------------------------- TÜM ANİME DATASINI GETİRMEK    
    //! 25 li şekilde geldiği için forla dönmek gerek sorun yaratacak siteden yüklü veri çekilmiyor sınırlama var !

    // allAnimeDatas = [];

    // async getAllAnimes() {
    //     try {
    //         const response = await axios.get(`${this.BASE_URL}anime`)
    //         console.log(response)
    //         this.allAnimeDatas = response.data.data; // Tüm veriyi hafızaya ekledik
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }

    // --------------------------------- İSME GÖRE ANİME DATASI 
    // async getAnimeByName(animeName) {
    //     try {
    //* Eğer veri önceden alınmadıysa, çekiyoruz
    //         if (this.allAnimeDatas.length === 0) {
    //             await this.getAllAnimes();  // veriyi çekiyoz
    //         }

    //* Arama terimini temizle ve küçük harfe çevir
    //         const filteredAnime = this.allAnimeDatas.filter((anime) => {
    //             return anime.title.trim().toLowerCase().includes(animeName.trim().toLowerCase())
    //         });

    //         return filteredAnime;

    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }
}

export default new AnimeDataService();