import React, { useReducer } from 'react';
import useAuthReducer from './useAuthReducer';
import AuthContext from './AuthContext';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

import configHeader from '../../utility/configHeader';

const authInitialState = {
  isAuthentucated: null,
  loading: true,
  user: null,
  error: null,
  msg: null,
};

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(useAuthReducer, authInitialState);

  // Load User
  const loadUser = async () => {
    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.msg });
    }
  };

  const registerUser = async (formData) => {
    try {
      const { data } = await axios.post(`/api/user`, formData, configHeader);
      dispatch({ type: REGISTER_SUCCESS, payload: data.msg });
      // Load User
      // loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

  // Login User
  const loginUser = async (formData) => {
    try {
      const { data } = await axios.post(`/api/auth`, formData, configHeader);
      dispatch({ type: LOGIN_SUCCESS, payload: data.msg });
      // Load User
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  // Clear Erros
  const clearErros = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loadUser,
        registerUser,
        loginUser,
        logout,
        clearErros,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
