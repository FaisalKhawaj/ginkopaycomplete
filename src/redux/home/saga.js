import { call, put, takeLatest, select } from 'redux-saga/effects'
import { CHANGE_PASSWORD, CHECK_AVAILABILITY, CREATE_BANNER, CREATE_COMPAIGN, GET_BANNER, GET_BANNER_BY_ID, GET_CAMPAIGN, GET_NEWS, GET_NEWS_DETAILS, GET_USER, GET_USER_LIST, UPDATE_USER, } from './types'
import * as Actions from './actions'
import * as AuthActions from './../onboarding/actions'
import { Api } from './api'
import * as RootNavigation from './../../Navigations/NavigationObject';

const getToken = state => state.onboarding?.userToken;
const banner = state => state.onboarding?.banner;

function* getNews() {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getNews, token);
    yield put(Actions.getNewsSuccess(data))

  } catch (error) {
    console.log('datasds,dnsk', error);
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    // console.log('err', error);
  }
}

function* getNewsDetails(action) {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getNewsDetails, token, action.payload);
    yield put(Actions.getNewsDetailsSuccess(data))

  } catch (error) {
    console.log('err', error);
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
  }
}

function* getUser() {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getUser, token);
  
      yield put(Actions.getUserSuccess(data))
  

  } catch (error) {
    console.log('err', error);
  }
}

function* getCampaign() {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getCampaign, token);
    yield put(Actions.getCampaignSuccess(data))

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* getUserList() {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getUserList, token);
    yield put(Actions.getUserListSuccess(data))

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* changePassword(action) {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.changePassword, token, action.payload);
    yield put(Actions.changePasswordSuccess(data))

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* availability(action) {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.availability,token, action.payload);
    yield put(Actions.checkAvailabiltySuccess(data))

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* updateUser(action) {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.updateUser, token, action.payload);
    yield put(Actions.updateUserSuccess(data))
    yield put(Actions.getUser())

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* createBanner(action) {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.createBanner, token, action.payload);
    yield put(Actions.createBannerSuccess(data))
    yield put(Actions.getBanner())

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* createCompaign(action) {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.createCompaign, token, action.payload);
    yield put(Actions.createCompaignSuccess(data))
    yield put(Actions.getCampaign())

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* getBanner() {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getBanner, token);
    yield put(Actions.getBannerSuccess(data))

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* getBannerById(action) {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getBannerById, token, action.payload);
    yield put(Actions.getBannerByIDSuccess(data))

  } catch (error) {
    if (error == 'invalid_token') {
      yield put(AuthActions.logoutUser())

    }
    console.log('err', error);
  }
}

function* home() {
  yield takeLatest(GET_NEWS, getNews);
  yield takeLatest(GET_NEWS_DETAILS, getNewsDetails);
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(GET_CAMPAIGN, getCampaign);
  yield takeLatest(GET_USER_LIST, getUserList);
  yield takeLatest(CHANGE_PASSWORD, changePassword);
  yield takeLatest(CHECK_AVAILABILITY, availability);
  yield takeLatest(UPDATE_USER, updateUser);
  yield takeLatest(CREATE_BANNER, createBanner);
  yield takeLatest(CREATE_COMPAIGN, createCompaign);
  yield takeLatest(GET_BANNER, getBanner);
  yield takeLatest(GET_BANNER_BY_ID, getBannerById);

}

export default home;