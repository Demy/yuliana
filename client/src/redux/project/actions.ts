import { API_URL } from './../constants';
import axios from "axios";
import { SET_PROJECTS } from './constants';

export const fetchProjects = () => (dispatch: Function) => {
  axios
    .get(API_URL + 'projects')
		.then(res => {
      dispatch({ type: SET_PROJECTS, payload: res.data });
		})
		.catch(error => {
			console.log(error);
		});
};

export const sendEmail = (name: string, email: string, message: string) => (dispatch: Function) => {
  axios.post(API_URL + 'email', {
    name,
    email,
    message
  });
};