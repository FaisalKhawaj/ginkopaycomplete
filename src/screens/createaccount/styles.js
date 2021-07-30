import {StyleSheet , Dimensions} from 'react-native'
import { BackgroundColor, graycolor, lightgray } from '../../constants/colors';
import {simpletext, fontmedium, boldtext} from '../../constants/fonts'
const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        backgroundColor:BackgroundColor
    },
    textinput:{
        backgroundColor:BackgroundColor, 
        //fontWeight:"bold",
        fontFamily:fontmedium, 
        color:lightgray, 
        marginHorizontal:10, 
        marginVertical:10,
        height:50, 
        borderBottomColor:"green", 
        borderRadius:10
    }
})

export default styles

export const theme={ 
    colors:{ 
        primary: '#E5E5E5',                    
        placeholder :"#E5E5E5",
        text:"#E5E5E5",
        underlineColor:'transparent',
    }
};