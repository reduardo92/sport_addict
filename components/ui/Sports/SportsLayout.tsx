import React from 'react';
import styled from 'styled-components';
import { keyProps } from '../../interfaces/Key';
import { Leagues } from '../../interfaces/legues';
import GridAuto from '../GridAuto';
import Badge from '../Badge';

interface SportsLayoutProps {
  data: keyProps<Leagues[]>;
}

const SportsLayout: React.FC<SportsLayoutProps> = ({ data }) => {
  // Check key to change Text
  const keyTitle = (arg: string) => {
    if (arg === '0') return 'Featured Leagues';
    if (arg === '99') return 'Cup Competition';
    if (arg === '200') return 'Cup Competition';
    return `Division ${arg}`;
  };
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <GridAuto
          key={key}
          className='container'
          setWidth='80%'
          style={{ marginBottom: '5em' }}
        >
          <h2
            className='title is-5'
            style={{
              gridColumn: '1 / -1',
              marginBottom: '0',
              justifySelf: 'flex-start',
            }}
          >
            {keyTitle(key)}
          </h2>
          {value.map(({ idLeague, strLeague, strSport, strBadge }) => (
            <Badge
              key={idLeague}
              href='/sports/[sport]/[sportName]/[id]'
              as={`/sports/${strSport}/${strLeague}/${idLeague}`}
              src={strBadge}
              title={strLeague}
              clr
              onload
            />
          ))}
        </GridAuto>
      ))}
    </>
  );
};

export default SportsLayout;
