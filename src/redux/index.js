import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist'

import onboardingReducer from './onboarding/reducer';
import homeReducer from './home/reducer';

const onboardingPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
  blacklist: ['loading', 'loginLoading']
}

export default combineReducers({
  onboarding: persistReducer(onboardingPersistConfig,
    onboardingReducer
  ),
  home: homeReducer,
});