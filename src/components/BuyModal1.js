import React,{useState} from 'react';
import { View,FlatList,   Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable, StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { bluetext, graycolor, green } from '../constants/colors';
import APPLEPAY from '../assets/applepay.svg'
import HeaderBackTextClose from './HeaderBackTextClose'
const {width, height} = Dimensions.get("window");

var obj = [
    {
      key:1,
      value: 10,
      str:'fdfgdfg'
    },
    {
      key:2,
      value: 10,
      str:'dfgdfg'
    },
    {
      key:3,
      value: 10,
      str:'fdgdf'
    },
]

const AssetsModal = ({visible, setVisible,setBuyModal22}) => {
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
            <View style={styles.mainview}>
                
                <HeaderBackTextClose text="Purchase Method 1" setShowBannerModal={setVisible} closeModal={setVisible} />
                <Text style={styles.BelowHeaderText}>Send your deposit to this bank account and we will credit the coins in your account</Text>
                <View style={{width:width-60,marginTop:20, paddingHorizontal:30, alignSelf:"center"}}>
                    <Text style={{color:"#fff", fontFamily:boldtext}}>Account holder</Text>
                    <Text style={{color:graycolor, fontFamily:simpletext}}>Ginko service technology LLC </Text>
                </View>
                 <View style={{width:width-60,marginTop:20, paddingHorizontal:30, alignSelf:"center"}}>
                    <Text style={{color:"#fff", fontFamily:boldtext}}>Codice BSB</Text>
                    <Text style={{color:graycolor, fontFamily:simpletext}}>802-985</Text>
                </View>
                <TouchableOpacity onPress={() => setBuyModal22()} style={{width:width-60,marginTop:20, paddingHorizontal:30, alignSelf:"center"}}>
                    <Text style={{color:"#fff", fontFamily:boldtext}}>Account number</Text>
                    <Text style={{color:graycolor, fontFamily:simpletext}}>BE93 9672 0280 8067</Text>
                </TouchableOpacity>
                 <View style={{width:width-60,marginTop:20, paddingHorizontal:30, alignSelf:"center"}}>
                    <Text style={{color:"#fff", fontFamily:boldtext}}>Address</Text>
                    <Text style={{color:graycolor, fontFamily:simpletext}}>Avenue Louise 54, Room S52{"\n"}Brussels, 1050, Belgium</Text>
                </View>
                <View style={{width:width-60,marginTop:20, paddingHorizontal:30, alignSelf:"center"}}>
                    <Text style={{color:"#fff", fontFamily:boldtext}}>Causal</Text>
                    <Text style={{color:graycolor, fontFamily:simpletext}}>Initials crypotcurrency ID Account example {"\n"}BTC + MARIO92</Text>
                </View>
            </View>        
        </Modal>
    )
}

export default AssetsModal;

const styles = StyleSheet.create({
    modal:{
        margin: 0,
       
    },
    mainview:{
        height:height/1.1,
        flex:1,
        width:width,
        bottom:0,
        justifyContent:"center",
        backgroundColor:'#17171A',
        width:width,
        position:'absolute',
        borderTopRightRadius:10, 
        borderTopLeftRadius:10
    },
    header:{
        flexDirection:"row",
        marginTop:10, 
        width:width*.7,
        alignSelf:"flex-end", 
        justifyContent:"space-around"
    },
    BelowHeaderText:{
        color:"#ffffff",
        marginVertical:30,
        paddingHorizontal:50, 
        textAlign:"center", 
        fontFamily:simpletext
    },
    network:{
        color:"#fff",
        margin:10,
        fontSize:15 ,
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
        width:width,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal:40,
        marginBottom:30
    }
})