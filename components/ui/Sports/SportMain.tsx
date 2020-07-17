import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { AllSports } from '../../interfaces/AllSports';
import { keyProps } from '../../interfaces/Key';
import { Leagues } from '../../interfaces/legues';
import Badge from '../Badge';
import SimpleFlex from '../SimpleFlex';
import { mediaSizes } from '../variables/variables';
import SportsLayout from './SportsLayout';

const Styled = styled.section`
  background-color: var(--clr-third);
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    clip-path: polygon(6% -5%, 75.5% 0%, 89% 103%, 38% 149%);
  }

  .sports--bar {
    margin-bottom: 3em;
  }

  & > :last-child {
    flex-wrap: wrap;
  }

  /* Active Sport */
  .sportActive {
    filter: grayscale(0.8);
    opacity: 0.8;
  }

  @media screen and (max-width: ${mediaSizes.table}) {
    & > :last-child {
      justify-content: space-between;

      .column.is-2 {
        width: 30%;
      }
    }
  }
  @media screen and (min-width: ${mediaSizes.table}) {
    &::before {
      clip-path: polygon(21.5% 0%, 44% 0%, 60% 100%, 44% 144%);
    }
  }
`;

interface SportMainProps {
  randomsSports: Leagues[];
  sportsByQuery: keyProps<Leagues[]>;
  sports: AllSports[];
}

const SportMain: React.FC<SportMainProps> = ({
  sportsByQuery,
  randomsSports,
  sports,
}) => {
  const router = useRouter();

  return (
    <Styled className='parallelogram--bg'>
      <h2 className='title is-4'>search by sport</h2>
      <SimpleFlex setWidth='60px' className='sports--bar container'>
        {sports?.map(
          ({ strSport, idSport }: AllSports) =>
            strSport !== 'Snooker' && (
              <Badge
                key={idSport}
                href='/sports'
                as={`/sports?q=${strSport}`}
                src={`/icons/${strSport.replace(' ', '_')}.png`}
                title={strSport}
                clr
                className={
                  router.asPath.slice(10).replace('%20', '_') ===
                  strSport.replace(' ', '_')
                    ? 'sportActive'
                    : ''
                }
              />
            )
        )}
      </SimpleFlex>

      {sportsByQuery && (
        <div className='container'>
          <SportsLayout data={sportsByQuery} />
        </div>
      )}
      {!sportsByQuery && (
        <>
          <div className='container columns is-mobile'>
            {randomsSports.map(
              ({ idLeague, strLeague, strSport, strBadge }) => (
                <Badge
                  key={idLeague}
                  href='/sports/[sport]/[sportName]/[id]'
                  as={`/sports/${strSport}/${strLeague}/${idLeague}`}
                  title={strLeague}
                  src={strBadge}
                  clr
                  setScroll
                  className='column is-2'
                />
              )
            )}
          </div>
        </>
      )}
    </Styled>
  );
};

export default SportMain;
