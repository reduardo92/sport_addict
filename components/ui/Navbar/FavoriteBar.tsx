import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import AuthContext from '../../context/auth/AuthContext';
import SportContext from '../../context/SportsData/SportContext';
import { CLEAR_FAVORITES } from '../../context/types';
import Badge from '../Badge';
import SimpleFlex from '../SimpleFlex';

const Styled = styled.div<{ bgClr: string; isDelete: boolean }>`
  width: 100%;
  padding: 0.5em;
  background-color: ${({ bgClr }) =>
    bgClr === '/sports' || bgClr === '/player/[playerName]/[id]'
      ? 'var(--clr-third)'
      : 'var(--clr-primary)'};

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

    ${({ isDelete }) =>
      isDelete &&
      css`
        &:hover,
        &:focus {
          .favorite--btn {
            transform: translate(-50%, -50%);
          }
        }
        .favorite--btn {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: var(--clr-second);
          font-size: 0.75rem;
          visibility: visible;

          svg {
            color: var(--clr-second);
          }
        }
      `}

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
  const [isDelete, SetIsDelete] = useState<boolean>(false);
  const { route } = useRouter();

  const { favorites, getFavorites, clearData } = useContext(SportContext);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      clearData!(CLEAR_FAVORITES);
      return;
    }
    getFavorites!();
  }, [user]);

  return (
    <Styled className='favorite__bar' bgClr={route} isDelete={isDelete}>
      <div className='container'>
        <button
          style={isDelete ? { filter: 'invert(1)' } : {}}
          className='favorite__icon'
          onClick={() => SetIsDelete(!isDelete)}
        >
          <img src='/icons/favorite_remove.svg' alt='favorite remove icon' />
        </button>
        <SimpleFlex>
          {favorites.map((item) => (
            <Badge
              key={item.uid}
              href={
                item.idPlayer
                  ? '/player/[playerName]/[id]'
                  : item.idTeam
                  ? '/team/[teamName]/[id]'
                  : '/sports/[sport]/[sportName]/[id]'
              }
              as={
                item.idPlayer
                  ? `/player/${item.strPlayer}/${item.idPlayer}`
                  : item.idTeam
                  ? `/team/${item.strTeam}/${item.idTeam}`
                  : `/sports/${item.strSport}/${item.strLeague}/${item.idLeague}`
              }
              title=''
              src={item.strTeamBadge || item.strBadge || item.strCutout}
              className='favorite__team'
              setScroll
              isFavorite={
                isDelete
                  ? {
                      favItem: item,
                      id: item.idTeam ? item.idTeam : item.idLeague,
                    }
                  : undefined
              }
            />
          ))}
        </SimpleFlex>
      </div>
    </Styled>
  );
};

export default FavoriteBar;
