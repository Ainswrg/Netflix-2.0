import React, { useContext, useEffect, useState } from 'react';
import { SelectProfileContainer } from '../containers/Profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function Browse() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { auth, signOut } = useContext(FirebaseContext);
  const user = auth.currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    // eslint-disable-next-line no-nested-ternary
    profile.displayName ? (
      <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
              <Header.TextLink>Series</Header.TextLink>
              <Header.TextLink>Films</Header.TextLink>
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
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Lorem...Lorem...You...Lorem...You...Yo uLorem...Lorem...You...Lorem...You...YouLorem...Lor
              em...You...Lorem...You...YouLorem...Lorem...You...Lor em...You...YouLorem...Lorem...You...Lorem...You...Yo
              uLorem...Lorem...You...Lorem...You...YouLorem...Lorem...You...Lor
              em...You...YouLorem...Lorem...You...Lorem...You...YouLore
              m...Lorem...You...Lorem...You...YouLorem...Lorem...Y ou...Lorem...You...You
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    )
  );
}
