import React, { useState } from 'react';
import { StatusBar, Text, Dimensions, View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import CustomText from '../../components/Text'
import CustomButton from '../../components/Button'
import { Container, Content } from 'native-base'
const { width, height } = Dimensions.get("window");
import { BackgroundColor, graycolor } from '../../constants/colors';
import ImagePicker from 'react-native-image-crop-picker';
import { simpletext } from '../../constants/fonts';
import { mystyles } from '../../styles';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";

const UploadImageScreen = ({ navigation, route }) => {
  const userTokenTest = useSelector(state => state.onboarding?.userTokenTest);

  var decoded = jwt_decode(userTokenTest?.access_token);
  var email = decoded?.user_name

  console.log('imageeee', route.params?.cloudImage);
  const gotonextScreen = async (email) => {
    navigation.navigate("KycNeed")
    if (userTokenTest && route.params?.cloudImage) {


      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userTokenTest?.access_token}`,
        },
        body: JSON.stringify({
          webId: userTokenTest?.userId,
          email: email,
          userNumber: null,
          firstName: userTokenTest?.name,
          lastName: '',
          surName: null,
          password: null,
          birthday: null,
          phoneNumber: null,
          phoneCarrier: '0',
          gender: null,
          streetAddress: null,
          state: null,
          city: null,
          country: null,
          pictureUrl: route.params?.cloudImage,
          currentLang: null,
          visibility: 1,
          currencyConversion: null,
          privacyCurrency: null,
          privacyMode: null,
          partcpMetamatric: null,
          getTransactions: null,
          accountId: null,
          ethAddress: null,
          btcAddress: null
        })
      };

      try {
        const response = await fetch(`https://ginkopay-crypto.herokuapp.com/api/user/${userTokenTest?.userId}`, options);
        switch (response.status) {
          case 200:
            Toast.show('User has been Updated', { textColor: 'grey', duration: Toast.durations.SHORT });
            const response = await response.json();
            if (response) {
              dispatch(Actions.updateUser(response))
            }
            return;
          default:
            throw new Error('Some error occured');
        }
      } catch (e) {
        console.log('e', e);
        throw e;
      }


    }else{
      Toast.show('Please select image', { textColor: 'grey', duration: Toast.durations.SHORT });
    }
  }

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    }).catch((error) => {
      console.log(error)
    })
  }

  StatusBar.setHidden(true)

  return (
    <SafeAreaView style={[mystyles.container, { width: width }]}>
      <Content contentContainerStyle={{ flexGrow: 1, width: width, backgroundColor: "#17171A" }}>
        <View style={{ height: height / 10 }}></View>
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
          style={styles.bgimage}
        >
          <Image source={{ uri: route.params.image }} style={styles.image} />
          <TouchableOpacity
            onPress={() => { openPicker() }}
            style={{
              backgroundColor: "#2A2D3C",
              borderRadius: 5,
              width: 200,
              marginTop: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <CustomText text={"Another One"} locations={[0, 1]} colors={["#70A2FF", "#F76E64"]}
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ position: "absolute", bottom: 20, }}>
          <CustomButton text={"Next"} onPress={() => gotonextScreen(email)} />
        </View>
      </Content>
    </SafeAreaView>
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
  bgimage: {
    width: width - 40,
    justifyContent: "center",
    alignItems: "center",
    height: height / 2,
    alignSelf: "center",
  },
  image: {
    width: 150,
    borderRadius: 15,
    height: 200
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