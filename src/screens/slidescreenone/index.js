// import React, { useEffect } from 'react';
// import { View, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
// import CustomText from '../../components/Text'
// import { Content } from 'native-base'
// import CustomButton from '../../components/Button'
// import ThreeDots from '../../components/ThreeDots'
// import styles, { width, height } from './styles'
// import SplashScreen from 'react-native-splash-screen'
// const SliderScreenOne = ({ navigation }) => {
//   useEffect(() => {
//     SplashScreen.hide()
//   }, [])
//   StatusBar.setHidden(true)
//   const gotonextScreen = () => {
//     navigation.navigate("SliderScreenTwo")
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <ScrollView> */}
//       <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
//         {/* <View style={{ ...styles.container, paddingBottom: 60,
//            paddingHorizontal: 30, }} > */}
//         <Image source={require("../../assets/slider1.png")} style={{
//           width: width / 1.3, alignSelf: 'center',
//           height: width / 1.3,
//         }}
//           resizeMode="cover"
//         />
//         <CustomText
//           text={"For the gamers \n and streamers"}
//           locations={[0, .3, 4, 5, 100]} colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
//           style={{ fontSize: 40, textAlign: "center" }}
//         />
//         <ThreeDots color={"one"} />
//         <CustomButton text={"Next"} onPress={gotonextScreen} />
//         {/* </View> */}
//       </Content>
//       {/* </ScrollView> */}
//     </SafeAreaView>
//   );

// };
// export default SliderScreenOne;

