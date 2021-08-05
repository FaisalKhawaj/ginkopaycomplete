import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const SettingsWithImgTextIcon = ({ img, name, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler()} style={styles.BtnView}>
            <Image source={img} />
            <View style={styles.TextView}>
                <Text style={styles.text}>{name}</Text>
            </View>

            <Icon name="chevron-forward-outline" size={20} color="#FFFF" />
        </TouchableOpacity>

    )
}

export default SettingsWithImgTextIcon

const styles = StyleSheet.create({
    BtnView:
    {
        flexDirection: 'row',
        marginVertical: 20, marginHorizontal: 15
    },
    TextView:
    {
        flex: 1, marginHorizontal: 10, alignSelf: 'center'
    },
    text:
    {
        fontSize: 15,
        fontFamily: 'Poppins-Semibold',
        color: '#FFFF'
    }
})