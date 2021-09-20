import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from "react-native";
import { Container, Content, Item, Input, Label } from 'native-base'
import Modal from 'react-native-modal';
import { boldtext, simpletext } from '../constants/fonts';
import { BackgroundColor, graycolor } from '../constants/colors';
import HeaderBackTextCloseBtn from './HeaderBackTextClose'
import ARROWDOWN from '../assets/arrowdown.svg'
import CURRECO from '../assets/CurrencyEthereum.svg'
import CustomButton from './Button'
import CustomText from './Text';
import CopyLinkModal from './LinkCopyModal';
const { width, height } = Dimensions.get("window");
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WithdrawAmount = ({ visible, setVisible, }) => {
    const [value, setValue] = React.useState("")
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
            <Container style={styles.mainview}>
                <HeaderBackTextCloseBtn
                    text="Amount"
                    backhandler={() => { setVisible() }}
                    closeModal={() => { setVisible() }}
                />
                <Content
                    contentContainerStyle={styles.contentContainerStyle}
                    style={{ flexGrow: 1 }}>

                    <CURRECO />

                    <View style={{ paddingVertical: 20, alignItems: 'center', flexDirection: 'row' }} >
                        <Item stackedLabel style={[styles.textinputcontainer, { width: width - 200 }]}>
                            <TextInput
                                placeholder="Enter Amount"
                                placeholderTextColor="#A9CDFF"
                                style={styles.textinput}
                                textAlign="center"
                                caretHidden={true}
                                value={value}
                                keyboardAppearance="dark"
                                keyboardType="phone-pad"
                                onChangeText={text => setValue(text)}
                            />
                        </Item>
                        <Text style={{ marginHorizontal: 10, color: '#FFFF' }}>or</Text>
                        <CustomText
                            text="Use Max"
                            locations={[0, 1]}
                            colors={["#70A2FF", "#F76E64"]}
                            style={{ fontFamily: boldtext, fontSize: 13, textAlign: "center", textAlignVertical: "center" }} />

                    </View>


                    <View style={styles.amountupdown}>
                        <Text style={styles.buttontext}>$455.555</Text>
                        <Image source={require("../assets/updown.png")} style={{ width: 15, height: 15 }} />
                    </View>

                    <View style={{ alignSelf: 'flex-start', marginLeft: wp(5) }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#FFFF' }}>Withdraw to </Text>
                        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <Image resizeMode="contain"
                                style={{ alignSelf: 'center', width: 15, height: 15, }}
                                source={require('../assets/addGradient.png')} />
                            <TouchableOpacity>
                                <CustomText
                                    text="Add Bank Account"
                                    locations={[0, 1]}
                                    colors={["#72F6D1", "#FAA49E"]}
                                    style={{ fontFamily: simpletext, fontSize: 15, }} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ position: "absolute", bottom: 20 }}>
                        <CustomButton text={"Next"} onPress={() => setVisible()} />
                    </View>
                </Content>
            </Container>
        </Modal>

    )
}

export default WithdrawAmount;

const styles = StyleSheet.create({
    modal: {
        margin: 0
    },
    mainview: {
        height: height / 1,
        flex: 1,
        width: width,
        bottom: 0,
        alignSelf: 'center',
        backgroundColor: BackgroundColor,
        width: width,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    contentContainerStyle: {
        alignItems: "center",
        flexGrow: 1
    },
    button: {
        borderColor: graycolor,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderWidth: 1,
        width: 100,
        height: 40,
        marginVertical: 30,
        flexDirection: "row"
    },
    bnb: {
        fontFamily: simpletext,
        color: "#ffffff",
        fontSize: 13,
    },
    buttontext: {
        fontFamily: simpletext,
        color: "#ffffff",
        fontSize: 13,
        marginRight: 15,
    },
    textinputmaincontainer: {
        width: width - 80,
        alignSelf: "center",
        marginVertical: 10,
    },
    textinputcontainer: {
        borderColor: graycolor,
        borderTopWidth: .5,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        height: 70,
        width: width - 80,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: 'transparent'
    },
    textinput: {
        fontFamily: simpletext,
        fontSize: 22,
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        color: '#A9CDFF',
        height: 70,
        width: width - 80,
    },
    amountupdown: {
        flexDirection: "row",
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 30,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(42, 45, 60,.8)",
    },
    text: {
        color: graycolor,
        fontFamily: simpletext,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
        marginHorizontal: 10,
    },
})