import { SET_PROJECTS } from './constants';
import { ProjectStore, StoreAction } from './../types';

const initialState: ProjectStore = {
  projects: []
};

const reducer = (state: ProjectStore = initialState, action: StoreAction): ProjectStore => {
  switch(action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
};

export default reducer;