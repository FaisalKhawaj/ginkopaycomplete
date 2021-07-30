import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/dashboard/index'
import WalletScreen from '../screens/wallet/index'
import CompaignScreen from '../screens/Compaign/index'
import ProfileScreen from '../screens/profile/index'
const Tab = createBottomTabNavigator();

import HOME from '../assets/home.svg'
import HOMEACTIVE from '../assets/homeactive.svg'


import WALLET from '../assets/wallet.svg'
import WALLETACTIVE from '../assets/walletactive.svg'

import COMPAIGN from '../assets/compaign.svg'
import COMPAIGNACTIVE from '../assets/compaignactive.svg'

import USER from '../assets/user.svg'
import USERACTIVE from '../assets/useractive.svg'

import { View, Text, TouchableOpacity } from 'react-native';

import CustomText from '../components/Text';
import { simpletext } from '../constants/fonts';
import { BackgroundColor } from '../constants/colors';
function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,backgroundColor:BackgroundColor, justifyContent:"center", alignItems:"center", height:56 }}
          >
            {label === "Home"? isFocused?
            <HOMEACTIVE />
            :<HOME />
            :label === "Wallet"?isFocused?
            <WALLETACTIVE />
            :<WALLET /> :
            label ==="Compaign"?isFocused?
            <COMPAIGNACTIVE />
            :<COMPAIGN />:
            label === "Profile"?isFocused?
            <USERACTIVE />:<USER />:null}
            <CustomText 
              text={label} 
              locations={[0,1]} 
              colors={isFocused?["#70A2FF", "#F76E64"]:["gray","gray"]} 
              style={{fontSize:13,fontWeight:simpletext, textAlign:"center"}} 
        />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Compaign" component={CompaignScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;