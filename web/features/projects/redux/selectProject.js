import _ from 'lodash';
import axios from 'axios';

import { PROJECTS_SELECT } from './constants';

export function select(projectInfo) {
  return dispatch => {
    dispatch({
      type: PROJECTS_SELECT
    });
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case PROJECTS_SELECT:
      return {
        ...state,
        fetchProjectsPending: true,
        fetchProjectsError: null
      };
    default:
      return state;
  }
}
