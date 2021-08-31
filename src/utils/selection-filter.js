import { requestsFilms } from '../lib/Requests';

// const requests = requestsFilms;

export const selectionFilter = (target) => {
  let result = [];

  const films = [
    { title: 'Trending now', fetchUrl: requestsFilms.fetchTrending, isLargeRow: true },
    { title: 'Top Rated', fetchUrl: requestsFilms.fetchTopRated },
    { title: 'Action Movies', fetchUrl: requestsFilms.fetchActionMovies },
    { title: 'Comedy Movies', fetchUrl: requestsFilms.fetchComedyMovies },
    { title: 'Horror Movies', fetchUrl: requestsFilms.fetchHorrorMovies },
    { title: 'Romance Movies', fetchUrl: requestsFilms.fetchRomanceMovies },
    { title: 'Documentaries', fetchUrl: requestsFilms.fetchDocumentaries },
  ];

  if (target === 'Films') {
    result = films;
  }
  return result;
};
