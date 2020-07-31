import React from 'react';
import styled, { css } from 'styled-components';
import Btn from './Btn';
import Paragraph from './Paragraph';
import SideStrips from './StyleComponents/Styless/SideStrips';
import { mediaSizes } from './variables/variables';

interface StyledProps {
  playerHero: boolean;
}

const Styled = styled.section<StyledProps>`
  min-height: 85vh;
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--clr-primary);

  & > :first-child {
    display: none;
  }

  & .containerr {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    overflow: hidden;
    padding: 0 1em;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: url('/imgs/black_lines.svg') no-repeat center center;
      background-size: cover;
      clip-path: 1px;
      filter: drop-shadow(20px 8px 34px black);
      z-index: -1;
    }

    .title {
      letter-spacing: 5px;
      font-size: 2.5rem;
      width: fit-content;
      margin: auto;
    }

    .para {
      margin-bottom: 2em;
      width: 100%;
    }
    .avatars {
      padding-top: 3em;
      max-width: ${({ playerHero }) => (playerHero ? '37.5rem' : '56.25rem')};
    }
  }

  @media screen and (min-width: ${mediaSizes.table}) {
    grid-template-columns: 5em auto;

    &::before {
      clip-path: polygon(74% -51%, 75% 0%, 44% 100%, 0% 161%);
    }

    & > :first-child {
      display: block;
    }

    & .containerr {
      .title {
        font-size: 6vh;
      }
    }

    @media screen and (min-width: ${mediaSizes.table_lg}) {
      & > :first-child {
        display: block;
      }

      & .containerr {
        flex-direction: row;
        justify-content: space-evenly;

        .hero--text {
          padding-right: 5em;
          text-align: left;
          .title {
            margin: 0;
            margin-bottom: 0.1em;
            font-size: 8vh;
          }
        }
        .avatars {
          position: relative;
          order: ${({ playerHero }) => (playerHero ? '0' : '-1')};
          flex: 1;
          align-self: flex-end;

          ${({ playerHero }) =>
            playerHero &&
            css`
              flex: 1 0 45%;

              &::before {
                content: '';
                position: absolute;
                height: 100%;
                width: 100%;
                top: 25%;
                left: 0;
                background-color: var(--clr-second);
                border-radius: 50%;
                z-index: -1;
              }
            `};
        }
      }
    }
  }
`;

interface TwoSideHeroProps {
  title: string;
  imgSrc?: string;
  playerHero?: boolean;
}

const TwoSideHero: React.FC<TwoSideHeroProps> = ({
  title,
  imgSrc,
  playerHero = false,
}) => (
  <Styled className='SportHero parallelogram--bg' playerHero={playerHero}>
    <SideStrips isBlackStrip mirror />
    <div className='containerr'>
      <div className='hero--text'>
        <h1 className='title title--dark '>{title}</h1>
        {!playerHero && (
          <>
            <Paragraph
              text='Search and filter true your favorites sport and discover new ones '
              clr
            />
            <Btn href='/' bgColor title='home' />
          </>
        )}
      </div>

      <div className='avatars'>
        <img
          src={imgSrc || '/imgs/Players.png'}
          alt={title || 'sport players'}
          className='avatars--img'
        />
      </div>
    </div>
  </Styled>
);

export default TwoSideHero;
