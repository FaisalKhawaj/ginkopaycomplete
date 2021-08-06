import { call, put, takeLatest, select } from 'redux-saga/effects'
import { CHANGE_PASSWORD, GET_CAMPAIGN, GET_NEWS, GET_NEWS_DETAILS, GET_USER, GET_USER_LIST, } from './types'
import * as Actions from './actions'
import * as AuthActions from './../onboarding/actions'
import { Api } from './api'
import * as RootNavigation from './../../Navigations/NavigationObject';

const getToken = state => state.onboarding.userToken;

function* getNews() {
  try {
    const token = yield select(getToken);

    const data = yield call(Api.getNews, token);
    console.log('data', data.status);
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
    if (data.status === 200) {
      yield put(Actions.getUserSuccess(data))
    }

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

function* home() {
  yield takeLatest(GET_NEWS, getNews);
  yield takeLatest(GET_NEWS_DETAILS, getNewsDetails);
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(GET_CAMPAIGN, getCampaign);
  yield takeLatest(GET_USER_LIST, getUserList);
  yield takeLatest(CHANGE_PASSWORD, changePassword);

}

export default home;