import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/icons8-market-square-96.png")} />
            <Text>Resale Market - Sell Your Used Items</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})

export default WelcomeScreen;