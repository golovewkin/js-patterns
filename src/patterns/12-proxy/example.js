// const player = {
//     play() {
//         const film = FilmGetterProxy.getFilm()

        
//     }
// }

const FilmGetterProxy = {
    getFilm() {
        if (Cache.hasFilm()) {
            return Cache.getFilm();
        }

        return Loader.loadFilm();
    }
}

const Cache = {

}

const Loader = {

}

FilmGetterProxy.getFilm();