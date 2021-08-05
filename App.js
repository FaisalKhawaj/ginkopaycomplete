import React from 'react';
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

const App = () => {
  return (
    // <NavigationContainer ref={navigationRef}>
    //   <RootStackNavigator />
    // </NavigationContainer>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );

};
export default App;
