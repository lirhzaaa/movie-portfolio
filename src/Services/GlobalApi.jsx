import axios from "axios";

const movieBASEURL = "https://api.themoviedb.org/3/";
const api_key = "68340d3e009a159895de53b0a42977c0";
// https://api.themoviedb.org/3/movie/550?api_key=68340d3e009a159895de53b0a42977c0

const movieByGenreBASEURL = "https://api.themoviedb.org/3/discover/movie?api_key=68340d3e009a159895de53b0a42977c0"

const getTrendingVideos=axios.get(movieBASEURL+
    "trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBASEURL+"&with_genres="+id)


export default { 
    getTrendingVideos,
    getMovieByGenreId
};