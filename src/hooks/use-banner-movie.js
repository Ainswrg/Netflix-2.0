import { useState, useEffect } from 'react';
import axios from '../lib/axios';
import { requestsFilms, requestsTV } from '../lib/Requests';

export const useBannerMovie = ({ ...props }) => {
  const [movies, setMovies] = useState([]);
  let target = requestsFilms.fetchTrending;

  if (props[0] === 'TV') target = requestsTV.fetchNetflixOriginals;
  if (props[0] === 'Films') target = requestsFilms.fetchTrending;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(target);
      const result = request.data.results[Math.floor(Math.random() * request.data.results.length - 1 + 1)];

      setMovies(result);
      return request;
    }

    fetchData();
  }, [target]);

  return movies;
};
