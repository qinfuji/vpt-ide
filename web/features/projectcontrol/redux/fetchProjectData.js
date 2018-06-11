import _ from 'lodash';
import axios from 'axios';

import {
  FETCH_PROJECT_DATA_BEGIN,
  FETCH_PROJECT_DATA_SUCCESS,
  FETCH_PROJECT_DATA_FAILURE
} from './constants';

export function fetchProjectData(projectInfo) {
  return dispatch => {
    dispatch({
      type: FETCH_PROJECT_DATA_BEGIN
    });
    return new Promise((resolve, reject) => {
      console.log('start fetchProjectData');

      axios.get('/projects/11').then(
        res => {
          if (window.ON_VPT_LOAD) window.ON_VPT_LOAD();
          dispatch({
            type: FETCH_PROJECT_DATA_SUCCESS,
            data: res.data
          });
          resolve(res.data);
        },
        err => {
          if (window.ON_VPT_LOAD) window.ON_VPT_LOAD();
          dispatch({
            type: FETCH_PROJECT_DATA_FAILURE,
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
    case FETCH_PROJECT_DATA_BEGIN:
      return {
        ...state
      };

    case FETCH_PROJECT_DATA_SUCCESS: {
      return {
        ...state
      };
    }
    case FETCH_PROJECT_DATA_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
