import { useState, useEffect } from 'react';
import axios from '../lib/axios';
import { requests } from '../lib/Requests';

export const useContentMovie = (targetUrl) => {
  const [movies, setMovies] = useState([]);

  const target = targetUrl || requests.fetchNetflixOriginals;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(target);
      const result = targetUrl ? request.data.results : request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];

      setMovies(result);
      return request;
    }

    fetchData();
  }, [targetUrl]);

  return movies;
};
