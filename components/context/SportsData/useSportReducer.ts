import {
  ADD_FAVORITE,
  CLEAR_MODAL_IMG,
  REMOVE_FAVORITE,
  SET_LEAGUES_DATA,
  SET_MODAL_IMG,
  SET_SPORT_DATA,
} from '../types';
import { ReducerActionsProps } from './../../interfaces/ReducerProps';
import { SportStateProps } from './SportContext';

const useSportReducer = (
  state: SportStateProps,
  action: ReducerActionsProps
) => {
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
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites?.filter(
          (item) => (item.idTeam || item.idLeague) !== action.payload
        ),
      };
    case SET_MODAL_IMG:
      return {
        ...state,
        modalImg: { isActive: true, src: action.payload },
      };
    case CLEAR_MODAL_IMG:
      return {
        ...state,
        modalImg: { isActive: false, src: null },
      };

    default:
      return state;
  }
};

export default useSportReducer;
