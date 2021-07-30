import {StyleSheet , Dimensions} from 'react-native'
import { BackgroundColor } from '../../constants/colors';
export const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        width:width,
        height:height,
        backgroundColor:BackgroundColor

    }
})

export default styles