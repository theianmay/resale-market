import React from 'react';
import { View } from 'react-native';
import { Image, StyleSheet } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <Image
            resizeMode='contain'
            style={styles.image}
            source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        flex: 1, 
        backgroundColor: '#000'
    },
    container: {
        flex: 1, 
        backgroundColor: '#000'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;