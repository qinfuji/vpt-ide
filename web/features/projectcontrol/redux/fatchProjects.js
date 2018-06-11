import _ from 'lodash';
import axios from 'axios';

import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from './constants';

export function fetchProjects() {
  return dispatch => {
    dispatch({
      type: FETCH_PROJECTS_BEGIN
    });
    return new Promise((resolve, reject) => {
      console.log('start fetchProjects');
      axios.get('/projects').then(
        res => {
          resolve(res.data);
        },
        err => {
          dispatch({
            type: FETCH_PROJECTS_FAILURE,
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
    case FETCH_PROJECTS_BEGIN:
      return {
        ...state
      };

    case FETCH_PROJECTS_SUCCESS: {
      return { ...state };
    }
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
