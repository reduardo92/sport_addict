import React from 'react';
import styled from 'styled-components';
import { keyProps } from '../../interfaces/Key';
import { Leagues } from '../../interfaces/legues';
import Badge from '../Badge';
import { mediaSizes } from '../variables/variables';

const Styled = styled.div`
  @media screen and (max-width: ${mediaSizes.table}) {
    & > :last-child {
      justify-content: space-between;

      .column.is-2 {
        width: 30%;
      }
    }
  }
`;

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
        <Styled className='container' key={key} style={{ marginBottom: '5em' }}>
          <h2
            className='title is-5'
            style={{
              width: 'max-content',
            }}
          >
            {keyTitle(key)}
          </h2>
          <div className='columns is-mobile' style={{ flexWrap: 'wrap' }}>
            {value.map(({ idLeague, strLeague, strSport, strBadge }) => (
              <Badge
                key={idLeague}
                href='/sports/[sport]/[sportName]/[id]'
                as={`/sports/${strSport}/${strLeague}/${idLeague}`}
                src={strBadge}
                title={strLeague}
                clr
                setScroll
                className='column is-2'
              />
            ))}
          </div>
        </Styled>
      ))}
    </>
  );
};

export default SportsLayout;
