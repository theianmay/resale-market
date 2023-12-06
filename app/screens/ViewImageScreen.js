import React from 'react';
import { View } from 'react-native';
import { Image, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image
            resizeMode='contain'
            style={styles.image}
            source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 50,
        left: 40,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 50,
        right: 40,
    },
    container: {
        flex: 1, 
        backgroundColor: colors.black,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;