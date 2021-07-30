import React, { useState } from 'react';
import { View, StatusBar, Text, Dimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../../components/Text'
import CustomButton from '../../components/Button'
import Header from '../../components/CreateAccountHeader'
import { Container, Content } from 'native-base'
const { width, height } = Dimensions.get("window");
import { BackgroundColor, graycolor } from '../../constants/colors';
import ImagePicker from 'react-native-image-crop-picker';
import { simpletext } from '../../constants/fonts';

const UploadImageScreen = ({ navigation }) => {

  const gotonextScreen = () => {
    navigation.navigate("KycNeed")
  }

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setProfileImg(image.path)
      navigation.navigate("UploadedImage", { image: image.path })
    }).catch((error) => {
      console.log(error)
    })
  }
  StatusBar.setHidden(true)

  return (
    <Container style={styles.container}>
      <Header num={2} />
      <Content style={{ flexGrow: 1 }}  >

        <CustomText
          text={"Upload your Profile Picture"}
          style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          locations={[0, 1, 2, 3, 4]}
          colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
        />
        <Text style={styles.paragraph}>“One of the marvelous things about community is that it enables us to welcome and help people in a way we couldn't as individuals.” – Jean Vanier</Text>
        <ImageBackground
          source={require("../../assets/uploadbackground.png")}
          resizeMode="contain"
          style={{ width: width - 40, justifyContent: "flex-start", paddingTop: height / 5, alignItems: "center", height: height / 2, alignSelf: "center", }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16, }}>Upload</Text>
          <Text style={{ color: graycolor, fontSize: 13 }}>Make sure your picture has good quality</Text>
          <TouchableOpacity
            onPress={() => { openPicker() }}
            style={styles.upload}>
            <CustomText text={"Upload"}
              locations={[0, 1]}
              colors={["#70A2FF", "#F76E64"]}
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} />
          </TouchableOpacity>
        </ImageBackground>
      </Content>
      <View style={{alignSelf:"center", position:"absolute", bottom:20}}>
          <CustomButton text={"skip"} onPress={() => gotonextScreen()} />
      </View>
    </Container>
  );

};
export default UploadImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColor
  },
  paragraph: {
    color: graycolor,
    fontStyle: "italic",
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: "center", fontFamily: simpletext
  },
  upload: {
    backgroundColor: "#2A2D3C",
    borderRadius: 5,
    width: 100,
    marginTop: height / 7,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
})
