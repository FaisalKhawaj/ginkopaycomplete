import {
  CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHECK_AVAILABILITY, CHECK_AVAILABILITY_SUCCESS, CREATE_BANNER, CREATE_BANNER_SUCCESS, CREATE_COMPAIGN, CREATE_COMPAIGN_SUCCESS, GET_BANNER, GET_BANNER_BY_ID, GET_BANNER_BY_ID_SUCCESS, GET_BANNER_SUCCESS, GET_CAMPAIGN, GET_CAMPAIGN_SUCCESS, GET_NEWS, GET_NEWS_DETAILS, GET_NEWS_DETAILS_SUCCESS, GET_NEWS_SUCCESS, GET_USER, GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_SUCCESS, UPDATE_USER, UPDATE_USER_SUCCESS,
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

export const getCampaign = (data) => {
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

export const updateUser = (
  webId,
  email,
  userNumber,
  firstName,
  lastName,
  surName,
  password,
  birthday,
  phoneNumber,
  phoneCarrier,
  gender,
  streetAddress,
  state,
  city,
  country,
  pictureUrl,
  currentLang,
  visibility,
  currencyConversion,
  privacyCurrency,
  privacyMode,
  partcpMetamatric,
  getTransactions,
  accountId,
  ethAddress,
  btcAddress
) => {
  return {
    type: UPDATE_USER,
    payload: {
      webId,
      email,
      userNumber,
      firstName,
      lastName,
      surName,
      password,
      birthday,
      phoneNumber,
      phoneCarrier,
      gender,
      streetAddress,
      state,
      city,
      country,
      pictureUrl,
      currentLang,
      visibility,
      currencyConversion,
      privacyCurrency,
      privacyMode,
      partcpMetamatric,
      getTransactions,
      accountId,
      ethAddress,
      btcAddress
    }
  };
};
export const updateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data
  };
};

export const createBanner = (name, description, walletAddress, pictureUrl) => {
  return {
    type: CREATE_BANNER,
    payload: {
      name, description, walletAddress, pictureUrl
    }
  };
};
export const createBannerSuccess = (data) => {
  return {
    type: CREATE_BANNER_SUCCESS,
    payload: data
  };
};

export const createCompaign = (name, description, walletAddress, pictureUrl) => {
  return {
    type: CREATE_COMPAIGN,
    payload: {
      name, description, walletAddress, pictureUrl
    }
  };
};
export const createCompaignSuccess = (data) => {
  return {
    type: CREATE_COMPAIGN_SUCCESS,
    payload: data
  };
};

export const getBanner = () => {
  return {
    type: GET_BANNER,
  };
};
export const getBannerSuccess = (data) => {
  return {
    type: GET_BANNER_SUCCESS,
    payload: data
  };
};

export const getBannerByID = (id) => {
  return {
    type: GET_BANNER_BY_ID,
    payload: id
  };
};
export const getBannerByIDSuccess = (data) => {
  return {
    type: GET_BANNER_BY_ID_SUCCESS,
    payload: data
  };
};
