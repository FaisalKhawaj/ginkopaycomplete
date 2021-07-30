import React, {useState} from 'react';
import {Button, Text,Dimensions,StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import { BackgroundColor, graycolor } from '../constants/colors';
import { boldtext, simpletext } from '../constants/fonts';
import CustomButton from './Button'
const {width, height} = Dimensions.get("window");
import { Container,  Content,  Item, Input, Label } from 'native-base'
const  ChnagePasswordModal = ({isModalVisible,setModalVisible,toggleModal}) =>  {
 
  const [password, setPassword] = useState("")
  
  return (
      <Modal 
        isVisible={isModalVisible}
        backdropOpacity={.4}
        style={styles.modal}
        useNativeDriver={true}
        >
        <Content style={styles.mainview} contentContainerStyle={{flex:1, alignItems:"center",justifyContent:"flex-end"}}>
            <View style={{backgroundColor:BackgroundColor, justifyContent:"center",paddingBottom:20, flex:.6,alignItems:"center"}}>
            <Text style={{color:"#fff" ,fontSize:16, marginVertical:20, fontFamily:boldtext }}>Confirm your password</Text>
            <Text style={styles.graytext}>
              Do not save your password automaticly on your browser. 
            </Text>
            <Text style={styles.graytext}>
              <Text style={{color:"#EA3943"}}>DO NOT</Text> share this password with anyone! These words can be used to steal all your accounts
            </Text>
            <View style={styles.textinputmaincontainer}>
              <Item stackedLabel 
                style={styles.textinputcontainer}>
                <Label style={{color:graycolor, fontFamily:simpletext, fontSize:14,}}>Enter password to continue</Label>
                <Input 
                  placeholder="Enter new password"
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  style={styles.textinput}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </Item>
              
          </View>
          <CustomButton text={"I Got it"} onPress ={() => setModalVisible()} />
          </View>
        </Content>

      </Modal>
  );
}

export default ChnagePasswordModal;

const styles = StyleSheet.create({
  modal:{
    width:width,
    marginLeft:0,
    marginRight:0,
  },
  mainview:{
    flex: 1,
    width:width,
    height:height , 
    backgroundColor:"transparent",
    },
    graytext:{
      color:"#C3C6D5" , 
      marginVertical:10, 
      marginBottom:30, 
      paddingHorizontal:20, 
      textAlign:"left", 
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