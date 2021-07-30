import React,{useEffect, useState} from 'react';
import { Text,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { LinearGradientColorOne,transparent, LinearGradientColorTwo } from '../constants/colors';
const window  = Dimensions.get("window");
import {boldtext, fontmedium, simpletext } from '../constants/fonts'
const CustomButton = (props) => {
  const [dimensions, setDimensions] = useState({ window  });
  useEffect(() => {
    const onChange = ({  window  }) => {
      setDimensions({ window  });
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

   return (
    <LinearGradient 
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
      style={{...styles.container, width:dimensions.window.width-20}}>
      <TouchableOpacity style={{...styles.container, width:dimensions.window.width-20}} onPress={() => props.onPress()}>
          <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
     </LinearGradient>
   );
 
 }; 

 export default CustomButton;
 const styles = StyleSheet.create({
   container:{
     alignSelf:"center",
     height:50,
     justifyContent:"center",
     alignItems:"center",
     borderRadius:8,
     backgroundColor:transparent
   },
   text:{
      fontSize:18,
      fontFamily:boldtext,
      color:"rgba(0,0,0,.9)"
   }
 })
 