import React,{useState} from 'react'
import { Dimensions,StyleSheet,Image, TouchableOpacity } from "react-native";
import {Container,CardItem, Content, Text} from 'native-base'
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { bluetext, graycolor, green } from '../constants/colors';
import Clipboard from '@react-native-community/clipboard';
import CLIPBOARD from "../assets/Clipboard.svg";
const {width, height} = Dimensions.get("window");
const buttontextcolor="#FEBF32"
const CopyLinkModal = ({visible, setVisible}) => { 
    const [copiedText, setCopiedText] = useState('');
    const link = 'https://ginkopay.app.link/send/0xBBB6A12945aC14C84185a17C6BD2eAe96e/value=21jq'
    
    
    const copyToClipboard = () => {
      Clipboard.setString(link)
      fetchCopiedText();
    };
   
    const fetchCopiedText = async () => {
      const text = await Clipboard.getString();
      setCopiedText(text);
    };

   
    return(
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
        <Container style={{...styles.mainview,paddingTop:copiedText===""?100:0}}>
            <Content contentContainerStyle={{alignItems:"center"}}>
                {
                    copiedText === ""?null:<CLIPBOARD style={{marginVertical:30}}  />
                }
               <Image source={require("../assets/sendlink.png")} style={{width:50, height:50}} />
               <Text style={styles.text}> Send Link</Text>
               <Text style={styles.otherassets}>Your request link is already to send!
                Send this link to a friend, and it will ask them to send 0.0001 ETH</Text>
                <Text style={styles.link}>https://ginkopay.app.link/send/0xBBB6A12945aC14C84185a17C6BD2eAe96e/value=21jq</Text>
                <CardItem style={{backgroundColor:"transparent",alignSelf:"center", width:width*.7, justifyContent:"space-between", flexDirection:"row" }}>
                        {copiedText ===""?
                        <TouchableOpacity onPress={() => {copyToClipboard()}}>
                                <Text style={styles.buttontext} >Copy Link</Text>
                        </TouchableOpacity>:
                         <TouchableOpacity  onPress={() => setVisible(false)}>
                             <Text style={styles.buttontext} >Send</Text>
                         </TouchableOpacity>
                        }
                        <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={styles.buttontext} >cancel</Text>
                        </TouchableOpacity>
                </CardItem>
            </Content>
        </Container>
        </Modal>
    )
}

export default CopyLinkModal; 

const styles = StyleSheet.create({
    modal:{
        margin: 0,
        
        width:width,
        height:height
    },
    mainview:{
        height:height/1,
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
   
    text:{
        color:'#fff',
        marginVertical:20,
        fontSize:14,
        alignSelf:"center",
        fontFamily:boldtext
    },
    otherassets:{
        color:graycolor,
        fontSize:16,
        fontFamily:simpletext,
        marginHorizontal:20,
        marginVertical:20,
        alignSelf:"center"
    },
    link:{
        color:bluetext,
        fontSize:15,
        fontFamily:simpletext,
        marginVertical:20,
        marginHorizontal:20,
        alignSelf:"center",
        textAlign:"center"
    },
    buttontext:{
        color:buttontextcolor,
        fontFamily:simpletext
    }
})