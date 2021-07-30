import React, { Component } from 'react';
import {  Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { LinearGradientColorOne,transparent, LinearGradientColorTwo } from '../constants/colors';
import { View, Dimensions } from 'react-native';
const {width, height} = Dimensions.get("window")

const  CustomerHeader = ({num}) =>  {
    return (
      <View>
        <Header transparent noLeft>
          
            <Button transparent>
              <MaterialIcons name='arrow-back-ios' style={{color:"#fff"}} />
            </Button>
        
          <Body style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
          <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
                style={{width:width/5, borderRadius:2, height:8}}>
            </LinearGradient>
            <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={num >1 ?[LinearGradientColorOne,LinearGradientColorTwo]:["#222531","#222531"]} 
                style={{width:width/5, borderRadius:2, height:8}}>
            </LinearGradient>
            <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={num >2 ?[LinearGradientColorOne,LinearGradientColorTwo]:["#222531","#222531"]}
                style={{width:width/5, borderRadius:2, height:8}}>
            </LinearGradient>
            <Text style={{color:"#7C81A2",  fontSize:12,}}>{num}/3</Text>
          </Body>
        </Header>
      </View>
    );
  }

  export default CustomerHeader