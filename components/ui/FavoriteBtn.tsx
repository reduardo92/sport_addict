import React, { useContext, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import SportContext from '../context/SportsData/SportContext';
import { Leagues } from '../interfaces/legues';
import { Sport } from '../interfaces/Sport';
import { Team } from '../interfaces/Team';

const Styled = styled.button``;

export interface FavoriteBtnProps {
  favItem: Team | Sport | Leagues;
  id: string;
}

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ favItem, id }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useContext(SportContext);

  useEffect(() => {
    const checkFavorite = favorites.find((item) => {
      if (item.idTeam) return item.idTeam === id;
      return item.idLeague === id;
    });

    if (checkFavorite) return setIsAdd(true);
    if (!checkFavorite) return setIsAdd(false);
  }, [favorites, favItem]);

  return (
    <>
      {!isAdd && (
        <Styled
          onClick={() => addFavorite!(favItem!)}
          className='icon--style'
          aria-label='Add To favorite'
          title='Add To Favorite'
        >
          <FaPlus />
        </Styled>
      )}

      {isAdd && (
        <Styled
          onClick={() => removeFavorite!(id)}
          className='icon--style'
          aria-label='Remove From Favorite'
          title='Remove From Favorite'
        >
          <FaMinus />
        </Styled>
      )}
    </>
  );
};

export default FavoriteBtn;
