import React from 'react';
import getData from '../../components/utility/getData';
import { GetServerSideProps } from 'next';
import { Leagues } from '../../components/interfaces/legues';
import SportHero from '../../components/ui/Sports/SportHero';
import SportMain from '../../components/ui/Sports/SportMain';
import { apiPoint } from '../../components/context/types';
import { keyProps } from '../../components/interfaces/Key';

interface SportsProps {
  randomsSports: Leagues[];
  sportsByQuery: keyProps<Leagues[]>;
}

const Sports: React.FC<SportsProps> = ({ sportsByQuery, randomsSports }) => {
  return (
    <>
      <SportHero />
      <SportMain sportsByQuery={sportsByQuery} randomsSports={randomsSports} />
    </>
  );
};

export default Sports;

export const getServerSideProps: GetServerSideProps<SportsProps> = async ({
  query,
}) => {
  const {
    no_param: { list_leagues },
    lookUp: { lookUp_league_id },
  } = apiPoint;

  // Fetch all the leagues
  const { leagues }: { leagues: Leagues[] } = await getData(list_leagues);

  const filter_Sports_by_query = async () => {
    if (!query.q) return null;
    
    const leaguesRoutesArry: string[] = leagues
      .filter((league) => league.strSport === query.q)
      .map((item) => `${lookUp_league_id}${item.idLeague}`);

    const data: Leagues[] = await getData(leaguesRoutesArry, true);

    const sortData = data
      .sort((a: Leagues, b: Leagues) => a.strLeague.localeCompare(b.strLeague))
      .reduce((acc: any | Leagues, obj: Leagues) => {
        let key = obj['strDivision'];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    return sortData;
  };

  // Get Random Sportrs to show on initial sports page
  const getRandoms = async () => {
    if (query.q) return null;
    const sortRandom: string[] = leagues
      .sort(() => Math.random() - 0.5)
      .slice(0, 25)
      .map((item) => `${lookUp_league_id}${item.idLeague}`);

    return await getData(sortRandom, true);
  };

  // Call Filter query
  const sportsByQuery: keyProps<Leagues[]> = await filter_Sports_by_query();
  // randomsSports
  const randomsSports: Leagues[] = await getRandoms();

  return {
    props: { randomsSports, sportsByQuery },
  };
};
