import React, { useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HistoryItemModal from '../../components/HistoryItemModal'
import BackBtnWithMiddleText from '../../components/BackBtnMiddleText';
import SENT from '../../assets/sent.svg'
import RECIEVED from '../../assets/recieved.svg'
import BUY from '../../assets/buy.svg'
import { graycolor, green } from '../../constants/colors';
import { simpletext } from '../../constants/fonts';
import CustomText from '../../components/Text';
import { Content } from 'native-base'

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

var Protfilio = [
  {
    key: 1,
    time: "Mar 3 at 10:04am",
    type: "Received",
    icon: "ios-arrow-down",
    amount: "0.04 BNB",
    dollars: "$9.58799"
  },
  {
    key: 2,
    time: "Mar 3 at 10:04am",
    type: "Send",
    icon: "ios-arrow-up",
    amount: "0.04 BNB",
    dollars: "$9.58799"
  },
  {
    key: 3,
    time: "Mar 3 at 10:04am",
    type: "Received",
    icon: "ios-arrow-down",
    amount: "0.04 BNB",
    dollars: "$9.58799"
  },
  {
    key: 4,
    time: "Mar 3 at 10:04am",
    type: "Send",
    icon: "ios-arrow-up",
    amount: "0.04 BNB",
    dollars: "$9.58799"
  },
  {
    key: 5,
    time: "Mar 3 at 10:04am",
    type: "Received",
    icon: "ios-arrow-down",
    amount: "0.04 BNB",
    dollars: "$9.58799"
  },
  {
    key: 6,
    time: "Mar 3 at 10:04am",
    type: "Send",
    icon: "ios-arrow-up",
    amount: "0.04 BNB",
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
  const [trnassubmitted, settranssubmitted] = useState(false)
  const [trnasconfirm, settranconfirm] = useState(false)
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

  const setSentModalLocal = () => {
    setSentModal(false)
  }


  const setPurchaseModall = () => {
    setPurchaseModal(!pruchasemodal)
  }


  const BackBtnHandler = () => {
    navigation.goBack()
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
              {item.type} BNB
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
        <BackBtnWithMiddleText text="BNB" backBtn={BackBtnHandler} navigation={navigation} />
        <View style={styles.mainView}>
          <View style={{ flex: 1 }}>

            <CustomText
              text="19.2371 BNB"
              locations={[0, 0.1, 0.6, .8, 1]}
              colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
              style={{ color: "#fff", fontFamily: simpletext, fontSize: 30, }}
            />
            <Text style={{ color: '#fff', marginTop: 10, fontFamily: simpletext }}>
              $4360.234
                </Text>
          </View>
          <View style={{ height: 100, width: 100, margin: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: "#43371E" }}>
            <Image style={styles.mainIcon} source={require('../../assets/coin1.png')} />
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
          visible={recievemodal}
          setVisible={setRecievedModal}
          setCopyLink={setCopyLink}
          setRequestPayment={setRequestPayment}
          transcitioncompletefunction={transcitioncompletefunction}
        />
        <PurchaseMethod navigation={navigation} visible={pruchasemodal} setVisible={setPurchaseModall}

        />
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
  verticalListItem: {
    // backgroundColor:'#171921',
    padding: 12,
    borderRadius: 10,
  },
  itemView: {

  }
})