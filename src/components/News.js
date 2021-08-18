import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const CryptoNews = ({ item, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler()} style={styles.newsMainView}>
            <View style={{ flexDirection: 'row', }}>

                <View style={styles.newsTextView}>
                    <Text style={styles.newsText}>
                        {item.userName}
                    </Text>
                </View>

                <Image resizeMode="contain" style={{width: 50, height: 50}} source={{uri: item.pictureUrl}} />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <Image
                    //  style={{ alignSelf: 'center' }} 
                    source={require('../assets/yellowDot.png')} />
                <Text style={styles.BTCHoursAgoSource}>BTC</Text>
                <Text style={styles.BTCHoursAgoSource}>16h ago</Text>
                <Text style={styles.BTCHoursAgoSource}>News Source</Text>
            </View>


        </TouchableOpacity>
    )
}
export default CryptoNews;

const styles = StyleSheet.create(
    {
        newsMainView:
        {
            padding: 15,
            borderBottomColor: '#F1F3F5',
            borderBottomWidth: 1,
        },
        newsTextView:
        {
            flex: 1,
        },
        newsText:
        {
            fontSize: 16,
            fontFamily: 'Poppins-Regular',
            color: '#FFFF'
        },
        BTCHoursAgoSource:
        {
            marginHorizontal: 8,
            fontFamily: 'Poppins-Medium',
            fontSize: 12,
            color: '#FFFF'
        }
    }
)