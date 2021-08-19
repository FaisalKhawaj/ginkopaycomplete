import React from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet,
  Image, ImageBackground
} from 'react-native'
import * as Actions from './../redux/actions'
import { useSelector, useDispatch } from 'react-redux';

const BannerView = ({ item, handler }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('item', item);
        dispatch(Actions.getBannerByID1(item))
        dispatch(Actions.getBannerByID(item.ownerId))
        handler()
      }}
      style={styles.CompaignChannelBtn}>
      <ImageBackground style={styles.ImageBackgroundStyle}
        source={{ uri: item.pictureUrl }}>
        <View style={styles.TitleUrlView}>
          <Text style={styles.TitleText}>
            {item.userName}
          </Text>
          <Text style={styles.UrlText}>
            {item.walletAdder}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default BannerView;

const styles = StyleSheet.create({
  CompaignChannelBtn:
  {
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 15,
    width: '90%'
  },
  ImageBackgroundStyle:
  {
    borderRadius: 10,
    width: '100%',
    height: 130
  },
  TitleUrlView:
  {
    marginHorizontal: 15,
    position: 'absolute',
    bottom: 10
  },
  TitleText:
  {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#FFFF'
  },
  UrlText:
  {
    marginTop: -10, color: '#FFFF', fontSize: 13
  }
})