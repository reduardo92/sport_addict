import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';
import AlertContext from '../context/alert/AlertContext';
import AuthContext from '../context/auth/AuthContext';
import ActiveLink from './ActiveLink';
import { mediaSizes } from './variables/variables';

interface StyledProps {
  avatar?: string | null;
  bg?: string;
}

const Styled = styled.div<StyledProps>`
  cursor: pointer;
  transition: var(--cubicbezier);

  .dropdown-trigger {
    background: ${({ avatar }) =>
      avatar ? `url(${avatar}) ` : 'var(--clr-primary)'};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    text-transform: capitalize;
    color: var(--clr-second);
    font-weight: 600;
  }

  .dropdown-content {
    padding-bottom: 0;
    padding-top: 1px;
    .dropdown-item {
      color: var(--clr-second);
      text-transform: uppercase;
      font-weight: var(--fw-normal);
      opacity: 0.9;
      border-top: 2px solid transparent;

      &:hover,
      &:focus {
        color: var(--clr-primary);
        background-color: var(--clr-third);
        border-top-color: var(--clr-primary);
      }
    }
    .user--name {
      opacity: 1;
      font-weight: var(--fw-bold);
      &__subtext {
        display: block;
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (min-width: ${mediaSizes.table_lg}) {
  }
`;

interface UserIconProps {}

const UserIcon: React.FC<UserIconProps> = ({}) => {
  const {
    logOut,
    state: { user },
  } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const handleLogOut = () => {
    logOut!();
    setAlert!('logout', 'success');
  };
  return (
    <Styled
      className='userIcon dropdown is-hoverable is-right'
      avatar={user?.photoURL}
    >
      <div className='dropdown-trigger'>
        {!user?.photoURL && user?.displayName?.slice(0, 1)}
      </div>

      <div className='dropdown-menu' id='dropdown-menu4' role='menu'>
        <div className='dropdown-content'>
          <ActiveLink href='/[user]' as={`/${user?.displayName}`}>
            <a className='dropdown-item user--name'>
              {user?.displayName}
              <span className='user--name__subtext'>View Profile</span>
            </a>
          </ActiveLink>
          <ActiveLink href='/[user]' as={`/${user?.displayName}?q=leagues`}>
            <a className='dropdown-item'>Leagues</a>
          </ActiveLink>
          <ActiveLink href='/[user]' as={`/${user?.displayName}?q=teams`}>
            <a className='dropdown-item'>Teams</a>
          </ActiveLink>
          <ActiveLink href='/[user]' as={`/${user?.displayName}?q=players`}>
            <a className='dropdown-item'>Players</a>
          </ActiveLink>
          <hr className='dropdown-divider' />
          <ActiveLink href='/[user]' as={`/${user?.displayName}?q=editprofile`}>
            <a className='dropdown-item'>Edit Profile</a>
          </ActiveLink>
          <hr className='dropdown-divider' />
          <button onClick={handleLogOut} className='dropdown-item logOut'>
            log out <FiLogOut className='logout--icon' />
          </button>
        </div>
      </div>
    </Styled>
  );
};

export default UserIcon;
