import React from 'react';
import styled from 'styled-components';
import { SeasonsProps } from '../../interfaces/Seasons';
import { Sport } from '../../interfaces/Sport';
import { Team } from '../../interfaces/Team';
import Badge from '../Badge';
import ColumsSection from '../ColumsSection';
import ImgColum from '../ImgColum';
import SocialLinks from '../SocialLinks';
import Bio from '../StyleComponents/Styless/Bio';
import { mediaSizes } from '../variables/variables';
import Seasons from './Seasons';

const Styled = styled.section`
  & > * {
    margin-bottom: 3.5em;
  }

  .top--links {
    margin-bottom: 1em;
  }

  .section--description {
    display: flex;
    flex-wrap: wrap;

    .title {
      margin-right: 10%;
    }
  }

  .fanart {
    .img--colum {
      max-width: 400px;
    }
  }

  & .stickyColum .columns {
    display: flex;
  }
  @media screen and (min-width: ${mediaSizes.table}) {
    & .fanart .columns {
      display: flex;
    }
  }
`;

interface MainContentProps {
  league: Sport;
  seasons: SeasonsProps[];
  teams: Team[];
}

const MainContent: React.FC<MainContentProps> = ({
  league,
  seasons,
  teams,
}) => {
  const fanArry: string[] = [
    league.strFanart1,
    league.strFanart2,
    league.strFanart3,
    league.strFanart4,
  ];

  // console.log(teams);
  return (
    <Styled className='mid--content column is-three-fifths'>
      <div className='top--links'>
        <p className='top--links--link'>Links</p>
        <p>
          Home/Sport/{league.strSport}/{league.strLeague}
        </p>
      </div>
      <div className='section--description'>
        <h2 className='title subtitle'>DESCRIPTION</h2>
        <SocialLinks data={league} />
        <Bio bio={league.strDescriptionEN} />
      </div>
      <Seasons
        seasons={seasons}
        idLeague={league.idLeague}
        nameLeague={league.strLeague}
      />
      <ColumsSection title='fanart' className='fanart'>
        {fanArry.map(
          (art: string) => art && <ImgColum key={art} item={art} isColumn />
        )}
      </ColumsSection>
      <ColumsSection title='teams' className='stickyColum'>
        {teams?.map(({ strTeam, strTeamBadge, idTeam }) => (
          <Badge
            key={idTeam}
            href='/team/[teamName]/[id]'
            as={`/team/${strTeam}/${idTeam}`}
            title={strTeam}
            src={strTeamBadge}
            className='column is-2'
            clr
          />
        ))}
      </ColumsSection>
    </Styled>
  );
};

export default MainContent;
