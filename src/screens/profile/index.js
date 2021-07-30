import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content, Thumbnail } from 'native-base';
import Modal from 'react-native-modal';
import Svg, { Rect, Defs, Use, image, Path, Pattern } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BlurView, VibrancyView } from "@react-native-community/blur";

import Icon from 'react-native-vector-icons/Ionicons'
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';
import { BackgroundColor } from '../../constants/colors';
import { mystyles } from '../../styles';
import TextInputFloat from '../../components/TextInput'
import AddCompaignAddBannerBtn from '../../components/AddCompaignBanner';
import CompaignChannelViewBtn from '../../components/CompaignChannelViewBtn';
import Compaign from '../../components/compaign';
import CustomText from '../../components/Text';
import CustomButton from '../../components/Button';
import SvgImg from '../../components/Svg';
import DoneSvg from '../../components/DoneSvg';

const Profile = ({ navigation }) => {

    const [showCompaign, setShowCompaign] = useState(false)
    const [showCompaignModal, setShowCompaignModal] = useState(false);
    const [showBannerModal, setShowBannerModal] = useState(false)
    const [btnSelect, setBtnSelect] = useState('Compaign')

    const [CompaignList, setCompaignsList] = useState([
        {
            id: 1,
            img: require('../../assets/backgroundPeople.png'),
            title: 'National compaign',
            url: 'http://ginkopay.com/username'
        },

        {
            id: 2,
            img: require('../../assets/backgroundPeople.png'),
            title: 'Rome compaign',
            url: 'http://ginkopay.com/username'
        },
        {
            id: 3,
            img: require('../../assets/backgroundPeople.png'),
            title: 'Totti compaign',
            url: 'http://ginkopay.com/username'
        },
    ])

    const [Channels, setChannels] = useState([
        {
            id: 1,
            img: require('../../assets/youtubeBg.png'),
            title: 'Youtube',
            url: 'http://ginkopay.com/username'
        },

        {
            id: 2,
            img: require('../../assets/TwitchBg.png'),
            title: 'Twitch',
            url: 'http://ginkopay.com/username'
        },
        {
            id: 3,
            img: require('../../assets/InstaBg.png'),
            title: 'Instagram',
            url: 'http://ginkopay.com/username'
        },
    ])
    const [compaignTitle, setCompaignTitle] = useState('');
    const [compaignError, setCompaignError] = useState('');
    const [showDonationDialog, setShowDonationDialog] = useState(false)
    const [ReferalModal, setReferalModal] = useState(false)
    const CompaignHandler = () => {
        console.log(showCompaign)
        setShowCompaign(!showCompaign)
    }
    const ChannelHandler = () => {
        console.log(showCompaign)
        setShowCompaign(!showCompaign)
    }
    const CreateBannerHandler = () => {
        setShowBannerModal(!showBannerModal)
        console.log('Banner')
    }
    const AddCompaignHandler = () => {
        setShowCompaignModal(!showCompaignModal)
        console.log('Compaign')
    }
    const CreateCompaignHandler = () => {
        setShowDonationDialog(!showDonationDialog)
    }
    const DonationNextBtnHandler = () => {
        setReferalModal(!ReferalModal)
    }
    const BackBtnHandler = () => {
        navigation.goBack()
    }
    console.log("Comp  " + showCompaignModal + " Banner  " + showBannerModal + " referal  " + ReferalModal)
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <View style={{
                backgroundColor: BackgroundColor
            }}>
                <HeaderBackBtnWithLogo backBtn={BackBtnHandler} />

                <View style={styles.MainUserSettingsView}>

                    <Image style={{ alignSelf: 'center' }} resizeMode="contain" source={require('../../assets/personprofile.png')} />

                    <View style={styles.UserUsernameView}>
                        <Text style={styles.UsernameText}>Username</Text>
                        <Text style={styles.Username}>Team Italia</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={{ alignSelf: 'center' }}>
                        <Image source={require('../../assets/settings.png')} />
                    </TouchableOpacity>

                </View>

                <View style={{ margin: 15, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            borderBottomWidth: btnSelect === 'Compaign' ? 2 : 0,
                            borderBottomColor: btnSelect === 'Compaign' ? '#FFFFFF' : '#17171A'
                        }}
                        onPress={() => {
                            setBtnSelect('Compaign')
                            setShowCompaign(false)
                        }}>
                        <Text style={[mystyles.TopRatedRecentBtnText, {
                            color: btnSelect === 'Compaign' ? '#FFFF' : '#888DAA'
                        }]}>
                            Compaign
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setBtnSelect('Channels')
                        setShowCompaign(false)
                    }}
                        style={[mystyles.RecentBtn, {
                            borderBottomWidth: btnSelect === 'Channels' ? 2 : 0,
                            borderBottomColor: btnSelect === 'Channels' ? '#FFFFFF' : '#17171A'
                        }]}>
                        <Text style={[mystyles.TopRatedRecentBtnText, {
                            color: btnSelect === 'Channels' ? '#FFFF' : '#888DAA'
                        }]}>Channels</Text>
                    </TouchableOpacity>
                </View>

                {btnSelect === 'Compaign' && showCompaign != true ?
                    <View>
                        <FlatList
                            data={CompaignList}
                            renderItem={({ item, index }) =>
                                <CompaignChannelViewBtn item={item}
                                    handler={CompaignHandler} />
                            }
                        />

                        <AddCompaignAddBannerBtn text="Add compaign" Addhandler={AddCompaignHandler} />

                    </View>
                    : null
                }
                {btnSelect === 'Channels' && showCompaign != true
                    ?
                    <View>
                        <FlatList
                            data={Channels}
                            renderItem={({ item, index }) =>
                                <CompaignChannelViewBtn item={item} handler={ChannelHandler} />
                            }
                        />
                        <AddCompaignAddBannerBtn text="Create Banner" Addhandler={CreateBannerHandler} />
                    </View>

                    : null
                }

                {btnSelect === 'Compaign' && showCompaign ?
                    <Compaign />
                    : null
                }

                {btnSelect === 'Channels' && showCompaign ?
                    <Compaign />
                    : null
                }

                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ alignSelf: 'center', backgroundColor: '#17171A', width: '100%' }}
                    coverScreen={true}
                    visible={showCompaignModal}
                    hasBackdrop={true}
                    onBackdropPress={() => setShowCompaignModal(false)}
                >


                    <View style={{ flex: 1, justifyContent: 'center', }}>

                        <TouchableOpacity style={styles.circleCloseBtn}
                            onPress={() => setShowCompaignModal(false)}>
                            <Image style={{ tintColor: "#FFFF" }}
                                source={require('../../assets/closecircle.png')} />
                        </TouchableOpacity>

                        <CustomText text="Create your own compaign"
                            locations={[0, 1,]} colors={["#72F6D1", "#FED365"]}
                            style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }} />

                        <View style={{ marginVertical: 8 }}>
                            <Text style={styles.createYourOwnDescription}>
                                Create your own campaign to raise coins for{'\n'}your project. Please upload your banner{'\n'}and add a description
                           </Text>
                        </View>

                        <ImageBackground style={{ width: '100%', height: 190 }} source={require('../../assets/LargeKeyboardBg.png')}>
                            <TouchableOpacity style={styles.plusUploadBtn}>
                                <Image style={{ marginHorizontal: 5 }} source={require('../../assets/plusSquare.png')} />
                                <Text style={styles.uploadText}>Upload</Text>
                            </TouchableOpacity>
                        </ImageBackground>

                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Text style={{
                                fontSize: 16, fontFamily: 'Poppins-Regular',
                                color: '#FFFF'
                            }}>Compaign Title</Text>
                        </View>

                        <TextInput placeholder="Add a title"
                            placeholderTextColor="#888DAA"
                            style={mystyles.simpleTextInput}
                        />

                        <TextInput
                            multiline
                            textAlignVertical="top"
                            numberOfLines={5}
                            placeholderTextColor="#888DAA"
                            placeholder="Add a description"
                            style={[mystyles.simpleTextInput, {
                                backgroundColor: '#222531',
                                borderColor: '#222531',
                            }]}
                        />

                        <View style={{ marginVertical: 10 }}>
                            <CustomButton text={"Create your compaign"} onPress={CreateCompaignHandler} />
                        </View>

                    </View>
                    {ReferalModal && showDonationDialog ?
                        <BlurView
                            style={mystyles.absolute}
                            blurType="light"
                            blurRadius={10}
                            blurAmount={10}
                            reducedTransparencyFallbackColor="#222531"
                        />
                        : null}
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ alignSelf: 'center', backgroundColor: '#17171A', width: '100%' }}
                    coverScreen={true}
                    visible={showBannerModal}
                    hasBackdrop={true}
                    onBackdropPress={() => setShowBannerModal(false)}  >

                    <View style={{ flex: 1, justifyContent: 'center', }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity
                                onPress={() => setShowBannerModal(false)}>
                                <Icon name="chevron-back-outline" size={20} color="#FFFF" />
                            </TouchableOpacity>

                            <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#FFFF' }}>Create</Text>

                            <TouchableOpacity style={mystyles.circleCloseBtn}
                                onPress={() => setShowBannerModal(false)}>
                                <Image style={{ tintColor: "#FFFF" }}
                                    source={require('../../assets/closecircle.png')} />
                            </TouchableOpacity>
                        </View>

                        <SvgImg />

                        <TouchableOpacity style={styles.LargeUploadBtn}>

                            <CustomText text="Upload"
                                locations={[0, 1,]} colors={["#72F6D1", "#FED365"]}
                                style={{ fontSize: 35, fontWeight: "bold", textAlign: "center" }} />
                        </TouchableOpacity>
                        <View style={{ margin: 20 }}>
                            <Text style={{ color: '#ABAFC4' }}>Upload a backgroud image for your{'\n'}banner. Choose a good quality.</Text>
                        </View>





                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Text style={styles.compaignTitle}>Compaign Title</Text>
                        </View>


                        <TextInput placeholder="Add a title"
                            placeholderTextColor="#888DAA"
                            style={mystyles.simpleTextInput}
                        />

                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Text style={styles.compaignTitle}>Paste your own wallet address</Text>
                        </View>
                        <TextInput placeholder="Public addres(0x),or ENS"
                            placeholderTextColor="#888DAA"
                            style={mystyles.simpleTextInput}
                        />


                        <View style={{ marginVertical: 10 }}>
                            <CustomButton text={"Next"} onPress={CreateCompaignHandler} />
                        </View>

                    </View>
                    {ReferalModal && showDonationDialog ?
                        <BlurView
                            style={mystyles.absolute}
                            blurType="light"
                            blurRadius={10}
                            blurAmount={10}
                            reducedTransparencyFallbackColor="#222531"
                        />
                        : null}
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ alignSelf: 'center', backgroundColor: '#17171A', width: '100%' }}
                    coverScreen={true}
                    visible={showDonationDialog}
                    hasBackdrop={true}
                    onBackdropPress={() => setShowDonationDialog(false)}  >

                    <View style={{ flex: 1, justifyContent: 'center', }}>

                        <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity
                                onPress={() => setShowBannerModal(false)}>
                                <Icon name="chevron-back-outline" size={20} color="#FFFF" />
                            </TouchableOpacity>

                            <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#FFFF' }}>Create</Text>

                            <TouchableOpacity style={mystyles.circleCloseBtn}
                                onPress={() => setShowDonationDialog(false)}>
                                <Image style={{ tintColor: "#FFFF" }}
                                    source={require('../../assets/closecircle.png')} />
                            </TouchableOpacity>
                        </View>


                        <DoneSvg />

                        <ImageBackground style={{ width: '100%', justifyContent: 'center', height: 140 }}
                            source={require('../../assets/bluelightkeyboard.png')}>

                            <CustomText text="TEAM ITALIA"
                                locations={[0, 1,]} colors={["#72F6D1", "#FED365"]}
                                style={{ fontSize: 35, fontWeight: 'Poppins-Bold', fontWeight: "bold", textAlign: "center" }} />

                        </ImageBackground>


                        <View style={{ margin: 20 }}>
                            <Text style={{ color: '#ABAFC4' }}>Your banner is ready to send to your{'\n'}friends. All donations will be received on the{'\n'}wallet address what you added</Text>
                        </View>







                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Text style={styles.compaignTitle}>Donations will go to this wallet</Text>
                        </View>
                        <TextInput placeholder="395a2a6349e069ab44043f01d77cf7b91822b\n1841e333128d98f7878495bf53"
                            placeholderTextColor="#888DAA"
                            style={mystyles.simpleTextInput}
                        />


                        <View style={{ flex: 1, marginBottom: 50, justifyContent: 'flex-end' }}>
                            <CustomButton text={"Next"} onPress={DonationNextBtnHandler} />
                        </View>

                    </View>

                    {ReferalModal && showDonationDialog ?
                        <BlurView
                            style={mystyles.absolute}
                            blurType="light"
                            blurRadius={10}
                            blurAmount={10}
                            reducedTransparencyFallbackColor="#222531"
                        />
                        : null}
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{
                        //  backgroundColor: '#17171A',
                        alignSelf: 'center',
                        width: '100%'
                    }}
                    visible={ReferalModal} >
                    <View style={mystyles.referCodeModalMainView}>

                        <View style={styles.shareModalCloseBtnView}>

                            <Image resizeMode="contain"
                                source={require('../../assets/ShareIcon.png')} />

                            <Text style={styles.shareLinkText}>https://ginkopay.app.link/send/0xBBB6A12945aC14C84185a17C6BD2eAe96e</Text>


                            <TouchableOpacity
                                style={mystyles.circleCloseBtn}
                                onPress={() => setReferalModal(!ReferalModal)}>
                                <Image resizeMode="contain" source={require('../../assets/closecircle.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.shareListView}>
                            <TouchableOpacity>
                                <Image resizeMode="contain" source={require('../../assets/AppleMacMini.png')} />
                                <Text style={styles.shareText}>
                                    Apple Mac {'\n'}  mini
      </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <View >
                                    <Thumbnail resizeMode="contain"
                                        source={require('../../assets/Messageprofile.png')} />
                                    <Image
                                        style={{ position: 'absolute', bottom: 2, right: 2 }}
                                        resizeMode="contain"
                                        source={require('../../assets/messageIcon.png')} />
                                </View>

                                <Text style={styles.shareText}>
                                    Arlene{'\n'}McCoy
      </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <View style={{}}>
                                    <Thumbnail resizeMode="contain"
                                        source={require('../../assets/grouppp.png')} />

                                    <Thumbnail resizeMode="contain"
                                        style={{ position: 'absolute', top: 15, right: -20 }}
                                        source={require('../../assets/groupupper.png')} />

                                    <Image
                                        style={{
                                            position: 'absolute',
                                            bottom: -10, right: -20
                                        }}
                                        resizeMode="contain"
                                        source={require('../../assets/messageIcon.png')} />
                                </View>
                                <View style={{ marginTop: 10 }}>

                                    <Text style={styles.shareText}>
                                        Fellows
      </Text>
                                    <Text style={[styles.shareText, { color: '#ABABB0' }]}>
                                        2 People
      </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <View >
                                    <Image resizeMode="contain"
                                        source={require('../../assets/circleProfile.png')} />
                                    <Image
                                        style={{ position: 'absolute', bottom: 2, right: 2 }}
                                        resizeMode="contain"
                                        source={require('../../assets/messageIcon.png')} />
                                </View>

                                <Text style={styles.shareText}>
                                    First Last
      </Text>
                            </TouchableOpacity>
                        </View>



                        <View style={[styles.shareListView, { marginBottom: 40 }]}>
                            <TouchableOpacity>
                                <Image resizeMode="contain" source={require('../../assets/instaPink.png')} />
                                <Text style={styles.shareText}>
                                    Instagram
      </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <View >

                                    <Image

                                        resizeMode="contain"
                                        source={require('../../assets/Messages.png')} />
                                </View>

                                <Text style={styles.shareText}>
                                    Messages
      </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignSelf: 'center' }}>

                                <Image resizeMode="contain" source={require('../../assets/WhatsAppGreen.png')} />

                                <Text style={styles.shareText}>
                                    Whatsapp
      </Text>


                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <View>
                                    <Image resizeMode="contain" source={require('../../assets/TwitchPurple.png')} />
                                </View>

                                <Text style={styles.shareText}>
                                    Twitch
                               </Text>
                            </TouchableOpacity>
                        </View>




                    </View>

                </Modal>

                {ReferalModal && showDonationDialog ?
                    <BlurView
                        style={mystyles.absolute}
                        blurType="light"
                        blurRadius={10}
                        blurAmount={10}
                        reducedTransparencyFallbackColor="#222531"
                    />
                    : null}







            </View>
        </Container>
    )
}

export default Profile;

const styles = StyleSheet.create({
    MainUserSettingsView:
    {
        marginHorizontal: 15,
        borderWidth: 1,
        backgroundColor: '#222531',
        borderColor: '#222531',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row'
    },
    compaignTitle:
    {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFF'
    },
    UserUsernameView:
    {
        marginHorizontal: 10,
        flex: 1
    },
    UsernameText:
    {
        fontSize: 16, fontFamily: 'Poppins-Bold', color: '#FFFF'
    },
    Username:
    {
        fontSize: 12, fontFamily: 'Poppins-Regular', color: '#ABAFC4'
    },

    LargeUploadBtn:
    {
        width: '90%', alignSelf: 'center',
        borderColor: '#2A2D3C',
        borderRadius: 10, justifyContent: 'center',
        backgroundColor: '#2A2D3C',
        borderWidth: 1, height: 110
    },
    createYourOwnDescription:
    {
        color: '#FFFF',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    plusUploadBtn: {
        position: 'absolute',
        backgroundColor: '#222531',
        padding: 10,
        width: 120,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#222531',
        flexDirection: 'row',
        bottom: 15,
        left: 15,
        borderWidth: 1,
    },
    uploadText:
    {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        color: '#FFFF'
    },
    shareText:
    {
        fontSize: 12,
        color: '#FFFF',
        fontFamily: 'Roboto-Regular',
        textAlign: 'center'
    },
    shareListView:
    {
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: 'space-between',
        padding: 10,
    },
    // referCodeModalMainView:
    // {
    //     position: 'absolute',
    //     // height: 150,
    //     borderTopRightRadius: 15,
    //     borderTopLeftRadius: 15,
    //     bottom: -23,
    //     width: wp('100%'),
    //     backgroundColor: '#17171A'
    // },
    shareModalCloseBtnView:
    {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'red',
        marginVertical: 10,
        // marginHorizontal: 0,
    },
    shareLinkText:
    {
        color: '#ABABB0',
        fontSize: 12,
        alignSelf: 'center'
    },


})