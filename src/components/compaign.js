import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import DonateBtn from './DonateBtn';
import CustomText from './Text';

const Compaign = () => {
    return (
        <View style={{ margin: 10, }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ alignSelf: 'center' }}>
                    <Icon name="chevron-back-outline" size={20} color="#FFFF" />
                </TouchableOpacity>

                <CustomText text={"As Rom Campaign"} locations={[0, 1]} colors={["#72F6D1", "#FFD505"]}
                    style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} />
                <TouchableOpacity style={{ alignSelf: 'center' }}>
                    < Icon name="chevron-forward-outline" size={20} color="#FFFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.compaignLargeImg}>
                <Image resizeMode="cover" source={require('../assets/backgroundPeople.png')} />
            </View>

            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.newsText}>
                    Amet minim mollit non deserunt{'\n'}ullamco est sit aliqua dolor do amet{'\n'} sint. Velit officia consequat duis enim{'\n'}velit mollit. Exercitation veniam{'\n'}consequat sunt nostrud amet.
    </Text>
            </View>

            <View style={{ marginVertical: 10, marginLeft: 35, flexDirection: 'row', }}>
                <Image
                    //  style={{ alignSelf: 'center' }} 
                    source={require('../assets/yellowDot.png')} />
                <Text style={styles.BTCHoursAgoSource}>BTC</Text>
                <Text style={styles.BTCHoursAgoSource}>16h ago</Text>
                <Text style={styles.BTCHoursAgoSource}>News Source</Text>
            </View>

            <DonateBtn />


        </View>

    )
}
export default Compaign;

const styles = StyleSheet.create({
    compaignLargeImg:
    {
        marginVertical: 10,
        alignSelf: 'center'
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
    },
})