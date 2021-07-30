import React from 'react';
import { View,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get("screen");
const ThreeDots = (props) => {
   return (
     <TouchableOpacity style={styles.container}>
         <View style={{...styles.view, backgroundColor:props.color==="one"?"gold":"gray" }} />
         <View style={{...styles.view,backgroundColor:props.color==="two"?"gold":"gray"  }} />
         <View style={{...styles.view,backgroundColor:props.color==="three"?"gold":"gray"  }} />
     </TouchableOpacity>
   );
 
 }; 

 export default ThreeDots;
 const styles = StyleSheet.create({
   container:{
     width:50,
     alignSelf:"center",
     justifyContent:"space-around",
     flexDirection:"row",
     marginBottom:height/20,
     marginTop:height/15,
   },
   view:{
       width:8, 
       height:8,
       borderRadius:10,
   }
 })
 