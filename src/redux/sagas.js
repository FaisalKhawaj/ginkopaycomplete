
import { all, spawn, call } from 'redux-saga/effects'

import onboarding from './onboarding/saga';
// import home from './home/saga';

export default function* rootSaga () {
  const sagas = [
    onboarding,
    // home
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}