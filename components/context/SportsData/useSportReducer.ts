import {
  CLEAR_MODAL_IMG,
  SET_LEAGUES_DATA,
  SET_MODAL_IMG,
  SET_SPORT_DATA,
} from '../types';
import { SportStateProps } from './SportContext';

interface SportReducerActions {
  type: string;
  payload?: any;
}

const useSportReducer = (
  state: SportStateProps,
  action: SportReducerActions
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
