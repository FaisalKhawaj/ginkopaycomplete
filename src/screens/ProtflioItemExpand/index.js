import React, { useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import HistoryItemModal from '../../components/HistoryItemModal'
import BackBtnWithMiddleText from '../../components/BackBtnMiddleText';
import SENT from '../../assets/sent.svg'
import RECIEVED from '../../assets/recieved.svg'
import BUY from '../../assets/buy.svg'
import WITHDRAW from '../../assets/withdraw.svg'
import { BackgroundColor, graycolor, green, lightWhite } from '../../constants/colors';
import { boldtext, simpletext } from '../../constants/fonts';
import CustomText from '../../components/Text';
import { Container, Content, Item, Input, Label } from 'native-base'
import CURRECO from '../../assets/CurrencyEthereum.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
import { mystyles } from '../../styles';
import MyWithdrawModal from '../../components/withdrawModal';
import WithdrawAmount from '../../components/withdrawAmount';
import MyBankAccountModal from '../../components/BankAccountModal';
import HeaderBackTextCloseBtn from '../../components/HeaderBackTextClose';

const { width, height } = Dimensions.get("window");

var Protfilio = [
  {
    key: 1,
    time: "Mar 3 at 10:04am",
    type: "Received",
    icon: "ios-arrow-down",
    amount: "0.04 GDC",
    dollars: "$9.58799"
  },
  {
    key: 2,
    time: "Mar 3 at 10:04am",
    type: "Send",
    icon: "ios-arrow-up",
    amount: "0.04 GDC",
    dollars: "$9.58799"
  },
  {
    key: 3,
    time: "Mar 3 at 10:04am",
    type: "Received",
    icon: "ios-arrow-down",
    amount: "0.04 GDC",
    dollars: "$9.58799"
  },
  {
    key: 4,
    time: "Mar 3 at 10:04am",
    type: "Send",
    icon: "ios-arrow-up",
    amount: "0.04 GDC",
    dollars: "$9.58799"
  },
  {
    key: 5,
    time: "Mar 3 at 10:04am",
    type: "Received",
    icon: "ios-arrow-down",
    amount: "0.04 GDC",
    dollars: "$9.58799"
  },
  {
    key: 6,
    time: "Mar 3 at 10:04am",
    type: "Send",
    icon: "ios-arrow-up",
    amount: "0.04 GDC",
    dollars: "$9.58799"
  }]

const ProtfilioItemExpanded = ({ navigation }) => {
  const [itemView, setItemView] = useState(false)

  const [data, setdata] = useState(null);

  const [sentmodal, setSentModal] = useState(false);
  const [recievemodal, setRecievedModal] = useState(false);
  const [pruchasemodal, setPurchaseModal] = useState(false)
  const [buymodal, setBuyModal] = useState(false);
  const [buymodal1, setBuyModal1] = useState(false);
  const [MyTab, setMyTab] = useState('Portfolio')
  const [buymodal2, setBuyModal2] = useState(false);
  const [WithdrawModal, setWithdrawModal] = useState(false)
  const [BankAccountModal, setBankAccountModal] = useState(false)
  const [InsertBankAccountDetails, setInsertBankAccountDetails] = useState(false)
  const [showAccountDetail, setShowAccountDetails] = useState(false)

  const [trnassubmitted, settranssubmitted] = useState(false)
  const [trnasconfirm, settranconfirm] = useState(false)
  const [sendmessagemodal, setSendMessageModal] = useState(false)
  const [reqpaymodal, setReqPayModal] = useState(false);
  const [sendmodalconfirm, setSendModalConfirm] = useState(false)
  const [copylink, setCopyLink] = useState(false)
  const [requestPayment, setRequestPayment] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState(false)

  const [tokenmodal, setTokenModal] = useState(false)
  const [tokenmodal2, setTokenModal2] = useState(false)

  const [modaldata, setModalData] = useState({
    key: 1,
    name: "Beexay",
    link: '0x3Dc6...DxE9',
    image: require("../../assets/token2.png")
  })

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
      case "buy":
        setPurchaseModal(true)
        break;
      case "withdraw":
        setWithdrawModal(true)
        break;
      case "protfilioitemexpand":
        navigation.navigate("ProtflioItemExpand")
        break;
      default:
        return;
    }
  }

  const setSentModalLocal = () => {
    setSentModal(false)
  }


  const setPurchaseModall = () => {
    setPurchaseModal(!pruchasemodal)
  }
  const closeWithDrawModal = () => {
    setWithdrawModal(false)
    setWithdrawAmount(true)
  }
  const WithdrawAmountHandler = () => {
    setWithdrawAmount(false)
    setBankAccountModal(true)
  }
  const InsertBankAccountHandler = () => {
    setInsertBankAccountDetails(false)
    setShowAccountDetails(true)
  }
  const BackBtnHandler = () => {
    navigation.goBack()
  }
  const AddBankAccountHandler = () => {
    setBankAccountModal(false)
    setInsertBankAccountDetails(true)
  }
  const transcitioncompletefunction = (data) => {
    navigation.navigate("Wallet")
  }

  const renderHistoryItem = ({ item }) => {

    return (
      <TouchableOpacity style={styles.verticalListItem} onPress={() => showTransactionDetail(item)}>
        <Text style={{ color: graycolor, fontFamily: simpletext, opacity: .7, marginBottom: 20 }}>
          {item.time}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
          <Icon name={item.icon} color={green} size={30} style={{ marginHorizontal: 20 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#ffffff', fontFamily: simpletext, fontSize: 16, marginBottom: 5 }}>
              {item.type} GDC
                      </Text>

            <Text style={{ color: green, fontFamily: simpletext, }}>
              Confirmed
                      </Text>
          </View>
          <View style={{ alignItems: 'flex-end', justifyContent: 'space-evenly' }}>
            <Text style={{ color: '#ffffff', fontFamily: simpletext, fontSize: 16, marginBottom: 5 }}>
              {item.amount}
            </Text>
            <Text style={{ color: graycolor, fontFamily: simpletext, }}>
              {item.dollars}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const showTransactionDetail = (item) => {
    setItemView(true)
    setdata(item)
  }

  return (
    <SafeAreaView style={[mystyles.container, { width: width }]}>
      <Content contentContainerStyle={{ width: width, backgroundColor: "#17171A" }}>
        <BackBtnWithMiddleText text="GDC" backBtn={BackBtnHandler} navigation={navigation} />
        <View style={styles.mainView}>
          <View style={{ flex: 1 }}>

            <CustomText
              text="19.2371 GDC"
              locations={[0, 0.1, 0.6, .8, 1]}
              colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
              style={{ color: "#fff", fontFamily: simpletext, fontSize: 30, }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
              <Text style={{ color: '#fff', fontFamily: simpletext }}>
                234.45345$
                    </Text>
              <Text style={{ color: green, fontFamily: simpletext, marginHorizontal: 10 }}>
                23.43%
                    </Text>
            </View>

          </View>
          <View style={{}}>
            <CURRECO />
          </View>
        </View>

        <View style={styles.horizantalListView}>
          <TouchableOpacity style={styles.button}
            onPress={() => setSentModal(true)}
          >

            <SENT />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => setRecievedModal(true)}
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
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <FlatList
            data={Protfilio}
            renderItem={renderHistoryItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ position: 'absolute', }}>
          <HistoryItemModal visible={itemView} setVisible={setItemView} data={data} />
        </View>
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
          setVisible={setRecievedModal}
          setCopyLink={setCopyLink}
          setRequestPayment={setRequestPayment}
          transcitioncompletefunction={transcitioncompletefunction}
        />

        <MyWithdrawModal
          title="Withdraw"
          description={"You can withdraw your coins on your\nlast Deposit method"}
          btnName="Withdraw"
          visible={WithdrawModal}
          setVisible={closeWithDrawModal}
          setCopyLink={setCopyLink}
          // setWithdrawAmount={setWithdrawAmount}
          // setRequestPayment={setRequestPayment}
          transcitioncompletefunction={transcitioncompletefunction}
        />
        <PurchaseMethod navigation={navigation} visible={pruchasemodal} setVisible={setPurchaseModall}

        />
        <WithdrawAmount visible={withdrawAmount}
          setVisible={WithdrawAmountHandler}
        />
        <MyBankAccountModal
          visible={BankAccountModal}
          setVisible={AddBankAccountHandler} />


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

      </Content>
    </SafeAreaView>
  );
};
export default ProtfilioItemExpanded;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17171A"
  },
  header: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainView: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
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
  iconBackground: {
    height: 35,
    width: 35,
    alignSelf: "flex-start",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7931A',
    borderRadius: 25,
    marginRight: 20
  },
  mainIcon: {
    height: 100,
    width: 100,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#2A2D3C',
  },
  horizantalListView: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    marginHorizontal: 20
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
  verticalListItem: {
    // backgroundColor:'#171921',
    padding: 12,
    borderRadius: 10,
  },
  itemView: {

  }
})