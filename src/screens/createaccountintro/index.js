import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import CustomText from '../../components/Text'
import { Content } from 'native-base'
import CustomButton from '../../components/Button'
import styles, { width, height } from './styles'
import { bluetext, graycolor } from '../../constants/colors';
import { simpletext } from '../../constants/fonts';
const SliderScreenOne = ({ navigation }) => {
  StatusBar.setHidden(true)
  const gotonextScreen = () => {
    navigation.navigate("CreataAccount")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
        <Image source={require("../../assets/slider4.png")} style={{ width: width / 1.3, height: width / 1.3, alignSelf: 'center', resizeMode: "cover" }} />
        <CustomText
          text={"Your own\nCrypto Wallet"}
          locations={[0, .3, .4, .5, 1]} colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
          style={{ fontSize: 40, textAlign: "center" }}
        />
        <View style={{ height: 50 }} />
        <CustomButton text={"Create a new Wallet"} onPress={gotonextScreen} />
        <View style={{ height: 20 }} />
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: graycolor, fontFamily: simpletext }}>You have an account?
                        <Text style={{ color: bluetext, fontFamily: simpletext, }}> Sign in</Text>
          </Text>
        </TouchableOpacity>
      </Content>
    </SafeAreaView>
  );

};
export default SliderScreenOne;
