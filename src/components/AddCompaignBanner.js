import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './Text';

const AddCompaignAddBannerBtn = ({ text, Addhandler }) => {
    return (
        <TouchableOpacity onPress={() => Addhandler()} style={styles.BtnView}>
            <Image style={styles.addImg} source={require('../assets/plusSmallBtn.png')} />
            <CustomText text={text} locations={[0, 1]} colors={["#70A2FF", "#F76E64"]}
                style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }} />
        </TouchableOpacity>
    )
}
export default AddCompaignAddBannerBtn;


const styles = StyleSheet.create({
    BtnView:
    {
        marginVertical: 15, alignSelf: 'center',
        flexDirection: 'row'
    },
    addImg:
    {
        marginHorizontal: 10, alignSelf: 'center'
    }
})