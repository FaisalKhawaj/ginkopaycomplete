import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { mystyles } from '../styles';

const BackBtnWithMiddleText = ({ text, navigation, backBtn }) => {
    return (
        <View style={styles.mainView}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ width: 40 }} onPress={() => backBtn()}>
                    <Icon name="chevron-back-outline" size={20} color="#FFFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.middleView}>
                <Text style={mystyles.HeaderText}>
                    {text}
                </Text>
            </View>

        </View>
    )
}
export default BackBtnWithMiddleText

const styles = StyleSheet.create({
    mainView:
    {
        margin: 15,
        flexDirection: 'row'
    },
    middleView:
    {
        flex: 2,
        marginLeft: 10
    },

})