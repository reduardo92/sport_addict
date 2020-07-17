import React from 'react';
import styled from 'styled-components';
import { SeasonsProps } from '../../interfaces/Seasons';
import { Sport } from '../../interfaces/Sport';
import { Team } from '../../interfaces/Team';
import Badge from '../Badge';
import ColumsSection from '../ColumsSection';
import FavoriteBtn from '../FavoriteBtn';
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
    /* display: flex; */
  }
  @media screen and (min-width: ${mediaSizes.table}) {
    & .fanart .columns {
      display: flex;
    }

    .section--description {
      display: flex;
      flex-wrap: wrap;

      .title {
        margin-bottom: 0;
      }
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
      <div className='section--description'>
        <h2 className='title subtitle'>DESCRIPTION</h2>
        <div className='icons--conntainer'>
          <FavoriteBtn favItem={league!} id={league.idLeague} />
          <SocialLinks data={league} />
        </div>
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
      <ColumsSection
        title='teams'
        className='stickyColum'
        divClass='columns is-mobile'
      >
        {teams?.map(({ strTeam, strTeamBadge, idTeam }) => (
          <Badge
            key={idTeam}
            href='/team/[teamName]/[id]'
            as={`/team/${strTeam}/${idTeam}`}
            title={strTeam}
            src={strTeamBadge}
            className='column is-3'
            clr
            setScroll
          />
        ))}
      </ColumsSection>
    </Styled>
  );
};

export default MainContent;
