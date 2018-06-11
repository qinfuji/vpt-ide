import { SET_USER_INFO } from './constants';
import cookies from 'js-cookie';

export function setUser(userInfo) {
  return dispatch => {
    dispatch({
      type: SET_USER_INFO,
      data: userInfo
    });
  };
}

const user = cookies.get('userInfo')
  ? JSON.parse(cookies.get('userInfo'))
  : null;

export function reducer(state = user, action) {
  switch (action.type) {
    case SET_USER_INFO: {
      return action.data;
    }
    default:
      return state;
  }
}
