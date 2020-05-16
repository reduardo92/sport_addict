import React from 'react';
import VideoHero from '../components/ui/VideoHero';
import PopularLeagues from '../components/ui/home/PopularLeagues';
import { GetServerSideProps } from 'next';
import { apiPoint } from '../components/context/types';
import getData from '../components/utility/getData';
import { popularLeague } from '../components/interfaces/legues';
import TwoSlides from '../components/ui/TwoSides/TwoSlides';
import Banner from '../components/ui/Banner/Banner';
import MotoSports from '../components/ui/home/MotoSports';

interface HomeProps {
  leagues?: popularLeague[];
}

const Home = ({ leagues }: HomeProps) => {
  return (
    <>
      <VideoHero />
      <PopularLeagues leagues={leagues} />
      <TwoSlides
        href='/sport/[sportName]'
        as='/sport/soccer'
        title='World’s Top Soccer'
        titleClass='title--dark'
        subtitle='See your favorite soccer legues. Cheack upcoming schedules and teams'
        avatarShow
        avatars={[{ src: '/imgs/soccer_players.png', name: 'soccer players' }]}
        isSoccer
      />
      <TwoSlides
        href='/sport/[sportName]'
        as='/sport/egaming'
        title='e-gaming'
        subtitle='see your favorite gaming legues. Cheack upcoming schedules and teams '
        avatarShow
        avatars={[{ src: '/imgs/egaming.png', name: 'e-gaming icon' }]}
        bgClr
        sideBg='egaming_bg'
      />
      <Banner
        title='Motorsport'
        titleClass='title--dark'
        subtitle='For those gear addict’s, who enjoy the fast lines'
        bgImg
        href='/sport/[sportName]'
        as='/sport/motosport'
      />
      <MotoSports />
      <Banner
        bgClr
        title='see latest trasfers'
        subtitle='Check the latests news on your favorite teams changes'
        href='/trasfers'
      />
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
