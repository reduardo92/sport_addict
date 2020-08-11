import React, { useReducer } from 'react';
import { auth, db } from '../../../LIB/db';
import getData from '../../../utility/getData';
import { Leagues } from '../../interfaces/legues';
import { PlayerProps } from '../../interfaces/PlayerProps';
import { Sport } from '../../interfaces/Sport';
import { Team } from '../../interfaces/Team';
import {
  ADD_FAVORITE,
  apiPoint,
  CLEAR_SEARCH_DATA,
  GET_FAVORITES,
  REMOVE_FAVORITE,
  SET_MODAL_IMG,
  SET_SEARCH_DATA,
  SET_SEARCH_FORM,
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
      const data = await db
        .collection('favorites')
        .where('user_uid', '==', userUid)
        .get();
      const favriotes: any = [];
      data.forEach((doc) => favriotes.push(doc.data()));
      dispatch({ type: GET_FAVORITES, payload: favriotes.reverse() });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (obj: Sport | Team | Leagues | PlayerProps) => {
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

  // Search Data
  const getSearchData = async (search: string, option: string) => {
    const {
      search: { team_name, player_name, event_name },
    } = apiPoint;

    const types: {
      [key: string]: string;
      team: string;
      player: string;
      event: string;
    } = {
      team: team_name,
      player: player_name,
      event: event_name,
    };

    try {
      const data = await getData(types[option] + search);
      dispatch({ type: SET_SEARCH_DATA, payload: Object.values(data)[0] });
    } catch (error) {
      console.log(error);
      clearData!(CLEAR_SEARCH_DATA);
    }
  };

  const handleSearchForm = (name: string, value: string) =>
    dispatch({ type: SET_SEARCH_FORM, searchName: name, payload: value });

  // console.log(state);
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
        getSearchData,
        handleSearchForm,
      }}
    >
      {children}
    </SportContext.Provider>
  );
};

export default SportProvider;
