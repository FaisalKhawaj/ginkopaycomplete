import React from 'react'
import { CardItem, } from 'native-base'
import {Image,View,Text} from 'react-native'
import { graycolor } from '../constants/colors'
import { simpletext } from '../constants/fonts'
const image = require("../assets/transcmplt.png")
const TransictionCompleted = ({transnumber}) =>{
    return(
        <CardItem style={{backgroundColor:"rgba(118, 226, 104,.08)",height:80, borderRadius:10}}>
            <Image source={image} style={{width:35, height:35}} />
            <View style={{marginLeft:20}}>
                    <Text style={{color:"#fff", fontFamily:simpletext}}>Transaction #{transnumber} Completed! </Text>
                    <Text style={{color:graycolor, fontFamily:simpletext, fontSize:10,}}>Tap to view this transaction</Text>
            </View>
        </CardItem>
    )
}

export default TransictionCompleted;