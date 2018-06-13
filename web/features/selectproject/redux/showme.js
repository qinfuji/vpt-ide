import { IS_SHOW } from './constants';
import { initialState } from './initialState';
export function showme(hidden) {
  return dispatch => {
    dispatch({
      type: IS_SHOW,
      data: hidden
    });
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'IS_SHOW': {
      return { ...state, showme: action.data };
    }
    default:
      return state;
  }
}
