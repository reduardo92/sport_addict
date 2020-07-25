// types
import { LOGOUT, SET_USER } from '../types';
import { ReducerActionsProps } from './../../interfaces/ReducerProps';
import { AuthStateProps } from './AuthContext';

const useAuthReducer = (state: AuthStateProps, action: ReducerActionsProps) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default useAuthReducer;
