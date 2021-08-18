
import { BUSINESS_REGISTER, BUSINESS_REGISTER_SUCCESS, LOGOUT_USER, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_TEST, USER_LOGIN_TEST_SUCCESS, USER_REGISTER, USER_REGISTER_SUCCESS } from './types';

const INITIAL_STATE = {
  loading: false,
  userToken: null,
  userTokenTest: null,
  loginLoading: false,
  userRegister: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {

    case USER_LOGIN:
      return { ...state, loginLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loginLoading: false, userToken: payload };

    case USER_LOGIN_TEST:
      return { ...state, loginLoading: true };
    case USER_LOGIN_TEST_SUCCESS:
      return { ...state, loginLoading: false, userTokenTest: payload };

    case USER_REGISTER:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userRegister: payload };

    case LOGOUT_USER:
      return { ...state, loading: false, userToken: null };
      
    default:
      return state;
  }
};