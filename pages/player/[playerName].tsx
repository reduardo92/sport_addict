import { GetServerSideProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import { apiPoint } from '../../components/context/types';
import { PlayerProps } from '../../components/interfaces/PlayerProps';
import getData from '../../utility/getData';

const Styled = styled.section``;

interface PlayerProfileProps {}

const PlayerProfile: React.FC<PlayerProfileProps> = ({}) => {
  return <Styled className=''></Styled>;
};

export default PlayerProfile;

export const getServerSideProps: GetServerSideProps<PlayerProfileProps> = async ({
  params,
}) => {
  const {
    lookUp: { lookUp_player_id },
  } = apiPoint;

  const { player }: { player: PlayerProps } = await getData(
    lookUp_player_id + params?.id
  );

  return {
    props: {},
  };
};
