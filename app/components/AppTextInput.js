import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function AppTextInput({ icon, ...otherProps }) {
    return (
        <div>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.gray} style={styles.icon} />}
                <TextInput style={styles.textInput} {...otherProps} />
            </View>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    textInput: {
        color: colors.darkgray,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;