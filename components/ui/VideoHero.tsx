import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import { mediaSizes } from './variables/variables';

const Styled = styled.section`
  position: relative;
  min-height: 80vh;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  .video--bg,
  .bg--mobile {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
    background-color: black;
  }

  .content--text {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  .box {
    border-radius: 0;
    background-color: var(--clr-second);
    text-align: left;
    margin-bottom: 0;

    &__title {
      text-transform: uppercase;
      color: var(--clr-white);
      font-size: 5vw;
      letter-spacing: 3px;
      text-shadow: var(--text-shadow);
      font-weight: var(--fw-bold);
      margin-bottom: 0.5em;
      span {
        display: block;
        font-size: 9vw;
        letter-spacing: 4px;
      }
    }

    &__subtitle {
      font-size: var(--fs-small);
      margin-bottom: 0.2em;
    }
  }

  /* 992px */
  @media screen and (min-width: ${mediaSizes.table_lg}) {
    .container {
      margin-top: 5em;
    }

    .content--text {
      & .btn {
        font-size: 1.5rem;
        svg {
          font-size: 1.6rem;
        }
      }
    }

    .box {
      &__title {
        font-size: 2.8rem;
        span {
          font-size: 4.5rem;
        }
      }

      &__subtitle {
        font-size: 1.2rem;
      }
    }
  }
`;

const VideoHero = () => (
  <Styled className='hero--video'>
    <div className='container'>
      <div className='content--text'>
        <div className='box'>
          <h1 className='box__title'>
            welcome to <span>sport addict</span>
          </h1>
          <p className='box__subtitle'>
            Search for your favorite team,legues,players, and lots more
          </p>
          <p className='box__subtitle'>
            Sign up and customize your own favorite lists{' '}
          </p>
        </div>
        <Btn href='/signup' title='sign up' />
      </div>
    </div>
    <video autoPlay muted loop className='video--bg'>
      <source src='/bg_video.mp4' type='video/mp4' />
    </video>
    {/* <div className='bg--mobile' /> */}
  </Styled>
);

export default VideoHero;
