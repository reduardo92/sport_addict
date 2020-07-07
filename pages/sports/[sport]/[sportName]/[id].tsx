import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { apiPoint } from '../../../../components/context/types';
import EventsProps from '../../../../components/interfaces/Events';
import { SeasonsProps } from '../../../../components/interfaces/Seasons';
import { Sport } from '../../../../components/interfaces/Sport';
import { Team } from '../../../../components/interfaces/Team';
import FactsContent from '../../../../components/ui/SingleSport/FactsContent';
import FixterContent from '../../../../components/ui/SingleSport/FixterContent';
import HeroSport from '../../../../components/ui/SingleSport/HeroSport';
import MainContent from '../../../../components/ui/SingleSport/MainContent';
import getData from '../../../../components/utility/getData';

interface StyledProps {}

const Styled = styled.section<StyledProps>`
  /* overflow: hidden; */
  .sport--main {
    background-color: var(--clr-third);
    /* min-height: 100vh; */

    & > :last-child {
      order: -1;
    }

    & > :last-child,
    & > :nth-of-type(1) {
      padding: 1.5em;
    }
  }
`;

interface sportProps {
  league: Sport;
  season: SeasonsProps[];
  teams: Team[];
  nextEvents: EventsProps[];
  lastEvents: EventsProps[];
}

const sport: React.FC<sportProps> = ({
  league,
  season,
  teams,
  nextEvents,
  lastEvents,
}) => {
  const { query } = useRouter();

  return (
    <Styled className={`${query.sport}--section sport--section`}>
      <HeroSport banner={league.strBanner} leagueName={league.strLeague} />
      <div className='sport--main columns'>
        <MainContent league={league} seasons={season} teams={teams} />
        <FixterContent
          nextEvents={nextEvents}
          lastEvents={lastEvents}
          teams={teams}
          sportType={league.strSport}
        />
        <FactsContent data={league} />
      </div>
    </Styled>
  );
};

export default sport;

export const getServerSideProps: GetServerSideProps<sportProps> = async ({
  params,
}) => {
  const {
    lookUp: { lookUp_league_id },
    list: { list_seasons_in_league, list_all_team_in_league_by_id },
    schedules: { schedules_next_league, schedules_last_league },
  } = apiPoint;

  // Get league data
  const { leagues: league }: { leagues: Sport[] } = await getData(
    lookUp_league_id + params?.id
  );

  // Get Seasons
  const { seasons: season }: { seasons: SeasonsProps[] } = await getData(
    list_seasons_in_league + params?.id
  );

  // Next Upcoming Enets
  const nextEvents: { events: EventsProps[] } = await getData(
    schedules_next_league + params?.id
  );
  // Next Upcoming Enets
  const lastEvents: { events: EventsProps[] } = await getData(
    schedules_last_league + params?.id
  );

  // Get Leagues Teams
  const { teams: teams }: { teams: Team[] } = await getData(
    list_all_team_in_league_by_id + params?.id
  );

  return {
    props: {
      league: Object.values(league)[0],
      season: season ? Object.values(season) : [],
      teams: Object.values(teams),
      nextEvents: Object.values(nextEvents)[0],
      lastEvents: Object.values(lastEvents)[0],
    },
  };
};
