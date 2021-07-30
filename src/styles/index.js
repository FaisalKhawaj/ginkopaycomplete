import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const mystyles = StyleSheet.create(
    {
        TopRatedRecentBtnText:
        {
            color: '#FFFF',
            fontSize: 16,
            fontFamily: 'Poppins-Bold'
        },
        RecentBtn:
        {
            marginLeft: 35
        },
        simpleTextInput:
        {
            alignSelf: 'center', width: '90%',
            padding: 15,
            marginVertical: 10,
            color: '#FFFF', borderColor: '#FAFAFA',
            borderWidth: 0.2, borderRadius: 5,
        },
        HeaderText:
        {
            fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF'
        },
        absolute: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 10,
            right: 0
        },
        referCodeModalMainView:
        {
            position: 'absolute',
            // height: 150,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            bottom: -23,
            width: wp('100%'),
            backgroundColor: '#17171A'
        },
        modalUpperSmallLine:
        {
            backgroundColor: "#ffffff",
            bottom: 10, alignSelf: 'center',
            height: 4, width: 50,
            borderRadius: 5
        },
        circleCloseBtn:
        {
            backgroundColor: '#000000',
            borderColor: '#000000',
            borderWidth: 1, borderRadius: 20,
            margin: 10,
            alignSelf: 'flex-end'
        },
    }
)