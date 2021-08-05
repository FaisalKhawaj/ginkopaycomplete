import React from 'react'
import {View, StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-community/masked-view'
const size = 20
const GradientIcon = ({name}) => {
    return(
        <View style={{ width: size }}>      
            <MaskedView
            style={{ flex: 1, flexDirection: 'row', height: size }}
            maskElement={
                <View
                style={{
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <AntDesign
                    name={name}
                    size={size}
                    color="white"
                    style={styles.shadow}
                />
                </View>
            }>
            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['#70A2FF', "#F76E64",]}
                style={{ flex: 1 }}
            />
            </MaskedView>
        </View>
    )
}

export default GradientIcon;
const styles = StyleSheet.create({
    shadow: {
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
  })