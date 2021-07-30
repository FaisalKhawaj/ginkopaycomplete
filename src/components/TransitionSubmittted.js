import React from 'react'
import { CardItem, } from 'native-base'
import {Image,View,Text} from 'react-native'
import { graycolor } from '../constants/colors'
import { simpletext } from '../constants/fonts'
const image = require("../assets/clock.png")
const TransictionSubmited = ({transnumber}) =>{
    return(
        <CardItem style={{backgroundColor:"rgba(255, 213, 5,.08)",height:80, borderRadius:10}}>
            <Image source={image} style={{width:35, height:35}} />
            <View style={{marginLeft:20}}>
                    <Text style={{color:"#fff", fontFamily:simpletext}}>Transaction #{transnumber} Submittted!</Text>
                    <Text style={{color:graycolor, fontFamily:simpletext, fontSize:10,}}>Waiting for confirmation</Text>
            </View>
        </CardItem>
    )
}

export default TransictionSubmited;