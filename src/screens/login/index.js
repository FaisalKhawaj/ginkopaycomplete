import React,{useState} from 'react';
import { View,  SafeAreaView, ScrollView, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import TextInputFloat from '../../components/TextInput'
import CustomButton from '../../components/Button'
import styles,{width} from './styles'
import { bluetext, lightgray, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors'
import {simpletext, boldtext} from '../../constants/fonts'
import ToggleButton from '../../components/ToggleButton' 
const SliderScreenOne = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [emailerror , setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passworderror, setPassworderror] = useState("")
  const [ispasswordVisible, setispasswordVisible] = useState(true);
  const [secureTextEntry, setsecureTextEntry] = useState(true)
  const [check, uncheck] = useState(false);
  const gotonextScreen = () => {
     navigation.navigate("DashBoardScreen")
  }

   return (
      <SafeAreaView style={styles.container}>
          <ScrollView >
              <View style={{...styles.container, paddingBottom:70}}  >
                <Image source={require("../../assets/spalsh_text.png")} style={{width:width/1.3, height:width/2.3, resizeMode:"contain"}} />
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
                
                <View style={{flexDirection:"row", width:width-40, justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{color:"#fff",fontFamily:boldtext,fontSize:20}}>Sign in with Face ID?</Text>
                    <ToggleButton check={check} unchecked={uncheck} />
                </View>
              
                <TouchableOpacity onPress={() => navigation.navigate("CreataAccount")} style={{width:width-40,}}>
                    <Text style={{color:lightgray,alignSelf:"center", fontSize:14,fontFamily:simpletext, marginBottom:15,marginTop:45, }}>Don't Have an account? <Text style={{color:bluetext, fontFamily:simpletext}}>Sign up now</Text>  </Text>    
                </TouchableOpacity>
              
                <View style={{position:"absolute", bottom:20, alignSelf:"center"}}>
                <CustomButton  text={"Login"} onPress={gotonextScreen} />
              </View>
              </View>
              
          </ScrollView>
      </SafeAreaView>
    
   );
 
 }; 
 export default SliderScreenOne;
 