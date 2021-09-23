import React, { useState } from 'react';
import { Container, Content, Thumbnail } from 'native-base'
import { View, Text, ScrollView, Image, Dimensions, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal'
const { width, height } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fontmedium, simpletext } from '../constants/fonts';
import { graycolor, lightWhite } from '../constants/colors';

const BaseCurrencyModal = ({ visible, setVisible, data, setCurrencyName, currencyHandler }) => {
    console.log("data", data)
    return (
        <Modal
            isVisible={visible}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height * 2}
            transparent={true}
            style={styles.modal}
            coverScreen={true}
            animationOut="slideOutDown"
            onBackdropPress={() => setVisible()}
            onBackButtonPress={() => setVisible()}
            useNativeDriver={true}
            hasBackdrop={true}
            backdropColor="#1D1F27"
        // backdropOpacity={.85}
        >
            {/* <Container style={{}} > */}
            <View style={styles.mainview} >
                <View style={{ backgroundColor: "#ffffff", alignSelf: 'center', height: 4, width: 50, borderRadius: 5 }} />
                <Text style={styles.currencyName}> Base Currency</Text>
                {data.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => currencyHandler(item)}
                        style={{
                            // flexDirection: "row",
                            // marginVertical: 10,
                            // justifyContent: "center", alignItems: "center",
                            // backgroundColor: "#2A2D3C",
                            //  height: 40,
                            //  minWidth: 100,
                            paddingHorizontal: 20,
                            borderRadius: 10
                        }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                color: lightWhite,
                                marginVertical: hp(2),
                                fontSize: 15,
                                fontFamily: fontmedium
                            }}>{item.label}-{item.value} </Text>
                            {index == item.id ?
                                <Image resizeMode="contain"
                                    source={require('../assets/greenCheckMark.png')} />
                                : null
                            }
                        </View>



                    </TouchableOpacity>
                ))}

            </View>
            {/* </Container> */}
        </Modal>
    )
}

export default BaseCurrencyModal;

const styles = StyleSheet.create({
    modal: {
        margin: 0
    },
    mainview: {
        height: height / 1.6,
        // flex: 1,
        width: width,
        bottom: 0,
        alignSelf: 'center',
        backgroundColor: '#17171A',
        width: width,
        position: 'absolute',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    currencyName: {
        color: "#fff",
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: fontmedium
    },
    text: {
        color: '#fff',
        fontSize: 14,
        alignSelf: "center",
        fontFamily: simpletext
    },
    otherassets: {
        color: graycolor,
        fontSize: 16,

        marginVertical: 30,
        alignSelf: "center"
    },
    flatlistitemmain: {
        flexDirection: 'row',
        width: width,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginBottom: 30
    }
})