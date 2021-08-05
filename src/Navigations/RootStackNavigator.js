import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createStackNavigator } from "@react-navigation/stack";
import SliderScreenOne from '../screens/slidescreenone'
import SliderScreenTwo from '../screens/slidescreentwo'
import SliderScreenThree from '../screens/slidescreenthree'
import CreateAccountIntro from '../screens/createaccountintro'
import Login from '../screens/login'
import CreataAccount from '../screens/createaccount'
import UploadImage from '../screens/uploadpicture'
import UploadedImage from '../screens/uploaddedpicture'
import KycNeed from '../screens/kycneed'

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
            initialRouteName={"SliderScreenOne"}

        >
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