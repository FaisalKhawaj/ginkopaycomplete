import React, { useState } from 'react';
import { Container, Content } from 'native-base'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { BackgroundColor } from '../../constants/colors';
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';
import CryptoNews from '../../components/News';
import CustomText from '../../components/Text';
import DonateBtn from '../../components/DonateBtn';
import Compaign from '../../components/compaign';
import { mystyles } from '../../styles';


const CompaignMainPage = ({ navigation }) => {
    const [btnSelect, setBtnSelect] = useState('TopRated')
    const [TopCompaigns, setTopCompaigns] = useState([
        {
            id: 1,
            img: require('../../assets/Gaming.png')
        },
        {
            id: 2,
            img: require('../../assets/fifa.png')
        },
        {
            id: 3,
            img: require('../../assets/fifa.png')
        },
        {
            id: 4,
            img: require('../../assets/fifa.png')
        },
        {
            id: 5,
            img: require('../../assets/fifa.png')
        },
    ])

    const [TopRated, setTopRated] = useState([
        {
            id: 1,
            coin: "BTC",
            description: "Fusce enim in se iaculis facilisi\npellentesque",
            img: require('../../assets/GamingPc.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        },
        {
            id: 2,
            coin: "BTC",
            description: "Fusce enim in se iaculis facilisi\npellentesque",
            img: require('../../assets/Table.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        },
        {
            id: 3,
            coin: "BTC",
            description: "Platea adipiscing nam tempor\nullamcorper velit bibendum\namet nibh scelerisque.",
            img: require('../../assets/screen.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        },
        {
            id: 4,
            coin: "BTC",
            description: "Diam quis elementum viverra\nnulla gravida euismod."
            , img: require('../../assets/mobilecrypto.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        }

    ])

    const [Recent, setRecent] = useState([
        {
            id: 1,
            coin: "BTC",
            description: "Fusce enim in se iaculis facilisi\npellentesque",
            img: require('../../assets/keyboard.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        },
        {
            id: 2,
            coin: "BTC",
            description: "Fusce enim in se iaculis facilisi\npellentesque",
            img: require('../../assets/multimedia.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        },
        {
            id: 3,
            coin: "BTC",
            description: "Platea adipiscing nam tempor\nullamcorper velit bibendum\namet nibh scelerisque.",
            img: require('../../assets/peoplegaming.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        },
        {
            id: 4,
            coin: "BTC",
            description: "Diam quis elementum viverra\nnulla gravida euismod."
            , img: require('../../assets/newkeyboard.png'),
            hoursAgo: "16h ago",
            newsSource: "News Source"
        }

    ])
    
    const TopRatedCompaignShowHandler = () => {
        // setBtnSelect('TopRatedCompaign')
        setShowCompaign(!showCompaign)
    }

    const [showCompaign, setShowCompaign] = useState(false)
    
    const RecentCompaignShowHandler = () => {
        setShowCompaign(!showCompaign)
    }
    const backBtn = () => {

    }
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <View style={{
                // flex: 1,
                backgroundColor: BackgroundColor
            }}>

                <HeaderBackBtnWithLogo backBtn={backBtn} />

                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.TopCompaignsText}>
                        Top Compaigns
                    </Text>
                </View>
                <FlatList
                    data={TopCompaigns}
                    horizontal
                    renderItem={({ item, index }) =>
                        <View>
                            <TouchableOpacity style={styles.TopCompaignsImgBtn}>
                                <Image resizeMode="contain"
                                    style={styles.TopCompaignsImgStyle}
                                    source={item.img} />
                            </TouchableOpacity>

                        </View>
                    }
                />

                <View style={{ marginHorizontal: 15, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            borderBottomWidth: btnSelect === 'TopRated' ? 2 : 0,
                            borderBottomColor: btnSelect === 'TopRated' ? '#FFFFFF' : '#17171A'
                        }}
                        onPress={() => {
                            setBtnSelect('TopRated')
                            setShowCompaign(false)
                        }}>
                        <Text style={[mystyles.TopRatedRecentBtnText, {
                            color: btnSelect === 'TopRated' ? '#FFFF' : '#888DAA'
                        }]}>Top Rated</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setBtnSelect('Recent')
                        setShowCompaign(false)
                    }}
                        style={[mystyles.RecentBtn, {
                            borderBottomWidth: btnSelect === 'Recent' ? 2 : 0,
                            borderBottomColor: btnSelect === 'Recent' ? '#FFFFFF' : '#17171A'
                        }]}>
                        <Text style={[mystyles.TopRatedRecentBtnText, {
                            color: btnSelect === 'Recent' ? '#FFFF' : '#888DAA'
                        }]}>Recent</Text>
                    </TouchableOpacity>
                </View>

                {btnSelect === 'TopRated' && showCompaign != true ?
                    <FlatList data={TopRated}
                        renderItem={({ item, index }) =>
                            <CryptoNews item={item} handler={TopRatedCompaignShowHandler} />
                        }
                    />
                    : null

                }

                {btnSelect === 'Recent' && showCompaign != true ?
                    <FlatList data={Recent}
                        renderItem={({ item, index }) =>
                            <CryptoNews item={item} handler={RecentCompaignShowHandler} />
                        }
                    />
                    : null
                }

                {/* {
                    btnSelect === 'TopRatedCompaigns' ? */}
                {btnSelect === 'TopRated' && showCompaign ?
                    <Compaign />
                    : null
                }

                {btnSelect === 'Recent' && showCompaign ?
                    <Compaign />
                    : null
                }


            </View>
        </Container >
    )
}

export default CompaignMainPage;

const styles = StyleSheet.create({
    TopCompaignsText:
    {
        color: '#FFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    TopCompaignsImgBtn:
    {
        borderRadius: 20,
        marginHorizontal: 4
    },
    TopCompaignsImgStyle:
    {
        width: 150,
        height: 170
    },
    // RecentBtn:
    // {
    //     marginLeft: 35
    // },
    // TopRatedRecentBtnText:
    // {
    //     color: '#FFFF',
    //     fontSize: 16,
    //     fontFamily: 'Poppins-Bold'
    // },
    compaignLargeImg:
    {
        marginVertical: 10,
        alignSelf: 'center'
    },
    // newsMainView:
    // {
    //     padding: 15,
    //     borderBottomColor: '#F1F3F5',
    //     borderBottomWidth: 1,
    // },
    // newsTextView:
    // {
    //     flex: 1,
    // },
    newsText:
    {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFF'
    },
    BTCHoursAgoSource:
    {
        marginHorizontal: 8,
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#FFFF'
    },


})
