import initialState from './initialState';
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
      let url = `/projects/${projectInfo.id}`;
      axios.get(url).then(
        res => {
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

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECT_DATA_BEGIN:
      return {
        ...state,
        projectInfoFetchState: FETCH_PROJECT_DATA_BEGIN
      };

    case FETCH_PROJECT_DATA_SUCCESS: {
      return {
        ...state,
        projectInfoFetchState: FETCH_PROJECT_DATA_SUCCESS,
        projectInfo: action.data,
        pageInfoFetchState: null,
        pageInfo: null,
        pageOutline: null,
        componentPropsInfo: null
      };
    }
    case FETCH_PROJECT_DATA_FAILURE: {
      return {
        ...state,
        projectInfoFetchState: FETCH_PROJECT_DATA_FAILURE
      };
    }
    default:
      return state;
  }
}
