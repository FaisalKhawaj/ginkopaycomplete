import { call, put, takeLatest } from 'redux-saga/effects'
import { BUSINESS_REGISTER, USER_LOGIN, USER_REGISTER } from './types'
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

function* registerUser(action) {
  try {
    var { email, password, name, address, district, phone, image } = action.payload;

    const data = yield call(Api.registerUser, email, password, name, address, district, phone, image);
    if (data.status === 201) {
      yield put(Actions.userRegisterSuccess())
      RootNavigation.navigate('loginscreen')
    }

  } catch (error) {
    yield put(Actions.userRegisterSuccess())
    console.log('err', error);
  }
}

function* registerBusiness(action) {
  try {
    var { name, town, email, password, businessType, address, phone, image, description } = action.payload;

    const data = yield call(Api.registerBusiness, name, town, email, password, businessType, address, phone, image, description);
    if (data.status === 201) {
      yield put(Actions.businessRegisterSuccess())
      RootNavigation.navigate('loginscreen')

    }

  } catch (error) {
    yield put(Actions.businessRegisterSuccess())
    console.log('error', error);
  }
}

function* onboarding() {
  yield takeLatest(USER_LOGIN, loginUser);
  yield takeLatest(USER_REGISTER, registerUser);
  yield takeLatest(BUSINESS_REGISTER, registerBusiness);

}

export default onboarding;