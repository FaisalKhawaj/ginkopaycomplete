import { GET_CAMPAIGN, GET_CAMPAIGN_SUCCESS, GET_NEWS, GET_NEWS_DETAILS, GET_NEWS_DETAILS_SUCCESS, GET_NEWS_SUCCESS, GET_USER, GET_USER_SUCCESS,
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

export const getNewsDetails = () => {
  return {
    type: GET_NEWS_DETAILS,
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
