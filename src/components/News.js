import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const CryptoNews = ({ item, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler()} style={styles.newsMainView}>
            <View style={{ flexDirection: 'row', }}>

                <View style={styles.newsTextView}>
                    <Text style={styles.newsText}>
                        {item.description}
                    </Text>
                </View>

                <Image resizeMode="contain" source={item.img} />
            </View>

            <View style={{ flexDirection: 'row', }}>
                <Image
                    //  style={{ alignSelf: 'center' }} 
                    source={require('../assets/yellowDot.png')} />
                <Text style={styles.BTCHoursAgoSource}>{item.coin}</Text>
                <Text style={styles.BTCHoursAgoSource}>{item.hoursAgo}</Text>
                <Text style={styles.BTCHoursAgoSource}>{item.newsSource}</Text>
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