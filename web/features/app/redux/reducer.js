import { combineReducers } from 'redux';
import { reducer as login } from './login';
import { reducer as setUser } from './setUser';
//const reducers = [login, setUser];
// export  function _reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     default:
//       newState = state;
//       break;
//   }
//   return reducers.reduce((s, r) => r(s, action), newState);
// }

const reducerMap = {
  loginState: login,
  userInfo: setUser
};

let reducer = combineReducers(reducerMap);
export default reducer;
