import React from 'react';
import RootStackNavigator from './src/Navigations/RootStackNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/Navigations/NavigationObject';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNavigator>
        
      </RootStackNavigator>
    </NavigationContainer>
  );

};
export default App;
