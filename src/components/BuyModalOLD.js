import React,{useState} from 'react';
import { View,FlatList,   Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable, StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { bluetext, graycolor, green } from '../constants/colors';
import APPLEPAY from '../assets/applepay.svg'
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

const AssetsModal = ({visible, setVisible}) => {
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
                <View style={styles.header}>
                    <Text style={{color:"#ffffff", fontFamily:fontmedium,fontSize:16 }}>purchase Method</Text>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Entypo name="cross" color={"#ffffff"} size={22}  /> 
                    </TouchableOpacity>
                </View>

                <Text style={styles.BelowHeaderText}>How do you want to make your purchase?</Text>
                <View>
                    <View style={{flexDirection:"row" , height:45,  alignItems:"center"}}>
                        <Text  style={{color:"#ffffff",fontFamily:boldtext,fontSize:16, marginRight:15,}}>Apple Pay</Text> 
                        <Text  style={{color:graycolor,fontFamily:simpletext,fontSize:16, marginRight:15,}}>Via</Text>
                        <APPLEPAY />
                    </View>

                    <View style={{width:width*.9, justifyContent:"space-between", flexDirection:"row", paddingVertical:30}}>
                        <Text  style={{color:graycolor, width:width*.4, fontFamily:simpletext}}>1-2 minutes Max $450 weekly Requires debit card</Text>
                        <View style={{flexDirection:"column", justifyContent:"flex-end"}}>
                            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                                <Entypo name="warning" color={bluetext} size={18} style={{marginRight:20}} />
                                <Text  style={{color:graycolor,fontFamily:simpletext}}>US Only</Text>
                            </View>
                            <Text  style={{color:graycolor,fontFamily:simpletext}}>Some States are exluded</Text>
                        </View>
                    </View>
                </View>

                <View  style={{width:width*.9, justifyContent:"space-between",height:1, backgroundColor:graycolor, marginHorizontal:30}}/>
                
                <View style={{width:width*.9, justifyContent:"space-between", flexDirection:"row", paddingVertical:50}}>
                    <View style={{flexDirection:"column", justifyContent:"flex-end"}}>
                        <Text  style={{color:'#ffffff', width:width*.4,fontSize:16, fontFamily:boldtext}}>Bank Transfer or Debit Card</Text>
                        <Text  style={{color:graycolor, width:width*.4,marginVertical:10, fontFamily:fontmedium}}>Requires registration</Text>
                        <Text  style={{color:graycolor, width:width*.4, fontFamily:simpletext}}>Option and fees vary based on location</Text>
                    </View>
                    <View style={{flexDirection:"column", justifyContent:"flex-end"}}>
                        <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                            <Entypo name="warning" color={bluetext} size={18} style={{marginRight:20}} />
                            <Text  style={{color:graycolor,fontFamily:simpletext}}>59 countries</Text>
                        </View>
                        
                    </View>
                </View>
                <View  style={{width:width*.9, justifyContent:"space-between",height:1, backgroundColor:graycolor, marginHorizontal:30}}/>
               
            </View>        
        </Modal>
    )
}

export default AssetsModal;

const styles = StyleSheet.create({
    modal:{
        margin: 0
    },
    mainview:{
        height:height/1.1,
        flex:1,
        width:width,
        bottom:0,
        alignSelf: 'center',
        alignItems: 'center',
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