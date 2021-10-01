import React, { useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Image, TouchableOpacity, Touchable, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { graycolor, green } from '../constants/colors';
import CustomButton from './Button';
import CustomText from '../components/Text';

import COPY from '../assets/copy.svg'
import { Container, Content, Text } from 'native-base'
import CopyLinkModal from './LinkCopyModal'
import RequestPaymentModal from "./RequestPaymentModal";
import WithdrawAmount from './withdrawAmount';
const { width, height } = Dimensions.get("window");


const recievedModal = ({ title, description, address, btnName, visible, setVisible, }) => {

    // const openRequestModal = () => {
    //     setRequestPayment(true)
    // }
    // const OpenLinkModal = () => {
    //     setCopyLink(true)
    // }
    // const withdrawAmountHandler = () => {
    //     setWithdrawAmount(!withdrawAmount)
    // }
    // const navigatetoroot = () => {
    //     setCopyLink(false)
    //     // setVisible()
    // }
    // const closeallmodals = () => {
    //     setRequestPayment(false)
    //     setCopyLink(true)
    //     // setVisible();
    //     // transcitioncompletefunction()
    // }
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
            backdropOpacity={.85}
        >
            <Container style={{ flex: 1, backgroundColor: 'red' }} >
                <Content style={styles.mainview} contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}>
                    <View style={{ backgroundColor: "#ffffff", height: 4, width: 50, borderRadius: 5 }} />
                    <Text style={styles.Receive}> {title}</Text>
                    <Image source={require("../assets/wallet.png")} style={{ width: 150, height: 150 }} />
                    <Text style={[styles.otherassets, { textAlign: 'center' }]}>{description}</Text>

                    <TouchableOpacity
                        // onPress={() => OpenLinkModal()}
                        style={{ flexDirection: "row", marginVertical: 10, justifyContent: "center", alignItems: "center", backgroundColor: "#2A2D3C", height: 40, minWidth: 100, paddingHorizontal: 20, borderRadius: 10 }}>
                        <Text style={styles.Receive}> {address}</Text>
                        <COPY />
                    </TouchableOpacity>

                    <View style={{ position: "absolute", bottom: 20 }}>
                        <CustomButton text={btnName} onPress={() => setVisible()} />
                    </View>
                </Content>
            </Container>

            {/* <WithdrawAmount visible={withdrawAmount}
                setVisible={() => withdrawAmountHandler()}
            /> */}

        </Modal>
    )
}

export default recievedModal;

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
    Receive: {
        color: "#fff",
        margin: 10,
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