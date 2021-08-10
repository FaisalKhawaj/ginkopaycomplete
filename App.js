import React, { useState, useEffect } from 'react';
import RootStackNavigator from './src/Navigations/RootStackNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/Navigations/NavigationObject';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, useSelector } from 'react-redux';
import Reactotron from './ReactotronConfig'
import reducer from './src/redux/index';
import rootSaga from './src/redux/sagas';
import createSagaMiddleware from 'redux-saga';
import { createStackNavigator } from "@react-navigation/stack";
import { isJwtExpired } from 'jwt-check-expiration';
import SliderScreenOne from './src/screens/slidescreenone'
import SliderScreenTwo from './src/screens/slidescreentwo'
import SliderScreenThree from './src/screens/slidescreenthree'
import CreateAccountIntro from './src/screens/createaccountintro'
import Login from './src/screens/login'
import CreataAccount from './src/screens/createaccount'
import UploadImage from './src/screens/uploadpicture'
import UploadedImage from './src/screens/uploaddedpicture'
import KycNeed from './src/screens/kycneed'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: []
};
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
const RootStack = createStackNavigator();


function LoginStack() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName={'SliderScreenOne'}>
      <RootStack.Screen
        name="SliderScreenOne"
        component={SliderScreenOne}
      />

      <RootStack.Screen
        name="SliderScreenTwo"
        component={SliderScreenTwo}
      />
      <RootStack.Screen
        name="SliderScreenThree"
        component={SliderScreenThree}
      />
      <RootStack.Screen
        name="CreateAccountIntro"
        component={CreateAccountIntro}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
      />
      <RootStack.Screen
        name="CreataAccount"
        component={CreataAccount}
      />
      <RootStack.Screen
        name="UploadImage"
        component={UploadImage}
      />
      <RootStack.Screen
        name="UploadedImage"
        component={UploadedImage}
      />
      <RootStack.Screen
        name="KycNeed"
        component={KycNeed}
      />
    </RootStack.Navigator>
  )
}

const App = () => {

  const [token, setToken] = useState(false);
  console.log('too', token);
  function handleState() {

    let value = store.getState().onboarding.userToken
    // console.log('isLogin fff', value?.access_token);
    // setToken(value?.access_token);
    if (value?.access_token) {
      // var decoded = jwt_decode(value?.access_token);
      const isLogin = isJwtExpired(value?.access_token)
      console.log('tests', isLogin);

      setToken(isLogin);
    }
    else {
      setToken(true)
    }
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(handleState);
    return unsubscribe;
  }, [])
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          {!token ? <RootStackNavigator /> : <LoginStack />}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );

};
export default App;
