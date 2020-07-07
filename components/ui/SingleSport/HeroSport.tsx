import React from 'react';
import styled from 'styled-components';

interface StyledProps {
  bannerHero: string;
}

const Styled = styled.section<StyledProps>`
  .banner--hero {
    min-height: 15vh;
    background: url(${({ bannerHero }) =>
        bannerHero ? bannerHero : '/imgs/grass.jpg'})
      no-repeat;
    background-size: cover;
    background-position: center;
  }

  .banner--name {
    background-color: var(--clr-second);
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background: url('/imgs/strips.png') no-repeat center center;
      background-size: cover;
      top: 0;
      height: 100%;
      width: 100%;
      max-width: 120px;
    }

    &::before {
      left: calc(100vw - 90%);
    }
    &::after {
      right: calc(100vw - 90%);
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 3rem;
      }
    }
  }
`;

interface HeroSportProps {
  banner: string;
  leagueName: string;
}

const HeroSport: React.FC<HeroSportProps> = ({ banner, leagueName }) => {
  return (
    <Styled className='single--sport--hero' bannerHero={banner}>
      <section className='hero banner--hero'>
        <div className='hero-body banner--hero'></div>
      </section>
      <section className='hero is-dark banner--name'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{leagueName}</h1>
          </div>
        </div>
      </section>
    </Styled>
  );
};

export default HeroSport;
