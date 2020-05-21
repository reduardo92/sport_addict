import { useRef, useReducer, useEffect } from 'react';
import useMovieReducer from './useSportReducer';
import useSWR from 'swr';
import { SET_SPORT_DATA, SET_LEAGUES_DATA, apiPoint } from '../types';
import SportContext from './SportContext';

const sportInitalState = {
  total_pages: null,
  allSports: null,
  leagues: null,
};

const SportProvider = ({ children }) => {
  const navRef = useRef();
  const [state, dispatch] = useReducer(useMovieReducer, sportInitalState);

  // Actions
  const setData = (type, data) => dispatch({ type, payload: data });
  // Clear Data
  const clearData = (type) => dispatch({ type });

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

  console.log(state);
  return (
    <SportContext.Provider
      value={{
        setData,
        clearData,
        navRef,
        ...state,
      }}
    >
      {children}
    </SportContext.Provider>
  );
};

export default SportProvider;
