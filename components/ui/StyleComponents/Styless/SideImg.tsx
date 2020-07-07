import React from 'react';
import styled, { css } from 'styled-components';

interface styledProps {
  sideBg?: string;
}

const Styled = styled.div<styledProps>`
  position: relative;
  width: 100%;
  background: var(--clr-second) url('/imgs/soccer_stadium.jpg') no-repeat center
    center;
  background-size: cover;
  /* -webkit-clip-path: url(#large-svg);
  clip-path: url(#large-svg); */
  padding: 5em 0 2em;

  ${({ sideBg }) =>
    sideBg &&
    css`
      background-image: url(${sideBg});
    `}

  svg {
    position: absolute;
    pointer-events: none;
  }
`;

interface SideImgProps {
  sideBg?: string;
}

const SideImg: React.FC<SideImgProps> = ({ sideBg }) => {
  return (
    <Styled className='side--image' sideBg={sideBg}>
      <svg className='svg--movile'>
        <clipPath id='large-svg' clipPathUnits='objectBoundingBox'>
          <path
            className='st0'
            d='M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z'
          />
        </clipPath>
      </svg>

      {/* <svg className='svg--large'>
        <clipPath id='large-svg' clipPathUnits='objectBoundingBox'>
          <path d='M0.101,0.43 C-0.228,0.599,0.358,1,0.382,1 H0.678 H1 V0.001 L0.585,0.003 C-0.387,-0.025,0.43,0.26,0.101,0.43'></path>
        </clipPath>
      </svg> */}
    </Styled>
  );
};

export default SideImg;
