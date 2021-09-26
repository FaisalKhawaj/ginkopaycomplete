import React, { useState } from 'react';
import { Container, Content, Item, Input, Label } from 'native-base'
import { View, Text, ScrollView, Dimensions, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { BackgroundColor, graycolor, lightWhite } from '../constants/colors';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import BackBtnWithMiddleText from '../components/BackBtnMiddleText';
import PreferencesTitleDescriptionArrowBtn from '../components/PreferencesTitleDescriptionArrowBtn';
import HeaderBackTextCloseBtn from '../components/HeaderBackTextClose';
import CustomButton from '../components/Button';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import KycModal from '../components/kYCModal'
import CurrencyModal from '../components/CurrencyModal';
import LanguageModal from '../components/LanguageModal'
import LinearGradient from 'react-native-linear-gradient'
import { mystyles } from '../styles';
const { width, height } = Dimensions.get('window')
import * as Actions from './../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import TwoFAModal from '../components/2FAModal';
import Icon from 'react-native-vector-icons/Ionicons'
import BaseCurrencyModal from '../components/BaseCurrencyModal';
import CurrentLanguageModal from '../components/CurrentLanguageModa';
import MyBankAccountModal from '../components/BankAccountModal';
import CustomText from '../components/Text';
const Preferences = ({ navigation }) => {

    const dispatch = useDispatch();
    const [showGeneralModal, setShowGeneralModal] = useState(false)
    const [checkedCurrency, setCheckedCurrency] = React.useState('Native');
    const [checkedUserSearch, setCheckedUserSearch] = useState('Yes')
    const [showPrivacyModal, setShowPrivacyModal] = useState(false)
    const [showverificationModal, setShowVerificatonModal] = useState(false)
    const [privaytoggle, setPrivacyToggle] = useState(false)
    const [privacyModeToggle, setPrivacyModeToggle] = useState(false)
    const [Enable2FA, setEnable2FA] = useState(false)
    const [EnableTouchID, setEnableTouchID] = useState(false)
    const [incomming, setIncomming] = useState(false)
    const [Modal2FA, setModal2FA] = useState(false)
    const [metametric, setMetaMetric] = useState(false)
    const [currencyName, setCurrencyName] = useState('USD-United State Dollar')
    const [languagemodal, setLanguageModal] = useState(false)
    const [currencymodal, setCurrencyModal] = useState(false)
    const [BankAccountModal, setBankAccountModal] = useState(false)
    const [InsertBankAccountDetails, setInsertBankAccountDetails] = useState(false)
    const [showAccountDetail, setShowAccountDetails] = useState(false)
    const [BankAccountName, setBankAccountName] = useState('')
    const [AccountBIC, setAccountBIC] = useState('');
    const [AccountIBAN, setAccountIBAN] = useState('');
    const [AccountAddress, setAccountAddress] = useState('');
    const [CurrencyData, setCurrencyData] = useState([
        { id: 0, label: 'EUR', value: 'Euro' },
        { id: 1, label: 'USD', value: 'United State Dollar' },
        { id: 2, label: 'GBR', value: 'British Pound' },
        { id: 3, label: 'AUD', value: 'Australian Dollar' },
        { id: 4, label: 'KRW', value: 'South Korean Wan' },
        { id: 5, label: 'JPY', value: 'Japanese Yan' },
    ])

    const AddBankAccountHandler = () => {
        setBankAccountModal(false)
        setInsertBankAccountDetails(true)
    }

    const InsertBankAccountHandler = () => {
        setInsertBankAccountDetails(false)
        setShowAccountDetails(true)
    }

    const closeBaseCurrencyHandler = () => {
        setCurrencyModal(!currencymodal)
    }
    const CurrencyHandler = (item) => {
        setCurrencyName(item.label + "-" + item.value)
    }
    const BackBtnHandler = () => {
        navigation.goBack()
    }
    const closeShowVerificationModal = () => {
        setShowVerificatonModal(false)
    }


    const closeModalHandler = () => {
        dispatch(Actions.updateUser())

        setShowGeneralModal(!showGeneralModal)
    }


    const UpdateGeneralHandler = () => {
        dispatch(Actions.updateUser())
        setShowPrivacyModal(!showPrivacyModal)
    }
    const Enable2FAHandler = () => {
        setEnable2FA(!Enable2FA)
    }

    const functionshowverificationmodal = () => {

        setShowVerificatonModal(!showverificationModal)
    }
    const LanguageModalCloseHandler = () => {
        setOpenLanguageModal(false)
    }
    const BankAccountModalOpener = () => {
        setBankAccountModal(true)
    }

    const [selectedLanguage, setSelectedLanguage] = useState('Dansk');
    const [openLanguageModal, setOpenLanguageModal] = useState(false)
    const [Languages, setLanguages] = useState([
        { value: 'Čeština' },
        { value: "Dansk" },
        { value: "Deutsch" },
        { value: "ελληνικά" },
        { value: "English" },
        { value: "Español (Latin America)" },
        { value: "Estonian" },
    ])


    return (
        <Container style={{ backgroundColor: BackgroundColor, flex: 1 }}>
            <Content contentContainerStyle={{ backgroundColor: BackgroundColor }} >

                <BackBtnWithMiddleText text="Settings" backBtn={BackBtnHandler} navigation={navigation} />

                <PreferencesTitleDescriptionArrowBtn
                    title="General"
                    showModal={closeModalHandler}
                    description={"Currency conversion, primary currency\n,language and search engine"}
                />


                <PreferencesTitleDescriptionArrowBtn
                    title="Security & Privacy"
                    showModal={UpdateGeneralHandler}
                    description={"Privacy settings, private key and wallet\nseed phrase"}
                />
                <PreferencesTitleDescriptionArrowBtn
                    title="Verification"
                    showModal={functionshowverificationmodal}
                    description={"In order to use the service of GinkoPay\nyou will need to verify your identy"}
                />


                <PreferencesTitleDescriptionArrowBtn
                    title="Bank Account"
                    showModal={BankAccountModalOpener}
                    description={"Display your bank informations or change it"}
                />

            </Content>


            <Modal
                animationType="slide"
                transparent={true}
                style={{ height: height, alignSelf: 'center', width: '100%' }}
                coverScreen={true}
                animationOut="slideOutDown"
                visible={showGeneralModal}
            >
                <SafeAreaView style={[mystyles.container, { width: width }]}>
                    <Content contentContainerStyle={{
                        flexGrow: 1, width: width,
                        backgroundColor: "#17171A"
                    }}>
                        {/* <View style={{ height: height / 1,backgroundColor: '#17171A' }}> */}
                        <HeaderBackTextCloseBtn text="General" closeModal={closeModalHandler} backhandler={closeModalHandler} />
                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Currency Conversion</Text>
                            <Text style={styles.descriptionText}>
                                Display fiat values in using o specific currency throughout the application
                         </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setCurrencyModal(true)}
                            style={styles.LanguageOpenerBtn}>

                            <Text style={styles.headingText}>{currencyName}</Text>
                            <Icon name="chevron-down-outline" size={20} color="#FFF" />
                        </TouchableOpacity>
                        {/* <DropDownPicker
                            open={open}
                            value={value}
                            items={CurrencyDropDown}
                            searchable={false}
                            placeholder="USD-United State Dollar"
                            style={{
                                backgroundColor: '#131313',
                                borderColor: '#17171A',
                                borderRadius: 10,
                                // width: wp('90%'),
                                // alignSelf: 'center'
                            }}
                            showArrowIcon={true}
                            arrowIconStyle={{ tintColor: open ? 'green' : '#FFFFFF' }}
                            dropDownContainerStyle={{
                                backgroundColor: '#131313',
                                borderColor: '#272727',
                            }}
                            textStyle={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: '#FFFF',
                                fontFamily: 'Poppins-Bold',

                            }}
                            containerStyle={{ width: '90%', alignSelf: 'center', height: 44 }}
                            setValue={setValue}
                            setItems={setCurrencyDropDown}
                            setOpen={setOpen}
                        /> */}

                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Privacy Policy</Text>
                            <Text style={styles.descriptionText}>
                                Ginkopay's   <CustomText
                                    text={"Privacy Policy"}
                                    locations={[0, 1]}
                                    colors={["#70A2FF", "#F76E64"]}
                                    style={{ fontSize: 12, fontFamily: boldtext, }}
                                />  describes how{'\n'}Ginkopay collects, uses and shares your{'\n'}personal data.                             </Text>
                        </View>

                        {/* <View style={{ marginLeft: 15, flexDirection: 'row' }}>

                            <RadioButton
                                color="#FEBF32"
                                uncheckedColor="#FFFF"
                                value="Native"
                                status={checkedCurrency === 'Native' ? 'checked' : 'unchecked'}
                                onPress={() => setCheckedCurrency('Native')}
                            />
                            <Text style={{ alignSelf: 'center', color: '#FFFF' }}>Native</Text>

                            <View style={{ marginLeft: 35, flexDirection: 'row' }}>
                                <RadioButton
                                    color="#FEBF32"
                                    uncheckedColor="#FFFF"
                                    value="Flat"
                                    status={checkedCurrency === 'Flat' ? 'checked' : 'unchecked'}
                                    onPress={() => setCheckedCurrency('Flat')}
                                />
                                <Text style={{ alignSelf: 'center', color: '#FFFF' }}>Flat</Text>
                            </View>
                        </View> */}

                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Current Language</Text>
                            <Text style={styles.descriptionText}>
                                Translate the application to a different{'\n'}supported language                         </Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setOpenLanguageModal(true)}
                            style={styles.LanguageOpenerBtn}>

                            <Text style={{
                                fontWeight: '400',
                                color: '#FFFF',
                                fontFamily: 'Poppins-Bold',
                            }}>{selectedLanguage}</Text>
                            <Icon name="chevron-down-outline" size={20} color="#FFF" />
                        </TouchableOpacity>


                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>User can search my profile </Text>
                            <Text style={styles.descriptionText}>
                                Other User can’t find your profile if you click{'\n'}no. Nobody will see your account.
                             </Text>
                        </View>

                        <View style={{ marginLeft: 15, flexDirection: 'row' }}>

                            <RadioButton
                                color="#FEBF32"
                                uncheckedColor="#FFFF"
                                value="Native"
                                status={checkedUserSearch === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => setCheckedUserSearch('Yes')}
                            />
                            <Text style={{ alignSelf: 'center', color: '#FFFF' }}>Yes</Text>

                            <View style={{ marginLeft: 35, flexDirection: 'row' }}>
                                <RadioButton
                                    color="#FEBF32"
                                    uncheckedColor="#FFFF"
                                    value="No"
                                    status={checkedUserSearch === 'No' ? 'checked' : 'unchecked'}
                                    onPress={() => setCheckedUserSearch('No')}
                                />
                                <Text style={{ alignSelf: 'center', color: '#FFFF' }}>No</Text>
                            </View>
                        </View>
                        <CustomButton text={"Update"} onPress={closeModalHandler}
                        />

                        {/* </View> */}
                    </Content>
                </SafeAreaView>


            </Modal>



            <Modal
                animationType="slide"
                transparent={true}
                style={{ height: height / 1, alignSelf: 'center', width: '100%' }}
                coverScreen={true}
                animationOut="slideOutDown"
                scrollHorizontal={true}
                visible={showPrivacyModal}
            >
                <Container style={styles.mainview}>
                    <HeaderBackTextCloseBtn
                        text="Security & Privacy"
                        backhandler={BackBtnHandler}
                        closeModal={UpdateGeneralHandler} />

                    <Content
                        contentContainerStyle={[styles.contentContainerStyle, { alignItems: 'flex-start' }]}
                        style={{ flexGrow: 1, }}>


                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Privacy</Text>
                        </View>

                        <View style={[styles.CurrencyPRivacyCurrentLanUserSearchView, {
                            flexDirection: 'row', flex: 1, marginHorizontal: 18,
                            justifyContent: 'space-between'
                        }]}>


                            <Text style={[styles.headingText, { flex: 1 }]}>Clear Privacy Data</Text>

                            <LinearGradient
                                onPress={() => setPrivacyToggle(!privaytoggle)}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={["#70A2FF", "#F76E64"]}
                                style={{ ...styles.LinearGradient, alignItems: privaytoggle ? "flex-end" : "flex-start" }}
                            >
                                <TouchableOpacity onPress={() => setPrivacyToggle(!privaytoggle)} style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#fff" }} />
                            </LinearGradient>

                        </View>

                        <Text style={[styles.descriptionText, { marginHorizontal: 18 }]}>
                            Clear Priacy data so all websites must{'\n'}request access to view account information {'\n'}again
                        </Text>


                        {/* <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <View style={{ position: "absolute", zIndex: 20, alignSelf: "flex-end" }}>

                                <LinearGradient
                                    onPress={() => setPrivacyToggle(!privaytoggle)}
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={["#70A2FF", "#F76E64"]}
                                    style={{ ...styles.LinearGradient, alignItems: privaytoggle ? "flex-end" : "flex-start" }}
                                >
                                    <TouchableOpacity onPress={() => setPrivacyToggle(!privaytoggle)} style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#fff" }} />
                                </LinearGradient>

                            </View>
                            <Text style={styles.headingText}>Clear Privacy Data</Text>
                            <Text style={styles.descriptionText}>
                                Clear Priacy data so all websites must{'\n'}request access to view account information {'\n'}again
                            </Text>
                        </View> */}

                        <TouchableOpacity style={{
                            height: 45,
                            marginVertical: 10,
                            marginHorizontal: 20, width: width - 40, borderRadius: 5, backgroundColor: "#222531", justifyContent: "center", alignItems: "center"
                        }}>

                            <Text style={{ color: "#4C516B" }}>Clear Privacy Data</Text>
                        </TouchableOpacity>

                        <View style={[styles.CurrencyPRivacyCurrentLanUserSearchView, {
                            flexDirection: 'row', flex: 1, marginHorizontal: 18,
                            justifyContent: 'space-between'
                        }]}>


                            <Text style={[styles.headingText, { flex: 1 }]}> Privacy Mode</Text>

                            <LinearGradient
                                onPress={() => setPrivacyModeToggle(!privacyModeToggle)}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={["#70A2FF", "#F76E64"]}
                                style={{ ...styles.LinearGradient, alignItems: privacyModeToggle ? "flex-end" : "flex-start" }}
                            >
                                <TouchableOpacity onPress={() => setPrivacyModeToggle(!privacyModeToggle)} style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#fff" }} />
                            </LinearGradient>

                        </View>

                        <Text style={[styles.descriptionText, { marginHorizontal: 18 }]}>
                            Website must request access to view your account information
                            </Text>



                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <View style={{ position: "absolute", zIndex: 20, alignSelf: "flex-end" }}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={["#70A2FF", "#F76E64"]}
                                    style={{ ...styles.LinearGradient, alignItems: metametric ? "flex-end" : "flex-start" }}
                                >
                                    <TouchableOpacity style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#fff" }} onPress={() => setMetaMetric(!metametric)} />
                                </LinearGradient>
                            </View>
                            <Text style={styles.headingText}>Participate in MetaMetrics</Text>
                            <Text style={styles.descriptionText}>
                                Participate in MetaMetrics to help us make GinkoPay better
                            </Text>
                        </View>


                        <View style={[styles.CurrencyPRivacyCurrentLanUserSearchView, {
                            flexDirection: 'row', flex: 1, marginHorizontal: 18,
                            justifyContent: 'space-between'
                        }]}>


                            <Text style={[styles.headingText, { flex: 1 }]}> Enable 2FA</Text>

                            <LinearGradient
                                onPress={() => setEnable2FA(!Enable2FA)}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={["#70A2FF", "#F76E64"]}
                                style={{ ...styles.LinearGradient, alignItems: Enable2FA ? "flex-end" : "flex-start" }}
                            >
                                <TouchableOpacity onPress={() => setEnable2FA(!Enable2FA)} style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#fff" }} />
                            </LinearGradient>

                        </View>


                        <View style={[styles.CurrencyPRivacyCurrentLanUserSearchView, {
                            flexDirection: 'row', flex: 1, marginHorizontal: 18,
                            justifyContent: 'space-between'
                        }]}>


                            <Text style={[styles.headingText, { flex: 1 }]}> Enable Face ID/Touch ID</Text>

                            <LinearGradient
                                onPress={() => setEnableTouchID(!EnableTouchID)}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={["#70A2FF", "#F76E64"]}
                                style={{ ...styles.LinearGradient, alignItems: EnableTouchID ? "flex-end" : "flex-start" }}
                            >
                                <TouchableOpacity onPress={() => setEnableTouchID(!EnableTouchID)} style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#fff" }} />
                            </LinearGradient>

                        </View>


                        <View style={[styles.CurrencyPRivacyCurrentLanUserSearchView, {
                            flexDirection: 'row', flex: 1, marginHorizontal: 18,
                            justifyContent: 'space-between'
                        }]}>


                            <Text style={[styles.headingText, { flex: 1 }]}> Get Incoming Transactions</Text>

                            <LinearGradient
                                onPress={() => setIncomming(!incomming)}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={["#70A2FF", "#F76E64"]}
                                style={{ ...styles.LinearGradient, alignItems: incomming ? "flex-end" : "flex-start" }}
                            >
                                <TouchableOpacity onPress={() => setIncomming(!incomming)} style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#fff" }} />
                            </LinearGradient>

                        </View>

                        <Text style={[styles.descriptionText, { marginHorizontal: 20 }]}>
                            Third party APIs (Etherscan are used to show {"\n"}your incoming transactions in the history.{"\n"}
                            Turn off if you don’t want us to pull data{"\n"}from those service
                            </Text>


                        {/* <View style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}> */}
                        <CustomButton text={"Update"} onPress={UpdateGeneralHandler} />
                        {/* </View> */}
                    </Content>
                </Container>
            </Modal>
            <BaseCurrencyModal
                visible={currencymodal}
                setCurrencyName={setCurrencyData}
                setVisible={closeBaseCurrencyHandler}
                data={CurrencyData} currencyHandler={CurrencyHandler} />
            <TwoFAModal visible={Enable2FA} setVisible={Enable2FAHandler} />
            <KycModal visible={showverificationModal} navigation={navigation} backhandler={closeShowVerificationModal} setVisible={setShowVerificatonModal} />
            <CurrencyModal visible={languagemodal} setVisible={setCurrencyModal} />
            {/* <LanguageModal visible={currencymodal} setVisible={setLanguageModal} /> */}

            <CurrentLanguageModal visible={openLanguageModal} setVisible={LanguageModalCloseHandler}
                data={Languages} setSelectedLanguage={setSelectedLanguage}
            />


            <MyBankAccountModal visible={BankAccountModal} setVisible={AddBankAccountHandler} />

            <Modal
                isVisible={InsertBankAccountDetails}
                animationIn="fadeInRight"
                deviceHeight={Dimensions.get("screen").height * 2}
                transparent={true}
                style={styles.modal}
                coverScreen={true}
                animationOut="slideOutDown"
                onBackdropPress={() => InsertBankAccountHandler()}
                onBackButtonPress={() => InsertBankAccountHandler()}
                useNativeDriver={true}
                hasBackdrop={true}
                backdropColor="#1D1F27"
                backdropOpacity={.85}
            >
                <Container style={styles.mainview}>
                    <HeaderBackTextCloseBtn
                        text="BANK ACCOUNT"
                        backhandler={() => { InsertBankAccountHandler() }}
                        closeModal={() => { InsertBankAccountHandler() }}
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
                                    onChangeText={text => setAccountAddress(text)}
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
                                    onChangeText={text => setAccountBIC(text)}
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
                                    onChangeText={text => setAccountIBAN(text)}
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
                                    onChangeText={text => setAccountAddress(text)}
                                />
                            </Item>

                        </View>


                        <TouchableOpacity onPress={() => InsertBankAccountHandler()} style={styles.saveBtn}>
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


            <Modal
                isVisible={showAccountDetail}
                animationIn="fadeInRight"
                deviceHeight={Dimensions.get("screen").height * 2}
                transparent={true}
                style={styles.modal}
                coverScreen={true}
                animationOut="slideOutDown"
                onBackdropPress={() => setShowAccountDetails(false)}
                onBackButtonPress={() => setShowAccountDetails(false)}
                useNativeDriver={true}
                hasBackdrop={true}
                backdropColor="#1D1F27"
                backdropOpacity={.85}
            >
                <Container style={styles.mainview}>
                    <HeaderBackTextCloseBtn
                        text="BANK ACCOUNT"
                        backhandler={() => { setShowAccountDetails(false) }}
                        closeModal={() => { setShowAccountDetails(false) }}
                    />
                    <Content
                        contentContainerStyle={[styles.contentContainerStyle, { alignItems: 'flex-start', paddingHorizontal: 15 }]}
                        style={{ flexGrow: 1 }}>




                        <View style={{ marginVertical: hp(2) }}>
                            <Text style={{ color: '#FFFF' }}>Account holder</Text>
                            <Text style={{ color: lightWhite }}>Ginko service technology LLC</Text>
                        </View>



                        <View style={{ marginVertical: hp(2) }}>
                            <Text style={{ color: '#FFFF' }}>BIC</Text>
                            <Text style={{ color: lightWhite }}>TRWIBEB1XXX</Text>
                        </View>

                        <View style={{ marginVertical: hp(2) }}>
                            <Text style={{ color: '#FFFF' }}>IBAN</Text>
                            <Text style={{ color: lightWhite }}>
                                BE93 9672 0280 8067

</Text>
                        </View>


                        <View style={{ marginVertical: hp(2) }}>
                            <Text style={{ color: '#FFFF' }}>Address</Text>
                            <Text style={{ color: lightWhite }}>
                                Avenue Louise 54, Room S52   Brussels, 1050 , Belgium
</Text>
                        </View>




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


            <Modal
                isVisible={openLanguageModal}
                animationIn="fadeInRight"
                deviceHeight={Dimensions.get("screen").height * 2}
                transparent={true}
                style={styles.modal}
                coverScreen={true}
                animationOut="slideOutDown"
                onBackdropPress={() => setOpenLanguageModal(false)}
                onBackButtonPress={() => setOpenLanguageModal(false)}
                useNativeDriver={true}
                hasBackdrop={true}
                backdropColor="#1D1F27"
            // backdropOpacity={.85}
            >
                {/* <Container style={{}} > */}
                <View style={[styles.mainview, { height: height / 1.6 }]} >
                    <View style={{ backgroundColor: "#ffffff", alignSelf: 'center', height: 4, width: 50, borderRadius: 5 }} />
                    <Text style={styles.currencyName}> Current Language</Text>
                    {Languages.map((item, index) => (
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
                                <Text style={{
                                    color: lightWhite,
                                    marginVertical: hp(2),
                                    fontSize: 15,
                                    fontFamily: fontmedium
                                }}>{item.value} </Text>
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

        </Container>
    )
}
export default Preferences

const styles = StyleSheet.create({
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
    CurrencyPRivacyCurrentLanUserSearchView: {
        marginVertical: 10, marginLeft: 20, marginRight: 20
    },
    headingText: {
        fontSize: 16, fontFamily: boldtext, color: '#FFFF', marginVertical: 5,
    },
    descriptionText: {
        fontFamily: simpletext, fontSize: 14, color: '#ABAFC4', marginVertical: 5,
    },
    LinearGradient: {
        width: 70,
        height: 30,
        justifyContent: "center",
        paddingHorizontal: 8,
        borderRadius: 8
    },
    currencyName: {
        color: "#fff",
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: fontmedium
    },
    LanguageOpenerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#17171A',
        width: '90%',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginLeft: wp(3),
        paddingVertical: hp(2),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: lightWhite,
    }, textinputmaincontainer: {
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