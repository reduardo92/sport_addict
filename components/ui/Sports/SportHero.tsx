import React from 'react';
import styled from 'styled-components';
import Btn from '../Btn';
import Paragraph from '../Paragraph';
import SideStrips from '../StyleComponents/Styless/SideStrips';
import { mediaSizes } from '../variables/variables';

const Styled = styled.section`
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
      font-size: 8vh;
      width: max-content;
      margin: auto;
    }

    .para {
      margin-bottom: 2em;
      width: 100%;
    }
    .avatars {
      padding-top: 3em;
      max-width: 900px;
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
          font-size: 9vh;
        }
      }
      .avatars {
        order: -1;
        flex: 1;
        align-self: flex-end;
      }
    }
  }
`;

const SportHero: React.FC = () => (
  <Styled className='SportHero parallelogram--bg'>
    <SideStrips isBlackStrip mirror />
    <div className='containerr'>
      <div className='hero--text'>
        <h1 className='title title--dark '>LEAGUES</h1>
        <Paragraph
          text='Search and filter true your favorites sport and discover new ones '
          clr
        />
        <Btn href='/' bgColor title='home' />
      </div>
      <div className='avatars'>
        <img
          src='/imgs/Players.png'
          alt='sport players'
          className='avatars--img'
        />
      </div>
    </div>
  </Styled>
);

export default SportHero;
