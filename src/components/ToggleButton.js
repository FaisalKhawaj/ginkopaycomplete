import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'
const ToggleButton = ({check, unchecked}) => {
  return (
       <TouchableOpacity onPress={() => unchecked(!check)} style={styles.LinearGradient} >
            <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[ "#70A2FF","#F76E64"]} 
                style={{...styles.LinearGradient, alignItems:check?"flex-end":"flex-start"}}
              >
                <View style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}}></View>
            </LinearGradient>
        </TouchableOpacity>
       
  );
};

const styles = StyleSheet.create({
  LinearGradient:{
    width:70, 
    height:30, 
    justifyContent:"center",
    paddingHorizontal:8, 
    borderRadius:8
  }
});

export default ToggleButton;
