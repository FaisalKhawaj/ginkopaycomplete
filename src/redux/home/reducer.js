
import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHECK_AVAILABILITY, CHECK_AVAILABILITY_SUCCESS, GET_CAMPAIGN, GET_CAMPAIGN_SUCCESS, GET_NEWS, GET_NEWS_DETAILS, GET_NEWS_DETAILS_SUCCESS, GET_NEWS_SUCCESS, GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_SUCCESS, } from './types';

const INITIAL_STATE = {
  loading: false,
  news: null,
  newsDetail: null,
  users: null,
  campaign: null,
  userList: null,
  availabilty: null,
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

    case GET_USER_LIST:
      return { ...state, loading: true };
    case GET_USER_LIST_SUCCESS:
      return { ...state, loading: false, userList: payload };

    case CHANGE_PASSWORD:
      return { ...state, loading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state, loading: false, };

    case CHECK_AVAILABILITY:
      return { ...state, loading: true };
    case CHECK_AVAILABILITY_SUCCESS:
      return { ...state, loading: false, availabilty: payload };

    default:
      return state;
  }
};