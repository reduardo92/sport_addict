import React from 'react';
import styled, { css } from 'styled-components';
import ImgColum from '../ImgColum';
import { mediaSizes } from '../variables/variables';

interface StyledProps {
  bannerHero: string;
}

const Styled = styled.section<StyledProps>`
  position: relative;
  min-height: 45vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('/imgs/grass.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  /* ////////////////////////// */
  ${({ bannerHero }) =>
    bannerHero &&
    css`
      background-image: url(${bannerHero});
    `}

  & .content {
    padding: 1em;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    .title {
      font-size: 3.5rem;
      letter-spacing: 2px;
      grid-column: 1 / -1;
    }

    .image {
      display: inline-block;
      width: 100%;
      max-width: 150px;
      margin: 0 1em;
      filter: drop-shadow(2px 4px 1px black);
    }
  }

  @media screen and (max-width: ${mediaSizes.table}) {
    & .content {
      .title {
        font-size: 2rem;
      }
      .image {
        max-width: 120px;
      }
    }
  }
`;

interface TeamHeroProps {
  name: string;
  banner: string;
  badge?: string;
  jersey?: string;
}

const TeamHero: React.FC<TeamHeroProps> = ({ name, banner, badge, jersey }) => {
  return (
    <Styled className='team--hero--section before--black' bannerHero={banner}>
      <div className='content'>
        <h1 className='title'>{name}</h1>
        {badge && <ImgColum item={badge} alt={name} />}
        {jersey && <ImgColum item={jersey} alt={name} />}
      </div>
    </Styled>
  );
};

export default TeamHero;
