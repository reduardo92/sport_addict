import { GetServerSideProps } from 'next';
import React from 'react';
import { apiPoint } from '../../../components/context/types';
import { FormerTeamsProps } from '../../../components/interfaces/FormerTeamsProps';
import { PlayerProps } from '../../../components/interfaces/PlayerProps';
import Badge from '../../../components/ui/Badge';
import ColumsSection from '../../../components/ui/ColumsSection';
import DiscriptionSection from '../../../components/ui/DiscriptionSection';
import ImgColum from '../../../components/ui/ImgColum';
import BannerImg from '../../../components/ui/StyleComponents/Styless/BannerImg';
import TwoSideHero from '../../../components/ui/TwoSideHero';
import TwoSlides from '../../../components/ui/TwoSides/TwoSlides';
import getData from '../../../utility/getData';

interface PlayerProfileProps {
  player: PlayerProps;
  formerTeams: FormerTeamsProps[];
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({
  player,
  formerTeams,
}) => {
  const fanArry: string[] = [
    player.strFanart1,
    player.strFanart2,
    player.strFanart3,
    player.strFanart4,
  ];

  return (
    <>
      <TwoSideHero
        title={player.strPlayer}
        playerHero
        imgSrc={player.strCutout}
      />
      <DiscriptionSection player={player} isPlayer />
      <TwoSlides
        title='Former Teams'
        href=''
        as=''
        sideBg={player.strFanart2}
        isMirror
        isSideBlack
        titleClass='title--dark'
        btnHide
      >
        <div className='columns is-mobile ' style={{ marginTop: '2em' }}>
          {formerTeams.map((team) => (
            <Badge
              key={team.idFormerTeam}
              href='/team/[teamName]/[id]'
              as={`/team/${team.strFormerTeam}/${team.idFormerTeam}`}
              title={team.strFormerTeam}
              src={team.strTeamBadge}
              className='column'
              clr
              setScroll
            />
          ))}
        </div>
      </TwoSlides>
      <div
        className='player--fanArt'
        style={{ backgroundColor: 'var(--clr-third)', padding: '2em' }}
      >
        <ColumsSection title='fanart' className='fanart container'>
          {fanArry.map(
            (art: string) => art && <ImgColum key={art} item={art} isColumn />
          )}
        </ColumsSection>
      </div>
      <BannerImg bannerHero={player.strFanart3 || player.strFanart2} />
    </>
  );
};

export default PlayerProfile;

export const getServerSideProps: GetServerSideProps<PlayerProfileProps> = async ({
  params,
}) => {
  const {
    lookUp: {
      lookUp_player_id,
      lookUp_honours_player_id,
      lookUp_former_team_player_id,
      lookUp_contracts_player_id,
    },
  } = apiPoint;

  const { players }: { players: PlayerProps } = await getData(
    lookUp_player_id + params?.id
  );

  const { formerteams }: { formerteams: FormerTeamsProps[] } = await getData(
    lookUp_former_team_player_id + params?.id
  );

  return {
    props: {
      player: Object.values(players)[0],
      formerTeams: Object.values(formerteams),
    },
  };
};
