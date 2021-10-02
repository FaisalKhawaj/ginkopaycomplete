import React, { useState } from 'react';
import { Button, Text, Image, Dimensions, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Content, Container } from 'native-base'
import { BackgroundColor, graycolor, lightWhite } from '../constants/colors';
import { mystyles } from '../styles';
import CustomText from './Text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");
const MarketModal = ({ item, showMarketModal, setShowMarketModal }) => {
    console.log("item: ", JSON.stringify(item))

    return (
        <Modal
            isVisible={showMarketModal}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height * 2}
            transparent={true}
            style={styles.modal}
            coverScreen={true}
            animationOut="slideOutDown"
            onBackdropPress={() => setShowMarketModal(!showMarketModal)}
            onBackButtonPress={() => setShowMarketModal(!showMarketModal)}
            useNativeDriver={true}
            hasBackdrop={true}
            backdropColor="#1D1F27"
            backdropOpacity={.85}
        >
            <Container style={styles.mainview}>

                <Content
                    contentContainerStyle={{
                        // alignItems: "center",
                        flexGrow: 1
                    }}
                >

                    <TouchableOpacity onPress={() => setShowMarketModal(!showMarketModal)}>


                        <View style={styles.line} />

                        <Image
                            source={item.DetailImg}
                            style={{
                                width: width,
                                height: hp('35%'),
                            }}
                            resizeMode={'cover'}
                        />


                        {/* <Image style={{ width: width, height: hp('35%') }} resizeMode="cover" source={item.DetailImg} /> */}
                        <CustomText
                            text={item.DetailName}
                            style={{ fontSize: 20, marginVertical: hp(1), marginHorizontal: wp(2), fontWeight: 'bold', }}
                            locations={[0, 1]}
                            colors={["#A9CDFF", "#F76E64",]}
                        />
                        <Text style={{ fontFamily: 'Poppins-Regular', marginHorizontal: wp(2), color: lightWhite, fontSize: 14 }}>{item.DetailDescription}</Text>

                    </TouchableOpacity>
                </Content>
            </Container>
        </Modal>
    )
}

export default MarketModal;
const styles = StyleSheet.create({
    modal: {
        margin: 0,
        width: width,
    },
    mainview: {
        // marginTop: height / 1.3,
        // height: height / 3.3,
        flex: 1,
        width: width,
        bottom: 0,
        // padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // alignSelf: 'center',
        // alignItems: 'center',
        backgroundColor: '#17171A',

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    line: {
        backgroundColor: "#ffff", height: 4, alignSelf: 'center', width: 50, borderRadius: 5
    }
})