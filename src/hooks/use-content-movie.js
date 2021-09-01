import { useState, useEffect } from 'react';
import axios from '../lib/axios';

export const useContentMovie = (fetchUrl) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const result = fetchUrl ? request?.data?.results : request?.data?.results[Math.floor(Math.random() * request?.data?.results?.length - 1 + 1)];

      setMovies(result);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return movies;
};
