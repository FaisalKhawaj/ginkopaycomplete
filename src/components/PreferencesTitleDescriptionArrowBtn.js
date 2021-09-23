import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const PreferencesTitleDescriptionArrowBtn = ({ title, showModal, description }) => {
    return (
        <TouchableOpacity onPress={() => showModal()} style={{ marginVertical: 20, flexDirection: 'row', marginHorizontal: 30 }}>
            <View style={{ flex: 1 }} >
                <Text style={styles.TitleText}>
                    {title}
                </Text>

                <Text style={styles.descriptionText}>
                    {description}
                </Text>
            </View>

            {/* <View style={styles.descriptionArrowView}> */}
            {/* <View style={{ flex: 1 }}>
                  
                </View> */}

            {/* <View style={{ flex: 1, }}> */}
            <TouchableOpacity style={{ alignSelf: 'center' }}>
                <Icon name="chevron-forward-outline" color="#FFFF" size={20} />
            </TouchableOpacity>
            {/* </View> */}
            {/* </View> */}
        </TouchableOpacity>
    )
}

export default PreferencesTitleDescriptionArrowBtn

const styles = StyleSheet.create({
    TitleText:
    {
        color: '#FFFF', fontSize: 16, fontFamily: 'Poppins-Bold'
    },
    descriptionArrowView:
    {
        marginVertical: 5, flexDirection: 'row'
    },
    descriptionText:
    {
        color: '#ABAFC4', fontSize: 12, fontFamily: 'Poppins-Regular'
    }

})