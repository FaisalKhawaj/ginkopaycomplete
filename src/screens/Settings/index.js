import React, { useState } from 'react';
import { Container, Content, Linking, Item, Thumbnail, Input, Label } from 'native-base'
import { View, Text, Image, TouchableOpacity, Dimensions, Share, StyleSheet, TextInput, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';

import { BackgroundColor, graycolor, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors';

import SettingsWithImgTextIcon from '../../components/SettingsImgTextArrowBtn';
import { BlurView } from "@react-native-community/blur";
import BackBtnWithMiddleText from '../../components/BackBtnMiddleText';
import CustomButton from '../../components/Button';
import { mystyles } from '../../styles';
import { simpletext } from '../../constants/fonts';
const { width, height } = Dimensions.get('window');
import * as Actions from './../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';

const Settings = ({ navigation }) => {
    const user = useSelector(state => state.home?.users);
    const [profileImg, setProfileImg] = useState(null)
    const [cloudImageUrl, setCloudImageUrl] = useState(null)
    console.log('user', user);
    const dispatch = useDispatch();
    const EditProfileHandler = () => {
        dispatch(Actions.getUser())
        setShowEditProfileModal(!showEditProfileModal)

    }
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ginkopay/image/upload'
    const handleupload = (image) => {
        const data = new FormData()
        data.append('file', image),
            data.append('upload_preset', 'ginkopay'),
            data.append('cloud_name', 'Ginkopay')

        fetch(CLOUDINARY_URL, {
            method: 'POST',
            body: data
        }).then((res) => res.json()).then((data) => {
            setCloudImageUrl(data?.secure_url)
        }).catch((e) => {
            console.log('e', e);
        })
    }
    
    const openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log('image', image);
            let newFile = {
                uri: image.path,
                type: `test/${image.path.substr(image.path.length - 3)}`,
                name: `test/${image.path.substr(image.path.length - 3)}`,
            }
            handleupload(newFile)
            setProfileImg(image.path)
        }).catch((error) => {
            console.log(error)
                .catch((e) => alert(e));

        })
    }
    const ShareMyPublicAddressHandler = async () => {
        try {
            const result = await Share.share({
                message:
                    'https://ginkopay.app.link/send/0xBBB6A12945aC14C84185a17C6BD2eAe96e',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
    const ChangePasswordHandler = () => {
        navigation.navigate("ChangePassword")
    }
    const PreferenceHandler = () => {
        navigation.navigate('Preferences')
    }
    const GetHelpHandler = () => {
        alert('Gt Help')
    }
    const SEndFeedBack = () => {
        alert('Linking to AppStore app')
        // Linking.openURL('https://apps.apple.com/pk/app/bolt-fast-affordable-rides/id675033630')
    }
    const LogOutHandler = () => {
        dispatch(Actions.logoutUser())

        // navigation.navigate("Login")
    }
    const UpdateHandler = () => {
        if (user) {

            dispatch(Actions.updateUser(
                user?.webId,
                user?.email,
                user?.userNumber,
                name,
                user?.lastName,
                user?.surName,
                user?.password,
                user?.birthday,
                user?.phoneNumber,
                user?.phoneCarrier,
                user?.gender,
                user?.streetAddress,
                user?.state,
                user?.city,
                user?.country,
                cloudImageUrl,
                user?.currentLang,
                user?.visibility,
                user?.currencyConversion,
                user?.privacyCurrency,
                user?.privacyMode,
                user?.partcpMetamatric,
                user?.getTransactions,
                user?.accountId,
                user?.ethAddress,
                user?.btcAddress
            ))
        }

        setShowEditProfileModal(!showEditProfileModal)
        if (Platform.OS == 'ios'){

        }
        else{
            // Linking.openURL('https://play.google.com/store/apps/details?id=com.ubercab')
        }
    }

    const BackBtnHandler = () => {
        navigation.navigate('Profile')
    }

    const [showEditProfileModal, setShowEditProfileModal] = useState(false)
    // const [ProfileImg, setProfileImg] = useState(require("../../assets/profilePic.png"))
    const [name, setName] = useState("")


    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <Content contentContainerStyle={{ backgroundColor: BackgroundColor }}>

                <TouchableOpacity style={{ marginVertical: 20, alignSelf: 'center' }}>
                    <Thumbnail large
                        source={{uri: user?.pictureUrl}} />
                    <View style={mystylesComp.arrowCircleGradientView}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={[LinearGradientColorTwo, LinearGradientColorOne]}
                            style={mystylesComp.LinearGradientCircleView}>
                            <Image style={{ alignSelf: 'center' }} source={require('../../assets/squarearrow.png')} />
                        </LinearGradient>
                    </View>
                </TouchableOpacity>


                <SettingsWithImgTextIcon
                    name="Edit profile"
                    img={require('../../assets/profilecircle.png')}
                    handler={EditProfileHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/shareAddress.png')}
                    name="Share My Public Address" handler={ShareMyPublicAddressHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/eye.png')}
                    name=" Change Password" handler={ChangePasswordHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/settingLayer.png')}
                    name="Preferences" handler={PreferenceHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/headphone.png')}
                    name="Get Help" handler={GetHelpHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/messageDot.png')}
                    name="Send Feed back " handler={SEndFeedBack} />


                <SettingsWithImgTextIcon
                    img={require('../../assets/LogoutArrow.png')}
                    name="Logout" handler={LogOutHandler} />


                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ alignSelf: 'center', width: '100%' }}
                    coverScreen={true}
                    animationOut="slideOutDown"
                    visible={showEditProfileModal}
                >
                    <View style={[mystyles.referCodeModalMainView, { height: height / 1.7, width: width }]}>
                        <View style={mystyles.modalUpperSmallLine} />

                        <BackBtnWithMiddleText text="Choose New Account" EditProfileHandler={EditProfileHandler} backBtn={BackBtnHandler} navigation={navigation} />
                        <View style={{ alignSelf: 'center' }}>

                            <View style={mystylesComp.circleImageView}>
                                {profileImg != null ?
                                    <Image style={{ width: 30, height: 20, borderRadius: 25, }} resizeMode='center'
                                        source={{uri: profileImg}} /> : null

                                }
                            </View>
                            <Image
                                style={{ position: 'absolute' }}
                                source={require('../../assets/smallAvatar.png')} />

                        </View>

                        <TouchableOpacity onPress={() => openPicker()} style={mystylesComp.chooseAvatarBtn}>
                            <Text style={mystylesComp.chooseAvatarText}>Choose an Avatar</Text>
                        </TouchableOpacity>

                        <View style={mystylesComp.textinputmaincontainer}>
                            <Item stackedLabel
                                style={mystylesComp.textinputcontainer}>
                                <Label style={{ color: graycolor, fontFamily: simpletext, backgroundColor: "transparent", fontSize: 14, }}>Account Name</Label>
                                <Input
                                    placeholder="Change Username"
                                    placeholderTextColor="#fff"
                                    style={mystylesComp.textinput}
                                    textColor="#fff"
                                    value={name}
                                    onChangeText={text => setName(text)}
                                />
                            </Item>
                        </View>
                        <View style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}>
                            <CustomButton text={"Update"} onPress={UpdateHandler} />
                        </View>
                    </View>
                </Modal>
                {showEditProfileModal ?
                    <BlurView
                        style={mystyles.absolute}
                        blurType="light"
                        blurRadius={10}
                        blurAmount={10}
                        reducedTransparencyFallbackColor="#222531"
                    />
                    : null}


            </Content>
        </Container>
    )
}
export default Settings;

const mystylesComp = StyleSheet.create({
    arrowCircleGradientView:
    {
        position: 'absolute', bottom: 0, right: -20
    },
    LinearGradientCircleView:
    {
        width: 45,
        borderRadius: 25,
        justifyContent: 'center',
        height: 45
    },
    circleImageView:
    {
        width: 60, height: 60,
        backgroundColor: '#222531',
        borderRadius: 30,
        borderWidth: 1, borderColor: '#222531'
    },
    chooseAvatarBtn:
    {
        backgroundColor: '#2A2D3C', borderWidth: 1,
        width: wp('40%'),
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 10, padding: 6,
    },
    chooseAvatarText:
    {
        textAlign: 'center',
        color: '#FEBF32',
        fontFamily: simpletext
    },
    TextNameTextInputView: {
        width: wp('90%'), alignSelf: 'center',
        borderRadius: 10, borderColor: '#FFFF',
        paddingTop: 4,
        marginTop: 20,
        paddingHorizontal: 10,
        borderWidth: 1
    },
    textinputmaincontainer: {
        width: width - 30,
        alignSelf: "center",
        marginVertical: 10,
        height: 80,
    },
    textinputcontainer: {
        borderColor: graycolor,
        borderTopWidth: .5,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        width: width - 30,
        alignSelf: "center",
        borderTopLeftRadius: 10,
        paddingHorizontal: 15,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'transparent',
        height: 75,
    },
    textinput: {
        fontFamily: simpletext,
        fontSize: 14,
        color: '#FFF',
        height: 50,
        backgroundColor: 'transparent'
    },
})