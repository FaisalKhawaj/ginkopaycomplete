import React from 'react'
import {
    View, Text, TouchableOpacity, StyleSheet,
    Image, ImageBackground
} from 'react-native'

const CompaignChannelViewBtn = ({ item, handler }) => {
    console.log('item', item)
    return (
        <TouchableOpacity
            onPress={() => handler()}
            style={styles.CompaignChannelBtn}>
            <ImageBackground style={styles.ImageBackgroundStyle}
                source={{ uri: item.pictureUrl }}>
                <View style={styles.TitleUrlView}>
                    <Text style={styles.TitleText}>
                        {item.userName}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {item.walletAdder ?
                            <Text style={styles.UrlText}>
                                {item.walletAdder}
                            </Text>
                            : <Text style={styles.UrlText}>
                                http://ginkopay.com/username
                        </Text>}
                        <TouchableOpacity>
                            <Image resizeMode="contain" style={{ width: 22, height: 22 }} source={require('../assets/shareAddress.png')} />
                        </TouchableOpacity>
                    </View>

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