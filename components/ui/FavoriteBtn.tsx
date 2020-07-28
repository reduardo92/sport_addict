import React, { useContext, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import AlertContext from '../context/alert/AlertContext';
import AuthContext from '../context/auth/AuthContext';
import SportContext from '../context/SportsData/SportContext';
import { Leagues } from '../interfaces/legues';
import { Sport } from '../interfaces/Sport';
import { Team } from '../interfaces/Team';

const Styled = styled.button``;

export interface FavoriteBtnProps {
  favItem: Leagues | Team | Sport;
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
      if (item.idTeam) return item.idTeam === id;
      return item.idLeague === id;
    });

    if (checkFavorite) return setIsAdd(true);
    if (!checkFavorite) return setIsAdd(false);
  }, [favorites, favItem]);

  // Get Name
  const name = favItem.strTeam ? favItem.strTeam : favItem.strLeague;

  const handleFavorite = () => {
    addFavorite!(favItem!);
    setAlert!(`${name!} Added`, 'success');
  };

  const handleDeleteFavorite = () => {
    const getUid = favorites.find((item) => {
      if (item.idTeam) return item.idTeam === id;
      return item.idLeague === id;
    });

    // console.log('fromgandfle', getUid?.uid);
    removeFavorite!(getUid?.uid!);
    setAlert!(`${name!} Removed`, 'warning');
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
