import cookies from 'js-cookie';
const initialState = {
  userInfo: cookies.get('userInfo')
};

export default initialState;
