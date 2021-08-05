import React,{useState} from 'react';
import { View,FlatList, BackHandler,  Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { simpletext } from '../constants/fonts';
import { graycolor, green } from '../constants/colors';
const {width, height} = Dimensions.get("window");

const HistoryItemModal = ({visible, setVisible, data}) => {

    return (
        <View style={{flex:1}}>
            <Modal 
                isVisible={visible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress = {() => setVisible()}
                onBackButtonPress = {() => setVisible()}
                useNativeDriver = {true}
                hasBackdrop = {true}
                backdropColor = "#1D1F27"
                backdropOpacity = {.8}
            >
                <View style={styles.mainview}>
                    <View style={styles.whitedot} />
                   
                    <Text style={styles.whitetext}>
                        {data?.type} BNB
                    </Text>
                    <View style={styles.block}>
                        <View style={styles.leftblock}>
                            <Text style={styles.graytext}>
                                Status
                            </Text>
                            <Text style={{fontFamily:simpletext, fontSize:16,marginTop:10,color:green}}>
                                Confirmed
                            </Text>
                        </View>
                        <View style={styles.rightblock}>
                            <Text style={styles.graytext}>
                                Date
                            </Text>
                            <Text style={{color:'#fff',fontFamily:simpletext,fontSize:14,marginTop:10}}>
                                {data?.time}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.block}>
                        <View style={styles.leftblock}>
                            <Text style={styles.graytext}>
                                From
                            </Text>
                            <Text style={styles.whitetext}>
                                0xcdfsdfsffg...
                            </Text>
                        </View>
                        <View style={styles.rightblock}>
                            <Text style={styles.graytext}>
                                To
                            </Text>
                            <Text style={styles.whitetext}>
                                0x34hvbjh553...
                            </Text>
                        </View>
                    </View>
                    <View style={styles.block}>
                        <View style={styles.leftblock}>
                            <Text style={styles.graytext}>
                                Nonce
                            </Text>
                            <Text style={styles.whitetext}>
                                #0
                            </Text>
                        </View>
                    </View>

                    <View style={{width:'100%',marginVertical:10,}}>
                        <View style={styles.box}>
                            <Text style={styles.whitetext}>
                                Total Amount
                            </Text>
                            <View style={{alignItems:'flex-end',justifyContent:'space-evenly'}}>
                                <Text style={styles.whitetext}>
                                    0.024 BNB
                                </Text>
                                <Text style={styles.graytext}>
                                    $9.454598
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default HistoryItemModal;

const styles = StyleSheet.create({
    mainview:{
        height:height/1.2,
        flex:1,
        width:width,
        bottom:-20,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor:'#17171A',
        width:width,
        position:'absolute'
    },
    whitedot:{
        backgroundColor:graycolor, 
        bottom:15,
        height:6,
        width:50,
        borderRadius:10
    },
    block:{
        flexDirection:'row',
        width:width,
        marginVertical:20,
        justifyContent: 'space-between'
    },
    leftblock:{
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        marginHorizontal:20
    },
    rightblock:{
        alignItems:'flex-end',
        justifyContent:'space-evenly',
        marginHorizontal:20
    },
    graytext:{
        color:graycolor,
        fontFamily:simpletext,
        fontSize:14,
        fontFamily:simpletext
    },
    whitetext:{
        color:"#fff",
        margin:10,
        fontSize:16,
        fontFamily:simpletext
    },
    box:{
        flexDirection:'row',
        marginHorizontal:20,
        padding:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:graycolor,
        justifyContent: 'space-between'
    }
})