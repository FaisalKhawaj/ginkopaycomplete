import React, { useState, useEffect } from 'react';
import { View, FlatList, BackHandler, Dimensions, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Touchable, ImageBackground, ScrollView } from 'react-native';
import CustomText from '../../components/Text'
import { Content } from 'native-base'
import { useFocusEffect } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';
import { boldtext, simpletext } from '../../constants/fonts';
import { graycolor, green, lightWhite, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors';
import { mystyles } from '../../styles';
const { width, height } = Dimensions.get("screen");
import * as Actions from './../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MarketModal from '../../components/MarketModal';
import RequestPaymentModal from '../../components/RequestPaymentModal';
import DashboardBuy from '../../components/DashboardBuyModal';
import MarketBuySellConfirmAmountModal from '../../components/BuySellConfirmAmoutModal';


let marketdata = [
  {
    key: 1,
    image: require("../../assets/apex.png"),
    name: "APEX Coin",
    dollar: "$226.69",
    percent: +2,
    title: "19.2371 CPXT/GDC",
    DetailImg: require('../../assets/LetGo.gif'),
    DetailName: 'APEX LEGEND',
    DetailDescription: 'Apex Legends is a free-to-play battle royale developed by Respawn Entertainment and published by Electronic Arts. Set in the same universe as Titanfall, the game was released for Microsoft Windows, PlayStation 4 and Xbox One on February 4th 2019. On March 10th  2021, the game has also landed on Nintendo Switch.\n Apex coin is the official currency of the Apex universe, with which you can buy bundles and skins for customize your LEGEND.'

  },
  {
    key: 2,
    image: require("../../assets/cp.png"),
    name: "COD Point",
    dollar: "$1.00",
    percent: 4.3,
    title: "92,3 CPT/GDC",
    DetailImg: require('../../assets/CODGun.png'),
    DetailName: 'CALL OF DUTY',
    DetailDescription: 'Call of Duty: Warzone is a first-person shooter video game  free-to-play Battle Royale developed by Infinity  Ward, Treyarch and Raven Software. Posted on 10 March  2020 from Activision on PlayStation 4, Xbox  One and Microsoft Windows as a free stand-alone DLC of Call of Duty: Modern Warfare, is also available on PlayStation 5 in backward compatible format and on Xbox Series  X/S in next-gen version.\nThe official currency of the game is the CP with which gamers can buy skins, bundles in the store and battle pass to customize their Avatar.'
  },
  {
    key: 3,
    image: require("../../assets/V.png"),
    name: "V-BUCKS",
    dollar: "$20.83",
    percent: -1.3,
    title: "12.74 VBT/GDC",
    DetailImg: require('../../assets/cartoon.png'),
    DetailName: 'FORTNITE',
    DetailDescription: 'Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Save the World, Battle Royale and Creative.\n V-Bucks are a premium Currency in Fortnite. Their primary use is for the purchase of Cosmetic Items or the Battle Pass. '

  },
  {
    key: 4,
    image: require("../../assets/fifaa.png"),
    name: "FIFA Coin",
    dollar: "$20.83",
    percent: -1.3,
    title: "12.74 FCT/GDC",
    DetailImg: require('../../assets/FootballPlay.png'),
    DetailName: 'FIFA FUT',
    DetailDescription: "FIFA Ultimate Team is a game mode version  launched starting from Fifa  09 whose goal is  to build a team, using players  of any club and nationality, with which to compete in offline and online tournaments.\n Teams are composed using cards FUT: Each user at the first start of the game receives in  gift some packages to build your team.\nThrough Fifa Coins and Fifa PointsIt will then be possible to purchase additional packs or players to improve your team. Each game played will earn you credits which will be the greater the better the  result.",
  },
  {
    key: 5,
    image: require("../../assets/Valorant.png"),
    name: "VALORANT RIOT",
    dollar: "$20.83",
    percent: -1.3,
    title: "12.74 VRT/GDC",
    DetailImg: require('../../assets/ApexSad.png'),
    DetailName: 'VALORANT',
    DetailDescription: 'Valorant is a free-to-play first-person shooter developed and published by Riot Games, for Microsoft Windows.\nWith the Valorant official currency players will be able to unlock new weapon models on the official shop. '

  },
  {
    key: 6,
    image: require("../../assets/RP.png"),
    name: "LOL RIOT",
    dollar: "$20.83",
    percent: -1.3,
    title: "12.74 LRT/GDC",
    DetailImg: require('../../assets/Girl.gif'),
    DetailName: 'LOL',
    DetailDescription: 'League of Legends is an online video game of the MOBA genre developed and published by Riot Games for Microsoft Windows and macOS.It is a strategy game where two    teams of five powerful champions battle it out for  destroy the base of the opponents.\nLeague of Legends is one of the most video games  popular in the world, with over 100 million players active every month.\n The official currency is the RIOT POINT with which it is possible to buy different types of boosts, aspects for champions and wards, additional rune pages, summoning icons and above all the champions themselves.'
  },

]

var obj = [
  {
    key: 1,
    value: 10,
    str: 'fdfgdfg'
  },
  {
    key: 2,
    value: 10,
    str: 'dfgdfg'
  },
  {
    key: 3,
    value: 10,
    str: 'fdgdf'
  },
  {
    key: 4,
    value: 10,
    str: 'gdfg',
  },
  {
    key: 5,
    value: 10,
    str: "dgdfg",
  },
  {
    key: 6,
    value: 10,
    str: 'gdfg',
  },
]

let newsdata = [
  {
    key: 1,
    image: require("../../assets/news1.png"),
    news: "Fusce enim in sed iaculis facilisi pellentesque.",
    coin: "BTC",
    time: "16h ago",
    source: "News Source"
  },
  {
    key: 2,
    image: require("../../assets/news2.png"),
    news: "Fusce enim in sed iaculis facilisi pellentesque.",
    coin: "BTC",
    time: "16h ago",
    source: "News Source"
  },
  {
    key: 3,
    image: require("../../assets/news3.png"),
    news: "Platea adipiscing nam tempor ullamcorper velit bibendum amet nibh scelerisque.",
    coin: "BTC",
    time: "16h ago",
    source: "News Source"
  },
  {
    key: 4,
    image: require("../../assets/news4.png"),
    news: "Diam quis elementum viverra nulla gravida euismod.",
    coin: "BTC",
    time: "16h ago",
    source: "News Source"
  },
]

let watchlistdata = [
  {
    key: 1,
    image: require("../../assets/btc.png"),
    name: "Gamer Digital Currency",
    Heading: "GDC",
    amount: "GDC 43,906,95",
    percent: "+11.71%"
  },
  {
    key: 2,
    image: require("../../assets/btc.png"),
    name: "Bitcoin",
    Heading: "BTC",
    amount: "USD 43,906,95",
    percent: "+11.71%"
  },
  {
    key: 3,
    image: require("../../assets/btc.png"),
    name: "Bitcoin",
    Heading: "BTC",
    amount: "USD 43,906,95",
    percent: "+11.71%"
  },
  {
    key: 4,
    image: require("../../assets/btc.png"),
    name: "Bitcoin",
    Heading: "BTC",
    amount: "USD 43,906,95",
    percent: "+11.71%"
  },
]
const Home = ({ navigation }) => {

  const [data, setData] = useState(obj)
  const [newsTab, setNewsTab] = useState(false)
  const [showMarketModal, setShowMarketModal] = useState(false)
  const [itemView, setItemView] = useState(false)
  const [dashboardBuyModal, setDashboardBuyModal] = useState(false)
  const [showBuySellConfirmAmountModal, setShowBuySellConfirmAmountModal] = useState(false)
  const news = useSelector(state => state.home?.news);
  const newsDetail = useSelector(state => state.home?.newsDetail);

  const closeallmodals = () => {
    setDashboardBuyModal(false)
  }
  const DashboardBuyBtnHandler = () => {
    setDashboardBuyModal(false)
    setShowBuySellConfirmAmountModal(true)
  }
  const MarketBuySellConfirmAmountModalHandler = () => {
    setShowBuySellConfirmAmountModal(false)
  }
  const dispatch = useDispatch();
  console.log("showMarketModal", showMarketModal)
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (itemView) {
          setItemView(false)
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );
      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }),
  );
  useEffect(() => {
    dispatch(Actions.getNews())
  }, [])


  const watchListrenderItem = ({ item }) => {
    return (
      <View style={styles.mainView}>
        <Image style={styles.iconBackground} source={require('../../assets/btc.png')} />
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={{ color: '#fff', fontFamily: simpletext, fontSize: 16 }}>
            {item.name}
          </Text>
          <Text style={{ color: '#fff', fontFamily: simpletext, fontSize: 12 }}>
            {item.Heading}
          </Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
          <Text style={{ color: '#fff', fontFamily: simpletext }}>
            {item.amount}
          </Text>
          <Text style={{ color: green, }}>
            {item.percent}
          </Text>
        </View>
      </View>
    )
  }


  const renderTopMoversItem = (item) => {
    return (
      <View style={styles.horizantalListItem}>
        <CustomText
          text={"+20.25%"}
          locations={[0, 1]}
          colors={["#70A2FF", "#F76E64"]}
          style={{ fontSize: 22, fontFamily: boldtext, textAlign: "center" }}
        />
        <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ ...styles.verticalListIconBackground, width: 25, height: 25 }}
            source={require('../../assets/usdt.png')} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: '#fff', fontSize: 14, fontFamily: simpletext, }}>
              Dogecoin
            </Text>
            <Text style={{ color: graycolor, fontSize: 12, fontFamily: simpletext, }}>
              USD 0.13
            </Text>
          </View>
        </View>
      </View>
    )
  }
  const closeMarketModal = () => {
    setShowMarketModal(false)
  }
  const [market, setMarket] = useState([])
  const marketModalHandler = (item) => {
    setShowMarketModal(true);
    setMarket(item);

  }
  const renderMarketItem = ({ item }) => {

    return (
      <TouchableOpacity
        onPress={() => marketModalHandler(item)}
        style={styles.verticalListItem}
      >
        <Image style={styles.verticalListIconBackground} source={item.image} />
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={{ color: '#fff', fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: lightWhite, fontFamily: simpletext, fontSize: 12, marginRight: 20 }}>
              {item.dollar}
            </Text>
            <Text style={{ color: item.percent >= 0 ? green : "red", fontFamily: simpletext, }}>
              {item.percent >= 0 ? "+" + item.percent : "" + item.percent}%
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text style={{ color: '#fff', fontFamily: 'Poppins-SemiBold', }}>
            {item.title}
          </Text>
          <View style={{ flexDirection: 'row', }}>

            <TouchableOpacity onPress={() => setDashboardBuyModal(true)} style={{ backgroundColor: '#2A2D3C', width: wp('15%'), borderRadius: 5 }}>
              <CustomText
                text={"BUY"}
                locations={[0, 1,]} colors={["#70A2FF", '#F76E64']}
                style={{ fontSize: 13, textAlign: "center", fontFamily: 'Poppins-SemiBold', paddingVertical: 3, paddingHorizontal: 10 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buySellBtn}>
              <CustomText
                text={"SELL"}
                locations={[0, 1,]} colors={["#70A2FF", '#F76E64']}
                style={{ fontSize: 13, textAlign: "center", paddingVertical: 3, paddingHorizontal: 10 }}
              />
            </TouchableOpacity>





          </View>



        </View>
      </TouchableOpacity>
    )
  }

  const renderNewsItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(Actions.getNewsDetails(item.webId))
          openNewsItem(item)
        }}
        style={styles.newsListItem}
      >
        <View style={{ margin: 20, flex: 1 }}>
          <Text style={{ fontSize: 16, color: '#fff', fontFamily: simpletext, }}>
            {item.description}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <View style={{ height: 13, width: 13, borderRadius: 13, backgroundColor: "#F7931A" }} />
            <Text style={styles.text}>
              {item.coin}
            </Text>
            <Text style={styles.text}>
              {item.time}
            </Text>
            <Text style={styles.text}>
              {item.source}
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', marginRight: 20, }}>
          <Image source={{ uri: item.pictureUrl }} style={{ height: 60, width: 60, backgroundColor: "transparent", resizeMode: "cover" }} />
        </View>
      </TouchableOpacity>
    )
  }


  const openNewsItem = (item) => {
    setItemView(true)
  }

  const marketPress = () => {
    setNewsTab(false)
    setItemView(false)
  }

  const backBtn = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={mystyles.container}>
      <Content contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}>
        <HeaderBackBtnWithLogo backBtn={backBtn} />
        <Text style={{ color: '#fff', fontSize: 22, marginHorizontal: 20, fontFamily: boldtext }}>
          Watchlist
        </Text>

        <View>
          <FlatList
            data={watchlistdata}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ height: 60, marginTop: 0, }}
            contentContainerStyle={{ height: 60 }}
            renderItem={watchListrenderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* <Text style={{ color: '#fff', margin: 20, fontSize: 20, fontFamily: boldtext }}>
          Top Movers
        </Text>
        <View style={styles.horizantalListView}>
          <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderTopMoversItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View> */}
        <View style={styles.tabView}>
          <TouchableOpacity
            onPress={() => marketPress()}
            style={{
              borderBottomWidth: !newsTab ? 2 : 0, margin: 10, paddingHorizontal: 20,
              borderBottomColor: !newsTab ? "#fff" : "#000",
            }}>
            <Text style={{ color: !newsTab ? "#fff" : graycolor, fontFamily: simpletext, fontSize: 16 }}>
              Market
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setNewsTab(true)}
            style={{
              borderBottomWidth: newsTab ? 2 : 0, margin: 10, paddingHorizontal: 20,
              borderBottomColor: newsTab ? "#fff" : graycolor,
            }}>
            <Text style={{ color: newsTab ? "#fff" : graycolor, fontFamily: simpletext, fontSize: 16 }}>
              News
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 1,
          width: '100%', borderTopWidth: newsTab && !itemView ? 1 : 0, borderTopColor: '#fff'
        }}>
          {!newsTab ? (
            <FlatList
              data={marketdata}
              renderItem={renderMarketItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) :
            <>
              {!itemView ? (
                <View>
                  <FlatList
                    data={news}
                    renderItem={renderNewsItem}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  <TouchableOpacity
                    style={styles.viewmore}

                  >
                    <Text style={{ fontSize: 16, fontFamily: boldtext, color: graycolor }}>
                      View more
                    </Text>
                    <MaterialIcons name="chevron-right" size={30} color="#fff" style={{ color: graycolor }} />
                  </TouchableOpacity>
                </View>
              ) :
                <ScrollView>
                  <ImageBackground //remove backGroundColor and change image source
                    source={{ uri: newsDetail?.pictureUrl }}
                    style={{ marginHorizontal: 20, marginTop: 10, height: 140, borderRadius: 10, overflow: "hidden", resizeMode: 'cover', backgroundColor: '#fff' }}
                  ></ImageBackground>
                  <View style={{ marginBottom: 20, marginHorizontal: 35, paddingVertical: 30, borderBottomWidth: 1, borderBottomColor: '#fff' }}>
                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: simpletext, textAlign: 'justify' }}>
                      {newsDetail?.description}

                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                      <View style={{ height: 13, width: 13, borderRadius: 8, backgroundColor: "#F7931A" }}>
                      </View>
                      <Text style={{ marginLeft: 10, fontSize: 12, fontFamily: simpletext, color: '#fff' }}>
                        BTC
                      </Text>
                      <Text style={{ marginLeft: 20, fontSize: 12, fontFamily: simpletext, color: '#fff' }}>
                        16h ago
                      </Text>
                      <Text style={{ marginLeft: 20, fontSize: 12, fontFamily: simpletext, color: '#fff' }}>
                        News Source
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.viewmore} onPress={() => setItemView(false)}>
                    <Text style={{ fontSize: 16, fontFamily: boldtext, color: graycolor }}>
                      All News
                    </Text>
                    <MaterialIcons name="chevron-right" size={30} color="#fff" style={{ color: graycolor }} />
                  </TouchableOpacity>
                </ScrollView>
              }
            </>
          }
          <MarketModal item={market} showMarketModal={showMarketModal} setShowMarketModal={setShowMarketModal} />
          <DashboardBuy
            visible={dashboardBuyModal}
            setVisible={closeallmodals}
            setVisible2={DashboardBuyBtnHandler} />

          <MarketBuySellConfirmAmountModal
            visible={showBuySellConfirmAmountModal}
            closeModal={MarketBuySellConfirmAmountModalHandler}

          />
        </View>
      </Content>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17171A"
  },
  mainView: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    height: 60,
    paddingRight: 30,
    width: width,
  },
  iconBackground: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 25,
    marginRight: 20
  },
  horizantalListItem: {
    backgroundColor: '#2A2D3C',
    alignItems: 'center',
    justifyContent: "space-between",
    marginLeft: 20,
    paddingTop: 12,
    paddingLeft: 6,
    paddingRight: 12,
    borderRadius: 10,
  },
  verticalListItem: {
    flexDirection: 'row',
    // backgroundColor:'#171921',
    marginHorizontal: 10,
    marginBottom: 8,
    padding: 12,
    borderRadius: 10,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  verticalListIconBackground: {
    alignSelf: 'center',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 18,
    marginRight: 20
  },
  newsListItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: simpletext,
    color: '#fff'
  },
  viewmore: {
    marginHorizontal: 30,
    marginBottom: 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buySellBtn: {
    backgroundColor: '#2A2D3C',
    marginHorizontal: 10,
    width: wp('15%'),
    borderRadius: 5
  }
})