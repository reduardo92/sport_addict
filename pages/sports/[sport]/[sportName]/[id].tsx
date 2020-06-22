import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { apiPoint } from '../../../../components/context/types';
import { SeasonsProps } from '../../../../components/interfaces/Seasons';
import { Sport } from '../../../../components/interfaces/Sport';
import { Team } from '../../../../components/interfaces/Team';
import HeroSport from '../../../../components/ui/SingleSport/HeroSport';
import MainContent from '../../../../components/ui/SingleSport/MainContent';
import getData from '../../../../components/utility/getData';

interface StyledProps {}

const Styled = styled.section<StyledProps>`
  overflow: hidden;
  .sport--main {
    background-color: var(--clr-third);
    /* min-height: 100vh; */
  }

  .left--content {
    order: -1;
  }
`;

interface sportProps {
  league: Sport;
  season: SeasonsProps[];
  teams: Team[];
}

const sport: React.FC<sportProps> = ({ league, season, teams }) => {
  const { query } = useRouter();
  console.log(league, 'from sport');

  return (
    <Styled className={`${query.sport}--section sport--section`}>
      <HeroSport banner={league.strBanner} leagueName={league.strLeague} />
      <div className='sport--main columns'>
        <MainContent league={league} seasons={season} teams={teams} />
        <div className='rigth--content column'>Fixtures</div>
        <div className='left--content column'>Facts</div>
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
    list: { list_seasons_in_league, list_all_team_in_league },
  } = apiPoint;

  const { leagues: league }: { leagues: Sport[] } = await getData(
    lookUp_league_id + params?.id
  );

  const { seasons: season }: { seasons: SeasonsProps[] } = await getData(
    list_seasons_in_league + params?.id
  );

  // Join Sport
  const sport: any = params && [params.sportName];

  const { teams: teams }: { teams: Team[] } = await getData(
    list_all_team_in_league + sport[0].split(' ').join('%20')
  );

  return {
    props: {
      league: Object.values(league)[0],
      season: Object.values(season),
      teams: Object.values(teams),
    },
  };
};
