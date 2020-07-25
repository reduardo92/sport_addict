import React, { useEffect, useState } from 'react';
import { auth, firebase } from '../../../LIB/db';
import AuthContext from './AuthContext';

const AuthState = ({ children }: any) => {
  const [error, setError] = useState<null | string>(null);
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  const onChange = (user: firebase.User | null) =>
    setState({ initializing: false, user });

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(onChange);

    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  // Logout
  const logOut = () => auth.signOut();

  // hanndle Errors
  const setErrors = (error: string, timeout = 3000) => {
    setError!(error);

    setTimeout(() => setError!(null), timeout);
  };

  console.log('from Auth', state, error);
  return (
    <AuthContext.Provider value={{ state, setState, error, setErrors, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
