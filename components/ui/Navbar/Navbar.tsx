import React, { useState } from 'react';
import styled from 'styled-components';
import ActiveLink from '../ActiveLink';
import FavoriteBar from './FavoriteBar';

const Styled = styled.header`
  .navbar,
  .navbar-menu {
    background-color: var(--clr-second);
    color: var(--clr-white);
  }

  .navbar-burger span {
    color: var(--clr-white);
  }

  .navbar-item,
  .navbar-link {
    color: var(--clr-white);
    text-transform: uppercase;
    font-weight: var(--fw-bold);
  }

  .navbar-link::after {
    border-color: var(--clr-primary);
  }
`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Styled className=''>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <ActiveLink href='/'>
            <a className='navbar-item'>Sport Addict</a>
          </ActiveLink>

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
            <a className='navbar-item'>nfl</a>
            <a className='navbar-item'>nba</a>
            <a className='navbar-item'>nhl</a>
            <a className='navbar-item'>mlb</a>
            <a className='navbar-item'>soccer</a>
            <a className='navbar-item'>golf</a>
            <a className='navbar-item'>fighting</a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>More</a>
              <div className='navbar-dropdown'>
                <a className='navbar-item'>tennis</a>
                <a className='navbar-item'>egaming</a>
                <a className='navbar-item'>motosports</a>
                <a className='navbar-item'>rugby</a>
                <a className='navbar-item'>volleyball</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>sports</a>
                <a className='navbar-item'>players</a>
                <a className='navbar-item'>tv channels</a>
                <a className='navbar-item'>latest transfers</a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <FavoriteBar />
    </Styled>
  );
};

export default Navbar;
