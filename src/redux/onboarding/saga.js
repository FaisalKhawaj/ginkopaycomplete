import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_LOGIN, USER_LOGIN_TEST, USER_REGISTER } from './types'
import * as Actions from './actions'
import { Api } from './api'
import * as RootNavigation from './../../Navigations/NavigationObject';

function* loginUser(action) {
  try {

    const data = yield call(Api.loginUser, action.payload);

    yield put(Actions.userLoginSuccess(data))

  } catch (error) {
    yield put(Actions.userLoginSuccess(null))
    console.log("error", error)
  }
}

function* loginUserTest(action) {
  try {

    const data = yield call(Api.loginUserTest, action.payload);

    yield put(Actions.userLoginTestSuccess(data))

  } catch (error) {
    yield put(Actions.userLoginTestSuccess(null))
    console.log("error", error)
  }
}

function* registerUser(action) {
  try {
    var { email, password, name } = action.payload;

    const data = yield call(Api.registerUser, email, password, name);
      yield put(Actions.userRegisterSuccess(data))
      yield put(Actions.userLoginTest(email, password))
      RootNavigation.navigate('UploadImage')

  } catch (error) {
    yield put(Actions.userRegisterSuccess())
    console.log('err', error);
  }
}


function* onboarding() {
  yield takeLatest(USER_LOGIN, loginUser);
  yield takeLatest(USER_REGISTER, registerUser);
  yield takeLatest(USER_LOGIN_TEST, loginUserTest);

}

export default onboarding;