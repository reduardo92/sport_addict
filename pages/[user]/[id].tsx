import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import AlertContext from '../../components/context/alert/AlertContext';
import AuthContext from '../../components/context/auth/AuthContext';

const Styled = styled.section``;

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const {
    state: { user },
  } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const { push } = useRouter();

  useEffect(() => {
    if (!user) {
      push('/');
      setAlert!('Log in/Sign up', 'warning');
    }
  }, []);

  return <Styled className='userProfile'>"hello from User"</Styled>;
};

export default UserProfile;
