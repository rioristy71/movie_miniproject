import axios from 'axios';

const apiKey = 'b06acbfc13f5d2a71bfbbdea12dd0de3';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `https://gentle-garden-05760.herokuapp.com/movies`;
const halamanhomeplay = `https://gentle-garden-05760.herokuapp.com/movies/`;
const topratedUrl = `https://gentle-garden-05760.herokuapp.com/movies/3`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;


// fatch movie by db sendiri 
export const fetchMovies2 = async () => {
    try {
        const { data } = await axios.get(halamanhomeplay, {                      
        })

       
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster:  m['trailer'],
            popularity: m['genre'],
            title: m['title'],
            poster:  m['poster'],
            overview: m['synopsis'],
            rating: m['rated'],
            lang:m['language'],
            Rdate:m['releaseDate']
        }))

        return modifiedData;
    } catch (error) { }
}






// end fatch movie from back end

export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
            ;
        const modifiedData = data.map((m) => ({
            id: m['id'],
       
            popularity: m['releaseDate'],
            title: m['title'],
            poster:  m['poster'],
            overview: m['synopsis'],
            rating: m['rated'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(genreUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) { }
}

export const fetchMovieByGenre = async (genre_id, page = 1) => {
    try {
        const { data } = await axios.get(moviesUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: page,
                with_genres: genre_id
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        const result = {
            totalPages:data.total_pages,
            result:modifiedData
        }

        return result;
    } catch (error) { }
}

export const fetchPersons = async () => {
    try {
        const { data } = await axios.get(personUrl, {
            params: {
                api_key: apiKey
            }
        })
        const modifiedData = data['results'].map((p) => ({
            id: p['id'],
            popularity: p['popularity'],
            name: p['name'],
            profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
            known: p['known_for_department']
        }))
        return modifiedData;
    } catch (error) { }
}

export const fetchTopratedMovie = async () => {
    try {
        const { data } = await axios.get(topratedUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
      
        const modifiedData = data.map((m) => ({
            id: m['id'],
       
            popularity: m['releaseDate'],
            title: m['title'],
            poster:  m['poster'],
            overview: m['synopsis'],
            rating: m['rated'],
        }))

        return modifiedData;
    } catch (error) {

    }
}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`https://gentle-garden-05760.herokuapp.com/movies/details/${id}`, {
            params: {
                // api_key: apiKey,
                // language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}

export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(`https://gentle-garden-05760.herokuapp.com/movies/details/${id}`, {
            params: {
                // api_key: apiKey,
            }
        });
        return data['results'][0];
    } catch (error) { }
}

export const fetchCasts = async (id) => {
    try {
        // const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
        //     // params: {
        //     //     api_key: apiKey,
        //     // }
        // });
        // const modifiedData = data['cast'].map((c) => ({
        //     id: c['cast_id'],
        //     character: c['character'],
        //     name: c['name'],
        //     img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        // }))

        return ;
    } catch (error) { }
}

export const fetchSimilarMovie = async (id) => {
    try {
        const { data } = await axios.get(`https://gentle-garden-05760.herokuapp.com/movies/`, {
           
        });
        const modifiedData = data.map((m) => ({
            id: m['id'],
            popularity: m['releaseDate'],
            title: m['title'],
            poster: m['poster'],
            overview: m['overview'],
            rating: m['voteCount'],
        }))

        return modifiedData; 
    } catch (error) { }
}
