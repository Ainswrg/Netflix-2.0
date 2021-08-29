import React, { useContext, useEffect, useState } from 'react';
import { SelectProfileContainer } from '../containers/Profiles';
import { FirebaseContext } from '../context/firebase';

export default function Browse() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(FirebaseContext);
  const user = auth.currentUser || {};

  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
