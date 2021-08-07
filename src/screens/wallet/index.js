
import React, { useState } from 'react';
import { View, FlatList, StatusBar, Dimensions, StyleSheet, Image, Text, TouchableOpacity, Touchable, SafeAreaView } from 'react-native';
import { Container, Content } from 'native-base'
import Feather from 'react-native-vector-icons/Feather';
import { boldtext, fontmedium, simpletext } from '../../constants/fonts';
import { graycolor, green } from '../../constants/colors';
import CustomText from '../../components/Text';

import SENT from '../../assets/sent.svg'
import RECIEVED from '../../assets/recieved.svg'
import BUY from '../../assets/buy.svg'
import CURRECO from '../../assets/CurrencyEthereum.svg'

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

import { mystyles } from '../../styles';
const { width, height } = Dimensions.get("window");


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
    amount: '0.09 ETH',
    dollars: "$164.41",
    image: require("../../assets/collectibles.png")
  },
  {
    key: 1,
    name: "Master Lubzap",
    amount: '6 ETH',
    dollars: "$10,937.22",
    image: require("../../assets/token2.png")
  },
]

const Home = ({ navigation }) => {
  StatusBar.setHidden(true)
  const [data, setData] = useState(obj)
  const [historyTab, setHistoryTab] = useState(false)
  const [assetsmodal, setAssetsModal] = useState(false);
  const [sentmodal, setSentModal] = useState(false);
  const [recievemodal, setRecievedModal] = useState(false);
  const [pruchasemodal, setPurchaseModal] = useState(false)
  const [buymodal, setBuyModal] = useState(false);
  const [buymodal1, setBuyModal1] = useState(false);
  const [MyTab, setMyTab] = useState('Portfolio')
  const [buymodal2, setBuyModal2] = useState(false);
  const [trnassubmitted, settranssubmitted] = useState(false)
  const [sendmessagemodal, setSendMessageModal] = useState(false)
  const [reqpaymodal, setReqPayModal] = useState(false);
  const [sendmodalconfirm, setSendModalConfirm] = useState(false)
  const [copylink, setCopyLink] = useState(false)
  const [requestPayment, setRequestPayment] = useState(false)

  const [tokenmodal, setTokenModal] = useState(false)
  const [tokenmodal2, setTokenModal2] = useState(false)

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

  // const marketPress = () => {
  //   setHistoryTab(false)
  // }

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
      case "protfilioitemexpand":
        navigation.navigate("ProtflioItemExpand")
        break;
      default:
        return;
    }
  }

  const setBuyModall = () => {

    setBuyModal(true)
  }
  const setPurchaseModall = () => {
    setPurchaseModal(!pruchasemodal)
  }
  const BuyModalBackHandler = () => {
    setBuyModal(false)
  }

  const setBuyModal11 = () => {
    setBuyModal(false)
    setBuyModal1(!buymodal1)
  }

  const setBuyModal22 = () => {
    setBuyModal1(!buymodal1)
    setBuyModal2(!buymodal2)
  }
  const purchaseModalHandler = () => {
    setPurchaseModal(!pruchasemodal)
  }
  const BuyCloseModalHandler = () => {
    setPurchaseModal(false)
    setBuyModal(!buymodal)
    navigation.navigate('Home')
  }

  const setsendModalToken2 = () => {
    setTokenModal2(true)
  }
  const setSendMessageModalFun = () => {
    setSentModal(true);
    setTokenModal2(false)
  }
  const setsendModalConfirmfun = () => {
    setSendModalConfirm(false);
    setSentModal(false)
    setSendMessageModal(false)
  }
  return (
    <SafeAreaView style={[mystyles.container, { width: width }]}>
      <Content contentContainerStyle={{ width: width, backgroundColor: "#17171A" }}>
        <StatusBar hidden />

        <View style={styles.header}>
          <TouchableOpacity style={styles.profile}>
            <Image style={styles.profileimage} source={{ uri: "https://i.pinimg.com/564x/de/fe/c1/defec1130775ba6b3db467359cc7599e.jpg" }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => showModal("assets")}
            style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#fff', fontFamily: simpletext, marginRight: 10, fontSize: 14 }}>
              My Assets
                </Text>
            <Feather name="chevron-down" color="#fff" size={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainView}>
          <View style={{ flex: 1 }}>
            <CustomText
              text="12.4345 ETH"
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
          <CURRECO />
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
        </View>

        <View style={styles.tabView}>
          <TouchableOpacity
            onPress={() => setMyTab('Portfolio')}
            style={{
              borderBottomWidth: MyTab == 'Portfolio' ? 2 : 0, margin: 10, paddingHorizontal: 15,
              borderBottomColor: MyTab == 'Portfolio' ? "#fff" : "rgba(0,0,0,0)",
            }}>
            <Text style={{ color: MyTab == 'Portfolio' ? "#fff" : graycolor, fontFamily: fontmedium, fontSize: 14 }}>
              Portfolio
                </Text>
          </TouchableOpacity>
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
            : <TransictionCompleted transnumber={0} />
          }
        </View>
        <AssetsModal visible={assetsmodal} setVisible={setAssetsModal} />
        <SentModal visible={sentmodal} setVisible={setSentModal} setSendMessageModal={setSendMessageModal} setModalData={setModalData} tokenmodal={tokenmodal} setTokenModal={setTokenModal} setTokenModal2={setTokenModal2} />
        <RecievedModal visible={recievemodal} setVisible={setRecievedModal} setCopyLink={setCopyLink} setRequestPayment={setRequestPayment} />
        <PurchaseMethod visible={pruchasemodal} setVisible={purchaseModalHandler} setBuyModall={setBuyModall} />
        <BuyModal visible={buymodal} backHandler={BuyModalBackHandler}
          closeHandler={BuyCloseModalHandler}
        // setBuyModal11={setBuyModal11}
        />
        <BuyModal1 visible={buymodal1} setVisible={setBuyModal1} setBuyModal22={setBuyModal22} />
        <BuyModal2 visible={buymodal2} setVisible={setBuyModal2} />

        <SentModalMessage visible={sendmessagemodal} setVisible={setSendMessageModalFun} data={modaldata} setReqPayModal={setReqPayModal} />
        <RequestPaymentModalusemax visible={reqpaymodal} setVisible={setReqPayModal} setSendModalConfirm={setSendModalConfirm} setTokenModal={setsendModalToken2} />
        <SentModalConfirm visible={sendmodalconfirm} setVisible={setsendModalConfirmfun} />
        <TokenModal visible={tokenmodal} setVisible={setTokenModal} />
        <TokenModal2 visible={tokenmodal2} setVisible={setTokenModal2} opensendmodal={setSendMessageModalFun} />
        <CopyLinkModal visible={copylink} setVisible={setCopyLink} />
        <RequestPaymentModal visible={requestPayment} setVisible={setRequestPayment} setVisible2={setRecievedModal} />
      </Content>
    </SafeAreaView>

  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#17171A"
  },
  header: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: width / 1.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
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