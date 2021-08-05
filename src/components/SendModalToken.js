import React,{useState} from 'react';
import { View,FlatList,   Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { graycolor, green } from '../constants/colors';
const {width, height} = Dimensions.get("window");
import SendModalMessage from '../components/SentModalMessage'
import LinearGradient from 'react-native-linear-gradient'
var obj = [
    {
      key:1,
      name: "Binance Coin",
      amount:'19.2371 BNB',
      dollars:"$4,498.56",
      image:require("../assets/coin1.png")
    },
    {
        key:2,
        name: "USD Coin",
        amount:'92,3 USDC',
        dollars:"$92,3.00",
        image:require("../assets/coin2.png")
    },
    {
        key:3,
        name: "Cardano",
        amount:'42.74 ADA',
        dollars:"$902.06",
        image:require("../assets/coin3.png")
    },
]

const SentModal = ({visible, setVisible}) => {
    
    const renderItem = (item) => {
        return (
            <LinearGradient 
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={[ "#70A2FF","#F76E64"]} 
                style={{padding:item.item.key === 1?1:0,borderRadius:10, marginBottom:10,}}>
                <TouchableOpacity style={styles.verticalListItem} onPress={() => setVisible()}>
                    <Image style={styles.verticalListIconBackground} source={item.item.image} />
                    <View style={{flexDirection:'column',flex:1}}>
                        <Text style={{color:'#fff',fontFamily:fontmedium, fontSize:16}}>
                            {item.item.name}
                        </Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
                        <Text style={{color:'#fff',fontFamily:simpletext, fontFamily:simpletext}}>
                            {item.item.amount}
                        </Text>
                        <Text style={{color:graycolor,fontSize:10, fontFamily:simpletext, fontFamily:simpletext}}>
                            {item.item.dollars}
                        </Text>
                    </View>
                </TouchableOpacity>
           </LinearGradient>
        )
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
            <View style={styles.mainview}>
                <Text style={styles.sentto}>Token</Text>
                <FlatList 
                    data={obj}
                    renderItem={renderItem}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>      
               
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
        marginTop:height/2,
        height:height/3,
       flex:1,
        width:width,
        bottom:0,
        padding:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
       // alignSelf: 'center',
       // alignItems: 'center',
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
        width:width-100, 
        alignSelf:"center", 
        alignItems:"center", 
        flexDirection:"row",
        height:60, 
        justifyContent:"space-between"
    },verticalListItem: {
        flexDirection:'row',
        backgroundColor:'#171921',
    
       
        padding:12,
        borderRadius:10,
      },
      verticalListIconBackground: {
        alignSelf:'center',
        height:35,
        width:35,
        borderRadius:35,
        marginRight:20
      },
     
})