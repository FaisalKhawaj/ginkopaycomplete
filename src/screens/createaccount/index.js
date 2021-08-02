
import React, { useState } from 'react';
import { View, StatusBar, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Item, Input, Label } from 'native-base'
import { Checkbox } from 'react-native-paper';
import { bluetext, graycolor, LinearGradientColorOne, LinearGradientColorTwo, BackgroundColor } from '../../constants/colors';
import CustomButton from '../../components/Button'
import Header from '../../components/CreateAccountHeader'
import Modal from '../../components/TermsAndConditionModal'
import Feather from 'react-native-vector-icons/Feather'
import { boldtext, fontmedium, simpletext } from '../../constants/fonts';
import ToggleButton from '../../components/ToggleButton'
const { width, height } = Dimensions.get("window");

const CreateAccountScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState("");

  const [name, setName] = useState("")
  const [nameerror, setNameError] = useState("")

  const [password, setPassword] = useState("")
  const [passowrderror, setPasswordError] = useState("")
  const [ispasswordVisible, setispasswordVisible] = useState(true);

  const [confrimpassword, setConfirmPassword] = useState("")
  const [confirmpasswordwrror, setConfirmPassordError] = useState("")

  const [isconfirmpasswordvisible, setisconfirmpasswordvisible] = useState(true);


  const [checked, setChecked] = React.useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [check, uncheck] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const gotonextScreen = () => {
    navigation.navigate("UploadImage")
  }

  StatusBar.setHidden(true)

  return (
    <Container style={styles.container}>
      <Header num={1} navigation={navigation} />
      <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={{ paddingBottom: 100, backgroundColor: BackgroundColor }} >
        <Text style={styles.createaccount}> Create Your Acccount</Text>

        <View style={styles.textinputmaincontainer}>
          <Item stackedLabel
            style={styles.textinputcontainer}>
            <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>Username</Label>
            <Input
              placeholder="Choose your name"
              placeholderTextColor="#fff"
              style={styles.textinput}
              textColor="#fff"
              value={name}
              onChangeText={text => setName(text)}
            />
          </Item>
          <Text style={styles.text}>Username <Text style={{ color: bluetext }}>Available</Text></Text>
        </View>

        <View style={styles.textinputmaincontainer}>
          <Item stackedLabel
            style={styles.textinputcontainer}>
            <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>Email address</Label>
            <Input
              placeholder="Enter your email adress"
              placeholderTextColor="#fff"
              style={styles.textinput}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </Item>

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
              {isconfirmpasswordvisible ?
                <Feather name="eye" size={28} color="#fff" /> :
                <Feather name="eye-off" size={28} color="#fff" />}

            </TouchableOpacity>
          </Item>
          <Text style={styles.text}>Password strength:  <Text style={{ color: bluetext }}>Good</Text></Text>
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

        {/* <View style={styles.textinputmaincontainer}>
            <Item stackedLabel 
              style={styles.textinputcontainer}>
              <Label style={{color:graycolor, fontFamily:simpletext, fontSize:14,}}>New Password</Label>
              <Input 
                placeholder="Confirm password"
                placeholderTextColor="#fff"
                secureTextEntry={ispasswordVisible}
                style={styles.textinput}
                value={confrimpassword}
                onChangeText={text => setConfirmPassword(text)}
              />
              <TouchableOpacity style={styles.ispasswordIcon} 
                  onPress={() => setispasswordVisible(!ispasswordVisible)}> 
                  {ispasswordVisible?
                  <Feather name="eye" size={28} color="#fff" />:
                  <Feather name="eye-off" size={28} color="#fff" />}
                 
             </TouchableOpacity>
            </Item>
            <Text style={styles.text}>Must be at least 8 characters </Text>
          </View> */}


        <View style={styles.faceidsignin}>
          <Text style={{ color: "#fff", fontFamily: fontmedium, fontSize: 16 }}>Sign in with Face ID?</Text>
          <ToggleButton check={check} unchecked={uncheck} />
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10, width: width - 20, alignSelf: "center" }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            uncheckedColor={graycolor}
            color={LinearGradientColorOne}
            onPress={() => {
              setChecked(!checked);
            }}
          />

          <Text style={{ color: graycolor, fontFamily: simpletext, marginHorizontal: 15, }}>By proceeding, you agree to these
                <Text style={{ color: bluetext, fontFamily: simpletext, }} onPress={() => toggleModal()} > Term and Conditions.</Text></Text>
        </View>
        <View style={{ position: "absolute", alignSelf: "center", backgroundColor: BackgroundColor, bottom: 20, }}>
          <CustomButton text={"Create Password"} onPress={() => gotonextScreen()} />
        </View>
      </ScrollView>

      <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} toggleModal={toggleModal} />
    </Container>
  );

};
export default CreateAccountScreen;

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


