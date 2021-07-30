import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CustomText from './Text';

const DonateBtn = () => {
    return (
        <TouchableOpacity style={styles.donateBtn}>
            <Image style={styles.donateFlameImage} resizeMode="contain"
                source={require('../assets/donate.png')} />
            <CustomText text={"Donate"} locations={[0, 1]} colors={["#70A2FF", "#F76E64"]}
                style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} />
        </TouchableOpacity>

    )
}
export default DonateBtn;

const styles = StyleSheet.create({
    donateBtn:
    {
        width: '80%',
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#2A2D3C',
        backgroundColor: '#2A2D3C',
        alignSelf: 'center',
        padding: 10,
        flexDirection: 'row'
    },
    donateFlameImage: {
        alignSelf: 'center',
        marginHorizontal: 5
    }
})