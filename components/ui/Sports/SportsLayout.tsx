import React from 'react';
import { keyProps } from '../../interfaces/Key';
import { Leagues } from '../../interfaces/legues';
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
        <div className='container' key={key} style={{ marginBottom: '5em' }}>
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
        </div>
      ))}
    </>
  );
};

export default SportsLayout;
