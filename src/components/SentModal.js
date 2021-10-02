import React, { useState, useEffect } from 'react';
import { View, FlatList, Dimensions, ScrollView, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, TextInput, } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { Content } from 'native-base'
import { boldtext, simpletext } from '../constants/fonts';
import { graycolor, green } from '../constants/colors';
import { mystyles } from '../styles';
import TokenModal from './SendModalToken'
import SentModalMessage from './SentModalMessage'
const { width, height } = Dimensions.get("window");
import * as Actions from './../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-root-toast';

var obj = [
    {
        key: 1,
        name: "Beexay",
        link: '0x3Dc6...DxE9',
        image: require("../assets/token2.png")
    },
    {
        key: 2,
        name: "Dasun Bussi",
        link: '0x2Dc6...DcT9',
        image: require("../assets/token3.png")
    },
    {
        key: 3,
        name: "Smart Gevan",
        link: '0x3R2E...DxR9',
        image: require("../assets/token1.png")
    },
]


const SentModal = ({ visible, setVisible, transcitioncompletefunction }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.getUserList())
    }, [])
    const userList = useSelector(state => state.home?.userList);

    const [sendmessagemodal, setSendMessageModal] = useState(false)
    const [tokenmodal, setTokenModal] = useState(false)
    const [modaldata, setModalData] = useState({
        key: 1,
        name: "Beexay",
        link: '0x3Dc6...DxE9',
        image: require("../assets/token2.png")
    })
    const openmodal = (item) => {
        //setVisible()
        setSendMessageModal(true)
        setModalData(item)
    }

    const CloseallModals = (data) => {
        if (data === "back") {
            setSendMessageModal(false);
            setVisible(true)
        } else {
            setSendMessageModal(false);
            setVisible(false)
        }

    }

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.renderItemmain} onPress={() => openmodal(item.item)} >
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: 60, }}
                        source={item.item.image} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: "#fff", fontFamily: simpletext, fontSize: 15 }}>
                            {item.item.name}
                        </Text>
                        <Text style={{ color: graycolor, fontFamily: simpletext, fontSize: 12 }}>
                            {item.item.link}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <Modal
            isVisible={visible}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height * 2}
            transparent={true}
            style={styles.modal}
            coverScreen={true}
            animationOut="slideOutDown"
            onBackdropPress={() => setVisible()}
            onBackButtonPress={() => setVisible()}
            useNativeDriver={true}
            hasBackdrop={true}

            backdropColor="#1D1F27"
            backdropOpacity={.85}
        >

            <SafeAreaView style={[mystyles.container, { width: width }]}>
                <Content contentContainerStyle={{ flexGrow: 1, width: width, backgroundColor: "#17171A" }}>
                    <Text style={styles.sentto}>Sent To</Text>
                    <Text style={styles.from}>From</Text>
                    <TouchableOpacity style={styles.fromselect} onPress={() => { setTokenModal(true) }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: 60, }}
                                source={require("../assets/token2.png")} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: "#fff", fontFamily: simpletext, fontSize: 15 }}>
                                    Binance Coin

                                </Text>
                                <Text style={{ color: graycolor, fontFamily: simpletext, fontSize: 12 }}>
                                    Balance: 19.2371 GDC
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.from}>To</Text>
                    <View style={{ height: 60, width: width - 40, paddingHorizontal: 20, marginBottom: 30, justifyContent: "space-between", flexDirection: "row", alignItems: "center", borderRadius: 10, marginTop: 10, alignSelf: "center", borderWidth: 1, borderColor: graycolor }}>
                        <TextInput
                            placeholder="Search, public address (0x), or ENS"
                            placeholderTextColor={graycolor}
                            style={{ color: graycolor, flex: 1, fontFamily: boldtext, fontSize: 13 }}

                        />
                        <Image
                            style={{ width: 20, tintColor: graycolor, height: 20, resizeMode: "cover", borderRadius: 26, }}
                            source={require("../assets/scan.png")} />
                    </View>
                    <Text style={styles.recent}>Recent</Text>
                    <FlatList
                        data={obj}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    {/* <ScrollView>
                        {userList?.content.map((item, index) => {
                            return (
                                <TouchableOpacity style={styles.renderItemmain} onPress={() => openmodal(item.item)} >
                                    <View style={{ flexDirection: "row" }}>
                                        <Image
                                            style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: 60, }}
                                            source={require("../assets/token2.png")} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ color: "#fff", fontFamily: simpletext, fontSize: 15 }}>
                                                {item?.firstName + " " + item?.lastName}
                                            </Text>
                                            <Text style={{ color: graycolor, fontFamily: simpletext, fontSize: 12 }}>
                                                {item?.currencyConversion}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView> */}
                </Content>
            </SafeAreaView>
            <TokenModal visible={tokenmodal} setVisible={setTokenModal}
                closesendmodal={() => setVisible(false)} />
            <SentModalMessage
                visible={sendmessagemodal}
                setVisible={(data) => CloseallModals(data)}
                crossbuttonFunction={() => setSendMessageModal(false)}
                setTokenModal={() => alert("setTokenModal")}
                data={modaldata}
                setReqPayModal={() => alert("setReqPayModal")}
                transcitioncompletefunction={transcitioncompletefunction}
            />

        </Modal >
    )
}

export default SentModal;

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        width: width,
    },
    mainview: {
        height: height,
        flex: 1,
        width: width,
        bottom: 0,
        padding: 20,
        backgroundColor: '#17171A',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    sentto: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontFamily: boldtext
    },
    from: {
        color: "#fff", marginLeft: 20,

        fontSize: 16,
        fontFamily: boldtext
    },
    recent: {
        color: graycolor,
        fontSize: 16, marginLeft: 20,
        fontFamily: boldtext
    },
    ethereumview: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    ethereumviewinner: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        height: 12,
        width: 12,
        marginLeft: 20,
        marginRight: 15,
        borderRadius: 14,
        backgroundColor: "#FEBF32"
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontFamily: simpletext
    },
    otherassets: {
        color: graycolor,
        fontSize: 16,
        marginLeft: 40,
        marginVertical: 30,
        alignSelf: "flex-start"
    },
    flatlistitemmain: {
        flexDirection: 'row',
        width: width - 80,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginBottom: 30
    },
    fromselect: {
        width: width - 100,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 60,
        justifyContent: "space-between"
    },
    renderItemmain: {
        width: width - 60,
        alignSelf: "center",
        paddingVertical: 45,
        alignItems: "center",
        flexDirection: "row",
        height: 60,
        justifyContent: "space-between"
    }
})