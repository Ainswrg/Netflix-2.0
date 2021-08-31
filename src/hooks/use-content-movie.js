import { useState, useEffect } from 'react';
import axios from '../lib/axios';
import { requestsFilms } from '../lib/Requests';

export const useContentMovie = (fetchUrl) => {
  const [movies, setMovies] = useState([]);
  const [requests, setRequest] = useState(requestsFilms);

  const target = fetchUrl || requests.fetchTrending;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(target);
      const result = fetchUrl ? request.data.results : request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];

      setMovies(result);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return movies;
};
