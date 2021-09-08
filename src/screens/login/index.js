import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import TextInputFloat from '../../components/TextInput'
import CustomButton from '../../components/Button'
import { Content } from 'native-base'
import styles, { width } from './styles'
import { bluetext, lightgray, lightWhite, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors'
import { simpletext, boldtext } from '../../constants/fonts'
import ToggleButton from '../../components/ToggleButton'
import * as Actions from './../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-root-toast';
import MyComponent from '../../components/TextInput';
import { mystyles } from '../../styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SliderScreenOne = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState(false)
  const [emailerror, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passworderror, setPassworderror] = useState("")
  const [ispasswordVisible, setispasswordVisible] = useState(true);
  const [secureTextEntry, setsecureTextEntry] = useState(true)
  const [check, uncheck] = useState(false);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const gotonextScreen = () => {
    if (email && password) {
      if (!validateEmail(email.trim())) {
        Toast.show("Invalid Email Address", { textColor: 'grey', duration: Toast.durations.SHORT },);
      } else if (password.length < 6) {
        Toast.show("Must be atlest 6 characters", { textColor: 'grey', duration: Toast.durations.SHORT });
      } else {
        dispatch(Actions.userLogin(email.trim(), password))

      }
    } else {
      Toast.show("Please fill all fields!", { textColor: 'grey', duration: Toast.durations.SHORT });
    }
  }
  const ForgotPasswordHandler = () => {
    navigation.navigate('ForgotPassword')
  }
  return (
    <SafeAreaView style={mystyles.container}>
      <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
        <Image source={require("../../assets/spalsh_text.png")} resizeMode="contain" style={mystyles.ginkoPayImg} />
        <TextInputFloat
          label="Email Address"
          value={email}
          setValue={setEmail}
          error={emailerror}
          secureTextEntry={false}
          placeholder="Choose your name"
          setispasswordVisible={setispasswordVisible}
          ispasswordVisible={false}
        />
        <TextInputFloat
          label="Password"
          value={password}
          setValue={setPassword}
          error={passworderror}
          placeholder="Choose your password"
          secureTextEntry={secureTextEntry}
          setispasswordVisible={setispasswordVisible}
          ispasswordVisible={ispasswordVisible}
        />

        <TouchableOpacity onPress={() => ForgotPasswordHandler()} style={{ marginHorizontal: 10 }}>
          <Text style={Loginstyles.signowText}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={Loginstyles.signWithFaceIdView}>
          <Text style={Loginstyles.signInWithFaceIdText}>Sign in with Face ID?</Text>
          <ToggleButton check={check} unchecked={uncheck} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("CreataAccount")} style={{ width: width - 40, }}>
          <Text style={{ color: lightgray, alignSelf: "center", fontSize: 14, fontFamily: simpletext, marginBottom: 15, marginTop: 45, }}>Don't Have an account? <Text style={Loginstyles.signowText}>Sign up now</Text>  </Text>
        </TouchableOpacity>

        {resetPassword ?
          <View style={Loginstyles.PasswordChangedSuccessView}>
            <View style={Loginstyles.greenCircleView}>
              <Image style={{ width: 15, height: 15 }} resizeMode="contain" source={require('../../assets/greenTick.png')} />
            </View>

            <View>
              <Text style={{ color: '#FFFF', fontFamily: 'Poppins-Regular' }}>Password changed successfully!</Text>
              <TouchableOpacity>
                <Text style={{ color: lightWhite, fontFamily: 'Poppins-Regular' }}>Sign in with your new password</Text>
              </TouchableOpacity>
            </View>
          </View> :
          <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
            <CustomButton text={"Login"} onPress={gotonextScreen} />
          </View>
        }






      </Content>
    </SafeAreaView>

  );

};
export default SliderScreenOne;

const Loginstyles = StyleSheet.create({
  signWithFaceIdView: {
    flexDirection: "row",
    marginHorizontal: 10,
    // alignSelf: 'center',
    width: width - 40,
    justifyContent: "space-between",
    alignItems: "center"
  },
  signInWithFaceIdText: {
    color: "#fff", fontFamily: boldtext, fontSize: 16
  },
  signowText: {
    color: bluetext, textDecorationLine: "underline", fontFamily: simpletext
  },
  PasswordChangedSuccessView: {
    flexDirection: 'row',
    width: width - 50,
    borderRadius: 10,
    paddingVertical: hp(2),
    alignItems: 'center',
    backgroundColor: ' rgba(118, 226, 104, 0.08)',
    alignSelf: 'center'
  },
  greenCircleView: {
    marginHorizontal: 5,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#76E268'
  }
})
