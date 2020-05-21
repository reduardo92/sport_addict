import React, { useContext } from 'react';
import styled from 'styled-components';
import SimpleFlex from '../SimpleFlex';
import { AllSports } from '../../interfaces/AllSports';
import { Leagues } from '../../interfaces/legues';
import Badge from '../Badge';
import GridAuto from '../GridAuto';
import SportContext from '../../context/SportsData/SportContext';
import { keyProps } from '../../interfaces/Key';
import SportsLayout from './SportsLayout';

const Styled = styled.section`
  background-color: var(--clr-third);
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sports--bar {
    border-radius: 10px;
    border-bottom: 3px solid var(--clr-grey);
    margin-bottom: 3em;
  }
`;

interface SportMainProps {
  randomsSports: Leagues[];
  sportsByQuery: keyProps<Leagues[]>;
}

const SportMain: React.FC<SportMainProps> = ({
  sportsByQuery,
  randomsSports,
}) => {
  const { allSports } = useContext(SportContext);

  return (
    <Styled className='parallelogram--bg reverse'>
      <h2 className='title is-4'>search by sport</h2>
      <SimpleFlex setWidth='60px' className='sports--bar'>
        {allSports?.map(
          ({ strSport, idSport }: AllSports) =>
            strSport !== 'Snooker' && (
              <Badge
                key={idSport}
                href='/sports'
                as={`/sports?q=${strSport}`}
                src={`/icons/${strSport.replace(' ', '_')}.png`}
                title={strSport}
                clr
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
          <GridAuto className='container' setWidth='80%'>
            {randomsSports.map(
              ({ idLeague, strLeague, strSport, strBadge }) => (
                <Badge
                  key={idLeague}
                  href='/sports/[sport]/[sportName]/[id]'
                  as={`/sports/${strSport}/${strLeague}/${idLeague}`}
                  title={strLeague}
                  src={strBadge}
                  clr
                  onload
                />
              )
            )}
          </GridAuto>
        </>
      )}
    </Styled>
  );
};

export default SportMain;
