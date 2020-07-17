import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import SportContext from '../../context/SportsData/SportContext';
import Badge from '../Badge';
import SimpleFlex from '../SimpleFlex';

const Styled = styled.div<{ bgClr: string }>`
  width: 100%;
  padding: 0.5em;
  background-color: ${({ bgClr }) =>
    bgClr === '/sports' ? 'var(--clr-third)' : 'var(--clr-primary)'};

  .container {
    display: flex;
    align-items: center;

    & > :last-child {
      padding: 0;
    }
  }

  .favorite__icon {
    background-color: transparent;
    transition: var(--cubicbezier);
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }

  .favorite__team {
    width: 30px;
    margin: 0 0.3em;
    animation: fadeIn 0.3s linear;

    @keyframes fadeIn {
      from {
        transform: translateY(50px);
      }
      to {
        transform: translateY(0px);
      }
    }
  }
`;

interface FavoriteBarProps {
  bgClr?: string;
}

const FavoriteBar: React.FC<FavoriteBarProps> = () => {
  const { pathname } = useRouter();

  const { favorites } = useContext(SportContext);

  return (
    <Styled className='favorite__bar' bgClr={pathname}>
      <div className='container'>
        <button className='favorite__icon'>
          <img src='/icons/favorite_Plus.svg' alt='favorite add icon' />
        </button>
        <SimpleFlex>
          {favorites.map((item, i) => (
            <Badge
              key={i}
              href={
                item.idTeam
                  ? '/team/[teamName]/[id]'
                  : '/sports/[sport]/[sportName]/[id]'
              }
              as={
                item.idTeam
                  ? `/team/${item.strTeam}/${item.idTeam}`
                  : `/sports/${item.strSport}/${item.strLeague}/${item.idLeague}`
              }
              title=''
              src={item.strTeamBadge || item.strBadge}
              className='favorite__team'
              setScroll
            />
          ))}
        </SimpleFlex>
      </div>
    </Styled>
  );
};

export default FavoriteBar;
