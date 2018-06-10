// This file is auto maintained by Rekit, you usually don't need to edit it manually.

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';

const reducerMap = {
  router: routerReducer,
  home: homeReducer
};

export default combineReducers(reducerMap);
