import React from 'react'
import { LinearTextGradient } from "react-native-text-gradient";
import {Text} from 'react-native'
import {simpletext } from '../constants/fonts'
const CustomText = (props) =>{
    return(
        <LinearTextGradient
            style={{...props.style ,fontFamily:simpletext }}
            locations={props.locations}
            colors={props.colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <Text >{props.text}</Text>
        </LinearTextGradient>
    )
}
export default CustomText