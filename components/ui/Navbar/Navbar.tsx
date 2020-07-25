import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth/AuthContext';
import ActiveLink from '../ActiveLink';
import SearchButton from '../SearchButton';
import UserIcon from '../UserIcon';
import { mediaSizes } from '../variables/variables';
import FavoriteBar from './FavoriteBar';

const Styled = styled.header`
  background-color: var(--clr-second);
  .navbar,
  .navbar-menu {
    background-color: var(--clr-second);
    color: var(--clr-white);
  }

  .navbar-burger {
    margin-left: 0;
    span {
      color: var(--clr-white);
    }
  }

  .navbar-item,
  .navbar-link {
    color: var(--clr-white);
    text-transform: uppercase;
    font-weight: var(--fw-bold);
    border-top: 2px solid transparent;

    &:hover,
    &:focus {
      color: var(--clr-primary);
      background-color: var(--clr-third);
      border-top-color: var(--clr-primary);
    }
  }

  .navbar-brand {
    .logo {
      position: relative;
      font-style: italic;

      &::before {
        content: '';
        position: absolute;
        height: 0.2rem;
        width: 76%;
        margin: 0 auto;
        bottom: 38%;
        left: 0;
        right: 0;
        z-index: -1;
        background-color: var(--clr-primary);
      }
    }

    .userIcon,
    .search--button {
      align-self: center;
    }

    .search--button {
      margin-left: auto;
      margin-right: 1em;
    }
  }

  .selected {
    color: var(--clr-primary);
    background-color: var(--clr-third);
    border-top-color: var(--clr-primary);
  }

  .buttons {
    & .button {
      transition: var(--cubicbezier);
      text-transform: uppercase;
      font-weight: var(--fw-bold);
      &:hover,
      &:focus {
        transform: scale(0.9);
        filter: grayscale(1);
      }
    }

    .sign-up {
      background-color: var(--clr-primary);
      border-color: var(--clr-primary);
      color: var(--clr-second);
    }

    /* Hide mobile Avatar & Search */
    .userIcon,
    .search--button {
      display: none;
    }
  }

  .navbar-link::after {
    border-color: var(--clr-primary);
  }

  /* 992px */
  @media screen and (min-width: ${mediaSizes.table_lg}) {
    .has-dropdown {
      &:hover {
        .navbar-link {
          color: var(--clr-primary);
          background-color: var(--clr-third);
          border-top-color: var(--clr-primary);
        }
      }

      .navbar-dropdown {
        padding-top: 0px;
        padding-bottom: 0px;

        a.navbar-item {
          color: var(--clr-second);

          &:hover,
          &:focus {
            color: var(--clr-primary);
            background-color: var(--clr-third);
          }
        }
      }
    }

    .navbar-brand {
      .logo {
        position: relative;
        font-style: italic;

        &::before {
          content: '';
          position: absolute;
          height: 0.2rem;
          width: 76%;
          margin: 0 auto;
          bottom: 38%;
          left: 0;
          right: 0;
          z-index: -1;
          background-color: var(--clr-primary);
        }
      }
      .userIcon,
      .search--button {
        display: none;
      }
    }

    .buttons {
      .userIcon,
      .search--button {
        display: block;
      }
      .userIcon {
        margin-left: 1em;
      }
    }
  }
`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { state } = useContext(AuthContext);

  return (
    <Styled className=''>
      <div className='container'>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <ActiveLink href='/'>
              <a className='navbar-item logo'>Sport Addict</a>
            </ActiveLink>
            <SearchButton />
            {state.user && <UserIcon />}

            <a
              role='button'
              className={`navbar-burger burger ${isActive && 'is-active '}`}
              onClick={() => setIsActive(!isActive)}
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>

          <div
            id='navbarBasicExample'
            className={`navbar-menu ${isActive && 'is-active '}`}
            onClick={() => setIsActive(!isActive)}
          >
            <div className='navbar-start'>
              <ActiveLink
                href='/sports/[sport]/[sportName]/[id]'
                as={`/sports/American%20Football/NFL/4391`}
              >
                <a className='navbar-item'>nfl</a>
              </ActiveLink>
              <ActiveLink
                href='/sports/[sport]/[sportName]/[id]'
                as={`/sports/Basketball/NBA/4387`}
              >
                <a className='navbar-item'>nba</a>
              </ActiveLink>
              <ActiveLink
                href='/sports/[sport]/[sportName]/[id]'
                as={`/sports/Ice%20Hockey/NHL/4380`}
              >
                <a className='navbar-item'>nhl</a>
              </ActiveLink>
              <ActiveLink
                href='/sports/[sport]/[sportName]/[id]'
                as={`/sports/Baseball/MLB/4424`}
              >
                <a className='navbar-item'>mlb</a>
              </ActiveLink>
              <ActiveLink href='/sports?q=Soccer'>
                <a className='navbar-item'>soccer</a>
              </ActiveLink>
              <ActiveLink href='/sports?q=Golf'>
                <a className='navbar-item'>golf</a>
              </ActiveLink>
              <ActiveLink href='/sports?q=Fighting'>
                <a className='navbar-item'>fighting</a>
              </ActiveLink>
              <div className='navbar-item has-dropdown is-hoverable'>
                <a className='navbar-link navbar-item'>More</a>
                <div className='navbar-dropdown'>
                  <ActiveLink href='/sports?q=Tennis'>
                    <a className='navbar-item'>tennis</a>
                  </ActiveLink>
                  <ActiveLink href='/sports?q=ESports'>
                    <a className='navbar-item'>es-sports</a>
                  </ActiveLink>
                  <ActiveLink href='/sports?q=Motorsport'>
                    <a className='navbar-item'>Motorsport</a>
                  </ActiveLink>
                  <ActiveLink href='/sports?q=Rugby'>
                    <a className='navbar-item'>rugby</a>
                  </ActiveLink>
                  <ActiveLink href='/sports?q=Volleyball'>
                    <a className='navbar-item'>Volleyball</a>
                  </ActiveLink>
                  <hr className='navbar-divider' />
                  <ActiveLink href='/sports'>
                    <a className='navbar-item'>sports</a>
                  </ActiveLink>
                  <ActiveLink href='/tvChannels'>
                    <a className='navbar-item'>tv channels</a>
                  </ActiveLink>
                  <ActiveLink href='/latestTransfers'>
                    <a className='navbar-item'>latest transfers</a>
                  </ActiveLink>
                </div>
              </div>
            </div>

            <div className='navbar-end'>
              <div className='buttons'>
                {state.user ? (
                  <>
                    <SearchButton />
                    <UserIcon />
                  </>
                ) : (
                  <>
                    <ActiveLink href='/signup'>
                      <a className='button sign-up'>Sign up</a>
                    </ActiveLink>
                    <ActiveLink href='/login'>
                      <a className='button is-light'>Log in</a>
                    </ActiveLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <FavoriteBar />
    </Styled>
  );
};

export default Navbar;
