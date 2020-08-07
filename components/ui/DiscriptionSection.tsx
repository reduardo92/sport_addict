import React from 'react';
import styled from 'styled-components';
import setDateFormat from '../../utility/setDateFormat';
import { PlayerProps } from '../interfaces/PlayerProps';
import { Team } from '../interfaces/Team';
import FactContent from './FactContent';
import FavoriteBtn from './FavoriteBtn';
import Paragraph from './Paragraph';
import SocialLinks from './SocialLinks';
import Bio from './StyleComponents/Styless/Bio';
import SideImg from './StyleComponents/Styless/SideImg';
import SideStrips from './StyleComponents/Styless/SideStrips';
import { mediaSizes } from './variables/variables';

interface styledProps {
  bgClr?: boolean;
  sideBg?: string;
}

const Styled = styled.section<styledProps>`
  background-color: var(--clr-second);
  display: grid;
  grid-template-columns: 1.6fr 2.5fr 4em;

  .contentt {
    padding: 1em;

    .head {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .title {
        margin-right: 5%;
        margin-bottom: 0;
      }
    }
  }

  .facts--section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    gap: 1em;
    margin: 2em 0;
  }

  .Biography {
    & .para {
      font-weight: bold;
    }
    & .bio--text {
      max-width: 75em;
    }
  }

  @media screen and (max-width: ${mediaSizes.table}) {
    grid-template-columns: 1fr;

    & > :first-child,
    & > :last-child {
      display: none;
    }

    .contentt {
      .head {
        .title {
          margin-bottom: 1em;
        }
      }
    }
  }
`;

interface DiscriptionSectionProps {
  team?: Team;
  player?: PlayerProps;
  isPlayer?: Boolean;
}

const DiscriptionSection: React.FC<DiscriptionSectionProps> = ({
  team,
  player,
  isPlayer,
}) => {
  const competions = [
    team?.strLeague || '',
    team?.strLeague2 || '',
    team?.strLeague3 || '',
    team?.strLeague4 || '',
    team?.strLeague5 || '',
    team?.strLeague6 || '',
  ].filter((item) => item !== '');

  return (
    <Styled className=''>
      <SideImg sideBg={player?.strFanart1 || team?.strTeamFanart1} />
      <div className='contentt'>
        <div className='head'>
          <h2 className='title subtitle'>DESCRIPTION</h2>
          <div className='icons--conntainer'>
            <FavoriteBtn
              favItem={team! || player!}
              id={team?.idTeam! || player?.idPlayer!}
            />
            <SocialLinks data={team! || player!} />
          </div>
        </div>
        <div className='facts--section'>
          {/* For Team */}
          {!isPlayer && (
            <>
              <FactContent title='Established' subTitle={team?.intFormedYear} />
              <FactContent title='Sport' subTitle={team?.strSport} />
              <FactContent
                title='Location'
                subTitle={team?.strStadiumLocation}
              />
              <FactContent title='Stadium/Home' subTitle={team?.strStadium} />
              <FactContent title='Competitions'>
                {competions.map((i, index) => (
                  <span key={index} style={{ color: 'var(--clr-grey)' }}>
                    {i}
                    {competions.length > index + 1 ? ', ' : ''}
                  </span>
                ))}
              </FactContent>
            </>
          )}
          {/* For Palyer */}
          {!team && (
            <>
              <FactContent
                title='Born'
                subTitle={setDateFormat(player?.dateBorn!)}
              />
              <FactContent
                title='Birth Place'
                subTitle={player?.strBirthLocation}
              />
              <FactContent title='Height' subTitle={player?.strHeight} />
              <FactContent title='Weight' subTitle={player?.strWeight} />
              <FactContent title='Position'>{player?.strPosition}</FactContent>
              <FactContent title='Team Number'>{player?.strNumber}</FactContent>
              <FactContent title='Sport'>{player?.strSport}</FactContent>
              <FactContent title='Current Team'>{player?.strTeam}</FactContent>
            </>
          )}
        </div>
        <div className='Biography'>
          <Paragraph text='Biography' clr />
          <Bio bio={team?.strDescriptionEN || player?.strDescriptionEN} />
        </div>
      </div>
      <SideStrips />
    </Styled>
  );
};

export default DiscriptionSection;
