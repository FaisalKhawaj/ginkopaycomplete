import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
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
      key:1,
      name:"Fabio Ahempip",
      amount:'0.09 ETH',
      dollars:"$164.41",
      image:require("../assets/collectibles.png")
    },
    {
      key:1,
      name:"Master Lubzap",
      amount:'6 ETH',
      dollars:"$10,937.22",
      image:require("../assets/token2.png")
    },
  ]
const Compaign = () => {
    const [modaldata, setModalData] = useState({
        key:1,
        name: "Beexay",
        link:'0x3Dc6...DxE9',
        image:require("../assets/token2.png")
      })
      const [data,setData] = useState(obj)
  const [historyTab,setHistoryTab] = useState(false)
  const [assetsmodal, setAssetsModal] = useState(false);
  const [sentmodal, setSentModal] = useState(false);
  const [recievemodal, setRecievedModal] = useState(false);
  const [pruchasemodal, setPurchaseModal] = useState(false)
  const [buymodal, setBuyModal] = useState(false);
  const [buymodal1, setBuyModal1] = useState(false);
  const [buymodal2, setBuyModal2] = useState(false);
  const [trnassubmitted , settranssubmitted] = useState(false)
  const [sendmessagemodal, setSendMessageModal] = useState(false)
  const [reqpaymodal, setReqPayModal] = useState(false);  
  const [sendmodalconfirm, setSendModalConfirm] = useState(false) 
  const [copylink, setCopyLink] = useState(false)
  const [requestPayment, setRequestPayment] = useState(false)
  const [tokenmodal,setTokenModal] = useState(false)
  const [tokenmodal2,setTokenModal2] = useState(false)
    const setSendMessageModaltotrue = () => {
        setSendMessageModal(true);
    }
   

      const setBuyModall = () => {

        setBuyModal(true)
      }
      const setPurchaseModall = () => {
        setPurchaseModal(!pruchasemodal)
      }
    
      const setBuyModal11 = () => {
        setBuyModal(false)
        setBuyModal1(!buymodal1)
      }
    
      const setBuyModal22 = () => {
        setBuyModal1(!buymodal1)
        setBuyModal2(!buymodal2)
      }
      const setsendModalToken2 = () =>{
        
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
                <Text style={styles.BTCHoursAgoSource}>News Source</Text>
            </View>

            <DonateBtn setVisible={setSendMessageModaltotrue}/>

            <AssetsModal visible={assetsmodal} setVisible={setAssetsModal} />
        <SentModal visible={sentmodal} setVisible={setSentModal} setSendMessageModal={setSendMessageModal} setModalData={setModalData} tokenmodal={tokenmodal} setTokenModal={setTokenModal} setTokenModal2={setTokenModal2} />
        <RecievedModal visible={recievemodal} setVisible={setRecievedModal} setCopyLink={setCopyLink} setRequestPayment={setRequestPayment} />
        <PurchaseMethod visible={pruchasemodal} setVisible={setPurchaseModall} setBuyModall={setBuyModall} />
        <BuyModal visible={buymodal} setVisible={setBuyModal} setBuyModal11={setBuyModal11} />
        <BuyModal1 visible={buymodal1} setVisible={setBuyModal1} setBuyModal22={setBuyModal22} />
        <BuyModal2 visible={buymodal2} setVisible={setBuyModal2} />
        <SentModalMessage visible={sendmessagemodal} setVisible={setSendMessageModalFun} data={modaldata} setReqPayModal={setReqPayModal} /> 
        <RequestPaymentModalusemax  visible={reqpaymodal}  setVisible={setReqPayModal} setSendModalConfirm={setSendModalConfirm} setTokenModal={setsendModalToken2} /> 
        <SentModalConfirm visible={sendmodalconfirm} setVisible={setsendModalConfirmfun} />
        <TokenModal visible={tokenmodal} setVisible={setTokenModal} /> 
        <TokenModal2 visible={tokenmodal2} setVisible={setTokenModal2} opensendmodal={setSendMessageModalFun} />
        <CopyLinkModal visible={copylink}  setVisible={setCopyLink} />
        <RequestPaymentModal visible={requestPayment}  setVisible={setRequestPayment}  setVisible2={setRecievedModal} />
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