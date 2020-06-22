import React from 'react';
import { SeasonsProps } from '../../interfaces/Seasons';
import Badge from '../Badge';
import SimpleFlex from '../SimpleFlex';

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
  <div className='seasons'>
    <h2 className='title subtitle d-inline'>Seasons</h2>
    <SimpleFlex setWidth='35px'>
      {seasons.map(({ strSeason }) => (
        <Badge
          key={strSeason}
          href='/seasons/[sportName]/[id]'
          as={`/sports/${nameLeague}/${idLeague}`}
          title={strSeason}
          src={'/icons/calendar-season.png'}
          clr
        />
      ))}
    </SimpleFlex>
  </div>
);

export default Seasons;
