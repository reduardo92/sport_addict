import React, { useEffect, useReducer } from 'react';
import useSWR from 'swr';
import {
  apiPoint,
  SET_LEAGUES_DATA,
  SET_MODAL_IMG,
  SET_SPORT_DATA,
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

  // Fetch All sports and leagues data
  const {
    no_param: { list_sports, list_leagues },
  } = apiPoint;

  const { data } = useSWR([list_sports, list_leagues]);

  useEffect(() => {
    if (!data) return;
    setData(SET_SPORT_DATA, data[0]);
    setData(SET_LEAGUES_DATA, data[1]);
  }, [data]);

  // console.log(state);
  return (
    <SportContext.Provider
      value={{ ...state, setData, clearData, setModalImg }}
    >
      {children}
    </SportContext.Provider>
  );
};

export default SportProvider;
