import React,{useState} from 'react';
import { View,  StatusBar,Text,Dimensions,TouchableOpacity ,Image,StyleSheet } from 'react-native';
import CustomButton from './Button'
import {CardItem, Content} from 'native-base'
import { bluetext, graycolor } from '../constants/colors';
import { BackgroundColor } from '../constants/colors';
const {width, height} = Dimensions.get("window");
import Clipboard from '@react-native-community/clipboard';
import { boldtext, fontmedium,simpletext } from '../constants/fonts';
import HeaderBackTextCloseBtn from './HeaderBackTextClose';
import Modal from 'react-native-modal' 
const buttontextcolor="#FEBF32"
 const SliderScreenOne = ({visible, setVisible}) => {
   StatusBar.setHidden(true)
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
  
   const gotonextScreen = () => {
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
        backdropOpacity = {1}>
        <HeaderBackTextCloseBtn text="Security & Privacy" setShowBannerModal={setVisible} closeModal={setVisible} />
            <Content style={{flexGrow:1}} 
                contentContainerStyle={styles.contentContainerStyle}  >
                    
          <Image source={require("../assets/kycneed.png")} style={{width:150, height:200, resizeMode:"cover"}} />
          <Text style={styles.heading}>KYC Needed</Text>
          <Text style={styles.paragraph}>Duo the regulations we will need to ask you for your documents, so we can allow you to use our features. Your document will be only used for verification and will NOT be sent to 3rd parties. Here is the link:</Text>
          <TouchableOpacity>
             <Text style={styles.link}> https://ginkopay.sb.getid.dev/vp/getid-doc-selfie-liveness</Text>
          </TouchableOpacity>
          <CardItem style={{...styles.buttoncontainer,marginTop:copiedText?20:50}}>
                        {copiedText ===""?
                        <TouchableOpacity onPress={() => {copyToClipboard()}}>
                                <Text style={styles.buttontext} >Copy Link</Text>
                        </TouchableOpacity>:
                         <TouchableOpacity onPress={() => {setVisible(false)}}>
                             <Text style={styles.buttontext} >Done</Text>
                         </TouchableOpacity>
                        }
                        <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={styles.buttontext} >cancel</Text>
                        </TouchableOpacity>
                </CardItem>
       </Content>
       
       <View style={{position:"absolute", alignSelf:"center", bottom:20,}}>
            <CustomButton text={"Remind Me later"} onPress={gotonextScreen} />
          </View>
     </Modal>
   );
 
 }; 
 export default SliderScreenOne;

  const styles= StyleSheet.create({
      container:{
        flex:1,
        width:width,
        height:height,
        backgroundColor:BackgroundColor
      },
      contentContainerStyle:{
        justifyContent:"space-evenly", 
        alignItems:"center",
        width:width-40,
      },
      heading:{
        color:"#fff",
        fontSize:16,
        fontFamily:boldtext, 
        marginVertical:10, 
        textAlign:"center"
      },
      paragraph:{
        color:graycolor,
        marginVertical:15, 
        textAlign:"left", 
        paddingHorizontal:10
      },
      link:{
        color:bluetext, 
        fontSize:16, 
        fontFamily:fontmedium, 
        paddingHorizontal:10
      },
      buttontext:{
        color:buttontextcolor,
        fontFamily:simpletext
     },
     buttoncontainer:{
         backgroundColor:"transparent",
         alignSelf:"center", 
         width:width*.7, 
         justifyContent:"space-between", 
         flexDirection:"row"
     }

     
  })
 