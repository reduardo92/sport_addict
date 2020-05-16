import React from 'react';
import styled, { css } from 'styled-components';
import Btn from '../Btn';
import Link from 'next/link';
import { topSoccer } from '../../interfaces/TopSoccer';
import Paragraph from '../Paragraph';
import BtnProps from '../../interfaces/BtnProps';

interface styledProps {
  bgClr?: boolean;
  sideBg?: string;
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
    ${({ bgClr }) =>
      bgClr &&
      css`
        background-image: url('/imgs/yelllow_lines.svg');
      `}
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
    padding: 2em 1em 0em;

    .avatars {
      width: 80%;
      margin: 2em;
      &--item {
        filter: drop-shadow(4px 7px 6px rgba(0, 0, 0, 0.6));
      }
    }
  }

  .side--image {
    position: relative;
    width: 100%;
    background: var(--clr-second) url('/imgs/soccer_stadium.jpg') no-repeat
      center center;
    background-size: cover;
    -webkit-clip-path: url(#mobile-svg);
    clip-path: url(#mobile-svg);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    padding: 5em 0 2em;
    grid-gap: 2em 1em;
    ${({ sideBg }) =>
      sideBg &&
      css`
        background-image: url(/imgs/${sideBg}.jpg);
      `}

    .link--tag {
      width: 5em;
      cursor: pointer;
      transition: var(--cubicbezier);
      &:hover {
        opacity: 0.75;
        filter: grayscale(0.5);
      }
    }

    svg {
      position: absolute;
      pointer-events: none;
    }
  }

  .side--image.push--up {
    margin-top: -4em;
    height: 100%;
  }
  .side--image.side-height {
    height: 400px;
  }

  .svg--large {
    display: none;
  }

  /* Tablet */
  /* transform: scale(1.3) translateY(-13px);
   */
`;

interface TwoSlidesProps {
  bgClr?: boolean;
  sideBg?: string;
  title: string;
  titleClass?: string;
  subtitle?: string;
  btnHide?: boolean;
  avatarShow?: boolean;
  avatars?: avatars[];
  isSoccer?: boolean;
  btn: BtnProps;
}

interface avatars {
  src: string;
  name: string;
}

const TwoSlides: React.FC<TwoSlidesProps> = ({
  bgClr,
  sideBg,
  title,
  titleClass,
  subtitle,
  btnHide,
  avatarShow,
  avatars,
  isSoccer,
  btn,
}) => (
  <Styled className='two--slides' bgClr={bgClr} sideBg={sideBg}>
    <div className='content'>
      <h2 className={`title is-4 ${titleClass}`}>{title}</h2>
      <Paragraph text={subtitle} clr={bgClr} />
      {!btnHide && <Btn {...btn} bgColor={!bgClr} />}
      {/* Avatar */}
      {avatarShow && (
        <div className='avatars'>
          {avatars?.map(({ src, name }, index) => (
            <img key={index} className='avatars--item' src={src} alt={name} />
          ))}
        </div>
      )}
    </div>
    <div
      className={`side--image before--black ${avatarShow && 'push--up'} ${
        !isSoccer && 'side-height'
      }`}
    >
      {isSoccer &&
        topSoccer.map(({ id, src, title }) => (
          <Link
            key={id}
            href='/league/[leagueName]/[leagueId]'
            as={`/league/${title}/${id}`}
          >
            <a className='link--tag' title={title}>
              <img className='link--tag__img' src={src} alt={title} />
            </a>
          </Link>
        ))}

      <svg className='svg--movile'>
        <clipPath id='mobile-svg' clipPathUnits='objectBoundingBox'>
          <path
            className='st0'
            d='M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z'
          />
        </clipPath>
      </svg>
      <svg className='svg--large'>
        <clipPath id='large-svg' clipPathUnits='objectBoundingBox'>
          <path d='M0.101,0.43 C-0.228,0.599,0.358,1,0.382,1 H0.678 H1 V0.001 L0.585,0.003 C-0.387,-0.025,0.43,0.26,0.101,0.43'></path>
        </clipPath>
      </svg>
      {/* transform: scale(1.1) translateX(-20px); */}
    </div>
  </Styled>
);

export default TwoSlides;
