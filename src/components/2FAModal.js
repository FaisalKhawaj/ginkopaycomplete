import React from 'react'
import { View, Text, Image, TextInput, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import Modal from 'react-native-modal'
import CustomButton from './Button'
import { Container, Content, Item, Input, Label } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CustomText from './Text'
import { BackgroundColor, lightWhite, orange } from '../constants/colors'
import { boldtext } from '../constants/fonts'
const { width, height } = Dimensions.get("window");
const TwoFAModal = ({ visible, setVisible }) => {
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
            <SafeAreaView style={styles.mainview}>

                <ScrollView
                    contentContainerStyle={styles.contentContainerStyle}
                // style={{ flexGrow: 1 }}
                >
                    <View style={{ alignSelf: 'center', width: 30, height: 4, borderRadius: 5, backgroundColor: lightWhite }} />
                    <Text style={{ fontSize: 16, fontFamily: boldtext, textAlign: 'center', color: '#FFFF', marginVertical: 5, }}>Setup 2FA</Text>

                    <View style={{ marginHorizontal: 20 }}>

                        <Text style={{ color: '#FFFF', fontFamily: 'Poppins-Regular', marginVertical: hp(1), textAlign: 'left' }}>Install Google Authenticator, or a similar{'\n'}app like Authy (Recommended)</Text>

                        <Text style={{ color: '#FFFF', fontFamily: 'Poppins-Regular', }}>Scan code with an authenticator app, or{'\n'}
copy code to add it manually.</Text>

                        <CustomText
                            text="Authentication Key"
                            locations={[0, 1]}
                            colors={["#70A2FF", "#F76E64"]}
                            style={{ fontFamily: boldtext, marginVertical: hp(1), fontSize: 13, textAlignVertical: "center" }} />
                    </View>


                    <View style={{ alignSelf: 'center', marginVertical: hp(2) }}>
                        <Image source={require('../assets/AuthkeyScan.png')} />
                    </View>


                    <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                        <Text style={{ color: orange, width: wp('70%') }}>1sadweWQEC323aSAEWQOCsdAOJDIas2
NVS2309oiweP</Text>
                        <TouchableOpacity>
                            <Image style={{ alignSelf: 'center' }} source={require('../assets/book.png')} />
                        </TouchableOpacity>
                    </View>






                    <View style={{ position: "absolute", bottom: 20 }}>
                        <CustomButton text={"Proceed to Verify"} onPress={() => setVisible()} />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

export default TwoFAModal;

const styles = StyleSheet.create({
    modal: {
        margin: 0,
    },
    mainview: {
        // height: height / 1.8,
        // flex: .8,
        width: width,
        bottom: 0,
        alignSelf: 'center',
        backgroundColor: BackgroundColor,
        width: width,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    contentContainerStyle: {
        // alignItems: "center",
        flexGrow: 1
    },
})