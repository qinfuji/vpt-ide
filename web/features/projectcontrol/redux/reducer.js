//import _ from 'lodash';
import initialState from './initialState';
import { reducer as fetchProjectData } from './fetchProjectData';
import { reducer as createProject } from './createProject';
import { reducer as fetchProjects } from './fatchProjects';
const reducers = [fetchProjectData, createProject, fetchProjects];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Put global reducers here
    case 'PROJECT_FILE_CHANGED': {
      newState = state;
      break;
    }
    case '@@router/LOCATION_CHANGE': {
      newState = state;
      break;
    }
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
