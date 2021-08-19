
import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHECK_AVAILABILITY, CHECK_AVAILABILITY_SUCCESS, CREATE_BANNER, CREATE_BANNER_SUCCESS, CREATE_COMPAIGN, CREATE_COMPAIGN_SUCCESS, GET_BANNER, GET_BANNER_BY_ID, GET_BANNER_BY_ID_1, GET_BANNER_BY_ID_SUCCESS, GET_BANNER_BY_ID_SUCCESS_1, GET_BANNER_SUCCESS, GET_CAMPAIGN, GET_CAMPAIGN_BY_ID_1, GET_CAMPAIGN_SUCCESS, GET_NEWS, GET_NEWS_DETAILS, GET_NEWS_DETAILS_SUCCESS, GET_NEWS_SUCCESS, GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_SUCCESS, UPDATE_USER, UPDATE_USER_SUCCESS, } from './types';

const INITIAL_STATE = {
  loading: false,
  news: null,
  newsDetail: null,
  users: null,
  campaign: null,
  userList: null,
  availabilty: null,
  updateUser: null,
  banner: null,
  getBannerById: null,
  bannerId: null,
  campaignId: null,
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

    case UPDATE_USER:
      return { ...state, loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, updateUser: payload };

    case CREATE_BANNER:
      return { ...state, loading: true };
    case CREATE_BANNER_SUCCESS:
      return { ...state, loading: false };

    case GET_BANNER:
      return { ...state, loading: true };
    case GET_BANNER_SUCCESS:
      return { ...state, loading: false, banner: payload };

    case GET_BANNER_BY_ID:
      return { ...state, loading: true };
    case GET_BANNER_BY_ID_SUCCESS:
      return { ...state, loading: false, getBannerById: payload };

    case CREATE_COMPAIGN:
      return { ...state, loading: true };
    case CREATE_COMPAIGN_SUCCESS:
      return { ...state, loading: false, };

    case GET_BANNER_BY_ID_1:
      return { ...state, loading: true, bannerId: payload };
   
    case GET_CAMPAIGN_BY_ID_1:
      return { ...state, loading: true, campaignId: payload };
   

    default:
      return state;
  }
};