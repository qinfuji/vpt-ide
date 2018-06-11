// This file is auto maintained by Rekit, you usually don't need to edit it manually.

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from '../features/app/redux/reducer';
import projectReducer from '../features/projectcontrol/redux/reducer';
import pageReducer from '../features/pagecontrol/redux/reducer';

const reducerMap = {
  router: routerReducer,
  app: appReducer,
  project: projectReducer,
  page: pageReducer
};

export default combineReducers(reducerMap);
