import {StyleSheet , Dimensions} from 'react-native'
import { BackgroundColor } from '../../constants/colors';
export const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        width:width,
        height:height,
        justifyContent:"flex-end",
        backgroundColor:BackgroundColor

    }
})

export default styles