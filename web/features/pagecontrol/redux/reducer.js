//import _ from 'lodash';
import initialState from './initialState';

const reducers = [];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
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
