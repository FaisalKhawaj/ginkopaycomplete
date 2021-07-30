import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {StyleSheet,Text,Dimensions, View, Touchable, TouchableOpacity} from 'react-native'
import { BackgroundColor, graycolor,  } from '../constants/colors';
import {fontmedium, simpletext} from '../constants/fonts'
import Feather from 'react-native-vector-icons/Feather'
const {width, height} = Dimensions.get("window")
const MyComponent = ({label, value , setValue , error ,placeholder, secureTextEntry, ispasswordVisible,setispasswordVisible }) => {
  
  return (
    <View style={{height:90, width:width, marginTop:5, backgroundColor:BackgroundColor}}>
        <TextInput
            label={label}
            theme={{ 
              colors:{ 
                  primary:graycolor,                    
                  placeholder :graycolor,
                  text:graycolor,
                  underlineColor:'transparent',
              }
            }}
            mode="outlined"
            placeholder={placeholder}
            error={error.length === 0 ?false:true}
            value={value}
            secureTextEntry={ispasswordVisible}
            style={styles.textinput}
            onChangeText={text => setValue(text)}
        />
        {secureTextEntry?
        <TouchableOpacity style={styles.ispasswordIcon} 
          onPress={() => setispasswordVisible(!ispasswordVisible)}>
          {ispasswordVisible? 
          <Feather name="eye" size={28} color="#fff" />:
          <Feather name="eye-off" size={28} color="#fff" />
          }
          
        </TouchableOpacity>
        :null}
        <Text style={{color:"red",marginHorizontal:20,fontFamily:simpletext, fontSize:12}} >{error}</Text>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  textinput:{
    backgroundColor:BackgroundColor, 
    fontFamily:fontmedium,
    color:graycolor, 
    marginHorizontal:10, 
    height:60, 
    borderWidth:0,
    borderBottomColor:"green", 
    borderRadius:10
  },
  ispasswordIcon:{
    position:"absolute", 
    alignSelf:"flex-end" , 
    width:100, 
    alignItems:"center", 
    justifyContent:"center", 
    height:70
  }
})  