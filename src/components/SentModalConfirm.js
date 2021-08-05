import React,{useState} from 'react';
import { View,  Dimensions,StyleSheet,SafeAreaView, ScrollView, Image, Text, TouchableOpacity,  } from 'react-native';
import Modal from 'react-native-modal';
import { boldtext, simpletext } from '../constants/fonts';
import { BackgroundColor, graycolor,  } from '../constants/colors';
import HeaderBackTextClose from './HeaderBackTextClose'
const {width, height} = Dimensions.get("window");
import CustomButton from './Button'
import CustomText from './Text'
import * as RootNavigation from '../Navigations/NavigationObject';
const SentModal = ({visible, setVisible, data}) => {
    const BackBtnHandler = () => {
        setVisible();
    }

    const navigatetowallet = () => {
        setVisible();
    }
  return (
        <Modal 
            isVisible={visible}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height}
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
            <SafeAreaView style={{flex:1, height:height, backgroundColor:BackgroundColor}}>
            <HeaderBackTextClose text="Confirm"setShowBannerModal={BackBtnHandler} closeModal={BackBtnHandler} />
                
                <ScrollView contentContainerStyle={{height:height ,alignSelf:"center", alignItems:"center", width:width}} style={{height:height}}>
                    <View style={styles.mainview}>
                      
                        <View style={{alignSelf:"center", justifyContent:"center", alignItems:"center", paddingVertical:0}}>
                            <Text style={styles.text}>Amount</Text>
                            <CustomText 
                                text="12.4345 ETH" 
                                locations={[0,0.1,0.6,.8,1]}
                                colors={["#A9CDFF", "#72F6D1","#A0ED8D","#FED365","#FAA49E"]} 
                                style={{ fontFamily:simpletext,paddingVertical:20, fontSize:30,}} />
                        </View>
                        <Text style={styles.from}>From</Text>
                        <TouchableOpacity style={styles.fromselect}>
                            <View style={{flexDirection:"row"}}>
                                <Image 
                                    style={{width:40, height:40, resizeMode:"cover", borderRadius:60,}}
                                    source={require("../assets/coin1.png")} />
                                <View style={{marginLeft:10}}>
                                    <Text style={{color:"#fff" , fontFamily:simpletext, fontSize:15}}>
                                        Binance Coin
                                    </Text>
                                    <Text style={{color:graycolor, fontFamily:simpletext,fontSize:12}}>
                                        Balance: 19.2371 BNB
                                    </Text>
                                </View>
                            </View>
                       
                    </TouchableOpacity>
                    <View style={{height:20}} />
                    <Text style={styles.from}>To</Text>
                    <TouchableOpacity style={styles.fromselect}>
                        <View style={{flexDirection:"row"}}>
                            <Image 
                                style={{width:40, height:40, resizeMode:"cover", borderRadius:60,}}
                                source={require("../assets/token1.png")} />
                            <View style={{marginLeft:10}}>
                                <Text style={{color:"#fff" , fontFamily:simpletext, fontSize:15}}>
                                    Smart Gevan
                                </Text>
                                <Text style={{color:graycolor, fontFamily:simpletext,fontSize:12}}>
                                    0x3R2E...DxR9
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={styles.textinputarea}>
                        <View style={styles.amount}>
                            <View style={{flexDirection:"row", width:width-100, alignSelf:"center", justifyContent:"space-between"}}>
                                <Text style = {styles.text}>Amount</Text>
                                <Text style = {styles.text}>0.2405 BNB</Text>
                            </View>
                            <View style={{flexDirection:"row", width:width-100, alignSelf:"center", justifyContent:"space-between"}}>
                                <Text style = {styles.text}>Network fee</Text>
                                <Text style = {styles.text}>0.12 BNB</Text>
                            </View>
                        </View>
                        <View style={styles.total}>
                            <View style={{flexDirection:"row", width:width-100, alignSelf:"center", justifyContent:"space-between"}}>
                                <Text style = {styles.text}>Total Amount</Text>
                                <Text style = {styles.text}>0.3605 BNB</Text>
                            </View>
                            <View style={{flexDirection:"row", width:width-100, alignSelf:"center", justifyContent:"space-between"}}>
                                <Text style = {styles.text}></Text>
                                <Text style = {{fontFamily:simpletext, fontSize:10, color:graycolor}}>0.3605 BNB</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{position:"absolute", bottom:50, alignSelf:"center"}}>
                        <CustomButton text={"Send"} onPress={() => navigatetowallet()}  />
                    </View>
                    
                </View>  
                </ScrollView>
            </SafeAreaView>
            
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
        height:height,
       
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
        height:180, 
        marginVertical:30,
        borderRadius:5,
        borderTopWidth:.5,
        borderWidth:.5,
        borderColor:graycolor,
       
    },
    amount:{
        width:width-40,
        height:90,
        borderBottomWidth:.8,
        borderColor:graycolor,
        paddingVertical:20,
        justifyContent:"space-evenly" 
    },total:{
        width:width-40,
        height:90,
        borderBottomWidth:.8,
        borderColor:graycolor,
        paddingVertical:20,
        justifyContent:"space-evenly" 
    },
    text:{
        color:"#fff",
        fontFamily:simpletext
    }
   
})