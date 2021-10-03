import React, { useState } from 'react'
import { View, FlatList, StatusBar, Dimensions, StyleSheet, Image, Text, TouchableOpacity, Touchable, SafeAreaView } from 'react-native';
import { Container, Content, Item, Thumbnail, Input, Label } from 'native-base'
import Modal from 'react-native-modal'
const { width, height } = Dimensions.get("window");
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HeaderBackTextCloseBtn from './HeaderBackTextClose';
import { BackgroundColor, graycolor, lightWhite } from '../constants/colors';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import CustomText from './Text';
const MyBankAccountModal = ({ visible, setVisible, closeBankAccount }) => {
    const [InsertBankAccountDetails, setInsertBankAccountDetails] = useState(false)
    console.log("setVisible" + setVisible + "insert bank " + InsertBankAccountDetails)
    const BankAccountModalHandler = () => {
        closeBankAccount(false)
        setInsertBankAccountDetails(true)
        // setShowAccountDetails(true)
    }
    //   const closeInsertBankAccountHandler = () => {
    //     setInsertBankAccountDetails(false)
    //   }
    var obj = [
        {
            key: 1,
            name: "Euro",
            amount: '19.2371 BNB',
            dollars: "$4,498.56",
            image: require("../assets/euro.png")
        },
        {
            key: 2,
            name: "USD",
            amount: '92,3 USDC',
            dollars: "$92,3.00",
            image: require("../assets/dollar.png")
        },
        {
            key: 3,
            name: "AUD",
            amount: '42.74 ADA',
            dollars: "$902.06",
            image: require("../assets/aud.png")
        }, {
            key: 4,
            name: "GBP",
            amount: '42.74 ADA',
            dollars: "$902.06",
            image: require("../assets/gbp.png")
        },
    ]
    const renderItem = (item) => {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={["#70A2FF", "#F76E64"]}
                style={{
                    padding: 1,
                    borderRadius: 10,
                    marginBottom: 10,
                }}>
                <TouchableOpacity style={styles.verticalListItem} onPress={() => closeBankAccount(false)}>
                    <Image style={styles.verticalListIconBackground} source={item.item.image} />
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={{ color: '#fff', fontFamily: fontmedium, fontSize: 16 }}>
                            {item.item.name}

                        </Text>
                    </View>

                </TouchableOpacity>
            </LinearGradient>
        )
    }
    return (
        <Modal
            isVisible={visible}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height * 2}
            transparent={true}
            style={styles.modal}
            coverScreen={true}
            animationOut="slideOutDown"
            onBackdropPress={() => closeBankAccount(false)}
            onBackButtonPress={() => closeBankAccount(false)}
            useNativeDriver={true}
            hasBackdrop={true}
            backdropColor="#1D1F27"
            backdropOpacity={.85}
        >
            <Container style={styles.mainview}>
                <HeaderBackTextCloseBtn
                    text="BANK ACCOUNT"
                    backhandler={() => closeBankAccount(false)}
                    closeModal={() => closeBankAccount(false)}
                />
                <Content
                    contentContainerStyle={styles.contentContainerStyle}
                    style={{ flexGrow: 1 }}>

                    <FlatList
                        data={obj}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />



                    <View style={{ alignSelf: 'center', flexDirection: 'row', width: width - 80, }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: lightWhite }}>
                            In order to change the value of your bank{'\n'}
   account you need to contact us at our{'\n'}
   support   <CustomText
                                text={"example@example.com"}
                                locations={[0, 1]}
                                colors={["#A9CDFF", "#A9CDFF"]}
                                style={{ fontSize: 12, fontFamily: boldtext, }}
                            />
                            <Text style={{ color: lightWhite }}> or at our number</Text>
                            <CustomText
                                text={"+391234567890"}
                                locations={[0, 1]}
                                colors={["#A9CDFF", "#A9CDFF"]}
                                style={{ fontSize: 12, fontFamily: boldtext, }}
                            />
                        </Text>
                    </View>




                    <Modal
                        isVisible={InsertBankAccountDetails}
                        animationIn="fadeInRight"
                        deviceHeight={Dimensions.get("screen").height * 2}
                        transparent={true}
                        style={styles.modal}
                        coverScreen={true}
                        animationOut="slideOutDown"
                        //   onBackdropPress={() => closeInsertBankAccountHandler()}
                        //   onBackButtonPress={() => closeInsertBankAccountHandler()}
                        useNativeDriver={true}
                        hasBackdrop={true}
                        backdropColor="#1D1F27"
                        backdropOpacity={.85}
                    >
                        <Container style={styles.mainview}>
                            <HeaderBackTextCloseBtn
                                text="BANK ACCOUNT"
                            //   backhandler={() => { closeInsertBankAccountHandler() }}
                            //   closeModal={() => { closeInsertBankAccountHandler() }}
                            />
                            <Content
                                contentContainerStyle={styles.contentContainerStyle}
                                style={{ flexGrow: 1 }}>


                                <View style={styles.textinputmaincontainer}>
                                    <Item stackedLabel
                                        style={styles.textinputcontainer}>
                                        <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>Account holder</Label>
                                        <Input
                                            placeholder="Enter your bank account name"
                                            placeholderTextColor="#fff"
                                            style={styles.textinput}
                                            textColor="#fff"
                                        // value={name}
                                        // onChangeText={text => setAccountAddress(text)}
                                        />
                                    </Item>

                                </View>

                                <View style={styles.textinputmaincontainer}>
                                    <Item stackedLabel
                                        style={styles.textinputcontainer}>
                                        <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>BIC </Label>
                                        <Input
                                            placeholder="Enter your bank identifier code"
                                            placeholderTextColor="#fff"
                                            style={styles.textinput}
                                            textColor="#fff"
                                        // value={name}
                                        // onChangeText={text => setAccountBIC(text)}
                                        />
                                    </Item>

                                </View>

                                <View style={styles.textinputmaincontainer}>
                                    <Item stackedLabel
                                        style={styles.textinputcontainer}>
                                        <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>IBAN </Label>
                                        <Input
                                            placeholder="Enter your IBAN"
                                            placeholderTextColor="#fff"
                                            style={styles.textinput}
                                            textColor="#fff"
                                        // value={name}
                                        // onChangeText={text => setAccountIBAN(text)}
                                        />
                                    </Item>

                                </View>

                                <View style={styles.textinputmaincontainer}>
                                    <Item stackedLabel
                                        style={styles.textinputcontainer}>
                                        <Label style={{ color: graycolor, fontFamily: simpletext, fontSize: 14, }}>Address </Label>
                                        <Input
                                            placeholder="Enter your full Address"
                                            placeholderTextColor="#fff"
                                            style={styles.textinput}
                                            textColor="#fff"
                                        // value={name}
                                        // onChangeText={text => setAccountAddress(text)}
                                        />
                                    </Item>

                                </View>


                                <TouchableOpacity
                                    //   onPress={() => InsertBankAccountHandler()}
                                    style={styles.saveBtn}>
                                    <CustomText
                                        text={"Save"}
                                        locations={[0, 1]}
                                        colors={["#70A2FF", "#F76E64"]}
                                        style={{ fontSize: 12, fontFamily: boldtext, }}
                                    />
                                </TouchableOpacity>






                                <View style={{ alignSelf: 'center', position: 'absolute', bottom: 20, flexDirection: 'row', width: width - 80, }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', color: lightWhite }}>
                                        In order to change the value of your bank{'\n'}
   account you need to contact us at our{'\n'}
   support   <CustomText
                                            text={"example@example.com"}
                                            locations={[0, 1]}
                                            colors={["#A9CDFF", "#A9CDFF"]}
                                            style={{ fontSize: 12, fontFamily: boldtext, }}
                                        />
                                        <Text style={{ color: lightWhite }}> or at our number</Text>
                                        <CustomText
                                            text={"+391234567890"}
                                            locations={[0, 1]}
                                            colors={["#A9CDFF", "#A9CDFF"]}
                                            style={{ fontSize: 12, fontFamily: boldtext, }}
                                        />
                                    </Text>
                                </View>






                            </Content>
                        </Container>
                    </Modal>





                </Content>
            </Container>
        </Modal>
    )
}

export default MyBankAccountModal;

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
    verticalListItem:
    {
        flexDirection: 'row',
        backgroundColor: '#171921',
        padding: 12,
        width: wp('80%'),
        borderRadius: 10,
    },
    verticalListIconBackground: {
        alignSelf: 'center',
        height: 35,
        width: 35,
        borderRadius: 35,
        marginRight: 20
    },
    roundedCardNumView: {
        borderWidth: 1, borderColor: '#FFFF', flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10, width: width - 80, borderRadius: 25,
    },
    extinputmaincontainer: {
        width: width - 30,
        alignSelf: "center",
        marginVertical: 10,
    },
    textinputcontainer: {
        borderColor: graycolor,
        borderTopWidth: .5,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        width: width - 30,
        alignSelf: "center",
        borderTopLeftRadius: 10,
        paddingHorizontal: 15,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'transparent'
    },
    textinput: {
        fontFamily: simpletext,
        fontSize: 14,
        color: '#FFF',
        height: 40,
    },
})

const protfilioitemstyles = StyleSheet.create({
    verticalListItem: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 8,
        padding: 12,
        borderRadius: 10,
    },
    verticalListIconBackground: {
        alignSelf: 'center',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginRight: 20
    },
})