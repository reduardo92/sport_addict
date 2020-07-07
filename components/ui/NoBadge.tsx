import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Styled = styled.div`
  text-align: center;
  .badge--img {
    max-width: 50px;
    margin: auto;
  }

  & {
    .para {
      font-size: 0.7rem;
      margin-top: auto;
      width: 100%;
    }
  }
`;

interface NoBadgeProps {
  clr?: boolean;
}

const NoBadge: React.FC<NoBadgeProps> = ({ clr }) => {
  return (
    <Styled className='noBadage'>
      <img
        className='badge--img'
        src='/icons/noBadge.png'
        alt='not available badge'
      />
      <Paragraph text='N/A' clr={clr} />
    </Styled>
  );
};

export default NoBadge;
