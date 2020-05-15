import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Btn from '../Btn';
import Link from 'next/link';

interface styledProps {
  bgClr?: boolean;
}

const Styled = styled.section<styledProps>`
  background-color: ${({ bgClr }) =>
    bgClr ? 'var(--clr-second)' : 'var(--clr-primary)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: url('/imgs/black_lines.svg') no-repeat center center;
    background-size: cover;
    height: 35%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2em 1em 0em;

    .para {
      color: var(--clr-second);
      width: 80%;
    }
  }

  .side--image {
    position: relative;
    width: 100%;
    /* height: 40vh; */
    background: var(--clr-second) url('/imgs/soccer_stadium.jpg') no-repeat
      center center;
    background-size: cover;
    -webkit-clip-path: url(#my-clip-path);
    clip-path: url(#my-clip-path);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    padding: 5em 0 2em;
    grid-gap: 2em 1em;

    .link--tag {
      width: 5em;
      cursor: pointer;
      transition: var(--cubicbezier);
      &:hover {
        opacity: 0.75;
      }
    }

    svg {
      position: absolute;
      pointer-events: none;
    }
  }

  /* Tablet */
  /* transform: scale(1.3) translateY(-13px);
   */
`;

interface TwoSlidesProps {
  bgClr?: boolean;
}

interface topSoccerProps {
  id: string;
  src: string;
  title: string;
}

const topSoccer: topSoccerProps[] = [
  { id: '4480', src: '/icons/chp.png', title: 'UEFA Champions League' },
  { id: '4501', src: '/icons/liber.png', title: 'Copa Libertadores' },
  {
    id: '4328',
    src: '/icons/englishPrimer.png',
    title: 'English Premier League',
  },
  { id: '4335', src: '/icons/liga.png', title: 'Spanish La Liga' },
  { id: '4332', src: '/icons/italian.png', title: 'Italian Serie A' },
  { id: '4331', src: '/icons/german.png', title: 'German Bundesliga' },
  { id: '4350', src: '/icons/mex.png', title: 'Mexican Primera League' },
  { id: '4346', src: '/icons/mls.png', title: 'American Major League Soccer' },
];

const TwoSlides: React.FC<TwoSlidesProps> = ({ bgClr }) => {
  return (
    <Styled className='' bgClr={bgClr}>
      <div className='content'>
        <Title title='World’s Top Soccer' className='title--dark' />
        <p className='para'>
          See your favorite soccer legues. Cheack upcoming schedules and teams{' '}
        </p>
        <Btn href='/leagues/[sport]' as={`/leagues/soccer`} bgColor />
      </div>
      <div className='side--image before--black '>
        {topSoccer.map(({ id, src, title }) => (
          <Link
            key={id}
            href='/league/[leagueName]/[leagueId]'
            as={`/league/${title}/${id}`}
          >
            <a className='link--tag'>
              <img className='link--tag__img' src={src} alt={title} />
            </a>
          </Link>
        ))}

        <svg>
          <clipPath id='my-clip-path' clipPathUnits='objectBoundingBox'>
            <path
              className='st0'
              d='M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z'
            />
          </clipPath>
        </svg>
        {/* <svg className='svg'>
          <clipPath id='my-clip-path' clipPathUnits='objectBoundingBox'>
            <path d='M0.101,0.43 C-0.228,0.599,0.358,1,0.382,1 H0.678 H1 V0.001 L0.585,0.003 C-0.387,-0.025,0.43,0.26,0.101,0.43'></path>
          </clipPath>
        </svg> */}
        {/* transform: scale(1.1) translateX(-20px); */}
      </div>
    </Styled>
  );
};

export default TwoSlides;
