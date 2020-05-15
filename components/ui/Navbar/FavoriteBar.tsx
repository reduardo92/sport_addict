import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  width: 100%;
  padding: 0.5em;
  background-color: var(--clr-primary);

  .container {
    display: flex;
    align-items: center;
  }

  .favorite__icon {
    background-color: transparent;
    transition: var(--cubicbezier);

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }

  .favorite__team {
    width: 30px;
    margin: 0 0.3em;
  }
`;

const FavoriteBar = () => {
  return (
    <Styled className='favorite__bar'>
      <div className='container'>
        <button className='favorite__icon'>
          <img src='/icons/favorite_Plus.svg' alt='favorite add icon' />
        </button>
        <img
          className='favorite__team'
          src='/icons/liga.png'
          alt='favorite add icon'
        />
        <img
          className='favorite__team'
          src='/icons/mex.png'
          alt='favorite add icon'
        />
        <img
          className='favorite__team'
          src='/icons/ufc.png'
          alt='favorite add icon'
        />
        <img
          className='favorite__team'
          src='/icons/nascar.png'
          alt='favorite add icon'
        />
        <img
          className='favorite__team'
          src='/icons/euro.png'
          alt='favorite add icon'
        />
        <img
          className='favorite__team'
          src='/icons/italian.png'
          alt='favorite add icon'
        />
        <img
          className='favorite__team'
          src='/icons/chp.png'
          alt='favorite add icon'
        />
      </div>
    </Styled>
  );
};

export default FavoriteBar;
