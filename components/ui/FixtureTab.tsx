import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import EventsProps from '../interfaces/Events';
import { Team } from '../interfaces/Team';
import setDateFormat from '../utility/setDateFormat';
import setTimeTo12Format from '../utility/setTimeTo12Format';
import Badge from './Badge';
import NoBadge from './NoBadge';

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2em;
  justify-items: center;

  .date {
    grid-column: 1 / -1;
    justify-self: center;
    font-size: 0.8rem;

    &--link {
      color: var(--clr-white);
      color: var(--clr-primary);
    }
  }

  .team {
    max-width: 50px;
    .para {
      font-size: 0.7rem;
      margin-top: auto;
    }
  }

  .stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7rem;
    text-align: center;
  }

  .score {
    background-color: var(--clr-third);
    padding: 0.1em 0.2em;
    margin: 0.5em;
    filter: drop-shadow(4px 9px 7px black);
    color: var(--clr-primary);
  }

  .score--higher {
    background-color: var(--clr-primary);
    color: var(--clr-third);
  }
`;

interface FixtureTabProps {
  item: EventsProps;
  team: Team[] | any;
  isNext?: boolean;
}

const FixtureTab: React.FC<FixtureTabProps> = ({ item, team, isNext }) => {
  return (
    <Styled className='fixture'>
      <div className='date'>
        <Link
          href='/event/[eventName]/[eventId]'
          as={`/event/${item.strEvent}/${item.idEvent}`}
        >
          <a className='date--link'>{setDateFormat(item.dateEvent)}</a>
        </Link>
      </div>
      {/* Home Team */}
      {team[0] ? (
        <Badge
          key={item.idHomeTeam}
          href='/team/[teamName]/[id]'
          as={`/team/${team[0]?.strTeam}/${team[0].idTeam}`}
          title={team[0].strTeam}
          src={team[0].strTeamBadge}
          className='home--team team'
          clr
        />
      ) : (
        <NoBadge clr />
      )}
      <div className='stats'>
        {team[0] && <div className='stats--location'>{team[0].strStadium}</div>}
        {isNext && (
          <div className='stats--time'>{setTimeTo12Format(item.strTime)}</div>
        )}
        <div className='stats--score'>
          <span
            className={`score ${
              parseInt(item.intHomeScore) > parseInt(item.intAwayScore) &&
              'score--higher'
            }`}
          >
            {item.intHomeScore}
          </span>{' '}
          -{' '}
          <span
            className={`score ${
              parseInt(item.intHomeScore) < parseInt(item.intAwayScore) &&
              'score--higher'
            }`}
          >
            {item.intAwayScore}
          </span>
        </div>
      </div>
      {/* Away Team */}
      {team[1] ? (
        <Badge
          key={item.idAwayTeam}
          href='/team/[teamName]/[id]'
          as={`/team/${team[1].strTeam}/${team[1].idTeam}`}
          title={team[1].strTeam}
          src={team[1].strTeamBadge}
          className='away--team team'
          clr
        />
      ) : (
        <NoBadge clr />
      )}
    </Styled>
  );
};

export default FixtureTab;
