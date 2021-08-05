import React from 'react'
import {
    View, Text, TouchableOpacity, StyleSheet,
    Image, ImageBackground
} from 'react-native'

const CompaignChannelViewBtn = ({ item, handler }) => {
    return (
        <TouchableOpacity
            onPress={() => handler()}
            style={styles.CompaignChannelBtn}>
            <ImageBackground style={styles.ImageBackgroundStyle}
                source={item.img}>
                <View style={styles.TitleUrlView}>
                    <Text style={styles.TitleText}>
                        {item.title}
                    </Text>
                    <Text style={styles.UrlText}>
                        http://ginkopay.com/username
     </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CompaignChannelViewBtn;

const styles = StyleSheet.create({
    CompaignChannelBtn:
    {
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 15,
        width: '90%'
    },
    ImageBackgroundStyle:
    {
        borderRadius: 10,
        width: '100%',
        height: 130
    },
    TitleUrlView:
    {
        marginHorizontal: 15,
        position: 'absolute',
        bottom: 10
    },
    TitleText:
    {
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: '#FFFF'
    },
    UrlText:
    {
        marginTop: -10, color: '#FFFF', fontSize: 13
    }
})