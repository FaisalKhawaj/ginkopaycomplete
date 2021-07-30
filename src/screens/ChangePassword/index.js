
import React, {useState, useEffect} from 'react';
import { View,  StatusBar,Text,Dimensions,StyleSheet, TouchableOpacity } from 'react-native';
import { Container,  Content,  Item, Input, Label } from 'native-base'
import {Checkbox  } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'
import { bluetext,graycolor, LinearGradientColorOne,LinearGradientColorTwo, BackgroundColor } from '../../constants/colors';
import CustomButton from '../../components/Button'
import BackBtnWithMiddleText from '../../components/HeaderBackTextClose'
import ChangePaswordModal from '../../components/ChangePaswordModal'
import Feather from 'react-native-vector-icons/Feather'
import { boldtext, fontmedium, simpletext } from '../../constants/fonts';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
const {width, height} = Dimensions.get("window");

 const CreateAccountScreen = ({navigation}) => {
  const [password, setPassword] = useState("")
  const [passowrderror, setPasswordError] = useState("")
  const [ispasswordVisible, setispasswordVisible] = useState(false);

  const [confrimpassword, setConfirmPassword] = useState("")
  const [confirmpasswordwrror, setConfirmPassordError] = useState("")

  const [isconfirmpasswordvisible, setisconfirmpasswordvisible] = useState(false);
  

  const [checked, setChecked] = React.useState(false);
  
  const [isModalVisible, setModalVisible] = useState(true);
  const [LoadChangingPassword, setLoadChangingPassword]  = useState(false);
  const [privaytoggle, setPrivacyToggle] = useState(false)
  
  
  
  
  
  
  
  
  
  
  const toggleModal = () => {     
    setModalVisible(false);
    setLoadChangingPassword(true)
    setTimeout(() => {
        setLoadChangingPassword(false)
    }, 3000);
  };


  const gotonextScreen = () => {
    setModalVisible(false);
    setLoadChangingPassword(true)
    setTimeout(() => {
        setLoadChangingPassword(false)
        navigation.goBack();
    }, 3000);
   // navigation.goBack();
  }

   StatusBar.setHidden(true)

   return (
     <Container style={styles.container}>
        <BackBtnWithMiddleText text="Security & Privacy" setShowBannerModal={gotonextScreen} closeModal={gotonextScreen} />
        <Content style={{flexGrow:1}} contentContainerStyle={{paddingBottom:20}} >
          <Text style={styles.createaccount}> Change Password</Text>
          <View style={styles.textinputmaincontainer}>
            <Item stackedLabel 
              style={styles.textinputcontainer}>
              <Label style={{color:graycolor, fontFamily:simpletext, fontSize:14,}}>New Password</Label>
              <Input 
                placeholder="Enter new password"
                placeholderTextColor="#fff"
                secureTextEntry={isconfirmpasswordvisible}
                style={styles.textinput}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity style={styles.ispasswordIcon} 
                  onPress={() => setisconfirmpasswordvisible(!isconfirmpasswordvisible)}> 
                  {isconfirmpasswordvisible?
                  <Feather name="eye" size={28} color="#fff" />:
                  <Feather name="eye-off" size={28} color="#fff" />}
                 
             </TouchableOpacity>
            </Item>
            <Text style={styles.text}>Password strength:  <Text style={{color:bluetext}}>Good</Text></Text>
          </View>

          <View style={styles.textinputmaincontainer}>
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
          </View>
          

          <View style={styles.faceidsignin}>
              <Text style={{color:"#fff", fontFamily:fontmedium, fontSize:16}}>Sign in with Face ID?</Text>
              <View style={{position:"absolute",zIndex:20,right:0, alignSelf:"flex-end"}}>   
                  <LinearGradient 
                    onPress={() => setPrivacyToggle(!privaytoggle)}
                      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                      colors={[ "#70A2FF","#F76E64"]} 
                      style={{...styles.LinearGradient, alignItems:privaytoggle?"flex-end":"flex-start"}}
                  >
                      <TouchableOpacity onPress={() => setPrivacyToggle(!privaytoggle)}  style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}} />
                  </LinearGradient>    
              </View>
           </View>
          
          <View style={{flexDirection:"row", marginVertical:10,marginBottom:50, width:width-60,alignSelf:"center" }}>
              <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  uncheckedColor={graycolor}
                  color={LinearGradientColorOne}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                
                <Text style={{color:graycolor, fontFamily:simpletext, marginHorizontal:15,}}>I understand that GinkoPay cannot recover this password for me
                <Text style={{color:bluetext,fontFamily:simpletext, }} onPress={() => toggleModal()} > Term and Conditions.</Text></Text>
          </View>
          <CustomButton text={"Change Password"} onPress ={() => gotonextScreen()} />
        </Content>
            <ChangePaswordModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} toggleModal={toggleModal} />
            <Modal 
                 isVisible={LoadChangingPassword}
                 backdropOpacity={.4}
                 style={modalstyles.modal}
                 useNativeDriver={true}
            >
                <Content style={modalstyles.mainview} contentContainerStyle={{flex:1, justifyContent:"flex-end"}}>
                <BackBtnWithMiddleText text="Change Password" setShowBannerModal={gotonextScreen} closeModal={gotonextScreen} />
                    <View style={{backgroundColor:BackgroundColor, flex:1}}>
                        
                        <LottieView source={require('../../styles/lotties.json')} autoPlay loop style={{width:200, height:400}} />
                        <Text style={modalstyles.whitetext}>Changing Password</Text>
                        <Text style={modalstyles.graytext}>You will have to Login again with your new password.</Text>
                    </View>
                </Content>
            </Modal>
     </Container>
   );
 
 }; 
 export default CreateAccountScreen;

 const styles = StyleSheet.create({
    container:{
      
      backgroundColor:BackgroundColor
    },
    createaccount:{
      color:bluetext, 
      marginVertical:10,
      fontSize:14, 
      marginTop:40,
      fontFamily:boldtext, 
      alignSelf:"center"
    },
    textinputmaincontainer:{
      width:width-30, 
      alignSelf:"center",
      marginVertical:10,
    },
    textinputcontainer:{
      borderColor:graycolor,
      borderTopWidth:.5,
      borderLeftWidth:.5, 
      borderRightWidth:.5, 
      borderBottomWidth:.5, 
      width:width-30, 
      alignSelf:"center", 
      borderTopLeftRadius:10,
      paddingHorizontal:15,
      borderTopRightRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      backgroundColor:'transparent' 
    },
    textinput:{
      fontFamily:simpletext,
      fontSize:14,
      color: '#FFF',
      height:40,
    },
    text:{
      color:graycolor , 
      fontFamily:simpletext,
      paddingHorizontal:10, 
      alignSelf:"flex-start", 
      marginHorizontal:10,
    },
    ispasswordIcon:{
      position:"absolute", 
      alignSelf:"flex-end" , 
      width:80, 
      alignItems:"center", 
      justifyContent:"center", 
      height:70
    },
    faceidsignin:{
      flexDirection:"row", 
      width:width-40, 
      marginVertical:30,
      alignSelf:"center", 
      justifyContent:"space-between", 
      alignItems:"center"
    },
    LinearGradient:{
      width:60, 
      height:30, 
      justifyContent:"center", 
      alignItems:"flex-end", 
      paddingHorizontal:8, 
      borderRadius:8
    }
 })

 
const modalstyles = StyleSheet.create({
    modal:{
      width:width,
      marginLeft:0,
      marginRight:0,
    },
    mainview:{
      flex: 1,
      width:width,
      height:height , 
      backgroundColor:BackgroundColor,
      },
      graytext:{
        color:"#C3C6D5" , 
        marginVertical:10, 
        marginBottom:30, 
        paddingHorizontal:20, 
        textAlign:"center", 
        fontSize:14, 
        fontFamily:simpletext
      },
      whitetext:{
        color:"#ffffff" , 
        marginVertical:10, 
        marginBottom:30, 
        paddingHorizontal:20, 
        textAlign:"center", 
        fontSize:16, 
        fontFamily:simpletext
      },
      textinputmaincontainer:{
        width:width-30, 
        alignSelf:"center",
        marginVertical:10,
      },
      textinputcontainer:{
        borderColor:graycolor,
        borderTopWidth:.5,
        borderLeftWidth:.5, 
        borderRightWidth:.5, 
        borderBottomWidth:.5, 
        width:width-30, 
        alignSelf:"center", 
        borderTopLeftRadius:10,
        paddingHorizontal:15,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'transparent' 
      },
      textinput:{
        fontFamily:simpletext,
        fontSize:14,
        color: '#FFF',
        height:40,
      },
  })
 
