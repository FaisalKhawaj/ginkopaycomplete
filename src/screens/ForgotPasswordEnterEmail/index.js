import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import { Content } from 'native-base';
import { simpletext, boldtext } from '../../constants/fonts'
import TextInputFloat from '../../components/TextInput'
import CustomButton from '../../components/Button'
import { mystyles } from '../../styles';
export const { width, height } = Dimensions.get("window");
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons'
import { BackgroundColor } from '../../constants/colors';
const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passworderror, setPassworderror] = useState("")
    const [ispasswordVisible, setispasswordVisible] = useState(true);
    const [secureTextEntry, setsecureTextEntry] = useState(true)

    const gotonextScreen = () => {
        navigation.navigate('ConfirmationEmail')
    }
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return (
        <SafeAreaView style={styles.containerstyle}>

            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Icon name="chevron-back-outline" size={20} color="#FFFF" />
                </TouchableOpacity>
                <Image source={require("../../assets/spalsh_text.png")} style={{ width: width / 1.3, alignSelf: 'center', height: width / 2.3, resizeMode: "contain" }} />

                <Text style={styles.enterEmailText}>
                    Enter your email address
               </Text>

                <TextInputFloat
                    label="Email Address"
                    value={email}
                    setValue={setEmail}
                    error={emailerror}
                    secureTextEntry={false}
                    placeholder="Enter your email"
                />






                {/* <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
                    <CustomButton text={"Submit"} onPress={gotonextScreen} />
                </View> */}
            </Content>
            <CustomButton text={"Submit"} onPress={gotonextScreen} />
        </SafeAreaView>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    containerstyle: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: "flex-end",
        backgroundColor: BackgroundColor
    },
    backBtn: {

        marginHorizontal: 10, position: 'absolute', top: 40, width: '30%'
    },
    enterEmailText: {
        color: '#FFFF', marginHorizontal: 10, fontFamily: 'Poppins-SemiBold'
    }
})