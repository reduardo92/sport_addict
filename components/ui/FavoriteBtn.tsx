import React, { useContext, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import AlertContext from '../context/alert/AlertContext';
import AuthContext from '../context/auth/AuthContext';
import SportContext from '../context/SportsData/SportContext';

const Styled = styled.button``;

export interface FavoriteBtnProps {
  favItem: any;
  id: string;
}

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ favItem, id }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useContext(SportContext);
  const { setAlert } = useContext(AlertContext);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    const checkFavorite = favorites.find((item) => {
      if (item.idPlayer) return item.idPlayer === id;
      if (item.idTeam) return item.idTeam === id;
      return item.idLeague === id;
    });

    if (checkFavorite) return setIsAdd(true);
    if (!checkFavorite) return setIsAdd(false);
  }, [favorites, favItem]);

  const name = () => {
    if (favItem.strPlayer) return favItem.strPlayer;
    if (favItem.strTeam) return favItem.strTeam;
    if (favItem.strLeague) return favItem.strLeague;
  };

  const handleFavorite = () => {
    addFavorite!(favItem!);
    setAlert!(`${name()!} Added`, 'success');
  };

  const handleDeleteFavorite = () => {
    const getUid = favorites.find((item) => {
      if (item.idPlayer) return item.idPlayer === id;
      if (item.idTeam) return item.idTeam === id;
      return item.idLeague === id;
    });

    removeFavorite!(getUid?.uid!);
    setAlert!(`${name()!} Removed`, 'warning');
  };

  return (
    <>
      {!isAdd && (
        <Styled
          onClick={handleFavorite}
          className='icon--style favorite--btn'
          aria-label='Add To favorite'
          title={user ? 'Add To Favorite' : 'Please Log in'}
          disabled={!user}
        >
          <FaPlus />
        </Styled>
      )}

      {isAdd && (
        <Styled
          onClick={handleDeleteFavorite}
          className='icon--style favorite--btn'
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
