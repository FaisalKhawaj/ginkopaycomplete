import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const HeaderBackBtnWithLogo = ({ backBtn }) => {
    return (
        <View style={styles.mainView}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ width: 40 }} onPress={() => backBtn()}>
                    <Icon name="chevron-back-outline" size={20} color="#FFFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.imageView}>
                <Image source={require('../assets/HeaderLogo.png')} />
            </View>

        </View>

    )
}
export default HeaderBackBtnWithLogo;

const styles = StyleSheet.create({
    mainView:
    {
        margin: 15,
        flexDirection: 'row'
    },
    imageView:
    {
        flex: 2,
        marginLeft: 10
    }
})