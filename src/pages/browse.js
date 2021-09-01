import React, { useContext, useEffect, useState } from 'react';

import { Card, Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import { SelectProfileContainer } from '../containers/Profiles';
import { FirebaseContext } from '../context/firebase';
import { useBannerMovie } from '../hooks';
import logo from '../logo.svg';
import { selectionFilter } from '../utils/selection-filter';

export default function Browse() {
  const [category, setCategory] = useState('Films');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { auth, signOut } = useContext(FirebaseContext);
  const [slideRows, setSlideRows] = useState([]);
  const user = auth.currentUser || {};
  const movieArray = selectionFilter(category);
  const movie = useBannerMovie([category]);
  console.log(movie);
  const truncate = (string, n) => (string?.length > n ? `${string.substr(0, n - 1)}...` : string);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(movieArray);
  }, [category]);

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
                <Header.SearchTerm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </Header.Group>
              <Header.Profile>
                <Header.Picture src={user.photoURL} />

                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>

                  <Header.Group>
                    <Header.TextLink onClick={() => signOut(auth)}>Sign out</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>Watch {movie?.title || movie?.name || movie?.original_name}</Header.FeatureCallOut>
            <Header.Text>
              {truncate(movie?.overview, 150)}
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>

        <Card.Group>
          {slideRows.map((categories) => (
            <Card key={`${category}-${categories.title.toLowerCase()}`}>
              <Card.Title>{categories.title}</Card.Title>
              <Card.Row fetchUrl={categories.fetchUrl} isLargeRow={categories.isLargeRow} />
            </Card>
          ))}
        </Card.Group>
      </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    )
  );
}
