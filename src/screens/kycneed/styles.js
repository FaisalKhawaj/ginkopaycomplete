import {StyleSheet , Dimensions} from 'react-native'
import { BackgroundColor } from '../../constants/colors';
const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width,
        height:height,
        backgroundColor:BackgroundColor
    },
    textinput:{
        backgroundColor:BackgroundColor, 
        fontWeight:"bold", 
        color:"#E5E5E5", 
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