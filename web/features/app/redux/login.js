import axios from 'axios';
import { LOGIN_BEGIN, LOGIN_FAILURE, SET_USER_INFO } from './constants';

export function login(username, password) {
  return dispatch => {
    dispatch({
      type: LOGIN_BEGIN,
      data: {}
    });
    return new Promise((resolve, reject) => {
      axios
        .post('/login', {
          username: username,
          password: password
        })
        .then(
          res => {
            console.log(res.data);
            resolve(res.data);
            dispatch({
              type: SET_USER_INFO,
              data: JSON.parse(res.data)
            });
          },
          err => {
            reject(err);
            dispatch({
              type: LOGIN_FAILURE,
              data: { err: err }
            });
          }
        );
    });
  };
}

const initialState = {
  loginStatus: null
};

export function reducer(state = { loginStatus: initialState }, action) {
  switch (action.type) {
    case LOGIN_BEGIN: {
      return { ...state, loginStatus: { status: LOGIN_BEGIN } };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginStatus: { status: LOGIN_FAILURE, data: action.err }
      };
    }
    default:
      return state;
  }
}
