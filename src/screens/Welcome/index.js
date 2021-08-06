import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { Content } from 'native-base';
import Swiper from 'react-native-swiper';
import { mystyles } from '../../styles';
export const { width, height } = Dimensions.get("window");
import CustomText from '../../components/Text';
import SplashScreen from 'react-native-splash-screen'
import CustomButton from '../../components/Button';
import { BackgroundColor } from '../../constants/colors';
const Welcome = ({ navigation }) => {

    const [idActive, setIdActive] = useState(0)

    const swiper = useRef(null)

    console.log("Active ID :", idActive)
    // useEffect(() => {
    //     SplashScreen.hide()
    // }, [])
    // StatusBar.setHidden(true)

    const onPressNext = () => {
        if (idActive == 3) {
            navigation.navigate("CreateAccountIntro")

            return
        }
        swiper.current.scrollBy(1);
    }

    const onPressBack = () => {

        swiper.current.scrollBy(-1);
    }
    const gotonextScreen = () => {
        if (idActive == 2) {
            navigation.navigate("CreateAccountIntro")
            return
        }
        swiper.current.scrollBy(1);
    }

    return (
        <SafeAreaView style={mystyles.container}>
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>

                <Swiper
                    dot={<View style={styles.dots} />}
                    activeDot={<View style={styles.activeDots} />}
                    loop={false}
                    ref={swiper}
                    onIndexChanged={(index) => setIdActive(index)}
                >
                    <View style={{ flex: 1, backgroundColor: BackgroundColor }} key={"1"}>

                        <View style={{ flex: 1, justifyContent: 'center', }}>
                            <Image source={require("../../assets/slider3.png")}
                                resizeMode="contain"
                                style={styles.imageStyle} />
                            <CustomText
                                text={"Buy, sell \n & exchange"}
                                locations={[0, .3, 4, 5, 100]} colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
                                style={{ fontSize: 40, textAlign: "center" }}
                            />
                        </View>
                        {/* <ThreeDots color={"three"} /> */}
                        <View style={{ position: 'absolute', bottom: 10 }}>
                            <CustomButton text={"Next"} onPress={gotonextScreen} />
                        </View>


                    </View>


                    <View style={{ flex: 1, backgroundColor: BackgroundColor }} key={"2"}>

                        <View style={{ flex: 1, justifyContent: 'center', }}>
                            <Image source={require("../../assets/slider2.png")}
                                resizeMode="cover"
                                style={styles.imageStyle} />
                            <CustomText
                                text={"Safe and \nConvenient"}
                                locations={[0, .3, 4, 5, 100]} colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
                                style={{ fontSize: 40, textAlign: "center" }}
                            />
                        </View>

                        <View style={{ position: 'absolute', bottom: 10 }}>
                            <CustomButton text={"Next"} onPress={gotonextScreen} />
                        </View>

                    </View>

                    <View style={{ flex: 1, backgroundColor: BackgroundColor }} key={"3"}>
                        <View style={{ flex: 1, justifyContent: 'center', }}>
                            <Image source={require("../../assets/slider3.png")}
                                resizeMode="cover"
                                style={styles.imageStyle} />
                            <CustomText
                                text={"Buy, sell \n & exchange"}
                                locations={[0, .3, 4, 5, 100]} colors={["#A9CDFF", "#72F6D1", "#A0ED8D", "#FED365", "#FAA49E"]}
                                style={{ fontSize: 40, textAlign: "center" }}
                            />
                        </View>
                        <View style={{ position: 'absolute', bottom: 10 }}>
                            <CustomButton text={"Next"} onPress={gotonextScreen} />
                        </View>
                    </View>


                </Swiper>



            </Content>
        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    dots: {
        backgroundColor: 'gray',
        borderColor: '#070707',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 50,
        borderWidth: 1
    },
    activeDots: {
        backgroundColor: 'gold',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 50
    },
    imageStyle: {
        width: width / 1.3, height: width / 1.3, alignSelf: 'center',
    }
})