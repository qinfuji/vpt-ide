//import _ from 'lodash';
import _ from 'lodash';
import initialState from './initialState';
import { reducer as fetchProjects } from './fetchProjects';
import { reducer as showme } from './showme';
const reducers = [fetchProjects, showme];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
