import { GetServerSideProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import { apiPoint } from '../../../components/context/types';
import { PlayerProps } from '../../../components/interfaces/PlayerProps';
import TwoSideHero from '../../../components/ui/TwoSideHero';
import getData from '../../../utility/getData';

const Styled = styled.section``;

interface PlayerProfileProps {
  player: PlayerProps;
  honours: any;
  formerTeams: any;
  playerContracts: any;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({
  player,
  honours,
  formerTeams,
  playerContracts,
}) => {
  console.log('HO', honours);
  console.log('FORMer', formerTeams);
  console.log('Contract', playerContracts);

  return (
    <>
      <TwoSideHero
        title={player.strPlayer}
        playerHero
        imgSrc={player.strCutout}
      />
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
  const honours = await getData(lookUp_honours_player_id + params?.id);
  const formerTeams = await getData(lookUp_former_team_player_id + params?.id);
  const playerContracts = await getData(
    lookUp_contracts_player_id + params?.id
  );

  return {
    props: {
      player: Object.values(players)[0],
      honours,
      formerTeams,
      playerContracts,
    },
  };
};
