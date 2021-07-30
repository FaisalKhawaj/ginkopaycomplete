import React, {useState} from 'react';
import {Button, Text,Dimensions,StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import { BackgroundColor } from '../constants/colors';
import { boldtext, simpletext } from '../constants/fonts';
import CustomButton from './Button'
const {width, height} = Dimensions.get("window");
const  TermsAndConditionModal = ({isModalVisible,toggleModal}) =>  {
  return (
      <Modal 
        isVisible={isModalVisible}
        backdropOpacity={.4}
        style={styles.modal}
        useNativeDriver={true}
        >
        <View style={styles.mainview}>
            <Text style={{color:"#fff" ,fontSize:16, fontFamily:boldtext }}>Term and Conditions</Text>
            <Text style={{color:"#fff" , paddingHorizontal:20, textAlign:"left", fontSize:14, fontFamily:simpletext }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Text>
          <CustomButton text={"I Got it"} onPress ={() => toggleModal()} />
        </View>
      </Modal>
  );
}

export default TermsAndConditionModal;

const styles = StyleSheet.create({
  modal:{
    width:width,
    marginLeft:0,
    marginRight:0,
  },
  mainview:{
    flex: 1,
    width:width,
    alignItems:"center", 
    justifyContent:"space-evenly", 
    height:height/3 , 
    backgroundColor:BackgroundColor,
    marginTop:height/2
    }
})