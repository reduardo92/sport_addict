import React from 'react';
import VideoHero from '../components/ui/VideoHero';
import PopularLeagues from '../components/ui/home/PopularLeagues';
import { GetServerSideProps } from 'next';
import { apiPoint } from '../components/context/types';
import getData from '../components/utility/getData';
import { popularLeague } from '../components/interfaces/legues';
import TwoSlides from '../components/ui/TwoSides/TwoSlides';

interface HomeProps {
  leagues?: popularLeague[];
}

const Home = ({ leagues }: HomeProps) => {
  return (
    <>
      <VideoHero />
      <PopularLeagues leagues={leagues} />
      <TwoSlides />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const {
    lookUp: { lookUp_league_id },
  } = apiPoint;

  const popularLeaguesIds = [
    `${lookUp_league_id}4391`,
    `${lookUp_league_id}4481`,
    `${lookUp_league_id}4387`,
    `${lookUp_league_id}4380`,
    `${lookUp_league_id}4444`,
    `${lookUp_league_id}4443`,
    `${lookUp_league_id}4424`,
    `${lookUp_league_id}4425`,
  ];
  const leagues: popularLeague[] | undefined = await getData(
    popularLeaguesIds,
    true
  );
  return {
    props: { leagues },
  };
};
