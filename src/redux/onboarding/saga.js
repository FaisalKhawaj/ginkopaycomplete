import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_LOGIN, USER_REGISTER } from './types'
import * as Actions from './actions'
import { Api } from './api'

function* loginUser(action) {
  try {

    const data = yield call(Api.loginUser, action.payload);

    yield put(Actions.userLoginSuccess(data))

  } catch (error) {
    yield put(Actions.userLoginSuccess(null))
    console.log("error", error)
  }
}

function* registerUser(action) {
  try {
    var { email, password, name } = action.payload;

    const data = yield call(Api.registerUser, email, password, name);
    if (data.status === 200) {
      yield put(Actions.userRegisterSuccess(data))
      // RootNavigation.navigate('loginscreen')
    }

  } catch (error) {
    yield put(Actions.userRegisterSuccess())
    console.log('err', error);
  }
}


function* onboarding() {
  yield takeLatest(USER_LOGIN, loginUser);
  yield takeLatest(USER_REGISTER, registerUser);

}

export default onboarding;