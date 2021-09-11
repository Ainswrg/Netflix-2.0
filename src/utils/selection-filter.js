import { API_KEY, requestsFilms, requestsTV } from '../lib/Requests';

// const requests = requestsFilms;

export const selectionFilter = ({ category, searchTerm, currentPage }) => {
  let result = [];

  const films = [
    { title: 'Trending now', fetchUrl: requestsFilms.fetchTrending, isLargeRow: true },
    { title: 'Action Movies', fetchUrl: requestsFilms.fetchActionMovies },
    { title: 'Animation Movies', fetchUrl: requestsFilms.fetchAnimationMovies },
    { title: 'Thriller Movies', fetchUrl: requestsFilms.fetchThrillerMovies },
    { title: 'Comedy Movies', fetchUrl: requestsFilms.fetchComedyMovies },
    { title: 'Top Rated', fetchUrl: requestsFilms.fetchTopRated },
    { title: 'Horror Movies', fetchUrl: requestsFilms.fetchHorrorMovies },
    { title: 'Romance Movies', fetchUrl: requestsFilms.fetchRomanceMovies },
    { title: 'Documentaries', fetchUrl: requestsFilms.fetchDocumentaries },
  ];

  const TV = [
    {
      title: 'Netflix originals',
      fetchUrl: requestsTV.fetchNetflixOriginals,
      isLargeRow: true,
    },
    { title: 'Trending now', fetchUrl: requestsTV.fetchTrending },
    { title: 'Top Rated', fetchUrl: requestsTV.fetchTopRated },
    { title: 'Action & Adventure', fetchUrl: requestsTV.fetchActionTV },
    { title: 'Animation', fetchUrl: requestsTV.fetchAnimationTV },
    { title: 'Mystery', fetchUrl: requestsTV.fetchMysteryTV },
    { title: 'Comedy', fetchUrl: requestsTV.fetchComedyTV },
    { title: 'Crime', fetchUrl: requestsTV.fetchCrimeTV },
    { title: 'Documentary', fetchUrl: requestsTV.fetchDocumentaries },
  ];
  const Search = [
    {
      title: 'Search',
      fetchUrl: `search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=${currentPage}`,
      isLargeRow: true,
    },
  ];
  if (category === 'Films') {
    result = films;
  }

  if (category === 'TV') {
    result = TV;
  }

  if (category === 'Search') {
    result = Search;
  }

  return result;
};
