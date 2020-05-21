import React from 'react';
import styled, { css } from 'styled-components';
import Btn, { BtnProps } from '../Btn';
import Paragraph from '../Paragraph';

interface styledProps {
  bgClr?: boolean;
  bgImg?: BgImg;
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

  ${({ bgImg }) =>
    bgImg === 1
      ? css`
          &::before {
            background-image: url('/imgs/yelllow_lines.svg');
          }
        `
      : bgImg === 2 &&
        css`
          &::before {
            background-image: url('/imgs/speedDometer.jpg');
            filter: opacity(0.06);
          }
        `}
`;

enum BgImg {
  BlackLines, // 0
  YelloLines, // 1
  SpeedDometer, // 2
}

interface BannerProps extends BtnProps {
  bgClr?: boolean;
  bgImg?: BgImg;
  title: string;
  titleClass?: string;
  subtitle?: string;
  btnHide?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  title,
  titleClass,
  subtitle,
  btnHide,
  bgClr,
  bgImg,
  href,
  as,
  whiteBtn,
}) => (
  <Styled className='banner' bgClr={bgClr} bgImg={bgImg}>
    <h2 className={`title is-4 ${titleClass}`}>{title}</h2>
    <Paragraph text={subtitle} clr={bgClr} />
    {!btnHide && (
      <Btn href={href} as={as} bgColor={!bgClr} whiteBtn={whiteBtn} />
    )}
  </Styled>
);

export default Banner;
