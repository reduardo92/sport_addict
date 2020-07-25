import React, { useReducer } from 'react';
import { Leagues } from '../../interfaces/legues';
import { Sport } from '../../interfaces/Sport';
import { Team } from '../../interfaces/Team';
import { ADD_FAVORITE, REMOVE_FAVORITE, SET_MODAL_IMG } from '../types';
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

  const addFavorite = (obj: Sport | Team | Leagues) => {
    dispatch({ type: ADD_FAVORITE, payload: obj });
  };

  const removeFavorite = (id: string) => {
    console.log(id);
    dispatch({ type: REMOVE_FAVORITE, payload: id });
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
      }}
    >
      {children}
    </SportContext.Provider>
  );
};

export default SportProvider;

// Fetch All sports and leagues data
// const {
//   no_param: { list_sports, list_leagues },
// } = apiPoint;

// const { data } = useSWR([list_sports, list_leagues]);

// useEffect(() => {
//   if (!data) return;
//   setData(SET_SPORT_DATA, data[0]);
//   setData(SET_LEAGUES_DATA, data[1]);
// }, [data]);
