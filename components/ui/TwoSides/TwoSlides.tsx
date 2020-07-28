import React from 'react';
import styled, { css } from 'styled-components';
import { topSoccer } from '../../interfaces/TopSoccer';
import Badge from '../Badge';
import Btn, { BtnProps } from '../Btn';
import Paragraph from '../Paragraph';
import SideStrips from '../StyleComponents/Styless/SideStrips';
import { mediaSizes } from '../variables/variables';

interface styledProps {
  bgClr?: boolean;
  sideBg?: string;
  isFlip?: boolean;
}

const Styled = styled.section<styledProps>`
  background-color: ${({ bgClr }) =>
    bgClr ? 'var(--clr-second)' : 'var(--clr-primary)'};
  align-items: center;
  justify-content: center;
  position: relative;
  display: grid;
  grid-template-columns: 4em 1fr 1.5fr;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    z-index: 1;
    padding: 2em 1em ;
    max-width: 700px;
    margin: auto;

    .avatars {
      width: 100%;
      margin: 2em;
      max-width: 400px;
      align-self: center;
      &--item {
        filter: drop-shadow(4px 7px 6px rgba(0, 0, 0, 0.6));
      }
    }
  }

  .side--image {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--clr-second) url('/imgs/soccer_stadium.jpg') no-repeat
      center center;
    background-size: cover;
    clip-path: ellipse(87% 200% at 87% 0);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    padding: 5em 0 2em;
    grid-gap: 2em 1em;
    ${({ sideBg }) =>
      sideBg &&
      css`
        background-image: url(${sideBg});
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
  }

  ${({ isFlip }) =>
    isFlip &&
    css`
      grid-template-columns: 1.5fr 1fr 4em;

      .side--image {
        order: -1;
        clip-path: ellipse(86% 199% at 0 0);
}      }

      .sideStrip {
        order: 1;
      }
    `}


    @media screen and (max-width: ${mediaSizes.table}) {
      grid-template-columns: 1fr;


      .content  {
        align-items: center;
      }

      .side--image {
          clip-path: none;
          min-height: 400px;
        }

      
    ${({ isFlip }) =>
      isFlip &&
      css`
        grid-template-columns: 1fr;

        .side--image {
          order: 0;
          clip-path: none;
          padding: 10em;
        }

        .sideStrip {
          order: 0;
        }
      `}
    }
`;

interface TwoSlidesProps extends BtnProps {
  bgClr?: boolean;
  sideBg?: string;
  title: string;
  titleClass?: string;
  subtitle?: string;
  btnHide?: boolean;
  avatarShow?: boolean;
  avatars?: avatars[];
  isSoccer?: boolean;
  isFlip?: boolean;
  isSideBlack?: boolean;
  isMirror?: boolean;
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
  href,
  as,
  isFlip,
  isSideBlack,
  isMirror,
}) => (
  <Styled className='two--slides' bgClr={bgClr} sideBg={sideBg} isFlip={isFlip}>
    <SideStrips
      className='sideStrip'
      isBlackStrip={isSideBlack}
      mirror={isMirror}
    />
    <div className='content'>
      <h2 className={`title is-4 ${titleClass}`}>{title}</h2>
      <Paragraph text={subtitle} clr={bgClr} />
      {!btnHide && <Btn href={href} as={as} bgColor={!bgClr} />}
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
      className={`side--image  ${avatarShow && 'push--up'} ${
        !isSoccer && 'side-height'
      }`}
    >
      {isSoccer &&
        topSoccer.map((team) => (
          <Badge
            key={team.idLeague}
            href='/sports/[sport]/[sportName]/[id]'
            as={`/sports/soccer/${team.strLeague}/${team.idLeague}`}
            title=''
            src={team.strBadge}
            setScroll
          />
        ))}
    </div>
  </Styled>
);

export default TwoSlides;
