import { SET_USER } from './constants';
import { AuthStore, StoreAction, HTTPHeader } from './../types';

const initialState: AuthStore = {
  user: null,
  header: {},
};

const reducer = (state: AuthStore = initialState, action: StoreAction): AuthStore => {
  switch(action.type) {
    case SET_USER:
      const user = action.payload;
      let header: HTTPHeader = {};
      if (user && user.accessToken) {
        header = { Authorization: 'Bearer ' + user.accessToken };
      }
      return {
        ...state,
        user,
        header
      };
    default:
      return state;
  }
};

export default reducer;