import _ from 'lodash';
import axios from 'axios';

import {
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE
} from './constants';

export function fetchProjects() {
  return dispatch => {
    dispatch({
      type: CREATE_PROJECT_BEGIN
    });
    return new Promise((resolve, reject) => {
      console.log('start fetchProjects');
      axios.post('/project').then(
        res => {
          resolve(res.data);
        },
        err => {
          dispatch({
            type: CREATE_PROJECT_FAILURE,
            data: { error: err }
          });
          reject(err);
        }
      );
    });
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CREATE_PROJECT_BEGIN:
      return {
        ...state
      };
    case CREATE_PROJECT_SUCCESS: {
      return { ...state };
    }
    case CREATE_PROJECT_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
