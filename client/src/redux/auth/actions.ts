import { API_URL } from './../constants';
import { SET_USER, AUTH_URL } from './constants';
import axios from "axios";

export const login = (username: string, password: string) => (dispatch: Function) => {
  axios
    .post(API_URL + AUTH_URL + 'signin', {
      username,
      password
    })
    .then(response => {
      if (response.data.accessToken) {
        dispatch({ type: SET_USER, payload: response.data });
      }
      return response.data;
    });
};

export const logout = () => (dispatch: Function) => {
  dispatch({ type: SET_USER, payload: null });
};

export const register = (username: string, email: string, password: string) => (dispatch: Function) => {
  axios.post(API_URL + AUTH_URL + 'signup', {
    username,
    email,
    password
  });
};