import React, { useContext, useEffect, useState } from 'react';
import { SelectProfileContainer } from '../containers/Profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';

export default function Browse() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(FirebaseContext);
  const user = auth.currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    // eslint-disable-next-line no-nested-ternary
    profile.displayName
      ? (
        <>
          {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
          <Header src="joker1"><p>Hello</p></Header>
        </>
      )
      : (<SelectProfileContainer user={user} setProfile={setProfile} />)
  );
}
