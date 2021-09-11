import React, { useContext, useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import Fuse from 'fuse.js';

import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/Footer';
import { SelectProfileContainer } from '../containers/Profiles';
import { FirebaseContext } from '../context/firebase';
import { useBannerMovie } from '../hooks';
import logo from '../logo.svg';
import { selectionFilter } from '../utils/selection-filter';
import { API_KEY } from '../lib/Requests';
import axios from '../lib/axios';

export default function Browse() {
  const [category, setCategory] = useState('Films');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const { auth, signOut } = useContext(FirebaseContext);

  const user = auth.currentUser || {};

  const movieArray = selectionFilter({ category, searchTerm, currentPage });
  const movie = useBannerMovie([category]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(movieArray);
  }, [category]);

  const truncate = (string, n) => (string?.length > n ? `${string.substr(0, n - 1)}...` : string);

  const handleClick = (movieTarget) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(
        movieTarget?.title
        || movieTarget?.original_title
        || movieTarget?.name
        || movieTarget?.original_name
        || ''
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSubmit = () => {
    const fetchData = async () => {
      const request = await axios.get(
        `search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=${currentPage}`
      );
      // eslint-disable-next-line prefer-destructuring
      const data = request.data;
      setMovies([...data.results]);
      setTotalResults(data.total_results);
    };
    fetchData();
  };

  useEffect(() => {
    const fuse = new Fuse(movies, { keys: ['overview', 'title', 'name'] });
    handleSubmit();
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (movies.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setCategory('Search');
      setSlideRows(movieArray);
    } else {
      setCategory('Films');
    }
  }, [searchTerm]);

  return (
    // eslint-disable-next-line no-nested-ternary
    profile.displayName ? (
      <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

        <Header src={movie?.backdrop_path} dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
              <Header.TextLink
                active={category === 'TV' ? 'true' : 'false'}
                onClick={() => setCategory('TV')}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === 'Films' ? 'true' : 'false'}
                onClick={() => setCategory('Films')}
              >
                Films
              </Header.TextLink>
            </Header.Group>

            <Header.Group>
              <Header.Group>
                <Header.SearchTerm
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </Header.Group>
              <Header.Profile>
                <Header.Picture src={user.photoURL} />

                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>

                  <Header.Group>
                    <Header.TextLink onClick={() => signOut(auth)}>
                      Sign out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
            <Header.Gradient dontShowOnSmallViewPort />
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>
              Watch {movie?.title || movie?.name || movie?.original_name}
            </Header.FeatureCallOut>
            <Header.Text>{truncate(movie?.overview, 150)}</Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
          <Header.FadeBottom />
        </Header>

        <Card.Group>
          {slideRows.map((categories) => (
            <Card
              key={`${category}-${categories.title.toLowerCase()}`}
              fetchUrl={categories.fetchUrl}
            >
              <Card.Title>{categories.title}</Card.Title>
              <Card.Row
                fetchUrl={categories.fetchUrl}
                isLargeRow={categories.isLargeRow}
                truncate={truncate}
                handleClick={handleClick}
              />
              <Card.Feature truncate={truncate}>
                <Player>
                  <Player.Button />
                  <Player.Video trailerUrl={trailerUrl} />
                </Player>
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>
        <FooterContainer />
      </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    )
  );
}
