import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import TextInputFloat from '../../components/TextInput'
import CustomButton from '../../components/Button'
import { Content } from 'native-base'
import styles, { width } from './styles'
import { bluetext, lightgray, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors'
import { simpletext, boldtext } from '../../constants/fonts'
import ToggleButton from '../../components/ToggleButton'
import * as Actions from './../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-root-toast';

const SliderScreenOne = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
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

  return (
    <SafeAreaView style={styles.container}>
      <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
        <Image source={require("../../assets/spalsh_text.png")} style={{ width: width / 1.3, alignSelf: 'center', height: width / 2.3, resizeMode: "contain" }} />
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

        <View style={{ flexDirection: "row", alignSelf: 'center', width: width - 40, justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ color: "#fff", fontFamily: boldtext, fontSize: 16 }}>Sign in with Face ID?</Text>
          <ToggleButton check={check} unchecked={uncheck} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("CreataAccount")} style={{ width: width - 40, }}>
          <Text style={{ color: lightgray, alignSelf: "center", fontSize: 14, fontFamily: simpletext, marginBottom: 15, marginTop: 45, }}>Don't Have an account? <Text style={{ color: bluetext, textDecorationLine: "underline", fontFamily: simpletext }}>Sign up now</Text>  </Text>
        </TouchableOpacity>

        <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
          <CustomButton text={"Login"} onPress={gotonextScreen} />
        </View>
      </Content>
    </SafeAreaView>

  );

};
export default SliderScreenOne;
