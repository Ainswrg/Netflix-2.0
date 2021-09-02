import { useState, useEffect } from 'react';
import axios from '../lib/axios';

export const useContentMovie = (fetchUrl) => {
  const [movies, setMovies] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      const result = request.data.results;
      if (isMounted) setMovies(result);
      return request;
    };

    fetchData();
    return () => setIsMounted(false);
  }, [fetchUrl]);

  return movies;
};
