import { call, put, takeLatest } from 'redux-saga/effects'
import {  GET_CAMPAIGN, GET_NEWS, GET_NEWS_DETAILS, GET_USER, } from './types'
import * as Actions from './actions'
import { Api } from './api'
import * as RootNavigation from './../../Navigations/NavigationObject';


function* getNews() {
  try {

    const data = yield call(Api.getNews);
    if (data.status === 200) {
      yield put(Actions.getNewsSuccess(data))
    }

  } catch (error) {
    console.log('err', error);
  }
}

function* getNewsDetails() {
  try {

    const data = yield call(Api.getNewsDetails);
    if (data.status === 200) {
      yield put(Actions.getNewsDetailsSuccess(data))
    }

  } catch (error) {
    console.log('err', error);
  }
}

function* getUser() {
  try {

    const data = yield call(Api.getUser);
    if (data.status === 200) {
      yield put(Actions.getUserSuccess(data))
    }

  } catch (error) {
    console.log('err', error);
  }
}

function* getCampaign() {
  try {

    const data = yield call(Api.getCampaign);
    if (data.status === 200) {
      yield put(Actions.getCampaignSuccess(data))
    }

  } catch (error) {
    console.log('err', error);
  }
}

function* home() {
  yield takeLatest(GET_NEWS, getNews);
  yield takeLatest(GET_NEWS_DETAILS, getNewsDetails);
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(GET_CAMPAIGN, getCampaign);

}

export default home;