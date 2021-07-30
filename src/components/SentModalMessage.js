import React,{useState} from 'react';
import { View, TextInput,  Dimensions,StyleSheet,SafeAreaView, ScrollView, Image, Text, TouchableOpacity,  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { boldtext, simpletext } from '../constants/fonts';
import { BackgroundColor, graycolor,  } from '../constants/colors';
import TokenModal from './SendModalToken'
import HeaderBackTextClose from './HeaderBackTextClose'
const {width, height} = Dimensions.get("window");

import CustomButton from './Button'

const SentModal = ({visible, setVisible, data,setReqPayModal}) => {

    const [tokenmodal, setTokenModal] = useState(false)
  
    const BackBtnHandler = () => {
        setVisible();
    }

    const openreqpaymentodal = () => {
        setVisible(false)
        setReqPayModal(true)
    }
  return (
        <Modal 
            isVisible={visible}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height*2}
            transparent={true}
            style={styles.modal}
            coverScreen={true}
            animationOut="slideOutDown"
            onBackdropPress = {() => setVisible()}
            onBackButtonPress = {() => setVisible()}
            useNativeDriver = {true}
            hasBackdrop = {true}
            
            backdropColor = "#1D1F27"
            backdropOpacity = {.85}
        >
            <SafeAreaView style={{ height:height, backgroundColor:BackgroundColor, alignSelf:"center"}}>
            <HeaderBackTextClose text="Sent To"setShowBannerModal={BackBtnHandler} closeModal={BackBtnHandler} />
                <ScrollView >
                    <View style={styles.mainview}>
                       
                        <Text style={styles.from}>From</Text>
                        <TouchableOpacity style={styles.fromselect} onPress={() => setTokenModal(true)}>
                            <View style={{flexDirection:"row"}}>
                                <Image 
                                    style={{width:40, height:40, resizeMode:"cover", borderRadius:60,}}
                                    source={require("../assets/coin1.png")} />
                                <View style={{marginLeft:10}}>
                                    <Text style={{color:"#fff" , fontFamily:simpletext, fontSize:15}}>
                                        Binance Coin
                                    </Text>
                                    <Text style={{color:graycolor, fontFamily:simpletext,fontSize:12}}>
                                        Binance Coin
                                    </Text>
                                </View>
                            </View>
                        <TouchableOpacity>
                            <MaterialIcons  name="keyboard-arrow-right" size={20} color="#fff"  />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.from}>To</Text>
                    <TouchableOpacity style={styles.fromselect}>
                        <View style={{flexDirection:"row"}}>
                        <Image 
                            style={{width:40, height:40, resizeMode:"cover", borderRadius:60,}}
                            source={{uri:"http://callerapp.net/finder/apis/v1/images/03119998999.jpg"}} />
                        <View style={{marginLeft:10}}>
                            <Text style={{color:"#fff" , fontFamily:simpletext, fontSize:15}}>
                                {data.name}
                            </Text>
                            <Text style={{color:graycolor, fontFamily:simpletext,fontSize:12}}>
                                {data.link}
                            </Text>
                        </View>
                        </View>
                        <TouchableOpacity onPress={() => setVisible()} >
                                <MaterialIcons  name="close" size={20} color="#fff"  />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    
                    <View style={styles.textinputarea}>
                    <Text style={styles.from}>Add a message</Text>
                        <TextInput 
                            placeholder={"Add Message"}
                            placeholderTextColor={graycolor}
                            multiline = {true}
                            numberOfLines = {8}
                            style={styles.textinput}
                        />
                    </View>
                    <View style={{position:"absolute", bottom:20, alignSelf:"center"}}>
                        <CustomButton text={"Next"} onPress={() => openreqpaymentodal()}  />
                    </View>
                    
                </View>  
                </ScrollView>
            </SafeAreaView>
            <TokenModal visible={tokenmodal} setVisible={setTokenModal} /> 
           
        </Modal>
    )
}

export default SentModal;

const styles = StyleSheet.create({
    modal:{
        margin: 0,
        width:width,
    },
    mainview:{
        height:height*.91,
       
        width:width,
      
        alignSelf:"center",
        paddingHorizontal:20,
        backgroundColor:'#17171A',
        borderTopRightRadius:10, 
        borderTopLeftRadius:10
    },
    sentto:{
        color:"#fff",
        fontSize:16 ,
        textAlign:"center",
        fontFamily:boldtext
    },
    from:{
        color:"#fff",
        fontSize:16 ,
        fontFamily:boldtext
    },
    recent :{
        color:graycolor,
        fontSize:16 ,
        fontFamily:boldtext
    },
    ethereumview:{
        flexDirection:'row',
        width:width,
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal:20,
        marginVertical:10
    },
    ethereumviewinner:{
        marginHorizontal:20,
        flexDirection:'row',
        alignItems: 'center'
    },
    circle:{
        height:12,
        width:12,
        marginLeft:20,
        marginRight:15,
        borderRadius:14,
        backgroundColor:"#FEBF32"
    },
    text:{
        color:'#fff',
        fontSize:14,
        fontFamily:simpletext
    },
    otherassets:{
        color:graycolor,
        fontSize:16,
        marginLeft:40,
        marginVertical:30,
        alignSelf:"flex-start"
    },
    flatlistitemmain:{
        flexDirection:'row',
        width:width-80,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal:40,
        marginBottom:30
    },
    fromselect:{
        width:width-40, 
        alignSelf:"center", 
        alignItems:"center", 
        flexDirection:"row",
        height:60, 
        marginVertical:5,
        justifyContent:"space-between"
    },
    textinputarea:{
        width:width-40, 
        alignSelf:"center", 
        height:230, 
        marginVertical:30,
        justifyContent:"space-between"
    },
    renderItemmain:{
        width:width-60, 
        alignSelf:"center", 
        paddingVertical:45, 
        alignItems:"center", 
        flexDirection:"row",
        height:60, 
        justifyContent:"space-between"
    },
    textinput:{
        borderColor:graycolor,
        borderRadius:15,
        borderWidth:2,
        color:"#fff",
        fontFamily:simpletext,
        borderColor:"gray",
        paddingLeft:10,
        textAlign:"left",
        opacity:1,
        backgroundColor:"rgba(255,255,255,.1)",
        textAlignVertical:"top",
        height:180,
        width:width-40
    }
})