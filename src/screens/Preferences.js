import React, { useState } from 'react';
import { Container, Content, Thumbnail } from 'native-base'
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { BackgroundColor } from '../constants/colors';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import BackBtnWithMiddleText from '../components/BackBtnMiddleText';
import PreferencesTitleDescriptionArrowBtn from '../components/PreferencesTitleDescriptionArrowBtn';
import HeaderBackTextCloseBtn from '../components/HeaderBackTextClose';
import CustomButton from '../components/Button';
import { boldtext, simpletext } from '../constants/fonts';
import KycModal from '../components/kYCModal'
import CurrencyModal from '../components/CurrencyModal';
import LanguageModal from '../components/LanguageModal'
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get('window') 
const Preferences = ({ navigation }) => {

    const [showGeneralModal, setShowGeneralModal] = useState(false)
    const [checkedCurrency, setCheckedCurrency] = React.useState('Native');
    const [checkedUserSearch, setCheckedUserSearch] = useState('Yes')
    const [showPrivacyModal, setShowPrivacyModal] = useState(false)
    const [showverificationModal , setShowVerificatonModal] =  useState(false)
    const [privaytoggle , setPrivacyToggle] = useState(false)
    const [incomming, setIncomming] = useState(false)
    const [metametric, setMetaMetric] = useState(false)
    const [currencymodal, setCurrencyModal] = useState(false)
    const [languagemodal, setLanguageModal] = useState(false)
    const BackBtnHandler = () => {
        navigation.goBack()
    }


    const closeModalHandler = () => {
        setShowGeneralModal(!showGeneralModal)
    }


    const UpdateGeneralHandler = () => {
        setShowPrivacyModal(!showPrivacyModal)
    }

    const functionshowverificationmodal = () =>{
        setShowVerificatonModal(!showverificationModal)
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [CurrencyDropDown, setCurrencyDropDown] = useState([
        { label: 'Dollar', value: 'USD-United State Dollar' },
        { label: 'XLM - Stellar Lumen', value: 'XLM - Stellar Lumen' },
        { label: 'STORJ - Storj', value: 'STORJ - Storj' },
        { label: 'PAY - TenX', value: 'PAY - TenX' },
        { label: 'TKN - TokenCard', value: 'TKN - TokenCard' },
        { label: 'UAH - Ukrainian Hryvnia', value: 'UAH - Ukrainian Hryvnia' },
        { label: 'USD - United State Dollar', value: 'USD - United State Dollar' },
        { label: 'TRST - WeTrust', value: 'TRST - WeTrust' },
        { label: 'ZEC - Zcash', value: 'ZEC - Zcash' },
    ]);
    const [openLanguage, setOpenLanguage] = useState(false)
    const [valueLanguage, setValueLanguage] = useState(null)
    const [LanguageDropDown, setLanguageDropDown] = useState([
        {label:"Čeština", value:'Čeština'},
        {label:"Dansk",value:"Dansk"},
        {label:"Deutsch",value:"Deutsch"},
        {label:"ελληνικά",value:"ελληνικά"},
    
        {label:"English",value:"English"},
        {label:"Español (Latin America)",value:"Español (Latin America)"},
        {label:"Estonian",value:"Estonian"},
      

    ]);

   
    return (
        <Container style={{ backgroundColor: BackgroundColor,flex:1 }}>
            <Content contentContainerStyle={{ backgroundColor: BackgroundColor }} >

                <BackBtnWithMiddleText text="Preferences" backBtn={BackBtnHandler} navigation={navigation} />
                <View style={{ marginTop: 40 }}>
                    <PreferencesTitleDescriptionArrowBtn 
                        title="General"
                        showModal={closeModalHandler}
                        description={"Currency conversion, primary currency\n,language and search engine"}
                    />
                </View>

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

                
            </Content>
            <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ height: height, alignSelf: 'center', width: '100%' }}
                    coverScreen={true}
                    animationOut="slideOutDown"
                    visible={showGeneralModal}
                >
               
                    <View style={{ height: height / 1,backgroundColor: '#17171A' }}>
                        <HeaderBackTextCloseBtn text="General" closeModal={closeModalHandler} />
                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Currency Conversion</Text>
                            <Text style={styles.descriptionText}>
                                Display fiat values in using o specific currency throughout the application
                         </Text>
                        </View>

                        <DropDownPicker
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
                        />

                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Privacy Currency</Text>
                            <Text style={styles.descriptionText}>
                                Select Native to prioritize displaying values{'\n'}in the native currency of the chain (e.g. ETH).{'\n'} Select Fiat to prioritize displaying values in{'\n'}your selected fiat currency
                             </Text>
                        </View>

                        <View style={{ marginLeft: 15, flexDirection: 'row' }}>

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
                        </View>


                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Current Language</Text>
                            <Text style={styles.descriptionText}>
                                Translate the application to a different{'\n'}Supported language
                             </Text>
                        </View>

                        <DropDownPicker
                            open={openLanguage}
                            value={valueLanguage}
                            items={LanguageDropDown}
                            searchable={false}
                            placeholder="English"
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
                            setValue={setValueLanguage}
                            setItems={setLanguageDropDown}
                            setOpen={setOpenLanguage}
                        />

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
                           <CustomButton text={"Update"} onPress={UpdateGeneralHandler}
                            />
                        
                    </View>
                   
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
                <ScrollView >
                    <View style={{ height: height, backgroundColor: '#17171A' }}>
                        <HeaderBackTextCloseBtn text="Security & Privacy" closeModal={UpdateGeneralHandler} />
                        
                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Privacy</Text>
                        </View>


                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <View style={{position:"absolute",zIndex:20, alignSelf:"flex-end"}}>
                           
                                <LinearGradient 
                                 onPress={() => setPrivacyToggle(!privaytoggle)}
                                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                    colors={[ "#70A2FF","#F76E64"]} 
                                    style={{...styles.LinearGradient, alignItems:privaytoggle?"flex-end":"flex-start"}}
                                >
                                    <TouchableOpacity onPress={() => setPrivacyToggle(!privaytoggle)}  style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}} />
                                </LinearGradient>
                          
                            </View>
                            <Text style={styles.headingText}>Clear Privacy Data</Text>
                            <Text style={styles.descriptionText}>
                                    Clear Priacy data so all websites must{'\n'}request access to view account information {'\n'}again
                            </Text>
                        </View>

                        <TouchableOpacity style={{
                            height:45,
                            marginVertical:10,
                            marginHorizontal:20,width:width-40, borderRadius:5,backgroundColor:"#222531",justifyContent:"center", alignItems:"center" }}>
                            <Text style={{color:"#4C516B"}}>Clear Privacy Data</Text>
                        </TouchableOpacity>

                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Privacy Mode</Text>
                            <Text style={styles.descriptionText}>
                                Website must request access to view your account information
                            </Text>
                        </View>

                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                               <View style={{position:"absolute",zIndex:20, alignSelf:"flex-end"}}>
                                    <LinearGradient 
                                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                        colors={[ "#70A2FF","#F76E64"]} 
                                        style={{...styles.LinearGradient, alignItems:metametric?"flex-end":"flex-start"}}
                                    >
                                        <TouchableOpacity style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}} onPress={() => setMetaMetric(!metametric)} />
                                    </LinearGradient>     
                                </View>    
                            <Text style={styles.headingText}>Participate in MetaMetrics</Text>
                            <Text style={styles.descriptionText}>
                                Participate in MetaMetrics to help us make GinkoPay better
                            </Text>
                        </View>

                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                        <View style={{position:"absolute",zIndex:20, alignSelf:"flex-end"}}>
                                
                                        <LinearGradient 
                                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                            colors={[ "#70A2FF","#F76E64"]} 
                                            style={{...styles.LinearGradient, alignItems:incomming?"flex-end":"flex-start"}}
                                        >
                                             <TouchableOpacity onPress={() => setIncomming(!incomming)} style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}}/>
                                        </LinearGradient>
                                  
                            </View>
                            <Text style={styles.headingText}>Get Incoming Transactions</Text>
                            <Text style={styles.descriptionText}>
                            Third party APIs (Etherscan are used to show {"\n"} your incoming transactions in the history. {"\n"}
                            Turn off if you don’t want us to pull data{"\n"} from those service
                            </Text>
                        </View>
                        
                        <View style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}>
                            <CustomButton text={"Update"} onPress={UpdateGeneralHandler}/>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
            <KycModal visible={showverificationModal} setVisible={setShowVerificatonModal} />
            <CurrencyModal visible={languagemodal} setVisible={setCurrencyModal} />
            <LanguageModal visible={currencymodal} setVisible={setLanguageModal} />
        </Container>
    )
}
export default Preferences

const styles = StyleSheet.create({
    CurrencyPRivacyCurrentLanUserSearchView: {
        marginVertical: 10, marginLeft: 20,marginRight:20
    },
    headingText: {
        fontSize: 16, fontFamily: boldtext, color: '#FFFF',marginVertical: 5,
    },
    descriptionText: {
        fontFamily:simpletext,  fontSize: 14, color: '#ABAFC4',marginVertical: 5,
    },
    LinearGradient:{
        width:70, 
        height:30, 
        justifyContent:"center",
        paddingHorizontal:8, 
        borderRadius:8
      }

})