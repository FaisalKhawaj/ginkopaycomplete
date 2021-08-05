
import { GET_CAMPAIGN, GET_CAMPAIGN_SUCCESS, GET_NEWS, GET_NEWS_DETAILS, GET_NEWS_DETAILS_SUCCESS, GET_NEWS_SUCCESS, GET_USER_SUCCESS, } from './types';

const INITIAL_STATE = {
  loading: false,
  news: null,
  newsDetail: null,
  users: null,
  campaign: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {

    case GET_NEWS:
      return { ...state, loading: true };
    case GET_NEWS_SUCCESS:
      return { ...state, loading: false, news: payload };

    case GET_NEWS_DETAILS:
      return { ...state, loading: true };
    case GET_NEWS_DETAILS_SUCCESS:
      return { ...state, loading: false, newsDetail: payload };

    case GET_NEWS:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, users: payload };

    case GET_CAMPAIGN:
      return { ...state, loading: true };
    case GET_CAMPAIGN_SUCCESS:
      return { ...state, loading: false, campaign: payload };

    default:
      return state;
  }
};