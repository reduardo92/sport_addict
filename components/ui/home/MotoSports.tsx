import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { mediaSizes } from '../variables/variables';

const Styled = styled.section`
  background-color: var(--clr-second);
  margin-bottom: 0 !important;

  .moto--link {
    padding: 0;
    cursor: pointer;
    background: var(--clr-second) url('/imgs/indycar.jpg') no-repeat center
      bottom;
    background-size: cover;
    height: 450px;
    width: 100%;
    transition: var(--cubicbezier);
    overflow: hidden;

    &:hover,
    &:focus {
      filter: grayscale(0.7);
    }

    &:last-child {
      background-image: url('/imgs/formula.jpg');
    }
    :nth-of-type(2) {
      background-image: url('/imgs/nascar.jpg');
    }
  }

  @media screen and (min-width: ${mediaSizes.table}) {
    display: flex;
    .moto--link {
      height: 500px;
    }
  }
`;

const MotoSports: React.FC = () => (
  <Styled className='motosports columns '>
    <Link
      href='/sports/[sport]/[sportName]/[id]'
      as={`/sports/Motorsport/IndyCar-Series/${4373}`}
    >
      <a title='Indycar Series' className='moto--link column'></a>
    </Link>
    <Link
      href='/sports/[sport]/[sportName]/[id]'
      as={`/sports/Motorsport/NASCAR-Cup-Series/${4393}`}
    >
      <a title='Nascar Cup Series' className='moto--link column'></a>
    </Link>
    <Link
      href='/sports/[sport]/[sportName]/[id]'
      as={`/sports/Motorsport/Formula-1/${4370}`}
    >
      <a title='Formula 1' className='moto--link column'></a>
    </Link>
  </Styled>
);

export default MotoSports;
