import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHECK_AVAILABILITY, CHECK_AVAILABILITY_SUCCESS, GET_CAMPAIGN, GET_CAMPAIGN_SUCCESS, GET_NEWS, GET_NEWS_DETAILS, GET_NEWS_DETAILS_SUCCESS, GET_NEWS_SUCCESS, GET_USER, GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_SUCCESS,
} from './types';


export const getNews = () => {
  return {
    type: GET_NEWS,
  };
};
export const getNewsSuccess = (data) => {
  return {
    type: GET_NEWS_SUCCESS,
    payload: data
  };
};

export const getNewsDetails = (id) => {
  return {
    type: GET_NEWS_DETAILS,
    payload: id
  };
};
export const getNewsDetailsSuccess = (data) => {
  return {
    type: GET_NEWS_DETAILS_SUCCESS,
    payload: data
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
  };
};
export const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data
  };
};

export const getCampaign = () => {
  return {
    type: GET_CAMPAIGN,
  };
};
export const getCampaignSuccess = (data) => {
  return {
    type: GET_CAMPAIGN_SUCCESS,
    payload: data
  };
};

export const getUserList = () => {
  return {
    type: GET_USER_LIST,
  };
};
export const getUserListSuccess = (data) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: data
  };
};

export const changePassword = (password) => {
  return {
    type: CHANGE_PASSWORD,
    payload: password
  };
};
export const changePasswordSuccess = (data) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data
  };
};

export const checkAvailabilty = (name, email) => {
  return {
    type: CHECK_AVAILABILITY,
    payload: {
      name,
      email
    }
  };
};
export const checkAvailabiltySuccess = (data) => {
  return {
    type: CHECK_AVAILABILITY_SUCCESS,
    payload: data
  };
};
