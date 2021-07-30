import React from 'react';
import { View,  StatusBar,Text,Dimensions, Image,StyleSheet } from 'react-native';
import CustomButton from '../../components/Button'
import {Container, Content} from 'native-base'
import Header from '../../components/CreateAccountHeader'
import { bluetext, graycolor } from '../../constants/colors';
import { BackgroundColor } from '../../constants/colors';
const {width, height} = Dimensions.get("window");
import { TouchableOpacity } from 'react-native-gesture-handler';
import { boldtext, fontmedium } from '../../constants/fonts';
 const SliderScreenOne = ({navigation}) => {
   StatusBar.setHidden(true)
   const gotonextScreen = () => {
     navigation.navigate("DashBoardScreen")
   }
   return (
     <Container style={styles.container}>
        <Header num={3} />
         <Content style={{flexGrow:1}} 
         contentContainerStyle={styles.contentContainerStyle}  >
          <Image source={require("../../assets/kycneed.png")} style={{width:300, height:300, resizeMode:"cover"}} />
          <Text style={styles.heading}>KYC Needed</Text>
          <Text style={styles.paragraph}>Duo the regulations we will need to ask you for your documents, so we can allow you to use our features. Your document will be only used for verification and will NOT be sent to 3rd parties. Here is the link:</Text>
          <TouchableOpacity>
             <Text style={styles.link}> https://ginkopay.sb.getid.dev/vp/getid-doc-selfie-liveness</Text>
          </TouchableOpacity>
       </Content>
       <View style={{position:"absolute", alignSelf:"center", bottom:20,}}>
            <CustomButton text={"Remind Me later"} onPress={gotonextScreen} />
          </View>
     </Container>
   );
 
 }; 
 export default SliderScreenOne;

  const styles= StyleSheet.create({
      container:{
        flex:1,
        width:width,
        height:height,
        backgroundColor:BackgroundColor
      },
      contentContainerStyle:{
        justifyContent:"space-evenly", 
        alignItems:"center"
      },
      heading:{
        color:"#fff",
        fontSize:16,
        fontFamily:boldtext, 
        marginVertical:10, 
        textAlign:"center"
      },
      paragraph:{
        color:graycolor,
        marginVertical:15, 
        textAlign:"left", 
        paddingHorizontal:15
      },
      link:{
        color:bluetext, 
        fontSize:16, 
        fontFamily:fontmedium, 
        paddingHorizontal:15
      }
  })
 