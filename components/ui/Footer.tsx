import React from 'react';
import styled from 'styled-components';

const Styled = styled.footer`
  background-color: var(--clr-second);
  flex-shrink: 0;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 1em;
  }

  .copyright {
    background-color: var(--clr-third);
    padding: 0.5em 1em;
  }
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Styled>
      <div className='content has-text-centered'>
        <p className='title subtitle'>Sport addict</p>
      </div>
      <div className='content has-text-centered copyright'>
        <p>© Design & Coded by Eduardo Rivas</p>
      </div>
    </Styled>
  );
};

export default Footer;
