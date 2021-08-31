// Typically we would store in {process.env.API_KEY}
const API_KEY = '38ffc00a44d0dc17b34ba82e0252cbab';

export const requestsFilms = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const requestsTV = {
  fetchTrending: `/trending/TV/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorTV: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceTV: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
