import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <MaterialCommunityIcons name="sale" size={150} color={colors.primary}/>
            <Text style={styles.tagline}>ResaleMarket App</Text>
            <Text style={styles.taglinetwo}>Sell Your Used Items</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => console.log("Login button pressed.")} />
                <AppButton title="Register" color="secondary" onPress={() => console.log("Register button pressed.")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 30,
        fontWeight: '600',
        paddingVertical: 20,
        alignItems: 'center',
    },
    taglinetwo: {
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 5,
        alignItems: 'center',
    },
})

export default WelcomeScreen;