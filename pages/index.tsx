import { GetStaticProps } from 'next';
import React from 'react';
import { apiPoint } from '../components/context/types';
import { Leagues } from '../components/interfaces/legues';
import Banner from '../components/ui/Banner/Banner';
import ContactSports from '../components/ui/home/ContactSports';
import MotoSports from '../components/ui/home/MotoSports';
import PopularLeagues from '../components/ui/home/PopularLeagues';
import TwoSlides from '../components/ui/TwoSides/TwoSlides';
import VideoHero from '../components/ui/VideoHero';
import getData from '../utility/getData';

interface HomeProps {
  popularLeagues: Leagues[];
}

const Home: React.FC<HomeProps> = ({ popularLeagues }) => {
  return (
    <>
      <VideoHero />
      <PopularLeagues leagues={popularLeagues} />
      <TwoSlides
        href='/sports?q=Soccer'
        title='World’s Top Soccer'
        titleClass='title--dark'
        subtitle='See your favorite soccer legues. Cheack upcoming schedules and teams'
        avatarShow
        avatars={[{ src: '/imgs/soccer_players.png', name: 'soccer players' }]}
        isSoccer
        isMirror
        isSideBlack
      />
      <TwoSlides
        href='/sports?q=ESports'
        title='e-gaming'
        subtitle='see your favorite gaming legues. Cheack upcoming schedules and teams '
        avatarShow
        avatars={[{ src: '/imgs/egaming.png', name: 'e-gaming icon' }]}
        bgClr
        sideBg='/imgs/egaming_bg.jpg'
        isFlip
      />
      <Banner
        href='/sports?q=Motorsport'
        title='Motorsport'
        titleClass='title--dark'
        subtitle='For those gear addict’s, who enjoy the fast lines'
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
        href='/team/[teamNae]/[id]'
        as='/team/Chicago%20Bulls/134870'
        title='Chicago Bulls'
        titleClass='title--dark'
        subtitle='The Chicago Bulls are an American professional basketball team. They are based in Chicago, Illinois, playing in the Central Division of the Eastern Conference in the National Basketball Association (NBA). The team was founded on January 26, 1966. The Bulls play their home games at the United Center, also known as the "Madhouse on Madison"......'
        sideBg='/imgs/bullsStaduim.jpg'
        isSideBlack
        isMirror
      />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {
    lookUp: { lookUp_league_id },
  } = apiPoint;

  const popularLeaguesIds = [
    `${lookUp_league_id}4391`,
    `${lookUp_league_id}4480`,
    `${lookUp_league_id}4387`,
    `${lookUp_league_id}4380`,
    `${lookUp_league_id}4444`,
    `${lookUp_league_id}4443`,
    `${lookUp_league_id}4424`,
    `${lookUp_league_id}4425`,
  ];

  const popularLeagues: Leagues[] = await getData(popularLeaguesIds, true);

  return {
    props: { popularLeagues },
  };
};
