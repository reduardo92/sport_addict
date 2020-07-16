import React from 'react';
import styled from 'styled-components';
import { noneTeamBase } from '../../context/types';
import FixterPros from '../../interfaces/FixterProps';
import FindTeams from '../../utility/FindTeams';
import FixtureTab from '../FixtureTab';
import ImgColum from '../ImgColum';
import NoneTeamEvent from '../NoneTeamEvent';
import SideStrips from '../StyleComponents/Styless/SideStrips';
import { mediaSizes } from '../variables/variables';

interface StyledProps {
  clipBG?: string;
}

const Styled = styled.section<StyledProps>`
  background-color: var(--clr-third);
  display: grid;
  grid-template-columns: 4em auto 4em;

  &::before {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${({ clipBG }) => (clipBG ? clipBG : '/imgs/grass.jpg')}) no-repeat
        center center;
    clip-path: polygon(55% -11%, 70% 0%, 48% 111%, 17% 147%);
    background-size: cover;
  }

  .main--content {
    margin: 2em 1em;
  }

  & .fixters {
    text-align: center;
  }

  .team--icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-self: center;
    justify-items: center;

    .image {
      width: 100%;
      max-width: 180px;
      filter: drop-shadow(2px 4px 1px black);
    }

    & > :first-child {
      grid-column: 1/ 3;
      z-index: 1;
      margin-left: 0.5em;
      margin-right: 7em;
    }
    & > :last-child {
      grid-area: 2 / 1 / 2 / 3;
      margin-top: -12em;
      margin-left: 7.1em;
    }
  }

  & .noneTeamEvent {
    display: grid;
    align-items: baseline;
    text-align: center;
    .event--thumbnail {
      max-width: 15em;
    }
  }

  @media screen and (max-width: ${mediaSizes.table_lg}) {
    grid-template-columns: 1.2em auto 1.2em;

    .team--icons {
      .image {
        max-width: 120px;
      }
      & > :last-child {
        margin-top: -8em;
        margin-left: 6.1em;
      }
    }
  }

  @media screen and (min-width: ${mediaSizes.table_lg}) {
    & .fixters {
      .date .date--link {
        font-size: 1rem;
      }

      .stats {
        font-size: 0.85rem;
      }

      .team {
        max-width: 90px;
        .para {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

interface TeamProps extends FixterPros {
  badge?: string;
  jersey?: string;
  clipBG?: string;
}

const TeamScores: React.FC<TeamProps> = ({
  teams,
  lastEvents,
  nextEvents,
  sportType,
  badge,
  jersey,
  clipBG,
}) => {
  return (
    <Styled className='team--fixters parallelogram--bg' clipBG={clipBG}>
      <SideStrips mirror />
      <div className='main--content columns '>
        <div className='fixters column is-two-fifths'>
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
        <div className='team--icons column'>
          {badge && <ImgColum item={badge} alt='Team Badge' />}
          {jersey && <ImgColum item={jersey} alt='Team Jersey' />}
        </div>
        <div className='fixters column is-two-fifths'>
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
      </div>
      <SideStrips />
    </Styled>
  );
};

export default TeamScores;
