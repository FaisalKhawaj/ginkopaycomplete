import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native';
import DonateBtn from './DonateBtn';
import CustomText from './Text';
import AssetsModal from './AssetsModal';
import SentModal from './SentModal'
import RecievedModal from './RecievedModal'
import BuyModal from './BuyModal'
import BuyModal1 from './BuyModal1'
import BuyModal2 from './BuyModal2'
import TransictionCompleted from './TransitionComplete';
import TransictionSubmited from './TransitionSubmittted';
import SentModalMessage from './SentModalMessage'
import RequestPaymentModalusemax from './RequestPaymentModalusemax';
import RequestPaymentModal from './RequestPaymentModal';
import SentModalConfirm from './SentModalConfirm';
import CopyLinkModal from './LinkCopyModal'
import PurchaseMethod from './PurchaseMethod'
import TokenModal from './SendModalToken'
import TokenModal2 from './SendModalToken2'
var obj = [
  {
    key: 1,
    name: "Fabio Ahempip",
    amount: '0.09 ETH',
    dollars: "$164.41",
    image: require("../assets/collectibles.png")
  },
  {
    key: 1,
    name: "Master Lubzap",
    amount: '6 ETH',
    dollars: "$10,937.22",
    image: require("../assets/token2.png")
  },
]
const Compaign = ({ setShowCompaign }) => {
  const navigation = useNavigation()
  const [modaldata, setModalData] = useState({
    key: 1,
    name: "Beexay",
    link: '0x3Dc6...DxE9',
    image: require("../assets/token2.png")
  })
  const [data, setData] = useState(obj)
  const [historyTab, setHistoryTab] = useState(false)
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
  const setSendMessageModaltotrue = () => {
    setSendMessageModal(true);
  }


  //   const setBuyModall = () => {

  //     setBuyModal(true)
  //   }
  //   const setPurchaseModall = () => {
  //     setPurchaseModal(!pruchasemodal)
  //   }

  //   const setBuyModal11 = () => {
  //     setBuyModal(false)
  //     setBuyModal1(!buymodal1)
  //   }

  //   const setBuyModal22 = () => {
  //     setBuyModal1(!buymodal1)
  //     setBuyModal2(!buymodal2)
  //   }
  //   const setsendModalToken2 = () =>{

  //     setTokenModal2(true)
  //   }
  //   const setSendMessageModalFun = () => {
  //     setSentModal(true);
  //     setTokenModal2(false)
  //   }
  //   const setsendModalConfirmfun = () => {
  //     setSendModalConfirm(false);
  //     setSentModal(false)
  //     setSendMessageModal(false)
  //   }


  const setSentModalLocal = () => {
    setSentModal(false)
  }
  const setBuyModall = () => {
    setPurchaseModal(false)
    setBuyModal(true)
  }

  const setPurchaseModall = () => {
    setPurchaseModal(!pruchasemodal)
  }






  const setSendMessageModalFun = (dd) => {
    if (dd === "back") {
      setSendMessageModal(false)
      setShowCompaign()
    } else {
      navigation.navigate("Wallet")
      setSendMessageModal(false)
      setShowCompaign()
    }
  }


  const setTokenModalLocal = () => {
    setTokenModal(true);
    setSendMessageModal(false)
  }

  const setTokenModalLocal2 = () => {
    setTokenModal(false);
    setSentModal(true)
  }

  const crossbuttonFunction = () => {
    //alert("cross")
    setSendMessageModal(false);
    setSentModal(true)
    //navigation.navigate("Wallet")
  }

  const transcitioncompletefunction = (data) => {

    if (data == "close") {
      navigation.navigate("Wallet", { trans: false })
      setReqPayModal(false)
      setSentModal(false)
    } else {
      setReqPayModal(false)
      setSentModal(false)
    }

  }
  const setReqPayModalLocal = () => {
    setReqPayModal(true);
    setSendMessageModal(false)
  }

  return (
    <View style={{ margin: 10, }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          <Icon name="chevron-back-outline" size={20} color="#FFFF" />
        </TouchableOpacity>

        <CustomText text={"As Rom Campaign"} locations={[0, 1]} colors={["#72F6D1", "#FFD505"]}
          style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} />
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          < Icon name="chevron-forward-outline" size={20} color="#FFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.compaignLargeImg}>
        <Image resizeMode="cover" source={require('../assets/backgroundPeople.png')} />
      </View>

      <View style={{ alignSelf: 'center' }}>
        <Text style={styles.newsText}>
          Amet minim mollit non deserunt{'\n'}ullamco est sit aliqua dolor do amet{'\n'} sint. Velit officia consequat duis enim{'\n'}velit mollit. Exercitation veniam{'\n'}consequat sunt nostrud amet.
                </Text>
      </View>

      <View style={{ marginVertical: 10, marginLeft: 35, flexDirection: 'row', }}>
        <Image
          //  style={{ alignSelf: 'center' }} 
          source={require('../assets/yellowDot.png')} />
        <Text style={styles.BTCHoursAgoSource}>BTC</Text>
        <Text style={styles.BTCHoursAgoSource}>16h ago</Text>
        <Text style={[styles.BTCHoursAgoSource, {}]}>News Source</Text>
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => alert('Liked')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 15, height: 15 }} resizeMode="contain" source={require('../assets/gradientLike.png')} />
            <Text style={[styles.BTCHoursAgoSource, {}]}>1 Likes</Text>
          </TouchableOpacity>
        </View>

      </View>

      <DonateBtn setVisible={setSendMessageModaltotrue} />



      <SentModalMessage
        visible={sendmessagemodal}
        setVisible={setSendMessageModalFun}
        crossbuttonFunction={crossbuttonFunction}
        setTokenModal={setTokenModalLocal}
        data={modaldata}
        transcitioncompletefunction={transcitioncompletefunction}
        setReqPayModal={setReqPayModalLocal} />
    </View>

  )
}
export default Compaign;

const styles = StyleSheet.create({
  compaignLargeImg:
  {
    marginVertical: 10,
    alignSelf: 'center'
  },
  newsText:
  {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#FFFF'
  },
  BTCHoursAgoSource:
  {
    marginHorizontal: 8,
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#FFFF'
  },
})