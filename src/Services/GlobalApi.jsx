import axios from "axios";

const movieBASEURL = "https://api.themoviedb.org/3/";
const api_key = "68340d3e009a159895de53b0a42977c0";
// https://api.themoviedb.org/3/movie/550?api_key=68340d3e009a159895de53b0a42977c0

const movieByGenreBASEURL = "https://api.themoviedb.org/3/discover/movie?api_key=68340d3e009a159895de53b0a42977c0"

const getTrendingVideos = axios.get(movieBASEURL +
    "trending/movie/day?api_key=" + api_key + "&language=en-US");
const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBASEURL + "&with_genres=" + id);
const getSearchResults = (query) =>
    axios.get(movieBASEURL + "search/movie?api_key=" + api_key + "&query=" + query + "&language=en-US&page=1");

export default { 
    getTrendingVideos,
    getMovieByGenreId,
    getSearchResults
};