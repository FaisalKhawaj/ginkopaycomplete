// import React from 'react';
// import { View, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
// import { Content } from 'native-base'
// import CustomText from '../../components/Text'
// import CustomButton from '../../components/Button'
// import ThreeDots from '../../components/ThreeDots'
// import styles, { width } from './styles'
// const SliderScreenOne = ({ navigation }) => {
//   StatusBar.setHidden(true)
//   const gotonextScreen = () => {
//     navigation.navigate("CreateAccountIntro")
//   }
//   return (
//     <SafeAreaView style={styles.container}>

//       <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
//         {/* <ScrollView>
//             <View style={{...styles.container,  paddingBottom:50,paddingHorizontal:30,}}> */}
//         <Image source={require("../../assets/slider3.png")}
//           resizeMode="cover"
//           style={{ width: width / 1.3, height: width / 1.3, alignSelf: 'center', }} />
//         <CustomText
//           text={"Buy, sell \n & exchange"}
//           locations={[0, .3, 4, 5, 100]} colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
//           style={{ fontSize: 40, textAlign: "center" }}
//         />
//         <ThreeDots color={"three"} />
//         <CustomButton text={"Next"} onPress={gotonextScreen} />
//         {/* </View>
//         </ScrollView> */}
//       </Content>

//     </SafeAreaView>
//   );

// };
// export default SliderScreenOne;
