import _ from 'lodash';
import axios from 'axios';

import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from './constants';

export function fetchProjectData(userInfo) {
  return dispatch => {
    dispatch({
      type: FETCH_PROJECTS_BEGIN
    });

    return new Promise((resolve, reject) => {
      let userId = userInfo.uid;
      let url = `/users/${userId}/projecs`;
      axios.get(url).then(
        res => {
          dispatch({
            type: FETCH_PROJECTS_SUCCESS,
            data: res.data
          });
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
        ...state,
        fetchProjectsPending: true,
        fetchProjectsError: null
      };

    case FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        fetchProjectsPending: false,
        fetchProjectsError: null
      };
    }
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        fetchProjectsPending: false,
        fetchProjectsError: action.data.error
      };

    default:
      return state;
  }
}
