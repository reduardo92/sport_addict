import {
  ADD_FAVORITE,
  CLEAR_FAVORITES,
  CLEAR_MODAL_IMG,
  CLEAR_SEARCH_DATA,
  CLEAR_SEARCH_FROM,
  GET_FAVORITES,
  REMOVE_FAVORITE,
  SET_LEAGUES_DATA,
  SET_MODAL_IMG,
  SET_SEARCH_DATA,
  SET_SEARCH_FORM,
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
    // SEARCH
    case SET_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload,
      };
    case CLEAR_SEARCH_DATA:
      return {
        ...state,
        searchData: null,
      };
    case SET_SEARCH_FORM:
      return {
        ...state,
        searchFrom: {
          ...state.searchFrom,
          [action.searchName]: action.payload,
        },
      };
    case CLEAR_SEARCH_FROM:
      return {
        ...state,
        searchFrom: {
          ...state.searchFrom,
          search: '',
        },
      };

    // FAVORITES
    case GET_FAVORITES:
      return {
        ...state,
        favorites: [...action.payload],
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
          (item) => item.uid !== action.payload
        ),
      };
    case CLEAR_FAVORITES:
      return {
        ...state,
        favorites: [],
      };
    // MODAL
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
