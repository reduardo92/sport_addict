import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Btn from '../Btn';
import Paragraph from '../Paragraph';
import SideStrips from '../StyleComponents/Styless/SideStrips';
import { mediaSizes } from '../variables/variables';

const Styled = styled.section`
  background-color: var(--clr-second);
  background-color: var(--clr-primary);
  margin-bottom: 0 !important;
  display: grid;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    margin-bottom: 0;
    padding: 3em 1em;

    &::before {
      content: '';
      position: absolute;
      background: url('/imgs/black_lines.svg') no-repeat center center;
      background-size: cover;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }

  .contact--link {
    padding: 0;
    cursor: pointer;
    background-image: url('/imgs/ufcposter.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    min-height: 320px;
    width: 100%;
    transition: var(--cubicbezier);
    position: relative;

    &::before {
      position: absolute;
      content: '';
      background: url('/icons/ufc.png') no-repeat center;
      background-size: contain;
      height: 150px;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    &::after {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }

    &:hover,
    &:focus {
      filter: grayscale(0.7);
    }

    &__img {
      display: block;
    }

    &:last-child {
      background-image: url('/imgs/aewposter.jpg');
      &::before {
        background-image: url('/icons/aew.png');
      }
    }
    :nth-of-type(2) {
      background-image: url('/imgs/boxingposter.jpg');
      &::before {
        background-image: url('/icons/boxing.png');
      }
    }
  }

  @media screen and (min-width: ${mediaSizes.table}) {
    grid-template-columns: repeat(2, 1fr);

    .main--text {
      display: grid;
      grid-template-columns: 4em 1fr;
    }
  }
`;

const ContactSports: React.FC = () => (
  <Styled className='contact'>
    <div className='main--text'>
      <SideStrips isBlackStrip mirror />
      <div className='content '>
        <h2 className='title is-4 title--dark'>contact sports</h2>
        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ' />
        <Btn href='/sports?q=Fighting' bgColor />
      </div>
    </div>
    <Link
      href='/sports/[sport]/[sportName]/[id]'
      as={`/sports/Fighting/UFC/${4443}`}
    >
      <a title='UFC' className='contact--link'></a>
    </Link>
    <Link
      href='/sports/[sport]/[sportName]/[id]'
      as={`/sports/Fighting/AEW/${4563}`}
    >
      <a title='AEW' className='contact--link'></a>
    </Link>
    <Link
      href='/sports/[sport]/[sportName]/[id]'
      as={`/sports/Fighting/Boxing/${4445}`}
    >
      <a title='Boxing' className='contact--link'></a>
    </Link>
  </Styled>
);

export default ContactSports;
