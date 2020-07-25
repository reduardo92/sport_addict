import React from 'react';
import styled from 'styled-components';
import FindTeams from '../../../utility/FindTeams';
import { noneTeamBase } from '../../context/types';
import FixterPros from '../../interfaces/FixterProps';
import FixtureTab from '../FixtureTab';
import NoneTeamEvent from '../NoneTeamEvent';

const Styled = styled.section`
  background-color: var(--clr-second);

  .fixters {
    text-align: center;
  }

  & > :first-child {
    margin-bottom: 2em;
  }
`;

const FixterContent: React.FC<FixterPros> = ({
  nextEvents,
  lastEvents,
  teams,
  sportType,
}) => {
  return (
    <Styled className='fixter--content column gridMinMax'>
      <div className='fixters'>
        <h2 className='title subtitle d-inline'>Upcoming Events</h2>
        {!nextEvents && <p>None Found...</p>}
        {nextEvents?.map((item) =>
          noneTeamBase.includes(sportType) ? (
            <NoneTeamEvent key={item.idEvent} item={item} isNext />
          ) : (
            <FixtureTab
              key={item.idEvent}
              item={item}
              team={FindTeams(teams, item)}
              isNext
            />
          )
        )}
      </div>
      <div className='fixters'>
        <h2 className='title subtitle d-inline'>Latest Results</h2>
        {!lastEvents && <p>None Found...</p>}
        {lastEvents?.map((item) =>
          noneTeamBase.includes(sportType) ? (
            <NoneTeamEvent key={item.idEvent} item={item} />
          ) : (
            <FixtureTab
              key={item.idEvent}
              item={item}
              team={FindTeams(teams, item)}
              isNext
            />
          )
        )}
      </div>
    </Styled>
  );
};

export default FixterContent;
