import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
const WalletStackk = createStackNavigator();
import WalletScreen from '../screens/wallet/index'
import ProtflioItemExpand from '../screens/ProtflioItemExpand'

const WalletStack = ({ navigation }) => {
    return (
        <WalletStackk.Navigator
            headerMode='none'
            initialRouteName={"DashBoardScreen"}

        >

            <WalletStackk.Screen name="Wallet" component={WalletScreen} />

            <WalletStackk.Screen
                name="ProtflioItemExpand"
                component={ProtflioItemExpand}
            />
        </WalletStackk.Navigator>

    )
}
export default WalletStack;