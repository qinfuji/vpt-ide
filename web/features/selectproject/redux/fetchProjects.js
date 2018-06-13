import _ from 'lodash';
import axios from 'axios';
import initialState from './initialState';
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
      axios.get('/projects').then(
        res => {
          resolve(res.data);
          dispatch({
            type: FETCH_PROJECTS_SUCCESS,
            data: res.data
          });
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

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS_BEGIN:
      return {
        ...state,
        fetchStatus: FETCH_PROJECTS_BEGIN
      };

    case FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: action.data,
        fetchStatus: FETCH_PROJECTS_SUCCESS
      };
    }
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        fetchStatus: FETCH_PROJECTS_FAILURE
      };
    default:
      return state;
  }
}
