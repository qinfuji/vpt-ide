//import _ from 'lodash';
import initialState from './initialState';
import { reducer as fetchProjectData } from './fetchProjectData';

const reducers = [fetchProjectData];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
