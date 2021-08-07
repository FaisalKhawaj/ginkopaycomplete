import React from 'react'
import { Dimensions,StyleSheet,Text,TextInput,Image, TouchableOpacity, View } from "react-native";
import { Container,  Content,  Item, Input, Label } from 'native-base'
import Modal from 'react-native-modal';
import { boldtext, simpletext } from '../constants/fonts';
import { BackgroundColor, graycolor } from '../constants/colors';
import HeaderBackTextCloseBtn from './HeaderBackTextClose'
import ARROWDOWN from '../assets/arrowdown.svg'
import CustomButton from './Button'
const {width, height} = Dimensions.get("window");

const RequestPaymentModal = ({visible, setVisible,}) => { 
  const [value, setValue] = React.useState("")
    return(
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
        <Container style={styles.mainview}>  
            <HeaderBackTextCloseBtn 
                text="Amount" 
                setShowBannerModal={setVisible} 
                closeModal={setVisible} 
                />
            <Content 
                contentContainerStyle={styles.contentContainerStyle} 
                style={{flexGrow:1}}>
               
                <TouchableOpacity style={styles.button}>
                    <Text style={{...styles.bnb}}>
                        BNB
                    </Text>
                    <ARROWDOWN />
                </TouchableOpacity>

               <View style={{paddingVertical:20}} />
                    <Item stackedLabel style={styles.textinputcontainer}>
                        <TextInput 
                            placeholder="Enter Amount"
                            placeholderTextColor="#A9CDFF"
                            style={styles.textinput}
                            textAlign="center"
                            caretHidden={true}
                            value={value}
                            keyboardAppearance="dark"
                            keyboardType="phone-pad"
                            onChangeText={text => setValue(text)}
                        />
                    </Item>
                    

                    <View style={styles.amountupdown}>
                        <Text style={styles.buttontext}>$455.555</Text>
                       <Image source={require("../assets/updown.png")} style={{width:15,height:15}} />
                    </View>
                    
                    <View style={{position:"absolute", bottom:20}}>
                        <CustomButton text={"Next"} onPress={() => setVisible() } />
                    </View>
                </Content>
            </Container>
        </Modal>
    )
}

export default RequestPaymentModal; 

const styles = StyleSheet.create({
    modal:{
        margin: 0
    },
    mainview:{
        height:height/1,
        flex:1,
        width:width,
        bottom:0,
        alignSelf: 'center',
        backgroundColor:BackgroundColor,
        width:width,
        borderTopRightRadius:10, 
        borderTopLeftRadius:10
    },
    contentContainerStyle:{
        alignItems:"center", 
        flexGrow:1
    },
    button:{
        borderColor:graycolor,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly",
        borderWidth:1,
        width:100,
        height:40,
        marginVertical:30,
        flexDirection:"row"
    },
    bnb:{
        fontFamily:simpletext,
        color:"#ffffff",
        fontSize:13,
    },
    buttontext:{
        fontFamily:simpletext,
        color:"#ffffff",
        fontSize:13,
        marginRight:15,
    },
    textinputmaincontainer:{
        width:width-80,
        alignSelf:"center",
        marginVertical:10,
    },
    textinputcontainer:{
        borderColor:graycolor,
        borderTopWidth:.5,
        borderLeftWidth:.5, 
        borderRightWidth:.5, 
        borderBottomWidth:.5, 
        height:70,
        width:width-80,
        alignSelf:"center", 
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:15,
        borderRadius:10,
        backgroundColor:'transparent' 
    },
    textinput:{
        fontFamily:simpletext,
        fontSize:22,
        justifyContent:"center",
        alignItems:"center",
        textAlignVertical:"center",
        color: '#A9CDFF',
        height:70,
        width:width-80,
    },
    amountupdown:{
        flexDirection:"row", 
        paddingHorizontal:20, 
        borderRadius:30,
        marginVertical:30,
        paddingVertical:5,
        justifyContent:"center", 
        alignItems:"center", 
        backgroundColor:"rgba(42, 45, 60,.8)", 
    },
    text:{
        color:graycolor , 
        fontFamily:simpletext,
        paddingHorizontal:10, 
        alignSelf:"flex-start", 
        marginHorizontal:10,
    },
})