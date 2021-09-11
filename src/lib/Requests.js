// Typically we would store in {process.env.API_KEY}
export const API_KEY = '38ffc00a44d0dc17b34ba82e0252cbab';

export const requestsFilms = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const requestsTV = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchAnimationTV: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchMysteryTV: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeTV: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
