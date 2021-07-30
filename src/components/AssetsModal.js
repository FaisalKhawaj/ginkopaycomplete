import React,{useState} from 'react';
import { View,FlatList,   Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable, StatusBar } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { graycolor, green } from '../constants/colors';
import CustomText from './Text';
const {width, height} = Dimensions.get("window");

var obj = [
    {
      key:1,
      name:"Binance Coin",
      color:'#EA3943'
    },
    {
      key:2,
      name:"USD Coin",
      color:'#45F0D1'
    },
    {
      key:3,
      name:"Cardano",
      color:'#5F97FF'
    },
]

const AssetsModal = ({visible, setVisible}) => {

    const renderItem = ({item}) => {
     
        return (
            <View style={styles.flatlistitemmain}>
                <View style={{marginHorizontal:10,flexDirection:'row',alignItems: 'center'}}>
                    <View style={{height:12,width:12, marginRight:15,borderRadius:7,backgroundColor:item.color}}></View>
                    <Text style={{color:'#fff',fontSize:14,fontFamily:simpletext}}>{item.name}</Text>
                </View>
            </View>
        )
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
            <View style={styles.mainview}>
                <View style={{backgroundColor:"#ffffff",bottom:10,height:4,width:50,borderRadius:5}} />
                <Text style={styles.network}> Network</Text>
                <View style={styles.ethereumview}>
                    <View style={styles.ethereumviewinner}>
                        <View style={styles.circle} />
                        <Text style={styles.text}>Ethereum</Text>
                    </View>
                    <Icon name="ios-checkmark-circle-outline" color={green} size={20} style={{alignSelf:'flex-end',marginRight:20}} />
                </View>
                <Text style={styles.otherassets}>Other Assets</Text>
                <FlatList 
                    data={obj}
                    renderItem={renderItem}
                    keyExtractor={(item,index) => index.toString()}
                />
                <TouchableOpacity onPress={() => setVisible()}>
                    <CustomText 
                        text={"Close"} 
                        locations={[0,1]} colors={["#70A2FF", "#F76E64",]} 
                        style={{fontSize:18,fontFamily:simpletext, marginBottom:20, textAlign:"center"}}
                    />
                </TouchableOpacity>
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
        height:height/1.7,
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
    network:{
        color:"#fff",
        margin:10,
        fontSize:14 ,
        fontFamily:fontmedium
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
        fontFamily:fontmedium,
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