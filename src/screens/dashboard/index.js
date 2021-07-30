import React,{useState} from 'react';
import { View,FlatList, BackHandler,  Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable, ImageBackground, ScrollView } from 'react-native';
import CustomText from '../../components/Text'
import {useFocusEffect} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';
import { boldtext, simpletext } from '../../constants/fonts';
import { graycolor, green } from '../../constants/colors';
const {width, height} = Dimensions.get("screen");

let marketdata = [
  {
    key:1,
    image:require("../../assets/btc.png"),
    name:"Binance Coin",
    dollar:"$226.69",
    percent:+2,
    title:"19.2371 BNB",
  },
  {
    key:2,
    image:require("../../assets/coin2.png"),
    name:"USD Coin",
    dollar:"$1.00",
    percent:4.3,
    title:"92,3 USDC",
  },
  {
    key:3,
    image:require("../../assets/coin3.png"),
    name:"Cardano",
    dollar:"$20.83",
    percent:-1.3,
    title:"12.74 ADA",
  },
  {
    key:4,
    image:require("../../assets/coin3.png"),
    name:"Cardano",
    dollar:"$20.83",
    percent:-1.3,
    title:"12.74 ADA",
  },
  {
    key:5,
    image:require("../../assets/coin3.png"),
    name:"Cardano",
    dollar:"$20.83",
    percent:-1.3,
    title:"12.74 ADA",
  },
  {
    key:6,
    image:require("../../assets/coin3.png"),
    name:"Cardano",
    dollar:"$20.83",
    percent:-1.3,
    title:"12.74 ADA",
  },
  
]

var obj = [
  {
    key:1,
    value: 10,
    str:'fdfgdfg'
  },
  {
    key:2,
    value: 10,
    str:'dfgdfg'
  },
  {
    key:3,
    value: 10,
    str:'fdgdf'
  },
  {
    key:4,
    value: 10,
    str:'gdfg',
  },
  {
    key:5,
    value: 10,
    str:"dgdfg",
  },
  {
    key:6,
    value: 10,
    str:'gdfg',
  },
]

let newsdata = [
  {
    key:1,
    image:require("../../assets/news1.png"),
    news:"Fusce enim in sed iaculis facilisi pellentesque.",
    coin:"BTC",
    time:"16h ago",
    source:"News Source"
  },
  {
    key:2,
    image:require("../../assets/news2.png"),
    news:"Fusce enim in sed iaculis facilisi pellentesque.",
    coin:"BTC",
    time:"16h ago",
    source:"News Source"
  },
  {
    key:3,
    image:require("../../assets/news3.png"),
    news:"Platea adipiscing nam tempor ullamcorper velit bibendum amet nibh scelerisque.",
    coin:"BTC",
    time:"16h ago",
    source:"News Source"
  },
  {
    key:4,
    image:require("../../assets/news4.png"),
    news:"Diam quis elementum viverra nulla gravida euismod.",
    coin:"BTC",
    time:"16h ago",
    source:"News Source"
  },
]

let watchlistdata = [{
  key:1,
  image:require("../../assets/btc.png"),
  name:"Bitcoin",
  Heading:"BTC",
  amount:"USD 43,906,95",
  percent:"11.71%"
  },
  {
    key:2,
    image:require("../../assets/btc.png"),
    name:"Bitcoin",
    Heading:"BTC",
    amount:"USD 43,906,95",
    percent:"11.71%"
    },
  {
      key:3,
      image:require("../../assets/btc.png"),
      name:"Bitcoin",
      Heading:"BTC",
      amount:"USD 43,906,95",
      percent:"11.71%"
  },
]
const Home = ({navigation}) => {

  const [data,setData] = useState(obj)
  const [newsTab,setNewsTab] = useState(false)
  const [itemView,setItemView] = useState(false)

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

  const renderTopMoversItem = (item) => {
    return (
      <View style={styles.horizantalListItem}>
        <CustomText 
          text={"+20.25%"} 
          locations={[0,1]} 
          colors={["#70A2FF", "#F76E64"]} 
          style={{fontSize:22,fontFamily:boldtext,fontWeight:"bold", textAlign:"center"}} 
        />
        <View style={{flexDirection:'row',margin:10,alignItems: 'center',justifyContent: 'center'}}>
            <Image 
              style={{...styles.verticalListIconBackground,width:25,height:25}} 
              source={require('../../assets/usdt.png')} />
            <View style={{flexDirection:'column'}}>
              <Text style={{color:'#fff',fontSize:14,fontFamily:simpletext,}}>
                  Dogecoin
              </Text>
              <Text style={{color:graycolor, fontSize:12, fontFamily:simpletext,}}>
                USD 0.13
              </Text>
            </View>
        </View>
      </View>
    )
  }

  const renderMarketItem = ({item}) => {
    
    return (
      <TouchableOpacity 
        onPress={() =>alert("Market Item Pressd")}
        style={styles.verticalListItem}
      >
          <Image style={styles.verticalListIconBackground} source={item.image} />
            <View style={{flexDirection:'column',flex:1}}>
              <Text style={{color:'#fff',fontFamily:simpletext, fontSize:16}}>
                {item.name}
              </Text>
              <View style={{flexDirection:'row',alignItems: 'center'}}>
                <Text style={{color:'#fff',fontFamily:simpletext,fontSize:12,marginRight:20}}>
                  {item.dollar}
                </Text>
                <Text style={{color:item.percent>= 0?green:"red" ,fontFamily:simpletext,}}>
                   {item.percent>=0?"+"+item.percent:""+item.percent}%
                </Text>
              </View>
          </View>
          <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
              <Text style={{color:'#fff',fontFamily:simpletext, fontFamily:simpletext}}>
                {item.title}
              </Text>
          </View>
      </TouchableOpacity>
    )
  }

  const renderNewsItem = ({item}) => {
    return (
      <TouchableOpacity 
        onPress={() => openNewsItem(item)}
        style={styles.newsListItem}
      >
          <View style={{margin:20,flex:1}}>
              <Text style={{fontSize:16,color:'#fff',fontFamily:simpletext,}}>
                  {item.news}
              </Text>
              <View style={{flexDirection:'row',alignItems: 'center',marginTop:10}}>
                  <View style={{height:13,width:13,borderRadius:13,backgroundColor:"#F7931A"}} />
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
          <View style={{backgroundColor:'transparent',marginRight:20,}}>
            <Image source={item.image} style={{height:60,width:60,backgroundColor:"transparent", resizeMode:"cover"}} />
          </View>
      </TouchableOpacity>
    )
  }

  const watchListrenderItem = ({item}) =>{
    return(
      <View style={styles.mainView}>
              <Image style={styles.iconBackground} source={require('../../assets/btc.png')} /> 
              <View style={{flexDirection:'column',flex:1}}>
                  <Text style={{color:'#fff',fontFamily:simpletext,fontSize:16}}>
                      Bitcoin
                  </Text>
                  <Text style={{color:'#fff',fontFamily:simpletext,fontSize:12}}>
                      BTC
                  </Text>
            </View>
            <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
                <Text style={{color:'#fff', fontFamily:simpletext}}>
                  USD $65465.56
                </Text>
                <Text style={{color:green,}}>
                  +11.70%
                </Text>
            </View>
          </View>
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

}
  return (
      <View style={styles.container}>
        <HeaderBackBtnWithLogo backBtn={backBtn} />
          <Text style={{color:'#fff',fontSize:22,marginHorizontal:20,fontFamily:boldtext}}>
            Watchlist
          </Text>
          <View>
            <FlatList 
                data={watchlistdata}
                horizontal={true}
                style={{height:60, marginTop:0,}}
                contentContainerStyle={{height:60}}
                renderItem={watchListrenderItem}
                keyExtractor={(item,index) => index.toString()}
              />
            </View> 
          <Text style={{color:'#fff',margin:20,fontSize:20,fontFamily:boldtext}}>
            Top Movers
          </Text>
          <View style={styles.horizantalListView}>
            <FlatList 
              data={data}
              horizontal={true}
              renderItem={renderTopMoversItem}
              keyExtractor={(item,index) => index.toString()}
            />
          </View>
          <View style={styles.tabView}>
            <TouchableOpacity
              onPress={() => marketPress()}
              style={{borderBottomWidth:!newsTab?2:0,margin:10,paddingHorizontal:20,
                borderBottomColor:!newsTab?"#fff":"#000",}}>
              <Text style={{color:!newsTab?"#fff":graycolor,fontFamily:simpletext ,fontSize:16}}>
                Market
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setNewsTab(true)}
              style={{borderBottomWidth:newsTab?2:0,margin:10,paddingHorizontal:20,
                borderBottomColor:newsTab?"#fff":graycolor,}}>
              <Text style={{color:newsTab?"#fff":graycolor,fontFamily:simpletext ,fontSize:16}}>
                News
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,width:'100%',borderTopWidth:newsTab && !itemView ? 1 : 0,borderTopColor:'#fff'}}>
            {!newsTab ? (
              <FlatList 
                data={marketdata}
                renderItem={renderMarketItem}
                keyExtractor={(item,index) => index.toString()}
              />
            ):
              <>
              {!itemView ? (
                <View>
                <FlatList 
                  data={newsdata}
                  renderItem={renderNewsItem}
                  keyExtractor={(item,index) => index.toString()}
                />
                 <TouchableOpacity 
                    style={styles.viewmore}
                    
                  >
                    <Text style={{fontSize:16,fontFamily:boldtext,color:graycolor}}>
                      View more
                    </Text>
                    <MaterialIcons name="chevron-right" size={30} color="#fff" style={{color:graycolor}}/>
                  </TouchableOpacity>
                </View>
              ):
                <ScrollView>
                    <ImageBackground //remove backGroundColor and change image source
                      source={require('../../assets/news1.png')} 
                      style={{marginHorizontal:20,marginTop:10,height:140,borderRadius:10, overflow:"hidden", resizeMode:'cover',backgroundColor:'#fff'}}
                    ></ImageBackground>
                  <View style={{marginBottom:20,marginHorizontal:35,paddingVertical:30,borderBottomWidth:1,borderBottomColor:'#fff'}}>
                    <Text style={{color:'#fff',fontSize:14,fontFamily:simpletext, textAlign:'justify'}}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </Text>
                    <View style={{flexDirection:'row',alignItems: 'center',marginTop:10}}>
                      <View style={{height:13,width:13,borderRadius:8,backgroundColor:"#F7931A"}}>
                      </View>
                      <Text style={{marginLeft:10,fontSize:12,fontFamily:simpletext, color:'#fff'}}>
                        BTC
                      </Text>
                      <Text style={{marginLeft:20,fontSize:12,fontFamily:simpletext,color:'#fff'}}>
                        16h ago
                      </Text>
                      <Text style={{marginLeft:20,fontSize:12,fontFamily:simpletext,color:'#fff'}}>
                        News Source
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.viewmore} onPress={() => setItemView(false)}>
                      <Text style={{fontSize:16,fontFamily:boldtext,color:graycolor}}>
                        All News
                      </Text>
                      <MaterialIcons name="chevron-right" size={30} color="#fff" style={{color:graycolor}}/>
                  </TouchableOpacity>
              </ScrollView>
              }
            </>
            }
          
          </View>
      </View>
  );
}; 
export default Home;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#17171A"
    },
    mainView: {
      alignItems: "center",
      flexDirection:'row',
      justifyContent:'flex-start',
      marginHorizontal:20,
      height:60,
      paddingRight:30,
      width:width,
    },
    iconBackground: {
      height:45,
      width:45,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'transparent',
      borderRadius:25,
      marginRight:20
    },
    horizantalListItem: {
      backgroundColor:'#2A2D3C',
      alignItems: 'center',
      justifyContent:"space-between",
      marginLeft:20,
      paddingTop:12,
      paddingLeft:6,
      paddingRight:12,
      borderRadius:10,
    },
    verticalListItem: {
      flexDirection:'row',
      // backgroundColor:'#171921',
      marginHorizontal:10,
      marginBottom:8,
      padding:12,
      borderRadius:10,
    },
    tabView: {
      flexDirection:'row',
      alignItems: 'center',
      margin:15,
    },
    verticalListIconBackground: {
      alignSelf:'center',
      height:35,
      width:35,
      alignItems: 'center',
      justifyContent:'center',
    
      borderRadius:18,
      marginRight:20
    },
    newsListItem: {
      flex:1,
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#FFF',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text:{
      marginLeft:10,
      fontSize:12,
      fontFamily:simpletext,
      color:'#fff'
    },
    viewmore:{
      marginHorizontal:30,
      marginBottom:20,
      height:40,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
})