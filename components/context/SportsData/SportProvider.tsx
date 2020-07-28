import React, { useReducer } from 'react';
import { auth, db } from '../../../LIB/db';
import { Leagues } from '../../interfaces/legues';
import { Sport } from '../../interfaces/Sport';
import { Team } from '../../interfaces/Team';
import {
  ADD_FAVORITE,
  GET_FAVORITES,
  REMOVE_FAVORITE,
  SET_MODAL_IMG,
} from '../types';
import SportContext, { sportInitalState } from './SportContext';
import useSportReducer from './useSportReducer';

const SportProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(useSportReducer, sportInitalState);
  // Actions
  const setData = (type: string, data: any) =>
    dispatch({ type, payload: data });

  // Clear Data
  const clearData = (type: string) => dispatch({ type });

  // set Modal img
  const setModalImg = (src: string) => {
    dispatch({ type: SET_MODAL_IMG, payload: src });
  };
  // Favorites

  const getFavorites = async () => {
    const userUid = auth.currentUser?.uid;
    try {
      const data = await db.collection('favorites').get();
      const favriotes: any = [];
      data.forEach((doc) => favriotes.push(doc.data()));
      const userFavorites = favriotes
        .filter((fav: any) => fav.user_uid === userUid)
        .reverse();
      dispatch({ type: GET_FAVORITES, payload: userFavorites });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (obj: Sport | Team | Leagues) => {
    const setFav = db.collection('favorites').doc();
    await setFav.set({
      uid: setFav.id,
      user_uid: auth.currentUser?.uid,
      ...obj,
    });
    const getNewFav = await db.collection('favorites').doc(setFav.id).get();

    dispatch({ type: ADD_FAVORITE, payload: getNewFav.data() });
  };

  const removeFavorite = async (uid: string) => {
    await db.collection('favorites').doc(uid).delete();
    dispatch({ type: REMOVE_FAVORITE, payload: uid });
  };

  console.log(state);
  return (
    <SportContext.Provider
      value={{
        ...state,
        setData,
        clearData,
        setModalImg,
        addFavorite,
        removeFavorite,
        getFavorites,
      }}
    >
      {children}
    </SportContext.Provider>
  );
};

export default SportProvider;
