import { createContext } from 'react';

export const authInitalState: AuthStateProps = {
  error: null,
  state: { initializing: true || false, user: null },
};

export interface AuthStateProps {
  error: null | string;
  state: {
    initializing: boolean;
    user: firebase.User | null;
  };
  setState?: React.Dispatch<
    React.SetStateAction<{
      initializing: boolean;
      user: firebase.User | null;
    }>
  >;
  setErrors?: (error: string, timeout?: number) => void;
  logOut?: () => void;
}

const AuthContext = createContext<AuthStateProps>(authInitalState);

export default AuthContext;
