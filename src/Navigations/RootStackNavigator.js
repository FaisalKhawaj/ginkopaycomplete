import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createStackNavigator } from "@react-navigation/stack";

// DashBoard
import ProtflioItemExpand from '../screens/ProtflioItemExpand'
import CompaignMainPage from '../screens/Compaign';
import Profile from '../screens/profile';
import Settings from '../screens/Settings';
import Preferences from '../screens/Preferences';
import ChangePassword from '../screens/ChangePassword';
// RootStack Navigator 

import BottomTabNavigator from './BottomTabNavigator'

const RootStack = createStackNavigator();
enableScreens()

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"DashBoardScreen"}

        >
            
            <RootStack.Screen
                name="DashBoardScreen"
                component={BottomTabNavigator}
            />

            <RootStack.Screen
                name="Compaign"
                component={CompaignMainPage}
            />

            <RootStack.Screen
                name="Profile"
                component={Profile}
            />

            <RootStack.Screen
                name="Settings"
                component={Settings}
            />

            <RootStack.Screen
                name="Preferences"
                component={Preferences}
            />

            <RootStack.Screen
                name="ProtflioItemExpand"
                component={ProtflioItemExpand}
            />

            <RootStack.Screen
                name="ChangePassword"
                component={ChangePassword}
            />
        </RootStack.Navigator>
    )
}
export default RootStackScreen;