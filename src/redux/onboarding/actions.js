import {
  BUSINESS_REGISTER,
  BUSINESS_REGISTER_SUCCESS,
  LOGOUT_USER,
  USER_LOGIN, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_SUCCESS,
} from './types';


export const userLogin = (email, password) => {
  return {
    type: USER_LOGIN,
    payload: {
      email, password
    }
  };
};
export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data
  };
};

export const userRegister = (email, password, name, address, district, phone, image) => {
  return {
    type: USER_REGISTER,
    payload: {
      email,
      password,
      name,
      address,
      district,
      phone,
      image
    }
  };
};
export const userRegisterSuccess = (data) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: data
  };
};

export const businessRegister = (name, town, email, password, businessType, address, phone, image, description) => {
  return {
    type: BUSINESS_REGISTER,
    payload: {
      name,
      town,
      email,
      password,
      businessType,
      address,
      phone,
      image,
      description
    }
  };
};
export const businessRegisterSuccess = (data) => {
  return {
    type: BUSINESS_REGISTER_SUCCESS,
    payload: data
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};