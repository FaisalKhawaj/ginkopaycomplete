import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, SafeAreaView, ScrollView, Image, Text, TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modal';
import { boldtext, simpletext } from '../constants/fonts';
import { BackgroundColor, graycolor, } from '../constants/colors';
import HeaderBackTextClose from './HeaderBackTextClose'
const { width, height } = Dimensions.get("window");
import CustomButton from './Button'
import CustomText from './Text'
const MarketBuySellConfirmAmountModal = ({ visible, btnText, Amount, Total, closeModal }) => {

    // const type=btnText==='BUY'?

    return (
        <Modal
            isVisible={visible}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height}
            transparent={true}
            style={styles.modal}
            coverScreen={true}
            animationOut="slideOutDown"
            onBackdropPress={() => closeModal()}
            onBackButtonPress={() => closeModal()}
            useNativeDriver={true}
            hasBackdrop={true}
            backdropColor="#1D1F27"
            backdropOpacity={.85}
        >
            <SafeAreaView style={{ flex: 1, height: height, backgroundColor: BackgroundColor }}>
                <HeaderBackTextClose text="Confirm"
                    backhandler={closeModal}
                    closeModal={closeModal}
                />

                <ScrollView contentContainerStyle={{ height: height, alignSelf: "center", alignItems: "center", width: width }} style={{ height: height }}>
                    <View style={styles.mainview}>

                        <View style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", paddingVertical: 0 }}>
                            <Text style={styles.text}>Amount</Text>


                            <Image resizeMode="cover"
                                style={{ width: 60, alignSelf: 'center', height: 60 }}
                                source={require('../assets/Apex_Large.png')} />

                            <CustomText
                                text="12.4345 CPTX"
                                locations={[0, 1]}
                                colors={["#A9CDFF", "#FAA49E"]}
                                style={{ fontFamily: simpletext, paddingVertical: 20, fontSize: 30, }} />
                        </View>

                        <View style={styles.amountupdown}>
                            <Text style={styles.buttontext}>0.2456 GDC</Text>
                            <Image source={require("../assets/updown.png")} style={{ width: 15, height: 15 }} />
                        </View>


                        <Text style={[styles.buttontext, { textAlign: 'center' }]}>Balance : 19.2377 GDC</Text>


                        <View style={styles.textinputarea}>
                            <View style={styles.amount}>
                                <View style={{ flexDirection: "row", width: width - 100, alignSelf: "center", justifyContent: "space-between" }}>
                                    <Text style={styles.text}>{Amount}</Text>
                                    <Text style={styles.text}>0.2405 GDC</Text>
                                </View>

                            </View>
                            <View style={styles.total}>
                                <View style={{ flexDirection: "row", width: width - 100, alignSelf: "center", justifyContent: "space-between" }}>
                                    <Text style={styles.text}>{Total} </Text>
                                    <Text style={styles.text}>0.3605 GDC</Text>
                                </View>
                                <View style={{ flexDirection: "row", width: width - 100, alignSelf: "center", justifyContent: "space-between" }}>
                                    <Text style={styles.text}></Text>
                                    <Text style={{ fontFamily: simpletext, fontSize: 10, color: graycolor }}>$84.43</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={{position:"absolute", bottom:50, alignSelf:"center"}}> */}
                        <CustomButton text={btnText}
                            onPress={() => closeModal()}
                        />
                        {/* </View> */}

                    </View>
                </ScrollView>
            </SafeAreaView>

        </Modal>
    )
}

export default MarketBuySellConfirmAmountModal;

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        width: width,
    },
    mainview: {
        height: height,

        width: width,

        alignSelf: "center",
        paddingHorizontal: 20,
        backgroundColor: '#17171A',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    sentto: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontFamily: boldtext
    },
    from: {
        color: "#fff",
        fontSize: 16,
        fontFamily: boldtext
    },
    recent: {
        color: graycolor,
        fontSize: 16,
        fontFamily: boldtext
    },
    ethereumview: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    ethereumviewinner: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        height: 12,
        width: 12,
        marginLeft: 20,
        marginRight: 15,
        borderRadius: 14,
        backgroundColor: "#FEBF32"
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontFamily: simpletext
    },
    otherassets: {
        color: graycolor,
        fontSize: 16,
        marginLeft: 40,
        marginVertical: 30,
        alignSelf: "flex-start"
    },
    flatlistitemmain: {
        flexDirection: 'row',
        width: width - 80,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginBottom: 30
    },
    fromselect: {
        width: width - 40,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 60,
        marginVertical: 5,
        justifyContent: "space-between"
    },
    textinputarea: {
        width: width - 40,
        alignSelf: "center",
        // height: 180,
        marginVertical: 30,
        borderRadius: 5,
        borderTopWidth: .5,
        borderWidth: .5,
        borderColor: graycolor,

    },
    amount: {
        width: width - 40,
        // height: 90,
        borderBottomWidth: .8,
        borderColor: graycolor,
        paddingVertical: 20,
        justifyContent: "space-evenly"
    }, total: {
        width: width - 40,
        height: 90,
        borderBottomWidth: .8,
        borderColor: graycolor,
        paddingVertical: 20,
        justifyContent: "space-evenly"
    },
    text: {
        color: "#fff",
        fontFamily: simpletext
    },
    amountupdown: {
        flexDirection: "row",
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 10,
        alignSelf: 'center',
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(42, 45, 60,.8)",
    },
    buttontext: {
        fontFamily: simpletext,
        color: "#ffffff",
        fontSize: 13,
        marginRight: 15,
    },

})