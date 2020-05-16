import React from 'react';
import styled, { css } from 'styled-components';
import Btn from '../Btn';
import Paragraph from '../Paragraph';
import BtnProps from '../../interfaces/BtnProps';

interface styledProps {
  bgClr?: boolean;
  bgImg?: boolean;
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
  text-align: center;
  padding: 4em 1em;

  > :last-child {
    margin-top: 2em;
  }

  ${({ bgImg }) =>
    bgImg &&
    css`
      &::before {
        content: '';
        position: absolute;
        background: url('/imgs/speedDometer.jpg'}) no-repeat center center;
        background-size: cover;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        filter: opacity(0.06);
      }
    `}
`;

interface BannerProps {
  bgClr?: boolean;
  bgImg?: boolean;
  title: string;
  titleClass?: string;
  subtitle?: string;
  btnHide?: boolean;
  btn: BtnProps;
}

const Banner: React.FC<BannerProps> = ({
  title,
  titleClass,
  subtitle,
  btnHide,
  bgClr,
  bgImg,
  btn,
}) => (
  <Styled className='banner' bgClr={bgClr} bgImg={bgImg}>
    <h2 className={`title is-4 ${titleClass}`}>{title}</h2>
    <Paragraph text={subtitle} clr={bgClr} />
    {!btnHide && <Btn {...btn} bgColor={!bgClr} />}
  </Styled>
);

export default Banner;
