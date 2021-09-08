import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { Container, Content, Item, Input, Label } from 'native-base'
import { simpletext, boldtext } from '../../constants/fonts'
import { mystyles, } from '../../styles';
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import CustomText from '../../components/Text';
import { BackgroundColor, bluetext, graycolor, lightWhite } from '../../constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../../components/Button';
const { width, height } = Dimensions.get("window");

const ResetPassword = ({ navigation }) => {
    const [password, setPassword] = useState("")
    const [passowrderror, setPasswordError] = useState("")
    const [ispasswordVisible, setispasswordVisible] = useState(true);
    const [resetPassword, setResetPassword] = useState(false)
    const [confrimpassword, setConfirmPassword] = useState("")
    const [confirmpasswordwrror, setConfirmPassordError] = useState("")

    const [isconfirmpasswordvisible, setisconfirmpasswordvisible] = useState(true);
    const gotonextScreen = () => {
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={mystyles.container}>
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
                <Image source={require("../../assets/spalsh_text.png")} resizeMode="contain" style={mystyles.ginkoPayImg} />
                <View>
                    <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular' }}>Enter a new password</Text>
                </View>

                <View style={styles.textinputmaincontainer}>
                    <Item stackedLabel
                        style={styles.textinputcontainer}>
                        <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>New Password</Label>
                        <Input
                            placeholder="Enter new password"
                            placeholderTextColor="#fff"
                            secureTextEntry={ispasswordVisible}
                            style={styles.textinput}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <TouchableOpacity style={styles.ispasswordIcon}
                            onPress={() => setispasswordVisible(!ispasswordVisible)}>

                            <Feather name={isconfirmpasswordvisible ? "eye" : "eye-off"} size={28} color="#fff" />


                        </TouchableOpacity>
                    </Item>
                    <Text style={styles.text}>Password strength:  <Text style={{ color: bluetext }}>Good</Text></Text>
                </View>


                <View>
                    <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular' }}>Repeat new password</Text>
                </View>

                <View style={styles.textinputmaincontainer}>
                    <Item stackedLabel
                        style={styles.textinputcontainer}>
                        <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>New Password</Label>
                        <Input
                            placeholder="Confirm password"
                            placeholderTextColor="#fff"
                            secureTextEntry={isconfirmpasswordvisible}
                            style={styles.textinput}
                            value={confrimpassword}
                            onChangeText={text => setConfirmPassword(text)}
                        />
                        <TouchableOpacity style={styles.ispasswordIcon}
                            onPress={() => setisconfirmpasswordvisible(!isconfirmpasswordvisible)}>
                            {ispasswordVisible ?
                                <Feather name="eye" size={28} color="#fff" /> :
                                <Feather name="eye-off" size={28} color="#fff" />}

                        </TouchableOpacity>
                    </Item>
                    <Text style={styles.text}>Must be at least 8 characters </Text>
                </View>

                <View style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}>
                    <CustomButton text={"Create Password"} onPress={gotonextScreen} />
                </View>

            </Content>
        </SafeAreaView>
    )
}

export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackgroundColor
    },
    createaccount: {
        color: bluetext,
        marginVertical: 10,
        fontSize: 14,
        fontFamily: boldtext,
        alignSelf: "center"
    },
    textinputmaincontainer: {
        width: width - 30,
        alignSelf: "center",
        marginVertical: 10,
    },
    textinputcontainer: {
        borderColor: graycolor,
        borderTopWidth: .5,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        width: width - 30,
        alignSelf: "center",
        borderTopLeftRadius: 10,
        paddingHorizontal: 15,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'transparent'
    },
    textinput: {
        fontFamily: simpletext,
        fontSize: 14,
        color: '#FFF',
        height: 40,
    },
    text: {
        color: graycolor,
        fontFamily: simpletext,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
        marginHorizontal: 10,
    },
    ispasswordIcon: {
        position: "absolute",
        alignSelf: "flex-end",
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        height: 70
    },
    faceidsignin: {
        flexDirection: "row",
        width: width - 40,
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center"
    },
    LinearGradient: {
        width: 80,
        height: 30,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8,
        borderRadius: 8
    }
})
