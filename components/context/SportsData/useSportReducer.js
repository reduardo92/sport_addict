import { SET_SPORT_DATA, SET_LEAGUES_DATA } from '../types';

const useMovieReducer = (state, action) => {
  switch (action.type) {
    // Set Search Data
    case SET_SPORT_DATA:
      return {
        ...state,
        allSports: action.payload,
      };
    case SET_LEAGUES_DATA:
      return {
        ...state,
        leagues: action.payload,
      };
    default:
      return state;
  }
};

export default useMovieReducer;
