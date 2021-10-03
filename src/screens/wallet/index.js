
import React, { useState } from 'react';
import { View, FlatList, StatusBar, Dimensions, StyleSheet, Image, Text, TouchableOpacity, Touchable, SafeAreaView } from 'react-native';
import { Container, Content, Item, Thumbnail, Input, Label } from 'native-base'
import Feather from 'react-native-vector-icons/Feather';
import { boldtext, fontmedium, simpletext } from '../../constants/fonts';
import { BackgroundColor, graycolor, green, lightWhite, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors';
import CustomText from '../../components/Text';
import LinearGradient from 'react-native-linear-gradient'

import Modal from 'react-native-modal'
import SENT from '../../assets/sent.svg'
import RECIEVED from '../../assets/recieved.svg'
import BUY from '../../assets/buy.svg'
import WITHDRAW from '../../assets/withdraw.svg'
import CURRECO from '../../assets/CurrencyEthereum.svg'
import MyWithdrawModal from '../../components/withdrawModal'
// Modals 
import AssetsModal from '../../components/AssetsModal';
import SentModal from '../../components/SentModal'
import RecievedModal from '../../components/RecievedModal'
import BuyModal from '../../components/BuyModal'
import BuyModal1 from '../../components/BuyModal1'
import BuyModal2 from '../../components/BuyModal2'
import TransictionCompleted from '../../components/TransitionComplete';
import TransictionSubmited from '../../components/TransitionSubmittted';
import SentModalMessage from '../../components/SentModalMessage'
import RequestPaymentModalusemax from '../../components/RequestPaymentModalusemax';
import RequestPaymentModal from '../../components/RequestPaymentModal';
import SentModalConfirm from '../../components/SentModalConfirm';
import CopyLinkModal from '../../components/LinkCopyModal'
import PurchaseMethod from '../../components/PurchaseMethod'
import TokenModal from '../../components/SendModalToken'
import TokenModal2 from '../../components/SendModalToken2'
import MyBankAccountModal from '../../components/BankAccountModal'
import { mystyles } from '../../styles';
import PurchaseMethodBankModal from '../../components/BuyModal';
import WithdrawAmount from '../../components/withdrawAmount';
import HeaderBackTextCloseBtn from '../../components/HeaderBackTextClose';
const { width, height } = Dimensions.get("window");
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


let protfiliodata = [
  {
    key: 1,
    image: require("../../assets/btc.png"),
    name: "Binance Coin",
    dollar: "$226.69",
    percent: +2,
    title: "19.2371 BNB",
  },
  {
    key: 2,
    image: require("../../assets/coin2.png"),
    name: "USD Coin",
    dollar: "$1.00",
    percent: 4.3,
    title: "92,3 USDC",
  },
  {
    key: 3,
    image: require("../../assets/coin3.png"),
    name: "Cardano",
    dollar: "$20.83",
    percent: -1.3,
    title: "12.74 ADA",
  },

]

var obj = [
  {
    key: 1,
    name: "Fabio Ahempip",
    amount: '0.09 GDC',
    dollars: "$164.41",
    image: require("../../assets/collectibles.png")
  },
  {
    key: 1,
    name: "Master Lubzap",
    amount: '6 GDC',
    dollars: "$10,937.22",
    image: require("../../assets/token2.png")
  },
]

const Home = ({ navigation }) => {
  StatusBar.setHidden(true)
  const [data, setData] = useState(obj)
  const [assetsmodal, setAssetsModal] = useState(false);
  const [sentmodal, setSentModal] = useState(false);
  const [recievemodal, setRecievedModal] = useState(false);
  const [WithdrawModal, setWithdrawModal] = useState(false)
  const [pruchasemodal, setPurchaseModal] = useState(false)
  const [MyTab, setMyTab] = useState('History')
  const [trnassubmitted, settranssubmitted] = useState(false)
  const [trnasconfirm, settranconfirm] = useState(false)
  const [sendmessagemodal, setSendMessageModal] = useState(false)
  const [copylink, setCopyLink] = useState(false)
  const [requestPayment, setRequestPayment] = useState(false)
  // const [withdrawAmount, setWithdrawAmount] = useState(false)
  const [tokenmodal, setTokenModal] = useState(false)
  const [showAccountDetail, setShowAccountDetails] = useState(false)
  const [BankAccountName, setBankAccountName] = useState('')
  const [AccountBIC, setAccountBIC] = useState('');
  const [AccountIBAN, setAccountIBAN] = useState('');
  const [AccountAddress, setAccountAddress] = useState('');
  const [tokenmodal2, setTokenModal2] = useState(false)
  const [BankAccountModal, setBankAccountModal] = useState(false)
  const [InsertBankAccountDetails, setInsertBankAccountDetails] = useState(false)
  const [modaldata, setModalData] = useState({
    key: 1,
    name: "Beexay",
    link: '0x3Dc6...DxE9',
    image: require("../../assets/token2.png")
  })

  const renderPortfolioItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProtflioItemExpand")}
        style={protfilioitemstyles.verticalListItem}
      >
        <Image style={protfilioitemstyles.verticalListIconBackground} source={item.image} />
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={{ color: '#fff', fontFamily: simpletext, fontSize: 16 }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontFamily: simpletext, fontSize: 12, marginRight: 20 }}>
              {item.dollar}
            </Text>
            <Text style={{ color: item.percent >= 0 ? green : "red", fontFamily: simpletext, }}>
              {item.percent >= 0 ? "+" + item.percent : "" + item.percent}%
                </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
          <Text style={{ color: '#fff', fontFamily: simpletext, fontFamily: simpletext }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const renderHistoryItem = ({ item }) => {
    return (
      <TouchableOpacity style={historyitemstyles.verticalListItem}>
        <Image style={historyitemstyles.verticalListIconBackground} source={item.image} />
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={{ color: '#fff', fontSize: 14, fontFamily: boldtext }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: graycolor, fontSize: 12, fontFamily: simpletext }}>
              {item.dollars}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
          <Text style={{ color: '#fff', fontSize: 14, fontFamily: boldtext, }}>
            {item.amount}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const showModal = (val) => {
    switch (val) {
      case "assets":
        setAssetsModal(true)
        break;
      case "sent":
        setSentModal(true)
        break;
      case "received":
        setRecievedModal(true)
        break;
      case "withdraw":
        setWithdrawModal(true)
        break;
      case "buy":
        setPurchaseModal(true)
        break;
      case "protfilioitemexpand":
        navigation.navigate("ProtflioItemExpand")
        break;
      default:
        return;
    }
  }

  const setSentModalLocal = (data) => {

    setSentModal(data)
  }
  // const closeWithDrawModal = () => {
  //   setWithdrawModal(false)
  //   setWithdrawAmount(true)
  // }
  console.log("Withdraw Modal  :  " + WithdrawModal)
  // console.log("Withdraw Amount " + withdrawAmount)

  // const WithdrawAmountHandler = () => {
  //   setWithdrawAmount(false)
  //   setBankAccountModal(true)
  // }
  const closeBankAccountModal = () => {
    setBankAccountModal(false)
  }
  // const closeWithdrawAmountHandler = () => {
  //   setWithdrawModal(false)
  //   setWithdrawAmount(false)
  // }

  const setPurchaseModall = () => {
    setPurchaseModal(!pruchasemodal)
  }


  // const AddBankAccountHandler = () => {
  //   setBankAccountModal(false)
  //   setInsertBankAccountDetails(true)
  // }
  const InsertBankAccountHandler = () => {
    setInsertBankAccountDetails(false)
    setShowAccountDetails(true)
  }
  const closeInsertBankAccountHandler = () => {
    setInsertBankAccountDetails(false)
  }
  const transcitioncompletefunction = (data) => {
    settranssubmitted(true)
    setTimeout(() => {
      settranssubmitted(false)
      settranconfirm(true)
    }, 2000);

    setTimeout(() => {
      settranconfirm(false)
    }, 3000);
  }
  const ReceiveModalHandler = () => {
    setRecievedModal(false)
    setRequestPayment(true)
  }
  const navigatetoroot = () => {
    setCopyLink(false)
    // setVisible()
  }
  const openRequestModal = () => {
    setRequestPayment(true)
  }
  const OpenLinkModal = () => {
    setCopyLink(true)
  }
  const requestPaymentHandler = () => {
    setRequestPayment(false)
    setCopyLink(true)
    // setVisible();
    // transcitioncompletefunction()
  }
  const closePayment = () => {
    setRequestPayment(false)
  }
  const setRecievedModalHandler = () => {
    setRecievedModal(false)
  }
  return (
    <SafeAreaView style={[mystyles.container, { width: width }]}>
      <Content contentContainerStyle={{ width: width, backgroundColor: "#17171A" }}>
        <StatusBar hidden />

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.navigate('DashBoardScreen', { screen: 'Profile' })}
            style={{ marginVertical: 2, alignSelf: 'center' }}>
            <Thumbnail medium
              source={require('../../assets/profilePic.png')} />
            <View style={styles.arrowCircleGradientView}>
              {/* <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[LinearGradientColorTwo, LinearGradientColorOne]}
                style={styles.LinearGradientCircleView}> */}
              <Image resizeMode="contain" style={{ alignSelf: 'center', }} source={require('../../assets/yellowCircleProfile.png')} />
              {/* </LinearGradient> */}
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.profile}>
            <Image style={styles.profileimage} source={{ uri: "https://i.pinimg.com/564x/de/fe/c1/defec1130775ba6b3db467359cc7599e.jpg" }} />
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={() => showModal("assets")}
            style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#fff', fontFamily: simpletext, marginRight: 10, fontSize: 14 }}>
              My Assets
                </Text>
            <Feather name="chevron-down" color="#fff" size={22} />
          </TouchableOpacity> */}
        </View>

        <View style={styles.mainView}>
          <View style={{ flex: 1 }}>
            <CustomText
              text="12.4345 GDC"
              locations={[0, 0.1, 0.6, .8, 1]}
              colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
              style={{ fontFamily: simpletext, fontSize: 30, }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
              <Text style={{ color: '#fff', fontFamily: simpletext }}>
                234.45345$
                    </Text>
              <Text style={{ color: green, fontFamily: simpletext, marginHorizontal: 10 }}>
                23.43%
                    </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ProtflioItemExpand")}>
            <CURRECO />
          </TouchableOpacity>

        </View>

        <View style={styles.horizantalListView}>
          <TouchableOpacity style={styles.button}
            onPress={() => showModal("sent")}
          >

            <SENT />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => showModal("received")}
          >
            <RECIEVED />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => showModal("buy")}
          >
            <BUY />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => showModal("withdraw")}
          >
            <WITHDRAW />
          </TouchableOpacity>
        </View>

        <View style={styles.tabView}>
          {/* <TouchableOpacity
            onPress={() => setMyTab('Portfolio')}
            style={{
              borderBottomWidth: MyTab == 'Portfolio' ? 2 : 0, margin: 10, paddingHorizontal: 15,
              borderBottomColor: MyTab == 'Portfolio' ? "#fff" : "rgba(0,0,0,0)",
            }}>
            <Text style={{ color: MyTab == 'Portfolio' ? "#fff" : graycolor, fontFamily: fontmedium, fontSize: 14 }}>
              Portfolio
                </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => setMyTab('History')}
            style={{
              borderBottomWidth: MyTab == 'History' ? 2 : 0, margin: 10, paddingHorizontal: 15,
              borderBottomColor: MyTab == 'History' ? "#fff" : "rgba(0,0,0,0)",
            }}>
            <Text style={{ color: MyTab == 'History' ? "#fff" : graycolor, fontFamily: fontmedium, fontSize: 14 }}>
              History
                </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          {MyTab === 'Portfolio' ? (
            <FlatList
              data={protfiliodata}
              renderItem={renderPortfolioItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) :
            <View>
              <Text style={{ color: '#fff', fontSize: 14, fontFamily: simpletext, marginBottom: 10 }}>
                Transactions ({data.length})
                </Text>
              <FlatList
                data={obj}
                renderItem={renderHistoryItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          }
        </View>
        <View style={{ margin: 20, }}>

          {trnassubmitted ?
            <TransictionSubmited transnumber={0} />
            : null
          }

          {trnasconfirm ?
            <TransictionCompleted transnumber={0} />
            : null
          }

        </View>


        <AssetsModal visible={assetsmodal} setVisible={setAssetsModal} />
        <SentModal
          visible={sentmodal}
          setVisible={setSentModalLocal}
          setSendMessageModal={setSendMessageModal}
          setModalData={setModalData}
          tokenmodal={tokenmodal}
          setTokenModal={setTokenModal}
          setTokenModal2={setTokenModal2}
          transcitioncompletefunction={transcitioncompletefunction}
        />
        <RecievedModal
          title="Receive"
          description="Your address to Receive payment"
          btnName="Request Payment"
          address="0x3Dc6...DfCE"
          visible={recievemodal}
          setVisible={setRecievedModalHandler}
        // setCopyLink={setCopyLink}
        // setRequestPayment={setRequestPayment}
        // transcitioncompletefunction={transcitioncompletefunction}
        />
        {/* <RequestPaymentModal
          visible={requestPayment}
          setVisible={requestPaymentHandler} closePayment={closePayment} /> */}

        {/* <CopyLinkModal visible={copylink} setVisible={navigatetoroot} /> */}

        <MyWithdrawModal
          title="Withdraw"
          description={"You can withdraw your coins on your\nlast Deposit method"}
          btnName="Withdraw"
          visible={WithdrawModal}
          setVisible={setWithdrawModal}
        // setCopyLink={setCopyLink}
        // setWithdrawAmount={setWithdrawAmount}
        // setRequestPayment={setRequestPayment}
        // transcitioncompletefunction={transcitioncompletefunction}
        />
        {/* <WithdrawModal /> */}

        <PurchaseMethod navigation={navigation}
          visible={pruchasemodal}
          setVisible={setPurchaseModall}
        // closePurchase={closePurchase}
        />

        {/* <WithdrawAmount visible={withdrawAmount}
          setVisible={WithdrawAmountHandler}
          closeWithdraw={closeWithdrawAmountHandler}
        /> */}

        <MyBankAccountModal visible={BankAccountModal}
          setVisible={AddBankAccountHandler}
          closeBankAccount={closeBankAccountModal}
        />


        <Modal
          isVisible={InsertBankAccountDetails}
          animationIn="fadeInRight"
          deviceHeight={Dimensions.get("screen").height * 2}
          transparent={true}
          style={styles.modal}
          coverScreen={true}
          animationOut="slideOutDown"
          onBackdropPress={() => closeInsertBankAccountHandler()}
          onBackButtonPress={() => closeInsertBankAccountHandler()}
          useNativeDriver={true}
          hasBackdrop={true}
          backdropColor="#1D1F27"
          backdropOpacity={.85}
        >
          <Container style={styles.mainview}>
            <HeaderBackTextCloseBtn
              text="BANK ACCOUNT"
              backhandler={() => { closeInsertBankAccountHandler() }}
              closeModal={() => { closeInsertBankAccountHandler() }}
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


      </Content>
    </SafeAreaView>

  );
};
export default Home;

const styles = StyleSheet.create({
  saveBtn: {
    alignSelf: 'center',
    width: wp('25%'),
    padding: 5,
    marginVertical: hp(3),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10
  },
  container: {
    backgroundColor: "#17171A"
  },
  modal: {
    margin: 0
  },
  contentContainerStyle: {
    alignItems: "center",
    flexGrow: 1
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
  header: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: width / 1.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  arrowCircleGradientView:
  {
    position: 'absolute', bottom: 0, right: 0
  },
  LinearGradientCircleView:
  {
    width: 25,
    borderRadius: 25,
    justifyContent: 'center',
    height: 25
  },
  profile: {
    height: 35,
    width: 35,
    alignSelf: "flex-start",
    alignItems: 'center',
    overflow: "hidden",
    justifyContent: 'center',
    backgroundColor: '#F7931A',
    borderRadius: 25,
    marginRight: 20
  },
  mainView: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  profileimage: {
    height: 35,
    width: 35,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  horizantalListView: {
    flexDirection: 'row',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 3,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#2A2D3C',
  },
  newsListItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textinputmaincontainer: {
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

const historyitemstyles = StyleSheet.create({
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