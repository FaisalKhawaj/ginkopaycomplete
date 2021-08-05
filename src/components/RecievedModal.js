import React,{useState} from 'react';
import { View,FlatList,   Dimensions,StyleSheet, Image,  TouchableOpacity, Touchable, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { graycolor, green } from '../constants/colors';
import CustomButton from './Button';
import COPY from '../assets/copy.svg'
import {Container, Content, Text} from 'native-base'
import CopyLinkModal from './LinkCopyModal'
import RequestPaymentModal from "./RequestPaymentModal";
const {width, height} = Dimensions.get("window");


const recievedModal = ({visible, setVisible,setRequestPayment,setCopyLink}) => {
  
const openRequestModal =() => {
   setRequestPayment(true)
   setVisible()
   
}
const OpenLinkModal = () => {
    setCopyLink(true)
    setVisible()
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
           <Container>
            <Content style={styles.mainview} contentContainerStyle={{alignItems:"center", flexGrow:1}}>
                <View style={{backgroundColor:"#ffffff",bottom:10,height:4,width:50,borderRadius:5}} />
                <Text style={styles.Receive}> Receive</Text>
               <Image source={require("../assets/wallet.png")} style={{width:150,height:150}} />
                <Text style={styles.otherassets}>Your address to Receive payment</Text>
                <TouchableOpacity 
                onPress={() => OpenLinkModal()}
                style={{flexDirection:"row", marginVertical:20,justifyContent:"center",alignItems:"center", backgroundColor:"#2A2D3C", height:40, minWidth:100, paddingHorizontal:20, borderRadius:10}}>
                <Text style={styles.Receive}> 0x3Dc6...DfCE</Text>
                   <COPY /> 
                </TouchableOpacity>
                <View style={{position:"absolute", bottom:20}}>
                    <CustomButton  text={"Request Payment"} onPress={() => openRequestModal()} />
                </View>
            </Content>
               
            </Container>        
        </Modal>
    )
}

export default recievedModal;

const styles = StyleSheet.create({
    modal:{
        margin: 0
    },
    mainview:{
        height:height/1.5,
        flex:1,
        width:width,
        bottom:0,
        alignSelf: 'center',
      
        backgroundColor:'#17171A',
        width:width,
        position:'absolute',
        borderTopRightRadius:10, 
        borderTopLeftRadius:10
    },
    Receive:{
        color:"#fff",
        margin:10,
        fontSize:15 ,
        fontFamily:fontmedium
    },
    text:{
        color:'#fff',
        fontSize:14,
        alignSelf:"center",
        fontFamily:simpletext
    },
    otherassets:{
        color:graycolor,
        fontSize:16,
        
        marginVertical:30,
        alignSelf:"center"
    },
    flatlistitemmain:{
        flexDirection:'row',
        width:width,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems: 'center',
        
        marginBottom:30
    }
})