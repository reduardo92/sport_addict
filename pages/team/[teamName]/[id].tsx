import { GetServerSideProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { apiPoint, noneTeamBase } from '../../../components/context/types';
import EventsProps from '../../../components/interfaces/Events';
import { Team } from '../../../components/interfaces/Team';
import ColumsSection from '../../../components/ui/ColumsSection';
import DiscriptionSection from '../../../components/ui/DiscriptionSection';
import ImgColum from '../../../components/ui/ImgColum';
import BannerImg from '../../../components/ui/StyleComponents/Styless/BannerImg';
import TeamHero from '../../../components/ui/Team/TeamHero';
import TeamScores from '../../../components/ui/Team/TeamScores';
import TwoSlides from '../../../components/ui/TwoSides/TwoSlides';
import getData from '../../../components/utility/getData';

const Styled = styled.section`
  .team--fanArt {
    background-color: var(--clr-second);
    padding: 2em;
  }
`;

interface TeamProps {
  team: Team;
  nextEvents: EventsProps[];
  lastEvents: EventsProps[];
}

const teamPage: React.FC<TeamProps> = ({ team, nextEvents, lastEvents }) => {
  const {
    schedules: { schedules_last_league, schedules_next_league },
    list: { list_all_team_in_league_by_id },
  } = apiPoint;

  const { data } = useSWR(list_all_team_in_league_by_id + team.idLeague);

  const { data: events }: any =
    noneTeamBase.includes(team.strSport) &&
    useSWR([
      schedules_next_league + team.idLeague,
      schedules_last_league + team.idLeague,
    ]);

  const fanArry: string[] = [
    team.strTeamFanart1!,
    team.strTeamFanart2,
    team.strTeamFanart3,
    team.strTeamFanart4,
  ];

  return (
    <Styled className='team--section'>
      <TeamHero
        name={team.strTeam}
        banner={team.strStadiumThumb}
        badge={team.strTeamBadge}
        jersey={team.strTeamJersey}
      />
      <DiscriptionSection team={team} />
      <BannerImg bannerHero={team.strTeamBanner} />
      {data && (
        <TeamScores
          teams={data[0]}
          nextEvents={
            nextEvents || (events && events[0] && events[0].slice(0, 5))
          }
          lastEvents={
            lastEvents || (events && events[1] && events[1].slice(0, 5))
          }
          sportType={team.strSport}
          badge={team.strTeamBadge}
          jersey={team.strTeamJersey}
          clipBG={team.strStadiumThumb}
        />
      )}
      <TwoSlides
        href=''
        as=''
        title='Stadium/Home'
        titleClass='title--dark'
        subtitle={team.strStadiumDescription || 'Not Available'}
        sideBg={team.strStadiumThumb}
        btnHide
        isSideBlack
        isMirror
      />
      <div className='team--fanArt'>
        <ColumsSection title='fanart' className='fanart container'>
          {fanArry.map(
            (art: string) => art && <ImgColum key={art} item={art} isColumn />
          )}
        </ColumsSection>
      </div>
      <BannerImg bannerHero={team.strTeamFanart2} />
    </Styled>
  );
};

export default teamPage;

export const getServerSideProps: GetServerSideProps<TeamProps> = async ({
  params,
}) => {
  const {
    lookUp: { lookUp_team_id },
    schedules: { schedules_next_team, schedules_last_team },
  } = apiPoint;

  const { teams }: { teams: Team } = await getData(lookUp_team_id + params?.id);

  // Next Upcoming Enets
  const nextEvents: { events: EventsProps[] } = await getData(
    schedules_next_team + params?.id
  );
  // Next Upcoming Enets
  const lastEvents: { events: EventsProps[] } = await getData(
    schedules_last_team + params?.id
  );

  return {
    props: {
      team: Object.values(teams)[0],
      nextEvents: Object.values(nextEvents)[0],
      lastEvents: Object.values(lastEvents)[0],
    },
  };
};
