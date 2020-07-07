import React from 'react';
import styled from 'styled-components';
import { SeasonsProps } from '../../interfaces/Seasons';
import Badge from '../Badge';
import SimpleFlex from '../SimpleFlex';

const Styled = styled.div`
  .seasons--icons {
    font-size: 0.8rem;
  }
`;
interface SeasonsPropss {
  seasons: SeasonsProps[];
  idLeague: string;
  nameLeague: string;
}

const Seasons: React.FC<SeasonsPropss> = ({
  seasons,
  idLeague,
  nameLeague,
}) => (
  <Styled className='seasons'>
    <h2 className='title subtitle d-inline'>Seasons</h2>
    <SimpleFlex setWidth='35px'>
      {seasons.map(({ strSeason }) => (
        <Badge
          key={strSeason}
          href='/seasons/[sportName]/[id]'
          as={`/sports/${nameLeague}/${idLeague}`}
          title={strSeason}
          src={'/icons/calendar-season.png'}
          className='seasons--icons'
          clr
        />
      ))}
    </SimpleFlex>
  </Styled>
);

export default Seasons;
