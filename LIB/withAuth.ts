import router from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from './db';

const withAuth = () => {
  const [status, setStatus] = useState<'LOADING' | 'SIGNED_IN'>('LOADING');

  useEffect(() => {
    auth.onAuthStateChanged((authUser: firebase.User | null) => {
      console.log(authUser);
      if (authUser) {
        setStatus('SIGNED_IN');
      } else {
        router.push('/');
      }
    });
  }, []);
};
export default withAuth;
