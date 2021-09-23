import React, { useState } from 'react';
import { Button, Text, Dimensions, TouchableOpacity, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { BackgroundColor, lightWhite } from '../constants/colors';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import CustomButton from './Button'
const { width, height } = Dimensions.get("window");

const CurrentLanguageModal = ({ visible, setVisible, data, setSelectedLanguage }) => {
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
            <View style={[styles.mainview, { height: height / 1.6 }]} >
                <View style={{ backgroundColor: "#ffffff", alignSelf: 'center', height: 4, width: 50, borderRadius: 5 }} />
                <Text style={styles.currencyName}> Current Language</Text>
                {data.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => setSelectedLanguage(item.value)}
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
                            <Text style={styles.currencyName}>{item.value} </Text>
                            {index == item.id &&
                                <Image resizeMode="contain"
                                    source={require('../assets/greenCheckMark.png')} />

                            }
                        </View>



                    </TouchableOpacity>
                ))}

            </View>
            {/* </Container> */}
        </Modal>
    )
}
export default CurrentLanguageModal;


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
})
