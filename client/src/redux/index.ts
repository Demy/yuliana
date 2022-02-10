import { AllStores } from './types';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import projectReducer from './project/reducer';

const middleware = [thunk];
const initionState = {};
const rootReducer = combineReducers<AllStores>({
  auth: authReducer,
  project: projectReducer,
});

const store = createStore(rootReducer, initionState, applyMiddleware(...middleware));

export default store;