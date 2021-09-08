import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { Content } from 'native-base';
import { simpletext, boldtext } from '../../constants/fonts'
import { mystyles, width } from '../../styles';
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '../../components/Text';
import { lightWhite } from '../../constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ConfirmationEmail = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('ResetPassword')
        }, 4000)
    }, [])
    return (
        <SafeAreaView style={mystyles.container}>
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
                <Image source={require("../../assets/spalsh_text.png")} resizeMode="contain" style={mystyles.ginkoPayImg} />

                <ImageBackground style={{ width: 30, height: 30, alignSelf: 'center', justifyContent: 'center', }} resizeMode-="cover" source={require('../../assets/Oval.png')} >
                    <Image style={{ width: 15, height: 15, alignSelf: 'center' }} resizeMode="contain" source={require('../../assets/Path.png')} />
                </ImageBackground>


                <CustomText text={"example@gmail.com"}
                    locations={[0, 1]}
                    colors={["#70A2FF", "#F76E64"]}
                    style={{ fontSize: 14, textAlign: "center" }} />

                <Text style={styles.checkYourEmailText}>
                    Check your email for a confirmation link to{'\n'}continue.
               </Text>

                <Text style={styles.checkYourEmailText}>
                    Don’t you receive the e-mail? Click to resend!
               </Text>





            </Content>
            <TouchableOpacity style={styles.resendBtn}>
                <Text style={styles.resendText}>Resend</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ConfirmationEmail;

const styles = StyleSheet.create({
    checkYourEmailText: {
        color: lightWhite, marginVertical: hp(3), fontFamily: 'Poppins-Regular', textAlign: 'center'
    },
    resendBtn: {
        // position: 'absolute', 
        bottom: 15,
        backgroundColor: '#2A2D3C', width: wp('90%'),
        borderRadius: 10,
        borderWidth: 1, borderColor: '#2A2D3C', paddingVertical: hp(2),
        alignItems: 'center', alignSelf: 'center'
    },
    resendText: {
        fontSize: 15, fontFamily: 'Poppins-SemiBold', color: '#FFFF'
    }
})