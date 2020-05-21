import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph';
import Btn from '../Btn';

const Styled = styled.section`
  min-height: 85vh;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  overflow: hidden;
  background-color: var(--clr-primary);

  .title {
    letter-spacing: 5px;
    font-size: 8vh;
  }

  .para {
    margin-bottom: 2em;
  }
  .avatars {
    padding-top: 3em;
  }
`;

const SportHero: React.FC = () => (
  <Styled className='SportHero parallelogram--bg'>
    <h1 className='title title--dark '>LEAGUES</h1>
    <Paragraph
      text='Search and filter true your favorites sport and discover new ones '
      clr
    />
    <Btn href='/' bgColor title='home' />
    <div className='avatars'>
      <img
        src='/imgs/Players.png'
        alt='sport players'
        className='avatars--img'
      />
    </div>
  </Styled>
);

export default SportHero;
