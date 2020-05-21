import React, { useContext, useEffect } from 'react';
import VideoHero from '../components/ui/VideoHero';
import PopularLeagues from '../components/ui/home/PopularLeagues';
import { GetStaticProps } from 'next';
import { apiPoint, SET_SPORT_DATA } from '../components/context/types';
import getData from '../components/utility/getData';
import { Leagues } from '../components/interfaces/legues';
import TwoSlides from '../components/ui/TwoSides/TwoSlides';
import Banner from '../components/ui/Banner/Banner';
import MotoSports from '../components/ui/home/MotoSports';
import ContactSports from '../components/ui/home/ContactSports';
import { AllSports } from '../components/interfaces/AllSports';
import SportContext from '../components/context/SportsData/SportContext';

interface HomeProps {
  popularLeagues: Leagues[];
  // allSports: AllSports[];
}

const Home: React.FC<HomeProps> = ({ popularLeagues }) => {
  return (
    <>
      <VideoHero />
      <PopularLeagues leagues={popularLeagues} />
      <TwoSlides
        href='/sports/[sport]'
        as='/sports/soccer'
        title='World’s Top Soccer'
        titleClass='title--dark'
        subtitle='See your favorite soccer legues. Cheack upcoming schedules and teams'
        avatarShow
        avatars={[{ src: '/imgs/soccer_players.png', name: 'soccer players' }]}
        isSoccer
      />
      <TwoSlides
        href='/sports/[sport]'
        as='/sports/egaming'
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
        href='/sports/[sport]'
        as='/sports/motosport'
        bgImg={2}
      />
      <MotoSports />
      <Banner
        bgClr
        title='see latest trasfers'
        subtitle='Check the latests news on your favorite teams changes'
        href='/trasfers'
        bgImg={1}
        whiteBtn
      />
      <ContactSports />
      <Banner
        bgClr
        title='Popular events today'
        subtitle='Check whats the happening today'
        href='/events'
        bgImg={1}
        whiteBtn
      />
      <TwoSlides
        href='/sports/[sport]/[sportName]/[id]'
        as='/sports/Basketball/'
        title='Chicago Bulls'
        titleClass='title--dark'
        subtitle='The Chicago Bulls are an American professional basketball team. They are based in Chicago, Illinois, playing in the Central Division of the Eastern Conference in the National Basketball Association (NBA). The team was founded on January 26, 1966. The Bulls play their home games at the United Center, also known as the "Madhouse on Madison"......'
        // avatarShow
        // avatars={[{ src: '/icons/bulls.png', name: 'bulls icon' }]}
        sideBg='bullsStaduim'
      />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {
    lookUp: { lookUp_league_id },
    no_param: { list_sports },
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

  const popularLeagues: Leagues[] = await getData(popularLeaguesIds, true);

  // const { sports: allSports }: { sports: AllSports[] } = await getData(
  //   list_sports
  // );

  return {
    props: { popularLeagues },
  };
};
