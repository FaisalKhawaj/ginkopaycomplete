import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { mystyles } from '../styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { simpletext, boldtext, fontmedium } from '../constants/fonts'

const HeaderBackTextCloseBtn = ({ text,setShowBannerModal, closeModal }) => {
    return (
        <View style={{ marginVertical: 5,marginLeft:10, flexDirection: 'row', justifyContent: 'space-between' }}>

            <TouchableOpacity style={{ alignSelf: 'center' }}
                onPress={() => setShowBannerModal(false)}>
                <Icon name="chevron-back-outline" size={20} color="#FFFF" />
            </TouchableOpacity>

            <Text style={{ alignSelf: 'center', fontFamily:fontmedium, color: '#FFFF' }}>{text}</Text>

            <TouchableOpacity style={mystyles.circleCloseBtn}
                onPress={() => closeModal()}>
                <Image style={{ tintColor: "#FFFF" }}
                    source={require('../assets/closecircle.png')} />
            </TouchableOpacity>
        </View>

    )
}

export default HeaderBackTextCloseBtn